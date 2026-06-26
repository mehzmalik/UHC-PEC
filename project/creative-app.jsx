/* =============================================================
   Creative — two-view experience
   View A: Persona Profiles (cards)
   View B: Journey Map (horizontal grid, phases × lanes)
   ============================================================= */
const { useState, useEffect } = React;

// ─── Sticky Nav ───────────────────────────────────────────────────────────────
function CNav({ view, setView, filter, setFilter, scrolled }) {
  const pa = filter ? window.PERSONA_BY_ID[filter] : null;
  return (
    <nav className={`cn ${scrolled ? 'cn-s' : ''}`} style={pa ? { '--pa': pa.tile } : null}>
      <img src="assets/uhc-logo.png" className="cn-logo" alt="UnitedHealthcare"
        style={{ filter: scrolled ? 'none' : 'brightness(0) invert(1)' }} />

      {/* View toggle */}
      <div className="cn-toggle">
        <button type="button" className={`cn-tv ${view === 'personas' ? 'cn-tv-on' : ''}`}
          onClick={() => setView('personas')}>Personas</button>
        <button type="button" className={`cn-tv ${view === 'journey' ? 'cn-tv-on' : ''}`}
          onClick={() => setView('journey')}>Journey Map</button>
      </div>

      {/* Persona filter chips — Journey mode only */}
      {view === 'journey' && (
        <div className="cn-filter">
          <span className="cn-hint">Highlight:</span>
          {window.PERSONAS.map(p => {
            const on = filter === p.id;
            const dim = filter && !on;
            return (
              <button key={p.id} type="button"
                className={`cn-chip ${on ? 'cn-on' : ''} ${dim ? 'cn-dim' : ''}`}
                style={{ '--pa': p.tile }}
                onClick={() => setFilter(on ? null : p.id)}>
                <span className="cn-av" style={{ background: p.tile }}>
                  {p.photo ? <img src={p.photo} alt="" draggable="false" /> : p.name[0]}
                </span>
                {p.name}
              </button>
            );
          })}
          {filter && <button type="button" className="cn-clear" onClick={() => setFilter(null)}>Clear</button>}
        </div>
      )}
    </nav>
  );
}

