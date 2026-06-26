/* =============================================================
   App shell — view toggle, persona filtering, expand state
   ============================================================= */
function App() {
  const [view, setView] = React.useState('profiles'); // 'profiles' | 'journey'
  const [filter, setFilter] = React.useState(null); // persona id or null (all)
  const [expandedRows, setExpandedRows] = React.useState(new Set());

  const personas = window.PERSONAS;
  const visible = filter ? personas.filter((p) => p.id === filter) : personas;

  const toggleExpand = (id) => {
    setExpandedRows((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const onChip = (id) => setFilter((cur) => cur === id ? null : id);

  // Upgrade 2: jump from a Primary Unlock cell / rail portrait into the highlighted journey
  const seeJourney = (id) => {
    setFilter(id);
    setView('journey');
  };

  return (
    <div className="page">
      {/* ---------- header ---------- */}
      <header className="topbar">
        <div className="topbar-main">
          {/* brand */}
          <div className="brand-row">
            <img className="brand-logo" src="assets/uhc-logo.png" alt="UnitedHealthcare" />
            <span className="brand-divider"></span>
            <div className="brand-titles">
              <div className="eyebrow">PRIOR EXPRESS CONSENT</div>
              <h1 className="page-title">Personas & Future State Journey</h1>
            </div>
          </div>

          {/* toggle */}
          <ViewToggle view={view} onChange={setView} />

          {/* filter chips */}
          <div className="filter-group">
            <span className="chip-row-label">Filter persona</span>
            <button
              type="button"
              className={'show-all-link' + (filter ? '' : ' is-disabled')}
              onClick={() => setFilter(null)}
              disabled={!filter}>
              Show all</button>
            <div className="chip-row">
              {personas.map((p) =>
              <PersonaChip
                key={p.id}
                persona={p}
                active={filter === p.id}
                dimmed={filter && filter !== p.id}
                onClick={() => onChip(p.id)} />

              )}
            </div>
          </div>
        </div>
        <LegendBar />
      </header>

      {/* ---------- matrix ---------- */}
      <main className="matrix-scroll">
        <div className="view-fade" key={view}>
          {view === 'profiles' ?
          <PersonaProfilesView personas={visible} expandedRows={expandedRows} onToggleExpand={toggleExpand} onSeeJourney={seeJourney} /> :
          <JourneyMapView filter={filter} />}
        </div>
      </main>
    </div>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);