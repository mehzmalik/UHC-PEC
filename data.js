/* =============================================================
   PEC Persona & Journey Comparison — data layer
   Placeholder content. Structure/keys are stable; copy is swappable.
   ============================================================= */

// --- Legend themes (color dots used throughout) ---
// Colors drawn from the UHC brand palette seen in the reference journey map
const THEMES = {
  trust:     { id: 'trust',     label: 'Trust',                 color: '#002677' }, // UHC navy
  caregiver: { id: 'caregiver', label: 'Caregiver involvement', color: '#00829B' }, // UHC teal/cyan
  channel:   { id: 'channel',   label: 'Channel preference',    color: '#0071CE' }, // UHC bright blue
  value:     { id: 'value',     label: 'Value exchange',        color: '#FF612B' }, // UHC orange
  friction:  { id: 'friction',  label: 'Friction / barrier',    color: '#5C2D91' }, // CMS purple
  employer:  { id: 'employer',  label: 'Employer endorsement',  color: '#3F9C35' }, // UHC green
};

// --- Personas (locked order, names, tags, descriptors, tile colors) ---
const PERSONAS = [
  {
    id: 'teresa',
    name: 'Teresa',
    tag: 'Fraud-Fatigued',
    role: 'Group Medicare member, skeptical of unsolicited outreach.',
    tile: '#F5B700',          // UHC Gold — Pantone 3514 C (official brand color)
    photo: 'assets/personas/Teresa.png',
    kind: 'member',
  },
  {
    id: 'vivian',
    name: 'Vivian',
    tag: 'Cautious Trust-Builder',
    role: 'Group Medicare member, responsive to clinical voices.',
    tile: '#FF681F',          // UHC orange
    photo: 'assets/personas/Vivian.png',
    kind: 'member',
  },
  {
    id: 'jacob',
    name: 'Jacob',
    tag: 'Value-Driven Pragmatist',
    role: 'Group Medicare member, will say yes when the value is concrete.',
    tile: '#00BED5',          // UHC cyan
    photo: 'assets/personas/Jacob.png',
    kind: 'member',
  },
  {
    id: 'terrell',
    name: 'Terrell',
    tag: 'Authorized Representative',
    role: "Adult son managing his mother's Group Medicare coverage.",
    tile: '#002677',          // UHC navy
    photo: 'assets/personas/Terrell.png',
    kind: 'rep',              // special: caregiver, not the member
  },
];

const PERSONA_BY_ID = Object.fromEntries(PERSONAS.map(p => [p.id, p]));

// --- View 1: Persona Profiles -------------------------------------------------
// Columns: Consent Drivers | Trust Signals That Work | Friction & Barriers | Primary Unlock
const PROFILE_COLUMNS = [
  { id: 'drivers', label: 'Consent Drivers' },
  { id: 'trust',   label: 'Trust Signals That Work' },
  { id: 'friction',label: 'Friction & Barriers' },
  { id: 'unlock',  label: 'Primary Unlock', primary: true },
];

// b(text, themeId) helper to keep the data compact
const b = (text, theme) => ({ text, theme });

