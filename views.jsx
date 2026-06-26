/* =============================================================
   View 1 — Persona Profiles (table)
   View 2 — Journey Map (swim lanes × phases)
   ============================================================= */

// ---------- a single profile cell (one persona × one column) ----------
function ProfileCell({ bullets, primary, rowExpanded, persona, onSeeJourney }) {
  const [cellExpanded, setCellExpanded] = React.useState(false);
  const showAll = rowExpanded || cellExpanded || primary;
  const INITIAL = 3;
  const visible = showAll ? bullets : bullets.slice(0, INITIAL);
  const hidden = bullets.length - INITIAL;
  return (
    <div className={'profile-cell' + (primary ? ' profile-cell-primary' : '')}>
      <ul className="bullet-list">
        {visible.map((bt, i) =>
          <li className="bullet" key={i}>
            <ThemeDot theme={bt.theme} />
            <span>{bt.text}</span>
          </li>
        )}
      </ul>
      {!primary && !showAll && hidden > 0 &&
        <button type="button" className="show-more" onClick={() => setCellExpanded(true)}>
          + Show {hidden} More
        </button>}
      {!primary && cellExpanded && !rowExpanded &&
        <button type="button" className="show-more show-less" onClick={() => setCellExpanded(false)}>
          Show less
        </button>}
      {primary && persona && onSeeJourney &&
        <button type="button" className="see-journey-pill" style={{ '--pa': persona.tile }}
          onClick={() => onSeeJourney(persona.id)}>
          See in journey
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>}
    </div>
  );
}