// ─── Hero strip ───────────────────────────────────────────────────────────────
function HeroStrip({ view, filter }) {
  const pa = filter ? window.PERSONA_BY_ID[filter] : null;
  return (
    <div className="hs">
      <div className="hs-left">
        <div className="hs-ey">PEC Future State &middot; 2026 &middot; Confidential</div>
        <h1 className="hs-h">A Framework for&nbsp;Earning Consent</h1>
        {view === 'personas'
          ? <p className="hs-sub">Four Medicare members. Four distinct paths to consent. Select a persona to trace their journey.</p>
          : pa
            ? <p className="hs-sub">Viewing <strong>{pa.name}&rsquo;s</strong> path — primary touchpoints and opportunities are highlighted across all phases.</p>
            : <p className="hs-sub">Select a persona chip above to highlight their path through the journey map.</p>
        }
      </div>
      <div className="hs-phases">
        {window.JOURNEY_PHASES.map((ph, i) => (
          <div key={ph.id} className="hs-phase"
            style={pa ? { borderColor: pa.tile + '44', background: pa.tile + '14' } : null}>
            <span className="hs-phase-n">Phase 0{i + 1}</span>
            <span className="hs-phase-l">{ph.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Legend bar (above journey map) ─────────────────────────────────────────
function LegendBar() {
  const themes = Object.values(window.THEMES || {});
  return (
    <div className="leg-bar">
      <span className="leg-bar-title">Theme legend</span>
      {themes.map(t => (
        <span key={t.id} className="leg-item">
          <span className="leg-dot" style={{ background: t.color }} />
          {t.label}
        </span>
      ))}
    </div>
  );
}

// ─── Smart Corner (orientation label ↔ active persona) ─────────────────────────
function SmartCorner({ filter, onClear }) {
  const pa = filter ? window.PERSONA_BY_ID[filter] : null;

  if (pa) {
    return (
      <div className="jmap-corner">
        <div className="jc-persona">
          <div className="jc-persona-av" style={{ background: pa.tile }}>
            {pa.photo ? <img src={pa.photo} alt={pa.name} draggable="false" /> : pa.name[0]}
          </div>
          <div className="jc-persona-name">{pa.name}</div>
          <div className="jc-persona-tag">{pa.tag}</div>
          <button type="button" className="jc-persona-clear" onClick={onClear}>Clear filter</button>
        </div>
      </div>
    );
  }

  return (
    <div className="jmap-corner">
      <div className="jc-orient">
        <span className="jc-orient-row">↑ Swim lanes</span>
        <span className="jc-orient-row">Phases →</span>
      </div>
    </div>
  );
}

// ─── Persona Card (profiles view) ────────────────────────────────────────────
const PC_SECTIONS = [
  { id: 'drivers',  label: 'Consent Drivers',        icon: '→', color: '#196ECF' },
  { id: 'trust',    label: 'Trust Signals',           icon: '✓', color: '#008A52' },
  { id: 'friction', label: 'Friction & Barriers',     icon: '!', color: '#C75300' },
];

function PersonaSection({ bullets, color }) {
  const [open, setOpen] = useState(false);
  const shown = open ? bullets : bullets.slice(0, 2);
  return (
    <div className="pcs-body">
      <ul className="pcs-list">
        {shown.map((bt, i) => (
          <li key={i} className="pcs-item">
            <span className="pcs-dot" style={{ background: color }} />
            <span>{bt.text}</span>
          </li>
        ))}
      </ul>
      {bullets.length > 2 && (
        <button type="button" className="pcs-more" onClick={e => { e.stopPropagation(); setOpen(o => !o); }}>
          {open ? 'Show less' : `+${bullets.length - 2} more`}
        </button>
      )}
    </div>
  );
}

function PersonaCard({ persona, onSeeJourney }) {
  const quote = window.JOURNEY_GRID?.mindset?.pre?.[persona.id] || '';
  const data  = window.PROFILE_DATA?.[persona.id] || {};
  return (
    <div className="pc" style={{ '--pa': persona.tile }}>
      <div className="pc-accent" style={{ background: persona.tile }} />
      <div className="pc-body">
        {/* Identity */}
        <div className="pc-identity">
          <div className="pc-av" style={{ background: persona.tile }}>
            {persona.photo ? <img src={persona.photo} alt={persona.name} draggable="false" /> : persona.name[0]}
          </div>
          <div>
            <div className="pc-name">{persona.name}</div>
            <span className="pc-badge" style={{ background: persona.tile + '22', color: persona.tile }}>{persona.tag}</span>
          </div>
        </div>
        <p className="pc-role">{persona.role}</p>

        {/* Mindset quote */}
        {quote && <blockquote className="pc-quote">&ldquo;{quote}&rdquo;</blockquote>}

        <div className="pc-divider" />

        {/* Three insight sections */}
        {PC_SECTIONS.map(sec => (
          data[sec.id]?.length > 0 && (
            <div key={sec.id} className="pcs">
              <div className="pcs-head">
                <span className="pcs-icon" style={{ background: sec.color }}>{sec.icon}</span>
                <span className="pcs-label">{sec.label}</span>
              </div>
              <PersonaSection bullets={data[sec.id]} color={sec.color} />
            </div>
          )
        ))}

        {/* CTA */}
        <button type="button" className="pc-cta" style={{ background: persona.tile }}
          onClick={() => onSeeJourney(persona.id)}>
          See journey
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ─── Personas view ────────────────────────────────────────────────────────────
function PersonasView({ onSeeJourney }) {
  return (
    <div className="pv v-fade">
      <div className="pv-grid">
        {window.PERSONAS.map(p => (
          <PersonaCard key={p.id} persona={p} onSeeJourney={onSeeJourney} />
        ))}
      </div>
    </div>
  );
}

// ─── Bullet renderer ──────────────────────────────────────────────────────────
function bState(bt, filter) {
  if (!filter) return 'd';
  const ps = bt.persona ? [].concat(bt.persona) : null;
  if (!ps) return 's';
  return ps.includes(filter) ? 'm' : 'x';
}

function JMBullets({ bullets, filter, labeled }) {
  const oppOf = window.OPPORTUNITY_AREAS || {};
  const pById = window.PERSONA_BY_ID || {};
  return (
    <ul className="jl">
      {bullets.map((bt, i) => {
        const st = bState(bt, filter);
        const pa = (st === 'm' && filter) ? pById[filter]?.tile : null;
        const opps = bt.opp ? [].concat(bt.opp).map(id => oppOf[id]).filter(Boolean) : [];
        const deps = bt.dep ? [].concat(bt.dep) : [];
        return (
          <li key={i} className={`jb jb-${st}${bt.exploratory ? ' jb-exploratory' : ''}`} style={pa ? { '--pa': pa } : null}>
            {bt.midterm
              ? <span className="theme-dot" title="Mid-term — not in current 2026 roadmap" style={{ width:9, height:9, background:'#FF681F', marginTop:5, flex:'none' }} />
              : <ThemeDot theme={bt.theme} />}
            <div className="jb-body">
              <span>
                {labeled && bt.label && <strong className="jb-lbl">{bt.label}: </strong>}
                {bt.text}
              </span>
              {opps.length > 0 && st !== 'x' && (
                <div className="jb-tags">
                  {opps.map(opp => (
                    <HoverTip key={opp.id} className="opp-tag" text={
                      filter && st === 'm' && opp.personaTip?.[filter] ? opp.personaTip[filter] : opp.desc
                    }>{opp.label}</HoverTip>
                  ))}
                </div>
              )}
              {deps.length > 0 && (
                <div className="jb-deps">
                  {deps.map(d => <DepChip key={d} personaId={d} emphasized={filter === d} />)}
                </div>
              )}
              {bt.note && <span className="jbullet-note">{bt.note}</span>}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

// ─── Channel icon row ─────────────────────────────────────────────────────────
function JMChannels({ phaseId, filter }) {
  const all = window.TOUCHPOINT_CHANNELS?.[phaseId];
  if (!all) return null;
  const valid = all.filter(c => c.id && c.icon);
  const rounds  = valid.filter(c => c.shape === 'round');
  const squares = valid.filter(c => c.shape === 'square');
  const pa = filter ? window.PERSONA_BY_ID?.[filter]?.tile : null;

  const renderIcon = ch => {
    const isPrimary = filter && ch.primary.includes(filter);
    const isDim = filter && !isPrimary;
    return (
      <HoverTip key={ch.id} as="div"
        className={`ji ji-${ch.shape} ${isPrimary ? 'ji-p' : ''} ${isDim ? 'ji-x' : ''}`}
        style={isPrimary && pa ? { '--pa': pa } : null}
        text={ch.label}>
        <img src={`assets/icons/${ch.icon}.svg`} alt={ch.label} draggable="false" />
      </HoverTip>
    );
  };

  return (
    <div className="jch">
      {rounds.length > 0 && <div className="jch-g">{rounds.map(renderIcon)}</div>}
      {rounds.length > 0 && squares.length > 0 && <div className="jch-sep" />}
      {squares.length > 0 && <div className="jch-g">{squares.map(renderIcon)}</div>}
    </div>
  );
}

// ─── Mindset quotes ───────────────────────────────────────────────────────────
function JMQuotes({ quotes, filter }) {
  return (
    <div className="jq-grid">
      {window.PERSONAS.map(p => {
        const active = filter === p.id;
        const dim = filter && !active;
        return (
          <div key={p.id} className={`jq ${active ? 'jq-a' : ''} ${dim ? 'jq-x' : ''}`}
            style={active ? { '--pa': p.tile } : null}>
            <div className="jq-who">
              <span className="jq-av" style={{ background: p.tile }}>
                {p.photo ? <img src={p.photo} alt={p.name} draggable="false" /> : p.name[0]}
              </span>
              <div>
                <div className="jq-name">{p.name}</div>
                <div className="jq-tag">{p.tag}</div>
              </div>
            </div>
            <p className="jq-text">&ldquo;{quotes[p.id]}&rdquo;</p>
          </div>
        );
      })}
    </div>
  );
}

// ─── Cell content ─────────────────────────────────────────────────────────────
function JCell({ laneId, phaseId, filter }) {
  const cell = window.JOURNEY_GRID?.[laneId]?.[phaseId];
  if (!cell) return null;
  if (laneId === 'mindset')       return <JMQuotes quotes={cell} filter={filter} />;
  if (laneId === 'touchpoints')   return <><JMChannels phaseId={phaseId} filter={filter} /><JMBullets bullets={cell} filter={filter} /></>;
  if (laneId === 'opportunities') return <JMBullets bullets={cell} filter={filter} />;
  if (laneId === 'enablement')    return <JMBullets bullets={cell} filter={filter} labeled />;
  if (laneId === 'readiness')     return <JMBullets bullets={cell} filter={filter} />;
  return null;
}

// Lane color accents + cell backgrounds
const LC = {
  mindset:       { accent: '#196ECF', bg: '#fff'    },
  touchpoints:   { accent: '#002677', bg: '#F4F8FD' },
  opportunities: { accent: '#00829B', bg: '#FAF8F2' },
  enablement:    { accent: '#F5B700', bg: '#FFFDF5' },
  readiness:     { accent: '#FF612B', bg: '#FFF9F7' },
};

// ─── Journey Map grid ─────────────────────────────────────────────────────────
function JourneyMap({ filter, setFilter }) {
  const phases = window.JOURNEY_PHASES;
  const lanes  = window.JOURNEY_LANES;
  const pa     = filter ? window.PERSONA_BY_ID[filter] : null;

  return (
    <div className="jmap-outer v-fade">
      <LegendBar />
      <div className="jmap" style={pa ? { '--pa': pa.tile } : null}>

        {/* Smart corner */}
        <SmartCorner filter={filter} onClear={() => setFilter(null)} />

        {/* Phase headers */}
        {phases.map((ph, i) => (
          <div key={ph.id} className="jmap-ph" style={{ position: 'relative' }}>
            <span className="jmap-ph-n">Phase 0{i + 1}</span>
            <span className="jmap-ph-l">{ph.label}</span>
            {pa && <span className="jmap-ph-bar" style={{ background: pa.tile }} />}
          </div>
        ))}

        {/* Lane rows */}
        {lanes.map(lane => {
          const { accent, bg } = LC[lane.id] || { accent: '#002677', bg: '#fff' };
          return (
            <React.Fragment key={lane.id}>
              <div className="jmap-lbl" style={{ background: bg }}>
                <div className="jmap-lbl-bar" style={{ background: accent }} />
                <div className="jmap-lbl-txt">
                  <span className="jmap-lbl-sub">{lane.sub}</span>
                  <span className="jmap-lbl-name">{lane.label}</span>
                </div>
              </div>
              {phases.map(ph => (
                <div key={ph.id} className="jmap-cell" style={{ background: bg }}>
                  <JCell laneId={lane.id} phaseId={ph.id} filter={filter} />
                </div>
              ))}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

// ─── Strategic opportunities ──────────────────────────────────────────────────
function StrategicOpps({ filter }) {
  const opps   = Object.values(window.OPPORTUNITY_AREAS || {});
  const pOpp   = window.PERSONA_OPP || {};
  const pById  = window.PERSONA_BY_ID || {};
  const active = filter ? (pOpp[filter] || []) : null;
  const getPs  = id => Object.entries(pOpp).filter(([, arr]) => arr.includes(id)).map(([pid]) => pid);

  return (
    <div className="so">
      <div className="so-inner">
        <div className="so-ey">Strategic opportunity areas</div>
        <h2 className="so-h">Five levers for earning more consent.</h2>
        <div className="so-grid">
          {opps.map((opp, i) => {
            const lit = !filter || (active && active.includes(opp.id));
            const dim = filter && !lit;
            return (
              <div key={opp.id} className={`so-card ${lit && filter ? 'so-card-lit' : ''} ${dim ? 'so-card-dim' : ''}`}>
                <div className="so-num">0{i + 1}</div>
                <div className="so-lbl">{opp.label}</div>
                <p className="so-desc">{opp.desc}</p>
                <div className="so-chips">
                  {getPs(opp.id).map(pid => {
                    const p = pById[pid];
                    if (!p) return null;
                    return (
                      <span key={pid} className="so-chip">
                        <span className="so-chip-dot" style={{ background: p.tile }}>
                          {p.photo ? <img src={p.photo} alt="" draggable="false" /> : p.name[0]}
                        </span>
                        {p.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Root App ─────────────────────────────────────────────────────────────────
function CreativeApp() {
  const [view,    setView]    = useState('personas');
  const [filter,  setFilter]  = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // "See journey" from persona card: switch to journey + apply filter
  const seeJourney = (id) => {
    setFilter(id);
    setView('journey');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Clear filter also resets to persona view if desired — keep journey view
  const clearFilter = () => setFilter(null);

  return (
    <>
      <CNav view={view} setView={setView} filter={filter} setFilter={setFilter} scrolled={scrolled} />
      <HeroStrip view={view} filter={filter} />

      {view === 'personas' && <PersonasView onSeeJourney={seeJourney} />}
      {view === 'journey'  && <JourneyMap filter={filter} setFilter={setFilter} />}

      <StrategicOpps filter={filter} />
      <footer className="cr-ft">
        <img src="assets/uhc-logo.png" alt="UnitedHealthcare" className="cr-ft-logo" />
        <span className="cr-ft-t">PEC Future State Journey &middot; 2026 &middot; Confidential</span>
      </footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<CreativeApp />);