const PROFILE_DATA = {
  teresa: {
    drivers: [
      b('Will only engage with outreach that visibly comes from a source she already trusts — her former employer, her plan, or her doctor.', 'trust'),
      b('Needs the ask framed as protection, not promotion. \u201CHere\u2019s how we reach you when something matters\u201D lands; \u201Cstay connected with offers\u201D does not.', 'trust'),
      b('Responds to specificity. Vague benefits trigger the fraud filter; named, concrete examples (refill reminders, appointment confirmations) reduce it.', 'value'),
      b('Wants a clear opt-out alongside the opt-in. Reversibility makes the yes feel lower-stakes.', 'trust'),
      b('Acts on mail and verified phone calls before any digital channel.', 'channel'),
    ],
    trust: [
      b('Co-branded outreach from her former employer carries more weight than UHC outreach alone.', 'employer'),
      b('Physical mail on plan letterhead, with a return address she recognizes.', 'channel'),
      b('A live agent who can verify the call before she\u2019s asked anything.', 'trust'),
      b('Plain language. Legal hedging or marketing polish both read as suspicious.', 'trust'),
      b('Confirmation that arrives in the channel she chose, not a different one.', 'channel'),
    ],
    friction: [
      b('Assumes unsolicited calls and emails are scams until proven otherwise.', 'friction'),
      b('The current consent ask reads as a marketing opt-in, which is exactly what she\u2019s been trained to refuse.', 'friction'),
      b('No prior context — she\u2019s never been told what consent is for, only asked to give it.', 'friction'),
      b('Skeptical of digital-first paths; will abandon a flow that requires app login or account creation.', 'channel'),
      b('Past experience with robocalls has lowered her tolerance for any phone-based ask.', 'friction'),
    ],
    unlock: [
      b('Employer-endorsed, plain-language outreach that names what consent unlocks before asking for it. The employer relationship is the single highest-trust channel available for Teresa, and pairing it with concrete value framing turns the ask from a marketing prompt into a member service.', 'employer'),
    ],
  },

  vivian: {
    drivers: [
      b('Says yes when the ask comes from a clinical voice she\u2019s already in a relationship with — a nurse, a care manager, her PCP\u2019s office.', 'trust'),
      b('Needs to understand consent as part of her care, not separate from it. Framed clinically, it lands; framed as communication preferences, it doesn\u2019t.', 'caregiver'),
      b('Responds to pacing. She\u2019ll defer a decision she hasn\u2019t had time to think through, but will return to it if the door is left open.', 'trust'),
      b('Values being asked in person more than asked efficiently.', 'channel'),
      b('Will follow through on a yes that\u2019s been confirmed back to her in writing.', 'channel'),
    ],
    trust: [
      b('The HouseCalls nurse on her annual in-home visit — highest-trust touchpoint available to her.', 'caregiver'),
      b('Materials that use clinical language and reference her actual care (screenings, follow-ups, medication adherence).', 'caregiver'),
      b('An onboarding sequence that educates before it asks, so consent isn\u2019t her first encounter with the idea.', 'value'),
      b('A named individual — \u201CNurse Linda came by Tuesday\u201D — over an institutional sender.', 'trust'),
      b('Permission to wait. \u201CYou can decide now or when you\u2019re ready\u201D reduces pressure and increases follow-through.', 'trust'),
    ],
    friction: [
      b('Will decline or defer if the ask arrives before she understands what it\u2019s for.', 'friction'),
      b('Reads marketing-style outreach as not-for-her, even when the content is relevant.', 'friction'),
      b('Digital consent flows feel transactional in a way that doesn\u2019t match how she thinks about her care.', 'friction'),
      b('Infrastructure gap: clinical platforms don\u2019t currently write consent back to CP3, so even when the HouseCalls nurse asks, the yes can be lost.', 'friction'),
      b('Skeptical of one-time asks. She wants to know she can revisit the decision later.', 'friction'),
    ],
    unlock: [
      b('Embedding the consent ask in the HouseCalls in-home assessment, with the nurse capturing it on her tablet and category preferences expressed verbally. This converts the highest-trust moment in Vivian\u2019s year into the consent moment, and turns a relationship she already values into the channel that delivers the yes.', 'caregiver'),
    ],
  },

  jacob: {
    drivers: [
      b('Says yes when the value is concrete, immediate, and specific to him. \u201CReminders so you don\u2019t miss your screening\u201D beats \u201Cstay informed.\u201D', 'value'),
      b('Decides in the moment. If the ask arrives when he\u2019s already engaged — logging into the app, finishing a call with a rep — he\u2019ll act.', 'channel'),
      b('Wants to see what he\u2019s saying yes to before he commits. A preview of the kind of message he\u2019ll get reduces resistance.', 'value'),
      b('Comfortable with digital channels and prefers them when they\u2019re well-designed.', 'channel'),
      b('Responds to social proof. \u201CMost members in your plan have opted in\u201D carries weight.', 'value'),
    ],
    trust: [
      b('A contextual prompt at a moment of intent — inside the app, mid-flow, when he\u2019s already doing plan-related work.', 'channel'),
      b('A one-screen consent experience with clear value, clear scope, and a clear opt-out.', 'channel'),
      b('Examples of the messages he\u2019ll receive, shown before he opts in.', 'value'),
      b('Confirmation that lands in the channel he chose, within minutes.', 'channel'),
      b('A plan or employer brand he already associates with competence.', 'employer'),
    ],
    friction: [
      b('Will abandon any flow longer than a screen or two. Friction is the barrier, not skepticism.', 'friction'),
      b('Generic value propositions read as filler and get skipped.', 'friction'),
      b('Multi-step verification or account creation kills the conversion before it starts.', 'friction'),
      b('The current consent ask is buried in places he doesn\u2019t visit, at moments he isn\u2019t engaged.', 'channel'),
      b('Won\u2019t return to a flow he abandoned. The moment passes and so does the opportunity.', 'friction'),
    ],
    unlock: [
      b('A one-screen, in-app contextual consent prompt that previews the value, shows the message types he\u2019d receive, and confirms instantly. Jacob doesn\u2019t need to be convinced — he needs to be caught at the right moment with the right ask. The digital infrastructure to do this exists but isn\u2019t currently activated.', 'value'),
    ],
  },

  terrell: {
    drivers: [
      b('Says yes when the system recognizes him as the rep before asking him to act. Being treated as the decision-maker is the precondition for the decision.', 'caregiver'),
      b('Needs the ask to acknowledge the household — that he\u2019s consenting for his mother, that her preferences and his are both in play.', 'caregiver'),
      b('Responds to outreach that routes to him correctly the first time. Misrouted calls or letters addressed to his mother undermine trust immediately.', 'channel'),
      b('Wants confirmation that the consent he gives will actually change how UHC contacts the household.', 'trust'),
      b('Values efficiency. He\u2019s managing care on top of his own life and won\u2019t tolerate redundant or confused outreach.', 'caregiver'),
    ],
    trust: [
      b('A rep who opens the call by acknowledging his AOR status before launching into a script.', 'trust'),
      b('Mail and digital outreach that\u2019s addressed to him in his rep capacity, not to his mother with him as an afterthought.', 'caregiver'),
      b('A consent flow that captures two preferences cleanly — his and hers — and routes future communication accordingly.', 'caregiver'),
      b('Updates that confirm the household\u2019s outreach has actually changed based on what he said.', 'trust'),
      b('A single point of contact, or at minimum a system that doesn\u2019t make him re-explain the relationship every call.', 'trust'),
    ],
    friction: [
      b('Current systems don\u2019t reliably recognize the AOR relationship at first touch, so every interaction starts with re-establishing who he is.', 'friction'),
      b('Consent flows are built for individual members; there\u2019s no clean path for someone consenting on behalf of another.', 'friction'),
      b('His mother\u2019s preferences and his preferences can conflict, and the system doesn\u2019t currently support both being honored.', 'friction'),
      b('Outreach often goes to the wrong person in the household — to her when it should go to him, or vice versa.', 'channel'),
      b('No clear way to verify, after consenting, that the routing actually changed.', 'friction'),
    ],
    unlock: [
      b('A rep-recognition pathway that identifies Terrell as the authorized representative at first touch, captures consent for both parties, and routes future outreach to him by default. The unlock is operational, not motivational — Terrell is willing to engage. The system needs to be ready when he does.', 'caregiver'),
    ],
  },
};

