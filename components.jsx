/* =============================================================
   Shared presentational components
   ============================================================= */
const { useState, useRef, useEffect } = React;

// ---- small color dot tied to a Legend theme ----
function ThemeDot({ theme, size = 9, title }) {
  const t = window.THEMES[theme];
  if (!t) return null;
  return (
    <span
      className="theme-dot"
      title={title || t.label}
      style={{ width: size, height: size, background: t.color }}
    />
  );
}

// ---- portal tooltip that escapes matrix overflow (fixed-position) ----
function HoverTip({ children, text, className, style, as = 'span', onClick }) {
  const [pos, setPos] = useState(null);
  const ref = useRef(null);
  const show = () => {
    const r = ref.current.getBoundingClientRect();
    setPos({ x: r.left + r.width / 2, y: r.top });
  };
  const hide = () => setPos(null);
  const Tag = as;
  return (
    <Tag
      className={className}
      style={style}
      ref={ref}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      onClick={onClick}
      tabIndex={0}
    >
      {children}
      {pos && text && ReactDOM.createPortal(
        <span className="hovertip-pop" style={{ left: pos.x, top: pos.y }}>{text}</span>,
        document.body
      )}
    </Tag>
  );
}

// ---- small persona dependency chip (enablement / readiness lanes) ----
function DepChip({ personaId, emphasized }) {
  const p = window.PERSONA_BY_ID[personaId];
  if (!p) return null;
  return (
    <span
      className={'dep-chip' + (emphasized ? ' is-emph' : '')}
      style={{ '--pa': p.tile }}
      title={'Persona dependency: ' + p.name}
    >
      <span className="dep-chip-dot" style={{ background: p.tile }}>
        {p.photo ? <img src={p.photo} alt="" draggable="false" /> : p.name[0]}
      </span>
      {p.name}
    </span>
  );
}

// ---- shared-across-personas indicator ----
function SharedIcon({ size = 16 }) {
  return (
    <span className="shared-icon" title="Shared across personas">
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="8" r="3.2" />
        <circle cx="16.5" cy="9.5" r="2.6" />
        <path d="M3.5 19c0-3 2.4-5 5.5-5s5.5 2 5.5 5" />
        <path d="M14.5 19c.2-2.2 1.6-3.6 3.6-3.6 2 0 3.4 1.4 3.4 3.6" />
      </svg>
    </span>
  );
}

// ---- portrait tile (circular photo with persona-color ring). Terrell keeps a +1 rep badge. ----
function PortraitTile({ persona, size = 'md' }) {
  const px = size === 'sm' ? 26 : size === 'lg' ? 96 : 64;
  const isRep = persona.kind === 'rep';
  return (
    <div className={'portrait portrait-' + size} style={{ width: px, height: px }} aria-label={persona.name + ' portrait'}>
      <span className="portrait-img" style={{ boxShadow: '0 0 0 3px ' + persona.tile }}>
        {persona.photo
          ? <img src={persona.photo} alt={persona.name} draggable="false" />
          : <span className="portrait-fallback" style={{ background: persona.tile }}>{persona.name[0]}</span>}
      </span>
      {isRep && <span className="portrait-rep-badge" title="Authorized representative">+1</span>}
    </div>
  );
}

// ---- tiny circular avatar chip (used inside journey cards) ----
function AvatarChip({ personaId, size = 26, ring = true }) {
  const p = window.PERSONA_BY_ID[personaId];
  if (!p) return null;
  return (
    <span
      className={'avatar-chip' + (ring ? ' avatar-chip-ring' : '')}
      title={p.name + (p.kind === 'rep' ? ' (authorized rep)' : '')}
      style={{ width: size, height: size, background: p.tile }}
    >
      {p.photo
        ? <img src={p.photo} alt={p.name} draggable="false" />
        : p.name[0]}
    </span>
  );
}

// ---- persona filter chip (top-right row) ----
function PersonaChip({ persona, active, dimmed, onClick }) {
  return (
    <button
      className={'persona-chip' + (active ? ' is-active' : '') + (dimmed ? ' is-dimmed' : '')}
      onClick={onClick}
      type="button"
    >
      <span className="persona-chip-avatar" style={{ background: persona.tile }}>
        {persona.photo
          ? <img src={persona.photo} alt={persona.name} draggable="false" />
          : persona.name[0]}
        {persona.kind === 'rep' && <span className="persona-chip-plus">+1</span>}
      </span>
      <span className="persona-chip-name">{persona.name}</span>
    </button>
  );
}