function PersonaProfilesView({ personas, expandedRows, onToggleExpand, onSeeJourney }) {
  const cols = window.PROFILE_COLUMNS;
  return (
    <div className="matrix" style={{ '--col-count': cols.length }}>
      <div className="matrix-corner sticky-rail">
        <span className="corner-eyebrow">Persona</span>
      </div>
      {cols.map((c) =>
        <div key={c.id} className={'col-head' + (c.primary ? ' col-head-primary' : '')}>{c.label}</div>
      )}
      {personas.map((p) => {
        const expanded = expandedRows.has(p.id);
        const data = window.PROFILE_DATA[p.id];
        return (
          <React.Fragment key={p.id}>
            <div className="sticky-rail">
              <RailCell persona={p} expanded={expanded} onToggleExpand={() => onToggleExpand(p.id)} onSeeJourney={onSeeJourney} />
            </div>
            {cols.map((c) =>
              <div key={c.id} className={'matrix-cell' + (c.primary ? ' matrix-cell-primary' : '')}>
                <ProfileCell bullets={data[c.id]} primary={c.primary} rowExpanded={expanded} persona={p} onSeeJourney={onSeeJourney} />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

// ─── Journey helpers ──────────────────────────────────────────────────────────

// Returns: 'default'|'shared'|'match'|'secondary'|'generic'|'other'
function bulletState(bt, filter) {
  if (filter === 'vivian' && bt.dimForVivian) return 'other';
  if (bt.shared) return 'shared';
  if (!filter) return 'default';
  const primaries   = bt.persona   ? [].concat(bt.persona)   : [];
  const secondaries = bt.secondary ? [].concat(bt.secondary) : [];
  if (primaries.includes(filter))   return 'match';
  if (secondaries.includes(filter)) return 'secondary';
  if (!primaries.length && !secondaries.length) return 'generic';
  return 'other';
}

// 16px inline avatar chip for primary bullets
function BulletPersonaChip({ personaId }) {
  const p = window.PERSONA_BY_ID[personaId];
  if (!p) return null;
  return (
    <span className="bullet-persona-chip" style={{ background: p.tile }} title={p.name}>
      {p.photo ? <img src={p.photo} alt="" draggable="false" /> : p.name[0]}
    </span>
  );
}

// Shared highlight bullet renderer — used for Touchpoints + Opportunities
function JourneyHighlightBullets({ bullets, filter, pulsing }) {
  const oppOf = window.OPPORTUNITY_AREAS;
  return (
    <ul className="jbullet-list">
      {bullets.map((bt, i) => {
        const st  = bulletState(bt, filter);
        const pa  = (st === 'match' && filter) ? window.PERSONA_BY_ID[filter].tile : null;
        const opps = bt.opp ? [].concat(bt.opp).map(id => oppOf[id]).filter(Boolean) : [];
        const tagDim = filter && st === 'other';
        const tagPulse = pulsing && st === 'match';
        return (
          <li key={i} className={'jbullet jb-' + st + (bt.exploratory ? ' jb-exploratory' : '')} style={pa ? { '--pa': pa } : null}>
            {bt.midterm
              ? <span className="theme-dot" title="Mid-term — not in current 2026 roadmap" style={{ width:9, height:9, background:'#FF681F', marginTop:6, flex:'none' }} />
              : <ThemeDot theme={bt.theme} />}
            <span className="jbullet-body">
              <span className="jbullet-text-row">
                {st === 'match'  && filter && <BulletPersonaChip personaId={filter} />}
                {st === 'shared' && <span className="bullet-all-chip">All</span>}
                <span>{bt.text}</span>
              </span>
              {opps.length > 0 && (
                <span className="opp-tags-row">
                  {opps.map(opp => {
                    const tagDim = filter && st === 'other';
                    let tipText = null;
                    if (!tagDim) {
                      if (filter && st === 'match' && opp.personaTip && opp.personaTip[filter]) {
                        tipText = opp.personaTip[filter];
                      } else if (!filter || st === 'shared' || st === 'generic' || st === 'secondary') {
                        tipText = opp.desc;
                      }
                    }
                    return (
                      <HoverTip key={opp.id}
                        className={'opp-tag' + (tagDim ? ' is-dim' : '') + (tagPulse ? ' pulse-once' : '')}
                        text={tipText}>
                        {opp.label}
                      </HoverTip>
                    );
                  })}
                </span>
              )}
              {bt.note && <span className="jbullet-note">{bt.note}</span>}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

// Enablement / Readiness — no dim, dependency chips
function JourneyDepBullets({ bullets, labeled, filter }) {
  return (
    <ul className="jbullet-list">
      {bullets.map((bt, i) => {
        const deps = bt.dep ? (Array.isArray(bt.dep) ? bt.dep : [bt.dep]) : [];
        return (
          <li key={i} className="jbullet">
            <ThemeDot theme={bt.theme} />
            <span className="jbullet-body">
              <span className="jbullet-text-row">
                <span>
                  {labeled && bt.label && <strong className="jbullet-label">{bt.label}: </strong>}
                  {bt.text}
                </span>
              </span>
              {deps.length > 0 &&
                <span className="dep-row">
                  {deps.map(d => <DepChip key={d} personaId={d} emphasized={filter === d} />)}
                </span>}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

// Mindset & Needs — solo (one centered enlarged quote) when filtered, grid when not
function JourneyQuotes({ quotes, filter }) {
  if (filter) {
    const p = window.PERSONA_BY_ID[filter];
    if (!p) return null;
    return (
      <div className="quote-single">
        <div className="quote-block quote-block-solo">
          <div className="quote-head">
            <span className="quote-avatar" style={{ background: p.tile }}>
              {p.photo ? <img src={p.photo} alt={p.name} draggable="false" /> : p.name[0]}
              {p.kind === 'rep' && <span className="quote-avatar-plus">+1</span>}
            </span>
            <span className="quote-name">{p.name}</span>
          </div>
          <p className="quote-text quote-text-solo">&ldquo;{quotes[p.id]}&rdquo;</p>
        </div>
      </div>
    );
  }
  return (
    <div className="quote-stack">
      {window.PERSONAS.map((p) => (
        <div className="quote-block" key={p.id}>
          <div className="quote-head">
            <span className="quote-avatar" style={{ background: p.tile }}>
              {p.photo ? <img src={p.photo} alt={p.name} draggable="false" /> : p.name[0]}
              {p.kind === 'rep' && <span className="quote-avatar-plus">+1</span>}
            </span>
            <span className="quote-name">{p.name}</span>
          </div>
          <p className="quote-text">&ldquo;{quotes[p.id]}&rdquo;</p>
        </div>
      ))}
    </div>
  );
}

// ─── Channel icon row (Experience Touchpoints) ─────────────────────────────
function ChannelIconRow({ phaseId, filter }) {
  const channels = window.TOUCHPOINT_CHANNELS[phaseId];
  if (!channels) return null;
  const pa = filter ? window.PERSONA_BY_ID[filter].tile : null;

  return (
    <div className="channel-row">
      {channels.map((ch, i) => {
        if (ch.sep) return <span key={'sep-'+i} className="ch-sep" />;
        const isPrimary = filter && ch.primary.includes(filter);
        const isDim     = filter && !isPrimary;
        return (
          <HoverTip
            key={ch.id}
            className={'ch-icon ch-' + ch.shape + (isPrimary ? ' is-primary' : '') + (isDim ? ' is-dim' : '')}
            style={isPrimary && pa ? { '--pa': pa } : undefined}
            text={ch.label}
          >
            <img src={'assets/icons/' + ch.icon + '.svg'} alt={ch.label} draggable="false" />
          </HoverTip>
        );
      })}
    </div>
  );
}

// Wrapper for Touchpoints — icon row on top, bullets below
function JourneyTouchpointsCell({ bullets, filter, pulsing, phaseId }) {
  return (
    <>
      <ChannelIconRow phaseId={phaseId} filter={filter} />
      <JourneyHighlightBullets bullets={bullets} filter={filter} pulsing={pulsing} />
    </>
  );
}

// Journey Map view
function JourneyMapView({ filter }) {
  const [pulsing, setPulsing] = React.useState(false);
  const prevFilter = React.useRef(null);

  React.useEffect(() => {
    if (filter && !prevFilter.current) {
      if (!sessionStorage.getItem('pec-opp-pulsed')) {
        sessionStorage.setItem('pec-opp-pulsed', '1');
        setPulsing(true);
        setTimeout(() => setPulsing(false), 700);
      }
    }
    prevFilter.current = filter;
  }, [filter]);

  const phases   = window.JOURNEY_PHASES;
  const lanes    = window.JOURNEY_LANES;
  const grid     = window.JOURNEY_GRID;
  const laneTints = ['var(--band-1)','var(--band-2)','var(--band-3)','var(--band-4)','var(--band-1)'];

  const renderCell = (lane, phaseId) => {
    const cell = grid[lane.id][phaseId];
    switch (lane.id) {
      case 'mindset':       return <JourneyQuotes quotes={cell} filter={filter} />;
      case 'touchpoints':   return <JourneyTouchpointsCell bullets={cell} filter={filter} pulsing={pulsing} phaseId={phaseId} />;
      case 'opportunities': return <JourneyHighlightBullets bullets={cell} filter={filter} pulsing={pulsing} />;
      case 'enablement':    return <JourneyDepBullets bullets={cell} labeled filter={filter} />;
      case 'readiness':     return <JourneyDepBullets bullets={cell} filter={filter} />;
      default: return null;
    }
  };

  return (
    <div className="matrix matrix-journey" style={{ '--col-count': phases.length }}>
      <div className="matrix-corner sticky-rail">
        <span className="corner-eyebrow">JOURNEY PHASES</span>
      </div>
      {phases.map((ph, i) =>
        <div key={ph.id} className="col-head col-head-phase">
          <span className="phase-step">Phase {String(i + 1).padStart(2, '0')}</span>
          {ph.label}
        </div>
      )}
      {lanes.map((lane, li) => {
        const tint    = laneTints[li % laneTints.length];
        const isQuotes = lane.kind === 'quotes';
        return (
          <React.Fragment key={lane.id}>
            <div className="sticky-rail">
              <div className="lane-head" style={{ background: 'var(--rail)' }}>
                <span className="lane-head-sub">{lane.sub}</span>
                <span className="lane-head-name">{lane.label}</span>
              </div>
            </div>
            {phases.map((ph) =>
              <div key={ph.id}
                className={'matrix-cell journey-cell' + (isQuotes ? ' journey-cell-quotes' : '')}
                style={{ background: tint, color: 'rgb(12,26,54)' }}>
                {renderCell(lane, ph.id)}
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

Object.assign(window, {
  PersonaProfilesView, JourneyMapView,
  JourneyHighlightBullets, JourneyDepBullets, JourneyQuotes,
  ChannelIconRow, JourneyTouchpointsCell,
});