// --- View 2: Journey Map ------------------------------------------------------
// Columns = three PEC phases
const JOURNEY_PHASES = [
  { id: 'pre',       label: 'Pre-Effective Consent' },
  { id: 'active',    label: 'Active Member Consent' },
  { id: 'retention', label: 'Consent Retention' },
];

// Rows = five swim lanes. `kind` drives the cell renderer:
//   undefined  -> standard prose bullets
//   'quotes'   -> four per-persona mini-quote blocks (filtered by persona chips)
//   'labeled'  -> bullets with a bold inline label (enabler-stack layer)
const JOURNEY_LANES = [
  { id: 'touchpoints',   label: 'Experience Touchpoints', sub: 'Member & Authorized Rep' },
  { id: 'mindset',       label: 'Mindset & Needs',        sub: 'Member & Authorized Rep', kind: 'quotes' },
  { id: 'opportunities', label: 'Experience Opportunities', sub: 'United Healthcare' },
  { id: 'enablement',    label: 'Experience Enablement',  sub: 'United Healthcare', kind: 'labeled' },
  { id: 'readiness',     label: 'Readiness',              sub: 'United Healthcare' },
];

// --- Strategic opportunity areas (Upgrade 3) ---
// Short label = pill text; desc = hover tooltip (from the vignettes)
const OPPORTUNITY_AREAS = {
  moments:    {
    id: 'moments',    label: 'Intentional moments',
    desc: 'When the consent ask arrives inside a moment where the member is already engaged and trust is established, members will have a higher tendency to say yes.',
    personaTip: {
      teresa:  'Teresa says yes when a live agent has already confirmed the call is legitimate. The moment of verification is the moment of consent.',
      vivian:  'For Vivian, the HouseCalls visit is the only moment that carries enough trust for the ask to land. Asking outside of that moment means asking too soon.',
      jacob:   'Jacob is already in the app doing something plan-related. The consent ask arrives in that context and feels like a natural next step, not an interruption.',
      terrell: 'Terrell\u2019s consent moment is the advocate call where he is already managing his mother\u2019s coverage. The ask belongs there, not in a separate campaign.',
    },
  },
  complexity: {
    id: 'complexity', label: 'Path complexity',
    desc: 'Reducing steps between the ask and the action, and building in follow-up moments will capture consent at a higher rate.',
    personaTip: {
      teresa:  'Teresa will not navigate a multi-step flow. The verbal capture option and the defer-to-later fallback mean she does not have to decide in a channel she does not trust.',
      vivian:  'Vivian needs permission to defer. A path that lets her say not yet without closing the door permanently is what keeps her in the funnel.',
      jacob:   'Jacob converts in the moment or not at all. Every additional step after the ask is consent he will not give. One screen, one tap, done.',
      terrell: 'Terrell is managing his own life alongside his mother\u2019s care. A consent flow that requires him to re-explain the relationship or navigate multiple steps will be abandoned.',
    },
  },
  control:    {
    id: 'control',    label: 'Consent control',
    desc: 'Give members a way to choose what they receive \u2014 some who would have stopped everything will instead stay in.',
    personaTip: {
      teresa:  'Plain-language examples of what consent unlocks give Teresa enough information to evaluate the ask before she has to commit to anything.',
      vivian:  'Vivian\u2019s yes is more durable when she has expressed what she wants to receive. Category preferences captured verbally in the moment reduce the likelihood she revokes later.',
      jacob:   'Jacob wants to see exactly what he is saying yes to before he commits. A preview of message types turns a vague ask into a specific value exchange he can evaluate.',
      terrell: 'Terrell needs to see both his preferences and his mother\u2019s in one place and control how outreach is routed to the household. The dashboard is where that control lives.',
    },
  },
  employer:   {
    id: 'employer',   label: 'Employer trust channel',
    desc: 'When the consent ask comes co-signed by a member\u2019s former employer, members who are apprehensive will be more open to say yes.',
    personaTip: {
      teresa:  'For Teresa, the employer relationship is the only channel that bypasses her fraud filter. Without it, she will not open the communication, let alone read it.',
      vivian:  'Vivian responds to clinical framing more than employer framing, but co-branded outreach in Pre-Effective builds the familiarity that makes the HouseCalls ask feel expected rather than surprising.',
      jacob:   'Jacob recognizes the employer brand and associates it with competence. Co-branded outreach raises the credibility of the ask before he reads the content.',
      terrell: null,
    },
  },
  authrep:    {
    id: 'authrep',    label: 'Authorized rep pathway',
    desc: 'If authorized representatives already on file in UHC systems are given a recognized role in the consent process, a segment of members who are currently unreachable becomes accessible.',
    personaTip: {
      terrell: 'Terrell is the decision-maker in the household. If the system does not recognize him as the authorized representative before the ask, the conversation starts on the wrong foot and often does not recover.',
      teresa:  null,
      vivian:  null,
      jacob:   null,
    },
  },
};