// ---- view toggle pill ----
function ViewToggle({ view, onChange }) {
  return (
    <div className="view-toggle" role="tablist" aria-label="View">
      <span className="view-toggle-thumb" style={{ transform: view === 'journey' ? 'translateX(100%)' : 'translateX(0)' }} />
      <button
        role="tab"
        aria-selected={view === 'profiles'}
        className={'view-toggle-btn' + (view === 'profiles' ? ' is-active' : '')}
        onClick={() => onChange('profiles')}
        type="button"
      >Persona Profiles</button>
      <button
        role="tab"
        aria-selected={view === 'journey'}
        className={'view-toggle-btn' + (view === 'journey' ? ' is-active' : '')}
        onClick={() => onChange('journey')}
        type="button"
      >Journey Map</button>
    </div>
  );
}

// ---- legend popover ----
function Legend() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const onEsc = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onEsc);
    return () => { document.removeEventListener('mousedown', onDoc); document.removeEventListener('keydown', onEsc); };
  }, [open]);

  const themes = Object.values(window.THEMES);

  return (
    <div className="legend-wrap" ref={ref}>
      <button
        type="button"
        className={'legend-btn' + (open ? ' is-open' : '')}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" /><path d="M12 16v-4" /><circle cx="12" cy="8" r="0.6" fill="currentColor" />
        </svg>
        Legend
      </button>

      {open && (
        <div className="legend-pop" role="dialog" aria-label="Legend">
          <div className="legend-section">
            <div className="legend-section-title">Indicators</div>
            <div className="legend-row">
              <SharedIcon />
              <div className="legend-row-text">
                <strong>Shared moment</strong>
                <span>This stage is shared across more than one persona.</span>
              </div>
            </div>
            <div className="legend-row">
              <span className="legend-plusone">+1</span>
              <div className="legend-row-text">
                <strong>Two-person consent</strong>
                <span>An authorized representative is acting alongside the member.</span>
              </div>
            </div>
          </div>
          <div className="legend-divider" />
          <div className="legend-section">
            <div className="legend-section-title">Themes</div>
            <div className="legend-themes">
              {themes.map(t => (
                <div className="legend-theme" key={t.id}>
                  <span className="theme-dot" style={{ width: 11, height: 11, background: t.color }} />
                  <span>{t.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="legend-divider" />
          <div className="legend-section">
            <div className="legend-section-title">Opportunity areas</div>
            <div className="legend-opps">
              {Object.values(window.OPPORTUNITY_AREAS).map(o => (
                <span className="opp-tag legend-opp" key={o.id} title={o.desc}>{o.label}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ---- always-visible horizontal legend bar ----
function LegendBar() {
  const themes = Object.values(window.THEMES);
  const opps   = Object.values(window.OPPORTUNITY_AREAS);
  return (
    <div className="legend-bar">
      {/* Indicators */}
      <div className="lb-group">
        <span className="lb-head">Indicators</span>
        <div className="lb-items">
          <span className="lb-item"><SharedIcon /><span>Shared moment</span></span>
          <span className="lb-item"><span className="legend-plusone" style={{margin:0}}>+1</span><span>Two-person consent</span></span>
        </div>
      </div>
      <span className="lb-sep" />
      {/* Themes */}
      <div className="lb-group">
        <span className="lb-head">Themes</span>
        <div className="lb-items">
          {themes.map(t => (
            <span className="lb-item" key={t.id}>
              <span className="theme-dot" style={{width:10,height:10,background:t.color,flex:'none'}} />
              <span>{t.label}</span>
            </span>
          ))}
        </div>
      </div>
      <span className="lb-sep" />
      {/* Opportunity areas */}
      <div className="lb-group">
        <span className="lb-head">Opportunity areas</span>
        <div className="lb-items">
          {opps.map(o => (
            <HoverTip key={o.id} className="opp-tag legend-opp" text={o.desc}>{o.label}</HoverTip>
          ))}
        </div>
      </div>
    </div>
  );
}

function RailCell({ persona, expanded, onToggleExpand, onSeeJourney }) {
  const portrait = <PortraitTile persona={persona} size="lg" />;
  return (
    <div className="rail-cell">
      <div className="rail-cell-tag">{persona.tag}</div>
      <div className="rail-cell-name">{persona.name}</div>
      {onSeeJourney
        ? <HoverTip
            className="rail-portrait-link"
            text={'View ' + persona.name + '\u2019s journey'}
            onClick={() => onSeeJourney(persona.id)}
          >{portrait}</HoverTip>
        : portrait}
      <div className="rail-cell-role">{persona.role}</div>
      <button type="button" className="rail-expand-btn" onClick={onToggleExpand}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
             style={{ transform: expanded ? 'rotate(45deg)' : 'none', transition: 'transform .2s ease' }}>
          <path d="M12 5v14M5 12h14" />
        </svg>
        {expanded ? 'Collapse Row' : 'Expand Row'}
      </button>
    </div>
  );
}

Object.assign(window, {
  ThemeDot, SharedIcon, PortraitTile, AvatarChip, PersonaChip, ViewToggle, Legend, LegendBar, RailCell,
  HoverTip, DepChip,
});