// Persona -> primary opportunity area(s). Persona accent color = persona.tile.
const PERSONA_OPP = {
  teresa:  ['employer'],
  vivian:  ['moments'],
  jacob:   ['complexity', 'control'],
  terrell: ['authrep'],
};

// q/lq accept an optional trailing opts object:
//   touchpoints/opportunities -> { persona, opp }  (persona-specific bullet + opp-area tag)
//   enablement/readiness      -> { dep }            (persona-specific dependency chip; id or [ids])
const q  = (text, theme, opts) => ({ text, theme, ...(opts || {}) });
const lq = (label, text, theme, opts) => ({ label, text, theme, ...(opts || {}) });

// JOURNEY_GRID[laneId][phaseId]
// standard / labeled lanes: array of bullets
// 'quotes' lane: { teresa, vivian, jacob, terrell } -> quote string
const JOURNEY_GRID = {
  touchpoints: {
    pre: [
      q('Employer-endorsed welcome communication (co-branded mail + email) that names consent as a member service tied to care, sent before plan effective date. ', 'employer',
        { persona: 'teresa', secondary: ['vivian','jacob'], opp: 'employer' }),
      q('Plan Introduction materials and Onboarding Checklist that surface consent as a distinct, optional action with concrete value examples \u2014 not buried in legal language.', 'value',
        { shared: true, opp: ['complexity','control'] }),
      q('New Member Just Checking In outbound call script redesigned to position consent as a benefit, with an option to capture verbally or defer to a follow-up channel the member chooses.', 'channel',
        { persona: 'teresa', secondary: 'vivian', opp: ['moments','complexity'] }),
      q('Digital onboarding interstitial (web + mobile app) that previews the kinds of outreach consent unlocks and offers a one-click opt-in.', 'channel',
        { persona: 'jacob', opp: ['complexity','control'], midterm: true, note: 'Mid-term: requires funded enablement \u2014 not in current 2026 roadmap.' }),
      q('Authorized Rep pathway recognized at first touch across mail, IVR, and digital \u2014 outreach routed to the rep, not the member, when AOR is on file.', 'caregiver',
        { persona: 'terrell', secondary: 'vivian', opp: 'authrep' }),
    ],
    active: [
      q('HouseCalls engagement specialist introduces consent at close of in-home assessment, with category preferences recorded in the moment. Currently in limited pilot (2 specialists).', 'caregiver',
        { persona: 'vivian', opp: ['moments','control'], midterm: true }),
      q('Contextual in-app and web consent prompts triggered at moments of intent (post-login, post-claim-view, post-Rx-refill), previewing message types before the ask.', 'channel',
        { persona: 'jacob', opp: ['moments','complexity'] }),
      q('Customer Advocate scripts open with AOR recognition where applicable, then offer consent at the natural point in the call \u2014 not as a campaign tag-on.', 'trust',
        { persona: 'terrell', secondary: ['teresa','vivian'], opp: ['authrep','moments'] }),
      q('Co-branded employer email and direct mail campaigns with plain-language value framing, one-click consent links, and clear opt-out.', 'employer',
        { persona: 'teresa', secondary: 'vivian', opp: ['employer','complexity'], midterm: true }),
      q('Cross-channel suppression so a member who consents in one channel is not asked again in another within the same window.', 'channel',
        { shared: true, opp: 'complexity' }),
      q('IVR-prompted consent capture at call close \u2014 member is nudged to provide or confirm consent during an active inbound or outbound call, without requiring a separate login or redirect.', 'channel',
        { shared: true, opp: ['moments','complexity'], dimForVivian: true }),
    ],
    retention: [
      q('Confirmation in the channel the member chose, within minutes of consent, naming what they said yes to and how to change it.', 'trust',
        { shared: true, opp: 'control' }),
      q('Granular preference center on web and mobile app where members can adjust category preferences without all-or-nothing revocation.', 'channel',
        { persona: ['jacob','teresa'], opp: 'control' }),
      q('Authorized Rep dashboard view showing both the member\u2019s and the rep\u2019s preferences, with clear routing of future outreach.', 'caregiver',
        { persona: 'terrell', secondary: 'vivian', opp: ['authrep','control'] }),
      q('Periodic value reinforcement messages (refill reminders, screening notifications, post-visit follow-ups) that demonstrate the promise of consent in action.', 'value',
        { persona: ['vivian','teresa'] }),
      q('Post-consent feedback loop \u2014 short check-in at 30/90 days asking whether outreach is landing as expected.', 'value',
        { shared: true, midterm: true, note: 'Requires new measurement and governance capability \u2014 not currently tracked beyond consent capture rate.' }),
      q('OptumRx / mail-order pharmacy interactions as a consent reinforcement touchpoint \u2014 currently unconfirmed; flagged for further exploration.', 'value',
        { exploratory: true, opp: 'moments', dimForVivian: true }),
    ],
  },

  mindset: {
    pre: {
      teresa: 'My former employer sent this, and it actually explains what UHC will do with my yes. That\u2019s the first time I\u2019ve understood the ask.',
      vivian: 'I\u2019m not ready to decide yet, but I appreciate that they told me what consent is for before asking. I\u2019ll think about it.',
      jacob: 'Okay, so consent means I\u2019ll get the reminders I actually want. That\u2019s worth a click.',
      terrell: 'They addressed the letter to me as her representative. That\u2019s a first. Now I know this is mine to handle.',
    },
    active: {
      teresa: 'The agent confirmed it was UHC before asking me anything. And she told me exactly what I\u2019d get if I said yes. I said yes.',
      vivian: 'Nurse Linda asked me at the end of the visit, and it felt like part of my care. I told her which kinds of messages I wanted.',
      jacob: 'I was already in the app checking a claim, and the prompt showed me three example messages. One screen, done.',
      terrell: 'The rep knew I was the AOR before I had to explain it. He walked me through consenting for my mother and for me as her rep.',
    },
    retention: {
      teresa: 'I got the confirmation in the mail, like they said I would. And the refill reminder came two weeks later. They\u2019re keeping the promise.',
      vivian: 'The messages I\u2019m getting sound like Nurse Linda\u2019s voice \u2014 clinical, useful. I haven\u2019t wanted to opt out of anything.',
      jacob: 'I tightened my preferences last month \u2014 kept reminders, dropped the wellness tips. Took me thirty seconds. That\u2019s how it should work.',
      terrell: 'Outreach goes to me now, not my mother. When I want her to hear something directly, I can flip that. The system finally gets it.',
    },
  },

  opportunities: {
    pre: [
      q('Activate the employer/group channel as the primary trust carrier for first consent exposure, with co-branded materials and employer-endorsed language.', 'employer',
        { persona: 'teresa', secondary: ['vivian','jacob'], opp: 'employer' }),
      q('Reposition consent in all Pre-Effective touchpoints from a marketing opt-in to a member service tied to care, using plain-language value framing.', 'value',
        { shared: true, opp: 'complexity' }),
      q('Build the Authorized Rep recognition pathway into enrollment file ingestion so the rep is identified before any outreach begins.', 'caregiver',
        { persona: 'terrell', opp: 'authrep' }),
      q('Pilot a digital onboarding interstitial that previews outreach examples and offers one-click consent at the moment of plan activation.', 'channel',
        { persona: 'jacob', opp: ['complexity','control'] }),
      q('Add consent education to the outbound call script as a structured ask, with verbal capture and channel-of-choice fallback.', 'channel',
        { persona: 'teresa', secondary: 'vivian', opp: ['moments','employer'] }),
    ],
    active: [
      q('Embed consent capture in the highest-trust clinical moment available \u2014 the HouseCalls in-home visit \u2014 with nurse tablet write-back to the consent system of record.', 'caregiver',
        { persona: 'vivian', opp: 'moments' }),
      q('Deploy contextual digital prompts at moments of member intent (app login, claim view, refill flow) with preview of message types and one-screen confirmation.', 'channel',
        { persona: 'jacob', opp: ['moments','complexity'] }),
      q('Equip Customer Advocates with AOR-aware scripts that recognize the rep relationship before the consent ask, and offer consent at the natural inflection point in the call.', 'trust',
        { persona: 'terrell', secondary: 'teresa', opp: ['authrep','moments'] }),
      q('Run co-branded employer campaigns with measurable value framing, A/B tested across persona segments to identify the highest-converting frames.', 'employer',
        { persona: 'teresa', secondary: 'vivian', opp: 'employer' }),
      q('Implement cross-channel suppression to prevent redundant asks and protect trust across touchpoints.', 'trust',
        { shared: true, opp: 'complexity' }),
    ],
    retention: [
      q('Send channel-matched confirmation within minutes of consent, naming the scope of the yes and how to modify it.', 'trust',
        { shared: true, opp: 'control' }),
      q('Build a granular preference center that supports category-level changes without all-or-nothing revocation.', 'channel',
        { persona: ['jacob','teresa'], opp: 'control' }),
      q('Design an Authorized Rep dashboard view that holds both the member\u2019s and the rep\u2019s preferences and routes future outreach accordingly.', 'caregiver',
        { persona: 'terrell', opp: 'authrep' }),
      q('Operationalize a value-reinforcement cadence (reminders, screening alerts, post-visit follow-ups) that delivers on the promise of consent.', 'value',
        { persona: ['vivian','teresa'], opp: 'moments' }),
      q('Stand up a feedback loop at 30 and 90 days to surface whether outreach is landing, with revocation patterns feeding back into orchestration.', 'friction',
        { shared: true, opp: 'control' }),
    ],
  },

  enablement: {
    pre: [
      lq('Connected Consent Infrastructure', 'Employer enrollment systems flow AOR status, group affiliation, and effective date into CP3 before plan start \u2014 closing the upstream connectivity gap that today leaves Pre-Effective data fragmented across employer files, and CP3.', 'trust', { dep: 'terrell' }),
      lq('Segmented Audiences', 'Members tagged by persona segment (fraud-fatigued, trust-builder, pragmatist, AOR-mediated) at the point of enrollment ingestion, with routing logic ready before the first outreach.', 'channel'),
      lq('Consent Orchestration', 'Pre-Effective journey logic triggers employer co-branded outreach, script variations, and digital onboarding interstitial based on segment, channel preference, and AOR status.', 'channel'),
      lq('In-Moment Consent Capture', 'Verbal capture and digital interstitial both write back to CP3 in real time through connected pipelines \u2014 not batch exports or manual reconciliation.', 'value'),
    ],
    active: [
      lq('Connected Consent Infrastructure', 'HouseCalls tablet, advocate desktop, vendor systems, mobile app, and web all connected to CP3 with real-time write-back \u2014 the ingestion blocker between clinical platforms and CP3 called out in stakeholder interviews must be resolved for this lane to function.', 'trust', { dep: 'vivian' }),
      lq('Segmented Audiences', 'Real-time persona signals refine which channel each member is targeted in \u2014 Vivian routed to HouseCalls, Jacob to contextual digital, Teresa to co-branded mail, Terrell to AOR-aware paths.', 'channel'),
      lq('Consent Orchestration', 'Cross-channel suppression rules prevent redundant asks; next-best-channel logic surfaces the consent ask at the highest-converting moment per segment, drawing on a unified view of consent state across all connected platforms.', 'channel'),
      lq('In-Moment Consent Capture', 'Nurse tablet, contextual web/app prompts, and advocate scripts all capture consent verbally or with one-click, persisting to CP3 within the same session.', 'caregiver'),
      lq('Test & Learn', 'A/B testing infrastructure measures lift across persona \u00d7 channel \u00d7 framing combinations and feeds results back to orchestration.', 'value'),
    ],
    retention: [
      lq('Connected Consent Infrastructure', 'Consent record carries scope, channel preference, AOR linkage, and revocation history \u2014 accessible to every downstream system through the same connectivity that captured it, so retention orchestration draws from the same truth as capture.', 'trust', { dep: 'terrell' }),
      lq('Consent Orchestration', 'Confirmation messages routed in the channel the member consented through; retention cadence triggered based on consent scope and segment, with cross-platform suppression preventing duplicate or stale outreach.', 'channel'),
      lq('In-Moment Consent Capture', 'Preference center changes and AOR routing adjustments captured live and propagated across all connected platforms within minutes.', 'caregiver', { dep: 'terrell' }),
      lq('Test & Learn', 'Revocation patterns, channel performance, and 30/90-day feedback feed back into segmentation and orchestration logic.', 'value'),
      lq('Insight & Optimization', 'Closed-loop reporting on consent conversion, retention, revocation, and downstream Stars/engagement impact informs ongoing optimization, made possible by the unified data flow across all platforms.', 'value'),
    ],
  },

  readiness: {
    pre: [
      q('Employer partnerships expanded with formal PEC playbook \u2014 at least 3\u20135 employer groups co-signed for co-branded Pre-Effective outreach in pilot.', 'employer', { dep: 'teresa' }),
      q('Enrollment file ingestion enhanced to capture AOR designation and write to consent record before plan effective date (currently inconsistent).', 'friction', { dep: 'terrell' }),
      q('Script updated, legally reviewed, and rolled out across the outbound call team with verbal consent capture trained and operationalized.', 'trust'),
      q('Digital onboarding interstitial designed, built, and integrated into web and mobile app enrollment flows.', 'channel', { dep: 'jacob' }),
      q('Legal and compliance sign-off on employer co-branded language and digital one-click consent under TCPA.', 'trust'),
    ],
    active: [
      q('HouseCalls tablet integration with CP3 funded and built \u2014 the ingestion blocker called out in stakeholder interviews must be resolved for this lane to function.', 'friction', { dep: 'vivian' }),
      q('Customer Advocate scripts redesigned with AOR-aware logic and consent placement; training rolled out across the advocate workforce.', 'caregiver', { dep: 'terrell' }),
      q('Contextual digital prompt infrastructure activated \u2014 the digital scaffolding exists in CP3 but was never operationalized; the business case must fund activation.', 'friction', { dep: 'jacob' }),
      q('Cross-channel suppression rules built into orchestration layer and tested for compliance with TCPA and FCC reciprocity guidance.', 'channel'),
      q('A/B testing framework stood up with measurement governance defining what counts as a consent lift.', 'value'),
    ],
    retention: [
      q('Preference center redesigned with category-level controls; AOR view designed and integrated into member portal and mobile app.', 'channel', { dep: ['jacob', 'terrell'] }),
      q('Confirmation messaging templates approved, channel-matched, and triggered within minutes of consent across all capture channels.', 'trust'),
      q('Post-consent measurement framework built \u2014 connecting consent to downstream Stars, engagement, and cost outcomes \u2014 with cross-functional accountability defined.', 'value'),
      q('30/90-day feedback mechanism designed and integrated into retention orchestration.', 'value'),
      q('Single owner identified for the post-consent member experience, with clear governance across digital, clinical, service, and AOR pathways.', 'trust'),
    ],
  },
};

// expose globally for the babel-transpiled scripts
// --- Channel icon rows for Experience Touchpoints (Upgrade: channel icon row) ---
// primary[] = persona IDs for whom this is the highlighted channel
// icon = filename under assets/icons/ (without .svg)
const TOUCHPOINT_CHANNELS = {
  pre: [
    { id: 'mail',     icon: 'Direct-Mail', shape: 'round',  label: 'Mail',       primary: ['teresa','vivian'],   tip: 'Employer co-branded welcome letter introducing consent as a member service' },
    { id: 'email',    icon: 'Email',       shape: 'round',  label: 'Email',      primary: ['vivian'],           tip: 'Employer co-branded email with plain-language consent framing' },
    { id: 'phone',    icon: 'RoboCall',    shape: 'round',  label: 'Outbound call', primary: ['teresa','terrell','vivian'], tip: 'New Member Just Checking In outbound call with updated consent education script' },
    { id: 'ivr',      icon: 'IVR',         shape: 'round',  label: 'IVR',           primary: [],                   tip: 'IVR-prompted consent capture at call close: member nudged to provide or confirm consent without a separate login' },
    { id: 'web',      icon: 'Web-App',     shape: 'round',  label: 'Web / desktop', primary: ['jacob','terrell'],  tip: 'Digital onboarding interstitial with one-click consent option' },
    { sep: true },
    { id: 'employer', icon: 'Employer',    shape: 'square', label: 'Employer',   primary: [],                   tip: 'Former employer relationship used as the primary trust carrier' },
  ],
  active: [
    { id: 'mobile',   icon: 'MobileApp',   shape: 'round',  label: 'Mobile app',           primary: ['jacob'],           tip: 'Contextual prompt at moment of intent \u2014 post-login, post-claim, post-refill' },
    { id: 'web',      icon: 'Web-App',     shape: 'round',  label: 'Web portal',           primary: ['jacob','terrell'], tip: 'Contextual web prompt mirroring the in-app consent experience' },
    { id: 'phone',    icon: 'Advocate',    shape: 'round',  label: 'Advocate',             primary: ['teresa','terrell','vivian'], tip: 'Customer Advocate call with AOR-aware script and natural consent ask' },
    { id: 'ivr',      icon: 'IVR',         shape: 'round',  label: 'IVR',                  primary: [],                  tip: 'IVR-prompted consent capture at active call close' },
    { id: 'mail',     icon: 'Direct-Mail', shape: 'round',  label: 'Mail',                 primary: ['teresa','vivian'], tip: 'Co-branded employer direct mail campaign with one-click response' },
    { id: 'email',    icon: 'Email',       shape: 'round',  label: 'Email',                primary: ['vivian'],          tip: 'Co-branded employer email campaign with plain-language value framing' },
    { sep: true },
    { id: 'clinical', icon: 'Clinical',    shape: 'square', label: 'In-person / clinical', primary: ['vivian'],          tip: 'HouseCalls nurse captures consent verbally during in-home visit' },
  ],
  retention: [
    { id: 'email',  icon: 'Email',       shape: 'round',  label: 'Email',      primary: ['vivian'],           tip: 'Channel-matched confirmation and value reinforcement outreach' },
    { id: 'mobile', icon: 'MobileApp',   shape: 'round',  label: 'Mobile app', primary: ['jacob'],            tip: 'Preference center and post-consent confirmation' },
    { id: 'web',    icon: 'Web-App',     shape: 'round',  label: 'Web portal', primary: ['jacob','terrell'],  tip: 'Preference center and Authorized Rep dashboard' },
    { id: 'phone',  icon: 'Advocate',    shape: 'round',  label: 'Advocate',   primary: ['teresa','terrell','vivian'], tip: 'Advocate follow-up and 30/90-day feedback loop' },
  ],
};

Object.assign(window, {
  THEMES, PERSONAS, PERSONA_BY_ID,
  PROFILE_COLUMNS, PROFILE_DATA,
  JOURNEY_PHASES, JOURNEY_LANES, JOURNEY_GRID,
  OPPORTUNITY_AREAS, PERSONA_OPP, TOUCHPOINT_CHANNELS,
});
