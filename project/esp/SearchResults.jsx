
'use strict';
const { useState, useMemo } = React;

// ── FSR CATEGORY MAP ───────────────────────────────────────────────────────
const FSR_NAMES = {
  'FSR-001':'FSR-001 Working at Heights',
  'FSR-002':'FSR-002 Dropped Objects',
  'FSR-006':'FSR-006 Lifting Operations',
  'FSR-007':'FSR-007 Plant & Equipment Interaction',
};

// ── SOLUTIONS LIBRARY ──────────────────────────────────────────────────────
// Each solution is a reusable pattern. caseStudies[] holds project-specific
// implementations — same solution, different project context.
const SOLUTIONS = [
  {
    id:'ES-246', title:'Rebar Cage Safety Netting',
    summary:'Tensioned polyethylene netting beneath rebar cages eliminates dropped-object risk during vertical pour operations.',
    sector:'Rail', status:'Approved', phase:'Construction',
    rating:4.7, ratingCount:31, submitter:'M. Chen', date:'28 Apr 2026',
    fsrCat:'FSR-002', tags:['LOR Preferred'],
    problem:'During vertical rebar cage assembly above live traffic corridors, loose tie-wire offcuts, hand tools, and small fittings can fall from height onto road users or workers below. Existing toe-board systems do not catch items that pass between the cage bars, and exclusion zones are not always practical when the corridor must remain open.',
    solution:'Tensioned high-density polyethylene (HDPE) netting is installed on a perimeter frame directly beneath each rebar cage during assembly. The mesh is rated to a 250 kg point load, deploys in under 15 minutes by two workers, and is inspected daily against a tagged checklist. Nets are reused across pours and removed only after the deck pour is complete and verified.',
    evidence:'Deployed on Pier 3, Pier 4, and Pier 5 deck works. Photo documentation and incident-rate data available.',
    caseStudies:[
      {project:'Fremantle Bridges Alliance', lead:'M. Chen', date:'Mar 2026',
       context:'Pier 3 sits directly over the southbound carriageway of Stirling Hwy, which could not be closed during business hours. Cage assembly was performed at 14 m above traffic.',
       customizations:'Net frame extended 1.5 m beyond the cage perimeter on the road-facing side. Added secondary debris liner (shadecloth) to catch tie-wire offcuts smaller than the 50 mm mesh.',
       constraints:'Frame anchor points had to clear post-tensioning ducts. Daily install/dismantle was required so traffic management could re-open lanes overnight.',
       lessons:'Pre-fabricating the frame off-site and craning it into place saved ~2 hours per shift. Shadecloth liner is now standard for any deployment over public traffic.'},
      {project:'Bridge Inn Road', lead:'D. Okafor', date:'Apr 2026',
       context:'Pier 5 is over the river — no traffic below, but environmental regs prohibit any debris entering the water.',
       customizations:'Standard 50 mm mesh retained, but a fine-weave catch tray was added at the low point to collect runoff and offcuts for disposal.',
       constraints:'Tidal access window limited install time to 4 hours per day.',
       lessons:'Single net per pier (rather than per cage) reduced setup time by 40%. Approach adopted as default for over-water piers.'},
    ],
    comments:[
      {user:'K. McDonald', role:'ESL', text:'Excellent solution — recommend for all overhead works going forward. The Pier 3 case study should be the reference for any over-traffic deployment.', date:'22 Apr 2026'},
      {user:'M. Chen', role:'Submitter', text:'Happy to walk through the frame anchoring detail at the next safety standup. The shadecloth liner add-on was a game-changer for Stirling Hwy.', date:'23 Apr 2026'},
    ],
  },
  {
    id:'ES-244', title:'PPE QR-Code Tracking System',
    summary:'QR-coded PPE items linked to worker profiles enable real-time compliance monitoring via kiosk scan.',
    sector:'Roads', status:'Approved', phase:'Construction',
    rating:4.5, ratingCount:18, submitter:'J. Walsh', date:'25 Apr 2026',
    fsrCat:'FSR-007', tags:['Case Study'],
    problem:'Spot-check PPE audits at deck-level access points were missing non-compliant workers, particularly during shift handovers and night works. Damaged or expired PPE was being reused because there was no reliable way to track issue dates and inspection status across a large, mobile workforce.',
    solution:'Each helmet, harness, and high-vis vest is issued with a unique QR code linked to the worker\'s profile and the item\'s inspection record. Kiosk scanners at site access gates verify all required items are present, in-date, and assigned to the scanning worker before granting entry to elevated work zones. Non-compliance triggers a supervisor alert.',
    evidence:'Compliance lifted from 72% to 98% over 6 weeks. Deployed at all four main pylon access points.',
    caseStudies:[
      {project:'Byford Rail Extension', lead:'J. Walsh', date:'Feb 2026',
       context:'High-throughput access point — ~180 workers entering and leaving per shift change. Existing manual sign-in could not keep pace.',
       customizations:'Three parallel scan lanes were installed to avoid queuing. Added voice prompt for low-literacy workers.',
       constraints:'Kiosks needed to operate offline (intermittent site Wi-Fi) and sync overnight.',
       lessons:'Dual-scan (PPE + worker ID badge) prevented "buddy scanning". Three lanes was the minimum to avoid bottlenecks at shift change.'},
      {project:'Eastern Freeway Burke to Tram Alliance', lead:'R. Sato', date:'Mar 2026',
       context:'Lower throughput than North Pylon (~60 workers/shift) but more contractor turnover.',
       customizations:'Reduced to one scan lane. Added a "visitor" workflow for short-stay contractors with temporary QR codes valid for 24 hours.',
       constraints:'Visitor PPE was issued from a separate stores location, requiring API integration.',
       lessons:'Visitor workflow is now the default for any contractor on site less than 1 week — saved ~6 hours/week of admin.'},
    ],
    comments:[
      {user:'A. Brennan', role:'PPE Lead', text:'The dual-scan approach has been worth its weight in gold — buddy scanning was a bigger problem than we admitted. Rolling out to the casting yard next.', date:'24 Apr 2026'},
      {user:'J. Walsh', role:'Submitter', text:'Happy to share the kiosk specs and the Power Automate flow for the inspection-date sync.', date:'25 Apr 2026'},
    ],
  },
  {
    id:'ES-241', title:'Modular Deck Edge Barrier',
    summary:'Quick-clip modular barriers deploy in under 5 minutes and exceed AS 1657 requirements for work-at-height edge protection.',
    sector:'Defence', status:'Approved', phase:'Construction',
    rating:4.8, ratingCount:43, submitter:'S. Thompson', date:'20 Apr 2026',
    fsrCat:'FSR-001', tags:['LOR Preferred','Case Study'],
    problem:'Traditional timber edge-barriers required around 45 minutes per panel to install, were frequently damaged during concrete pours, and were inconsistently re-installed after pour cycles. Damaged sections introduced fall-from-height risk that was hard to detect from ground level.',
    solution:'Interlocking aluminium edge-barrier sections clip into cast-in base anchors. Each 2 m section weighs 8 kg and can be carried and installed by a single worker. The system has been load-tested to 900 N lateral and complies with AS 1657. Damaged sections are swapped out individually rather than replacing whole runs.',
    evidence:'Full case study available. Cost saving: $2,400/week vs. previous timber system.',
    caseStudies:[
      {project:'Fremantle Bridges Alliance', lead:'S. Thompson', date:'Jan 2026',
       context:'Main deck spans 480 m and required continuous edge protection during a 14-week pour cycle.',
       customizations:'Standard 2 m sections used throughout. Cast-in anchor plates added to the formwork drawings — no retro-drilling.',
       constraints:'Anchor plate locations had to clear deck reinforcement and post-tensioning ducts.',
       lessons:'Specifying anchors at design stage saved an estimated $40k vs. retrofitting. This is now standard on all FBA deck works.'},
      {project:"Queensland Rail's Station Accessibility Upgrade Program", lead:'B. Ngata', date:'Feb 2026',
       context:'Reused on a separate Defence project — narrow wharf deck with restricted lay-down area.',
       customizations:'Shortened 1 m sections introduced for the curved approach. Anodised finish specified to handle salt-water exposure.',
       constraints:'Cast-in anchors not feasible on existing wharf — switched to a clamp-on base detail.',
       lessons:'Clamp-on base is now offered as a standard variant. Anodised finish should be the default for any marine deployment.'},
    ],
    comments:[
      {user:'P. Reilly', role:'Construction Mgr', text:'Single best safety upgrade we\'ve made on this project. The fact that you can swap a damaged section in 90 seconds is the real win.', date:'21 Apr 2026'},
      {user:'S. Thompson', role:'Submitter', text:'The clamp-on variant from the Defence case study is now in the catalogue — recommend it for any work where you can\'t cast in anchors.', date:'22 Apr 2026'},
    ],
  },
  {
    id:'ES-238', title:'Concrete Pour Proximity Sensor',
    summary:'Ultrasonic sensors create an exclusion zone around concrete pump booms, halting movement when workers enter the 3m radius.',
    sector:'Water', status:'Approved', phase:'Construction',
    rating:4.3, ratingCount:12, submitter:'A. Patel', date:'15 Apr 2026',
    fsrCat:'FSR-007', tags:[],
    problem:'Concrete pump boom strikes were the most-reported high-potential incident category on FBA in 2025. The booms slew quickly and the operator\'s sightlines are obstructed by the pour formwork. Verbal warnings from spotters were unreliable in high-noise environments.',
    solution:'Ultrasonic proximity sensors are mounted at 1 m intervals along the boom. When a worker enters the 3 m exclusion radius, the sensors trigger an automatic hydraulic stop and an audible alarm. The boom can only resume movement after the operator confirms a clear field via a dash-mounted reset.',
    evidence:'Installed on 2 of 3 site concrete pumps. Near-miss reports relating to boom strikes: down 100% over the trial 3-month period.',
    caseStudies:[
      {project:'Morley-Ellenbrook Line', lead:'A. Patel', date:'Feb 2026',
       context:'First trial installation. Pump Rig 02 was selected because it had the highest near-miss count in 2025.',
       customizations:'Sensors mounted with vibration-damping brackets after first-week false-trigger issues. Reset button relocated to dash centre.',
       constraints:'Concrete dust caused early sensor fouling — added daily wipe-down to the pump pre-start checklist.',
       lessons:'Vibration damping is critical — without it, false triggers will erode operator trust and the system will get bypassed.'},
    ],
    comments:[
      {user:'L. Kovacs', role:'Plant Supervisor', text:'After the bracket retrofit the false triggers are basically zero. Worth getting this on Rig 03 before the next deck pour.', date:'16 Apr 2026'},
      {user:'A. Patel', role:'Submitter', text:'Agreed — Rig 03 install is scheduled for next week. Will update the case study once we have a second site to compare against.', date:'17 Apr 2026'},
    ],
  },
  {
    id:'ES-235', title:'Night Works Lighting Matrix',
    summary:'LED matrix system provides 500-lux task illumination across the full deck span, eliminating shadow zones during night pours.',
    sector:'Energy', status:'Approved', phase:'Construction',
    rating:4.1, ratingCount:9, submitter:'R. Davis', date:'10 Apr 2026',
    fsrCat:'FSR-007', tags:[],
    problem:'Night concrete pours were lit by tripod-mounted halogen towers that left shadow zones between fixtures. Workers reported tripping hazards, missed surface defects, and eye strain from glare when transitioning between bright and dark areas.',
    solution:'A programmable LED matrix is suspended on the gantry above the pour zone. Fixtures are positioned to deliver a uniform 500 lux at deck level (per AS/NZS 1680.1) with no shadow zones across the 40 m pour span. The matrix can be re-zoned from a tablet without physically repositioning units.',
    evidence:'Trialled on three night pours. Worker eye-strain complaints down from 14/shift to 2/shift.',
    caseStudies:[
      {project:'South Eastern Program Alliance', lead:'R. Davis', date:'Mar 2026',
       context:'First night pour after the gantry was extended to span the full deck. Pour duration was 9 hours.',
       customizations:'Added 4000 K colour temperature (rather than the supplier\'s default 6000 K) to reduce glare on wet concrete.',
       constraints:'Power draw needed a dedicated 32 A circuit — generator capacity had to be checked.',
       lessons:'4000 K is now spec\'d for all night pours. Pre-pour lighting walk-through is a standing agenda item.'},
    ],
    comments:[
      {user:'V. Ahmed', role:'Night Shift Lead', text:'Massive improvement on the old halogen towers. The tablet re-zoning is genuinely useful when the boom moves.', date:'11 Apr 2026'},
    ],
  },
  {
    id:'ES-233', title:'Pre-Cast Deck Safe-Lift Protocol',
    summary:'Colour-coded rigging inspection tags and a two-person sign-off system prevent pre-cast deck panel lift errors.',
    sector:'Delivery Partner', status:'Approved', phase:'Construction',
    rating:4.6, ratingCount:22, submitter:'P. Kumar', date:'7 Apr 2026',
    fsrCat:'FSR-006', tags:['LOR Preferred'],
    problem:'Pre-cast deck panel lifts present collapse and dropped-load risks. A 2024 incident review found that single-person rigging checks were missing 1 in 12 defects, and that paper sign-off sheets were being completed retrospectively.',
    solution:'A three-step protocol is now mandatory before any pre-cast lift: (1) all rigging inspected against a colour-coded tag system (green = in-date, amber = inspect today, red = quarantine); (2) independent two-person sign-off captured on tablet; (3) exclusion zone delineated and confirmed by the dogman before lift initiation.',
    evidence:'Zero lift incidents across 47 deck panel installations since rollout.',
    caseStudies:[
      {project:'Suburban Rail Loop', lead:'P. Kumar', date:'Jan–Apr 2026',
       context:'47 panels lifted across 12 lift days. Panels are 12 m long and average 22 t.',
       customizations:'Tablet sign-off used Microsoft Lists with offline cache. Dogman exclusion zone marked with dual-colour cones (orange = active lift, yellow = approach).',
       constraints:'Two-person sign-off requirement initially added 8 minutes per lift — addressed by parallel inspection rather than sequential.',
       lessons:'Parallel inspection is the key to keeping cycle time down. Tablet-based sign-off has eliminated retrospective paperwork.'},
    ],
    comments:[
      {user:'D. Ofori', role:'Lift Supervisor', text:'The colour-coded tag system is the single most useful change. We can see compliance from 20 m away now.', date:'8 Apr 2026'},
      {user:'P. Kumar', role:'Submitter', text:'Happy to share the Microsoft Lists template — it\'s easy to drop into another project.', date:'9 Apr 2026'},
    ],
  },
  {
    id:'ES-230', title:'Dust Suppression Auto-Mist',
    summary:'Automated misting ring on concrete saws activates when ambient dust exceeds 2mg/m³, maintaining safe silica exposure levels.',
    sector:'Rail', status:'Under Review', phase:'Construction',
    rating:0, ratingCount:0, submitter:'T. Nguyen', date:'2 Apr 2026',
    fsrCat:'FSR-007', tags:[],
    problem:'Concrete cutting and grinding generates respirable crystalline silica (RCS) dust that, in still-air conditions, exceeds the workplace exposure standard (WES) of 0.05 mg/m³. Operators were over-relying on PPE rather than engineering controls, and water dosing was inconsistent.',
    solution:'A misting ring clamps to any standard concrete saw and is triggered by an integrated optical dust sensor. When ambient dust exceeds 2 mg/m³ at the cut zone, the ring delivers a 4 L/hr atomised water mist directly at the cutting blade. Telemetry is logged for hygiene reporting.',
    evidence:'Bench-test results: 94% RCS reduction at the operator breathing zone vs. dry-cut baseline. Field trial pending.',
    caseStudies:[
      {project:'Melbourne Airport Rail - Early Works', lead:'T. Nguyen', date:'Mar 2026 (in progress)',
       context:'Trial on the saw used for deck-joint cutting. Static test conditions in the casting yard before field deployment.',
       customizations:'Sensor sensitivity tuned down — default threshold (1 mg/m³) was triggering on ambient site dust unrelated to cutting.',
       constraints:'Casting yard does not have plumbed water — using a 50 L portable tank that needs refilling every ~12 hours.',
       lessons:'Field deployment will need a permanent water hookup or larger reservoir. Submitting for ESL review pending field results.'},
    ],
    comments:[
      {user:'F. Liang', role:'Hygienist', text:'Bench results are promising. Need the field data before we can recommend it as a primary control. Keen to see breathing-zone monitoring during the trial.', date:'3 Apr 2026'},
    ],
  },
  {
    id:'ES-228', title:'Formwork Failure Early Warning',
    summary:'Vibration sensors on formwork shoring detect deflection events 30+ seconds before threshold breach, allowing safe evacuation.',
    sector:'Roads', status:'Under Review', phase:'Construction',
    rating:0, ratingCount:0, submitter:'L. Park', date:'28 Mar 2026',
    fsrCat:'FSR-006', tags:[],
    problem:'Formwork and shoring systems present a catastrophic collapse risk during concrete curing — particularly in the first 24 hours. Visual inspection cannot detect early-stage deflection in props that are partially obscured by the slab.',
    solution:'Wireless vibration and displacement sensors are clamped to each shoring leg and stream data to a site dashboard. A predictive model trained on prior collapse data flags anomalous deflection patterns. When deflection exceeds 60% of the calculated threshold, a site-wide audible alarm gives 30+ seconds of evacuation time.',
    evidence:'Lab validation only at this stage. Pending field trial sign-off.',
    caseStudies:[
      {project:'Byford Rail Extension', lead:'L. Park', date:'Apr 2026 (planned)',
       context:'Span 12 shoring is the planned trial site — a relatively low-consequence span where a controlled trial is feasible.',
       customizations:'Sensor placement plan: every other leg in the high-load zone, every 4th leg elsewhere.',
       constraints:'Predictive model needs ~2 weeks of baseline data per pour before it can flag anomalies reliably.',
       lessons:'TBD — trial pending ESL sign-off and the next pour cycle.'},
    ],
    comments:[
      {user:'N. Reyes', role:'Temporary Works Eng', text:'Concept is sound. Want to see the predictive model\'s false-positive rate from the lab data before sign-off — alarm fatigue is a real risk here.', date:'29 Mar 2026'},
    ],
  },
  {
    id:'ES-225', title:'Bridge Pier Working Platform',
    summary:'Cantilevered aluminium platform system for pier cap works eliminates the need for scaffolding and reduces assembly time by 60%.',
    sector:'Defence', status:'Approved', phase:'Construction',
    rating:4.4, ratingCount:15, submitter:'B. Williams', date:'22 Mar 2026',
    fsrCat:'FSR-001', tags:[],
    problem:'Access to pier-cap reinforcement zones traditionally required tube-and-fitting scaffolding erected over water. Each scaffold took ~3 days per pier to erect and dismantle, exposed riggers to extended at-height work, and the timber decks degraded quickly in the marine environment.',
    solution:'Cantilevered aluminium platform brackets bolt onto cast-in anchor points on the pier, supporting a 3 m × 4 m work platform certified to 450 kg UDL. Brackets and decking are demountable, reusable across all piers, and assemble in around 4 hours by a two-person crew.',
    evidence:'Deployed at Piers 1–4. Average scaffold cost saving: $18,000 per pier; at-height work hours reduced ~70%.',
    caseStudies:[
      {project:'Fremantle Bridges Alliance', lead:'B. Williams', date:'Feb 2026',
       context:'First deployment. Pier 2 was selected because it sits in shallow water with safe boat access for the install crew.',
       customizations:'Standard 3 m × 4 m platform. Added a tool-tether rail on the river-facing side to prevent dropped objects.',
       constraints:'Cast-in anchors had to be coordinated with the pier reinforcement schedule — late changes added 2 days to the program.',
       lessons:'Anchor coordination must happen at design stage. Tool-tether rail is now standard for any over-water deployment.'},
      {project:'Bridge Inn Road', lead:'H. Olsen', date:'Mar 2026',
       context:'Deeper water, stronger tidal flow. Install needed a barge-mounted EWP for the bracket fix.',
       customizations:'Added secondary tie-back to the pier shaft as a redundancy for the cantilever connection.',
       constraints:'Tidal window limited install to ~5 hours per day.',
       lessons:'Secondary tie-back is cheap insurance for high-flow piers and adds <1 hour to install. Adopting as default for Pier 5 onwards.'},
    ],
    comments:[
      {user:'C. Whitlow', role:'Pier Works Eng', text:'The 3-day to 4-hour reduction is genuine. The tie-back from Pier 4 should be the default — no reason not to use it.', date:'23 Mar 2026'},
      {user:'B. Williams', role:'Submitter', text:'Pier 5 install will use the tie-back as standard. Will roll the case-study results into the consolidated report after that pour.', date:'24 Mar 2026'},
    ],
  },
];

// All projects across the case studies (auto-derived for the dropdown)
const ALL_PROJECTS = (() => {
  const set = new Set();
  SOLUTIONS.forEach(s => (s.caseStudies||[]).forEach(c => set.add(c.project)));
  return Array.from(set).sort();
})();

// ── EXPANDABLE TEXT BLOCK ──────────────────────────────────────────────────
const ExpandableText = ({label, text, charLimit=180}) => {
  const [open, setOpen] = useState(false);
  const needsClamp = text.length > charLimit;
  // Trim at last sentence boundary within charLimit so we never cut mid-sentence
  let clamped = text;
  if (needsClamp && !open) {
    const slice = text.slice(0, charLimit);
    const lastStop = Math.max(slice.lastIndexOf('. '), slice.lastIndexOf('! '), slice.lastIndexOf('? '));
    clamped = lastStop > 60 ? text.slice(0, lastStop + 1) : slice + '…';
  }
  return (
    <div>
      <div style={{fontFamily:T.font,fontSize:10,fontWeight:700,color:T.textMuted,textTransform:'uppercase',letterSpacing:.8,marginBottom:6}}>{label}</div>
      <p style={{fontFamily:T.font,fontSize:13,color:T.textSec,lineHeight:1.6,margin:0}}>
        {open || !needsClamp ? text : clamped}
        {needsClamp && (
          <button onClick={()=>setOpen(p=>!p)} style={{background:'none',border:'none',cursor:'pointer',color:T.teal,fontFamily:T.font,fontSize:12,fontWeight:600,padding:'0 0 0 4px'}}>
            {open?'See less':'See more'}
          </button>
        )}
      </p>
    </div>
  );
};

// ── CASE STUDIES SECTION (inside modal) ────────────────────────────────────
const CaseStudiesSection = ({sol, showToast}) => {
  const studies = sol.caseStudies||[];
  const [activeIdx, setActiveIdx] = useState(0);
  const [linking, setLinking] = useState(false);
  const active = studies[activeIdx];

  return (
    <div style={{borderTop:`1px solid ${T.borderLight}`,paddingTop:16,marginTop:8}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:12}}>
        <div style={{fontFamily:T.font,fontSize:13,fontWeight:600,color:T.text}}>
          Project Case Studies <span style={{color:T.textMuted,fontWeight:400}}>({studies.length})</span>
        </div>
        <button onClick={()=>setLinking(p=>!p)} style={{background:'none',border:`1px solid ${T.teal}`,borderRadius:4,padding:'5px 10px',fontFamily:T.font,fontSize:11,fontWeight:600,color:T.teal,cursor:'pointer'}}>
          + Link to Project Case Study
        </button>
      </div>

      {linking && (
        <div style={{background:T.bg,border:`1px dashed ${T.border}`,borderRadius:6,padding:12,marginBottom:12,display:'flex',gap:8,alignItems:'center'}}>
          <select defaultValue="" style={{flex:1,height:32,padding:'5px 8px',fontFamily:T.font,fontSize:12,border:`1px solid ${T.border}`,borderRadius:4,background:'white'}}>
            <option value="" disabled>Select a project to link…</option>
            {['Byford Rail Extension','Eastern Freeway Burke to Tram Alliance','Fremantle Bridges Alliance',"Queensland Rail's Station Accessibility Upgrade Program",'Morley-Ellenbrook Line','South Eastern Program Alliance','Suburban Rail Loop','Bridge Inn Road','Melbourne Airport Rail - Early Works','Other project…'].map(p=><option key={p}>{p}</option>)}
          </select>
          <Btn size="sm" variant="teal" onClick={()=>{setLinking(false);showToast('Case study draft created. Add details to publish.','success');}}>Create Draft</Btn>
          <Btn size="sm" variant="ghost" onClick={()=>setLinking(false)}>Cancel</Btn>
        </div>
      )}

      {studies.length === 0 ? (
        <div style={{padding:'18px 16px',background:T.bg,borderRadius:6,fontFamily:T.font,fontSize:12,color:T.textMuted,textAlign:'center'}}>
          No project case studies linked yet. Link this solution to a project implementation to capture context, customisations and lessons.
        </div>
      ) : (
        <>
          {/* Project tabs */}
          <div style={{display:'flex',gap:4,flexWrap:'wrap',marginBottom:10,borderBottom:`1px solid ${T.borderLight}`}}>
            {studies.map((cs,i)=>(
              <button key={i} onClick={()=>setActiveIdx(i)} style={{
                background:'none',border:'none',borderBottom:`2px solid ${i===activeIdx?T.teal:'transparent'}`,
                padding:'7px 12px',fontFamily:T.font,fontSize:12,fontWeight:i===activeIdx?700:500,
                color:i===activeIdx?T.teal:T.textSec,cursor:'pointer',
              }}>{cs.project.split(' — ').slice(-1)[0] || cs.project}</button>
            ))}
          </div>

          {/* Active case study */}
          {active && (
            <div>
              <div style={{display:'flex',gap:8,alignItems:'baseline',flexWrap:'wrap',marginBottom:10}}>
                <div style={{fontFamily:T.font,fontSize:13,fontWeight:700,color:T.text}}>{active.project}</div>
                <div style={{fontFamily:T.font,fontSize:11,color:T.textMuted}}>· Lead: {active.lead} · {active.date}</div>
              </div>
              {[
                {k:'Project Context',  v:active.context},
                {k:'Customisations',   v:active.customizations},
                {k:'Constraints',      v:active.constraints},
                {k:'Lessons Learned',  v:active.lessons},
              ].map(row=>(
                <div key={row.k} style={{marginBottom:10}}>
                  <div style={{fontFamily:T.font,fontSize:10,fontWeight:700,color:T.textMuted,textTransform:'uppercase',letterSpacing:.7,marginBottom:3}}>{row.k}</div>
                  <p style={{fontFamily:T.font,fontSize:12.5,color:T.textSec,lineHeight:1.55,margin:0}}>{row.v}</p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

// ── SOLUTION MODAL ─────────────────────────────────────────────────────────
const SolutionModal = ({sol,onClose,showToast}) => {
  const [comment,setComment] = useState('');
  const [comments,setComments] = useState(sol.comments||[]);
  if(!sol) return null;
  const fsrLabel = FSR_NAMES[sol.fsrCat]||sol.fsrCat;

  return (
    <div style={{position:'fixed',inset:0,zIndex:2000,display:'flex',alignItems:'flex-start',justifyContent:'center',paddingTop:40}} onClick={onClose}>
      <div style={{position:'absolute',inset:0,background:'rgba(0,0,0,.55)'}} />
      <div onClick={e=>e.stopPropagation()} style={{
        position:'relative',background:T.white,borderRadius:10,
        width:'100%',maxWidth:760,maxHeight:'85vh',
        display:'flex',flexDirection:'column',boxShadow:T.s3,margin:'0 16px',
      }}>
        {/* Modal Header */}
        <div style={{padding:'20px 24px',borderBottom:`1px solid ${T.borderLight}`,display:'flex',gap:12,alignItems:'flex-start',flexShrink:0}}>
          <div style={{flex:1}}>
            <div style={{fontFamily:T.font,fontSize:10,color:T.textMuted,marginBottom:4}}>{sol.id} · {fsrLabel}</div>
            <h2 style={{fontFamily:T.font,fontSize:18,fontWeight:700,color:T.text,margin:'0 0 8px',lineHeight:1.3}}>{sol.title}</h2>
            <div style={{display:'flex',gap:8,flexWrap:'wrap',alignItems:'center'}}>
              <StatusBadge status={sol.status} />
              <SectorTag sector={sol.sector} />
              {sol.tags.map(t=><StatusBadge key={t} status={t} />)}
              {sol.rating>0&&<Stars rating={sol.rating} count={sol.ratingCount} />}
            </div>
          </div>
          <button onClick={onClose} style={{background:'none',border:'none',cursor:'pointer',fontSize:22,color:T.textMuted,lineHeight:1,padding:'2px 6px',borderRadius:4,flexShrink:0}}
          onMouseEnter={e=>e.currentTarget.style.color=T.red}
          onMouseLeave={e=>e.currentTarget.style.color=T.textMuted}
          >×</button>
        </div>

        {/* Modal Body */}
        <div style={{flex:1,overflowY:'auto',padding:'20px 24px'}}>
          {/* Description */}
          <div style={{marginBottom:18,padding:'12px 14px',background:T.bg,borderRadius:6,borderLeft:`3px solid ${T.teal}`}}>
            <div style={{fontFamily:T.font,fontSize:10,fontWeight:700,color:T.textMuted,textTransform:'uppercase',letterSpacing:.8,marginBottom:6}}>Description</div>
            <p style={{fontFamily:T.font,fontSize:13,color:T.textSec,lineHeight:1.55,margin:0}}>{sol.summary}</p>
          </div>

          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24,marginBottom:20}}>
            <ExpandableText label="Problem" text={sol.problem} charLimit={180} />
            <ExpandableText label="Proposed Solution" text={sol.solution} charLimit={180} />
          </div>

          {/* Image placeholder */}
          <div style={{background:T.bg,borderRadius:6,height:140,display:'flex',alignItems:'center',justifyContent:'center',marginBottom:20,border:`1px dashed ${T.border}`}}>
            <div style={{textAlign:'center',color:T.textMuted,fontFamily:'monospace',fontSize:11}}>
              <div style={{fontSize:24,marginBottom:4}}>📷</div>
              site photography / supporting documents
            </div>
          </div>

          {/* Meta Grid */}
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginBottom:8}}>
            {[
              {k:'Sector',v:<SectorTag sector={sol.sector} />},
              {k:'Phase',v:sol.phase},
              {k:'Submitted by',v:sol.submitter},
              {k:'Date',v:sol.date},
              {k:'FSR Category',v:fsrLabel},
              {k:'Evidence',v:sol.evidence||'Not yet documented'},
            ].map(r=>(
              <div key={r.k} style={{padding:'8px 12px',background:T.bg,borderRadius:4}}>
                <div style={{fontFamily:T.font,fontSize:10,fontWeight:600,color:T.textMuted,textTransform:'uppercase',letterSpacing:.5,marginBottom:3}}>{r.k}</div>
                <div style={{fontFamily:T.font,fontSize:12,color:T.text}}>{r.v}</div>
              </div>
            ))}
          </div>

          {/* Case Studies */}
          <CaseStudiesSection sol={sol} showToast={showToast} />

          {/* Comments */}
          <div style={{borderTop:`1px solid ${T.borderLight}`,paddingTop:16,marginTop:16}}>
            <div style={{fontFamily:T.font,fontSize:13,fontWeight:600,color:T.text,marginBottom:12}}>Comments ({comments.length})</div>
            {comments.map((c,i)=>(
              <div key={i} style={{display:'flex',gap:10,marginBottom:14}}>
                <div style={{width:32,height:32,borderRadius:'50%',background:T.teal,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,fontSize:10,fontWeight:700,color:'white',fontFamily:T.font}}>{c.user.split(' ').map(n=>n[0]).join('')}</div>
                <div style={{flex:1}}>
                  <div style={{display:'flex',gap:8,alignItems:'baseline',marginBottom:3}}>
                    <span style={{fontFamily:T.font,fontSize:12,fontWeight:700,color:T.text}}>{c.user}</span>
                    <span style={{fontFamily:T.font,fontSize:10,color:T.textMuted}}>{c.role}</span>
                    <span style={{fontFamily:T.font,fontSize:10,color:T.textMuted,marginLeft:'auto'}}>{c.date}</span>
                  </div>
                  <div style={{fontFamily:T.font,fontSize:13,color:T.textSec,lineHeight:1.5,background:T.bg,borderRadius:6,padding:'8px 12px'}}>{c.text}</div>
                </div>
              </div>
            ))}
            <div style={{display:'flex',gap:8,marginTop:4}}>
              <input value={comment} onChange={e=>setComment(e.target.value)} placeholder="Add a comment…"
                style={{flex:1,height:36,padding:'7px 12px',fontFamily:T.font,fontSize:13,border:`1px solid ${T.border}`,borderRadius:4,outline:'none'}}
                onFocus={e=>(e.target.style.border=`1px solid ${T.teal}`)}
                onBlur={e=>(e.target.style.border=`1px solid ${T.border}`)}
                onKeyDown={e=>{if(e.key==='Enter'&&comment.trim()){setComments(p=>[...p,{user:'Jake Anderson',role:'ESL',text:comment,date:'29 Apr 2026'}]);setComment('');showToast('Comment posted.','info');}}}
              />
              <Btn size="sm" variant="teal" onClick={()=>{if(comment.trim()){setComments(p=>[...p,{user:'Jake Anderson',role:'ESL',text:comment,date:'29 Apr 2026'}]);setComment('');showToast('Comment posted.','info');}}}>Post</Btn>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div style={{padding:'14px 24px',borderTop:`1px solid ${T.borderLight}`,display:'flex',gap:10,justifyContent:'flex-end',flexShrink:0,background:T.bg}}>
          <Btn variant="secondary" size="sm" onClick={()=>showToast('Added to workspace.','success')}>Save to Workspace</Btn>
          <Btn variant="ghost" size="sm" onClick={()=>showToast('Generating PDF export…','info')}>Export PDF</Btn>
          <Btn variant="ghost" size="sm" onClick={()=>showToast('Opening support request…','info')}>Contact Support</Btn>
        </div>
      </div>
    </div>
  );
};

const SECTORS = ['Rail','Roads','Defence','Water','Energy','Delivery Partner'];
const STATUSES = ['Approved','Under Review','Submitted'];
const PHASES = ['Planning','Design','Procurement & Supply','Construction','Completion'];

const SearchResults = ({ nav, showToast }) => {
  const [q, setQ] = useState('');
  const [sectors, setSectors] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [phases, setPhases] = useState([]);
  const [project, setProject] = useState(''); // case-study project filter
  const [sortBy, setSortBy] = useState('Relevance');
  const [view, setView] = useState('grid');
  const [selected, setSelected] = useState(null);

  const toggle = (arr, setArr, val) => setArr(a => a.includes(val) ? a.filter(x=>x!==val) : [...a, val]);

  const filtered = useMemo(() => {
    let r = SOLUTIONS;
    if(q) r = r.filter(s => s.title.toLowerCase().includes(q.toLowerCase()) || s.summary.toLowerCase().includes(q.toLowerCase()));
    if(sectors.length) r = r.filter(s => sectors.includes(s.sector));
    if(statuses.length) r = r.filter(s => statuses.includes(s.status));
    if(phases.length) r = r.filter(s => phases.includes(s.phase));
    if(project) r = r.filter(s => (s.caseStudies||[]).some(c => c.project === project));
    if(sortBy==='Effectiveness') r = [...r].sort((a,b) => b.rating - a.rating);
    if(sortBy==='Newest') r = [...r].sort((a,b) => b.id.localeCompare(a.id));
    if(sortBy==='Oldest') r = [...r].sort((a,b) => a.id.localeCompare(b.id));
    return r;
  }, [q, sectors, statuses, phases, project, sortBy]);

  const activeChips = [
    ...sectors.map(s=>({label:s,remove:()=>setSectors(a=>a.filter(x=>x!==s))})),
    ...statuses.map(s=>({label:s,remove:()=>setStatuses(a=>a.filter(x=>x!==s))})),
    ...phases.map(s=>({label:s,remove:()=>setPhases(a=>a.filter(x=>x!==s))})),
    ...(project ? [{label:`Project: ${project}`, remove:()=>setProject('')}] : []),
  ];
  const clearAll = () => { setSectors([]); setStatuses([]); setPhases([]); setProject(''); setQ(''); };

  const FilterGroup = ({title,options,selected,onToggle}) => {
    const [open,setOpen] = useState(true);
    return (
      <div style={{borderBottom:`1px solid ${T.borderLight}`,paddingBottom:12,marginBottom:12}}>
        <button onClick={()=>setOpen(p=>!p)} style={{width:'100%',display:'flex',justifyContent:'space-between',background:'none',border:'none',cursor:'pointer',padding:'4px 0',fontFamily:T.font,fontSize:12,fontWeight:700,color:T.text,textTransform:'uppercase',letterSpacing:.6}}>
          {title} <span style={{color:T.textMuted,fontWeight:400,fontSize:14}}>{open?'−':'+'}</span>
        </button>
        {open && options.map(opt=>(
          <label key={opt} style={{display:'flex',alignItems:'center',gap:8,padding:'5px 0',cursor:'pointer'}}>
            <input type="checkbox" checked={selected.includes(opt)} onChange={()=>onToggle(opt)}
              style={{width:15,height:15,accentColor:T.teal,cursor:'pointer'}} />
            <span style={{fontFamily:T.font,fontSize:13,color:T.text}}>{opt}</span>
            <span style={{marginLeft:'auto',fontFamily:T.font,fontSize:10,color:T.textMuted}}>
              {SOLUTIONS.filter(s=>s.sector===opt||s.status===opt||s.phase===opt).length}
            </span>
          </label>
        ))}
      </div>
    );
  };

  // ── Project Case Study filter (dropdown) ────────────────────────────────
  const ProjectFilter = () => {
    const [open,setOpen] = useState(true);
    return (
      <div style={{borderBottom:`1px solid ${T.borderLight}`,paddingBottom:12,marginBottom:12}}>
        <button onClick={()=>setOpen(p=>!p)} style={{width:'100%',display:'flex',justifyContent:'space-between',background:'none',border:'none',cursor:'pointer',padding:'4px 0',fontFamily:T.font,fontSize:12,fontWeight:700,color:T.text,textTransform:'uppercase',letterSpacing:.6,marginBottom:8}}>
          Project Case Study <span style={{color:T.textMuted,fontWeight:400,fontSize:14}}>{open?'−':'+'}</span>
        </button>
        {open && (
          <div style={{position:'relative'}}>
            <select value={project} onChange={e=>setProject(e.target.value)} style={{
              width:'100%',height:34,padding:'6px 26px 6px 10px',fontFamily:T.font,fontSize:12.5,
              border:`1px solid ${project?T.teal:T.border}`,borderRadius:4,background:'white',
              appearance:'none',cursor:'pointer',outline:'none',color:project?T.text:T.textMuted,
            }}>
              <option value="">All projects</option>
              {ALL_PROJECTS.map(p=>{
                const count = SOLUTIONS.filter(s=>(s.caseStudies||[]).some(c=>c.project===p)).length;
                return <option key={p} value={p}>{p} ({count})</option>;
              })}
            </select>
            <span style={{position:'absolute',right:8,top:'50%',transform:'translateY(-50%)',pointerEvents:'none',fontSize:10,color:T.textMuted}}>▾</span>
          </div>
        )}
        {project && (
          <div style={{fontFamily:T.font,fontSize:10.5,color:T.textMuted,marginTop:6,fontStyle:'italic'}}>
            Showing solutions implemented on this project.
          </div>
        )}
      </div>
    );
  };

  const SolCard = ({sol}) => (
    <div onClick={()=>setSelected(sol)} style={{
      background:T.white,borderRadius:8,border:`1px solid ${T.borderLight}`,
      overflow:'hidden',cursor:'pointer',transition:'all 180ms',boxShadow:T.s1,
      display:'flex',flexDirection:'column',
    }}
    onMouseEnter={e=>{e.currentTarget.style.boxShadow=T.s2;e.currentTarget.style.transform='translateY(-2px)'}}
    onMouseLeave={e=>{e.currentTarget.style.boxShadow=T.s1;e.currentTarget.style.transform='translateY(0)'}}
    >
      <div style={{height:110,background:`linear-gradient(135deg, ${SECTOR_COLORS[sol.sector]||'#666'}22, ${SECTOR_COLORS[sol.sector]||'#666'}44)`,display:'flex',alignItems:'center',justifyContent:'center',borderBottom:`1px solid ${T.borderLight}`,position:'relative'}}>
        <span style={{fontSize:32,opacity:.5}}>🔧</span>
        <div style={{position:'absolute',top:8,left:8,display:'flex',gap:4,flexWrap:'wrap'}}>
          {sol.tags.map(t=><StatusBadge key={t} status={t} />)}
        </div>
        {(sol.caseStudies||[]).length>0 && (
          <div style={{position:'absolute',top:8,right:8,background:'rgba(255,255,255,.92)',color:T.teal,fontSize:10,fontWeight:700,fontFamily:T.font,padding:'3px 8px',borderRadius:10}}>
            {sol.caseStudies.length} case stud{sol.caseStudies.length===1?'y':'ies'}
          </div>
        )}
      </div>
      <div style={{padding:'14px 16px',flex:1,display:'flex',flexDirection:'column',gap:8}}>
        <div style={{fontFamily:T.font,fontSize:14,fontWeight:700,color:T.teal,lineHeight:1.3}}>{sol.title}</div>
        <div style={{fontFamily:T.font,fontSize:11.5,color:T.textMuted,fontStyle:'italic',lineHeight:1.45,flex:1}}>{sol.summary}</div>
        <div style={{display:'flex',gap:6,flexWrap:'wrap',alignItems:'center'}}>
          <SectorTag sector={sol.sector} />
          <StatusBadge status={sol.status} />
        </div>
        {sol.rating>0&&<Stars rating={sol.rating} count={sol.ratingCount} size={13} />}
        <div style={{fontFamily:T.font,fontSize:10,color:T.textMuted,marginTop:2}}>{sol.submitter} · {sol.date} · {FSR_NAMES[sol.fsrCat]||sol.fsrCat}</div>
      </div>
      <div style={{padding:'10px 16px',borderTop:`1px solid ${T.borderLight}`,background:T.bg}}>
        <button onClick={e=>{e.stopPropagation();setSelected(sol)}} style={{width:'100%',background:'none',border:`1px solid ${T.teal}`,borderRadius:4,padding:'7px',fontFamily:T.font,fontSize:12,fontWeight:600,color:T.teal,cursor:'pointer',transition:'all 120ms'}}
        onMouseEnter={e=>{e.currentTarget.style.background=T.teal;e.currentTarget.style.color='white'}}
        onMouseLeave={e=>{e.currentTarget.style.background='none';e.currentTarget.style.color=T.teal}}
        >View Details →</button>
      </div>
    </div>
  );

  return (
    <div style={{background:T.bg,minHeight:'calc(100vh - 64px)',display:'flex'}}>
      {/* Sidebar */}
      <div style={{width:264,flexShrink:0,background:T.white,borderRight:`1px solid ${T.borderLight}`,padding:'20px 20px',position:'sticky',top:64,height:'calc(100vh - 64px)',overflowY:'auto'}}>
        <div style={{fontFamily:T.font,fontSize:14,fontWeight:700,color:T.text,marginBottom:14}}>Refine Results</div>
        <div style={{position:'relative',marginBottom:16}}>
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search solutions…"
            style={{width:'100%',height:36,padding:'7px 32px 7px 10px',fontFamily:T.font,fontSize:13,border:`1px solid ${T.border}`,borderRadius:4,boxSizing:'border-box',outline:'none'}}
            onFocus={e=>e.target.style.border=`1px solid ${T.teal}`}
            onBlur={e=>e.target.style.border=`1px solid ${T.border}`}
          />
          {q&&<button onClick={()=>setQ('')} style={{position:'absolute',right:8,top:'50%',transform:'translateY(-50%)',background:'none',border:'none',cursor:'pointer',color:T.textMuted,fontSize:16}}>×</button>}
        </div>
        <ProjectFilter />
        <FilterGroup title="Sector" options={SECTORS} selected={sectors} onToggle={v=>toggle(sectors,setSectors,v)} />
        <FilterGroup title="Status" options={STATUSES} selected={statuses} onToggle={v=>toggle(statuses,setStatuses,v)} />
        <FilterGroup title="Phase" options={PHASES} selected={phases} onToggle={v=>toggle(phases,setPhases,v)} />
        {(sectors.length||statuses.length||phases.length||q||project)
          ? <button onClick={clearAll} style={{width:'100%',padding:'9px',background:'none',border:`1px solid ${T.border}`,borderRadius:4,fontFamily:T.font,fontSize:12,color:T.textMuted,cursor:'pointer',marginTop:4}}
          onMouseEnter={e=>{e.currentTarget.style.borderColor=T.red;e.currentTarget.style.color=T.red}}
          onMouseLeave={e=>{e.currentTarget.style.borderColor=T.border;e.currentTarget.style.color=T.textMuted}}>Clear All Filters</button>
          : null
        }
      </div>

      {/* Results */}
      <div style={{flex:1,padding:'24px 28px',minWidth:0}}>
        <div style={{fontFamily:T.font,fontSize:11,color:T.textMuted,marginBottom:14}}>Home › Search Library</div>

        {/* Active Chips */}
        {activeChips.length>0&&(
          <div style={{display:'flex',gap:6,flexWrap:'wrap',marginBottom:14}}>
            {activeChips.map(chip=>(
              <span key={chip.label} style={{background:'#e6f7f8',color:T.teal,border:`1px solid #b2dfdb`,padding:'4px 10px',borderRadius:12,fontSize:11,fontFamily:T.font,fontWeight:600,display:'flex',alignItems:'center',gap:4}}>
                {chip.label}
                <button onClick={chip.remove} style={{background:'none',border:'none',cursor:'pointer',color:T.teal,fontSize:14,lineHeight:1,padding:0}}>×</button>
              </span>
            ))}
          </div>
        )}

        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:16}}>
          <div style={{fontFamily:T.font,fontSize:14,color:T.textSec}}>
            <strong style={{color:T.text}}>{filtered.length}</strong> solutions found
          </div>
          <div style={{display:'flex',gap:10,alignItems:'center'}}>
            <div style={{position:'relative'}}>
              <select value={sortBy} onChange={e=>setSortBy(e.target.value)} style={{height:34,padding:'6px 28px 6px 10px',fontFamily:T.font,fontSize:12,border:`1px solid ${T.border}`,borderRadius:4,background:'white',appearance:'none',cursor:'pointer',outline:'none'}}>
                {['Relevance','Newest','Oldest','Effectiveness'].map(s=><option key={s}>{s}</option>)}
              </select>
              <span style={{position:'absolute',right:8,top:'50%',transform:'translateY(-50%)',pointerEvents:'none',fontSize:10,color:T.textMuted}}>▾</span>
            </div>
            {['grid','list'].map(v=>(
              <button key={v} onClick={()=>setView(v)} style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',background:view===v?T.teal:'white',border:`1px solid ${view===v?T.teal:T.border}`,borderRadius:4,cursor:'pointer',fontSize:14,color:view===v?'white':T.textMuted}}>
                {v==='grid'?'⊞':'☰'}
              </button>
            ))}
          </div>
        </div>

        {filtered.length===0 ? (
          <div style={{textAlign:'center',padding:'64px 24px',color:T.textMuted,fontFamily:T.font}}>
            <div style={{fontSize:40,marginBottom:12}}>🔍</div>
            <div style={{fontSize:16,fontWeight:600,marginBottom:6,color:T.text}}>No solutions match your filters</div>
            <div style={{fontSize:13,marginBottom:20}}>Try removing some filters or broadening your search</div>
            <Btn variant="secondary" onClick={clearAll}>Clear All Filters</Btn>
          </div>
        ) : view==='grid' ? (
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}}>
            {filtered.map(s=><SolCard key={s.id} sol={s} />)}
          </div>
        ) : (
          <div style={{display:'flex',flexDirection:'column',gap:10}}>
            {filtered.map(s=>(
              <div key={s.id} onClick={()=>setSelected(s)} style={{background:T.white,borderRadius:8,border:`1px solid ${T.borderLight}`,padding:'16px 20px',cursor:'pointer',display:'flex',gap:16,alignItems:'center',boxShadow:T.s1,transition:'all 180ms'}}
              onMouseEnter={e=>e.currentTarget.style.boxShadow=T.s2}
              onMouseLeave={e=>e.currentTarget.style.boxShadow=T.s1}
              >
                <div style={{flex:1,minWidth:0}}>
                  <div style={{display:'flex',gap:8,alignItems:'center',flexWrap:'wrap',marginBottom:4}}>
                    <span style={{fontFamily:T.font,fontSize:14,fontWeight:700,color:T.teal}}>{s.title}</span>
                    {s.tags.map(t=><StatusBadge key={t} status={t} />)}
                    {(s.caseStudies||[]).length>0 && (
                      <span style={{fontFamily:T.font,fontSize:10,fontWeight:600,color:T.teal,background:'#e6f7f8',padding:'2px 8px',borderRadius:10}}>
                        {s.caseStudies.length} case stud{s.caseStudies.length===1?'y':'ies'}
                      </span>
                    )}
                  </div>
                  <div style={{fontFamily:T.font,fontSize:12,color:T.textMuted,fontStyle:'italic',marginBottom:6}}>{s.summary}</div>
                  <div style={{display:'flex',gap:8,alignItems:'center',flexWrap:'wrap'}}>
                    <SectorTag sector={s.sector} />
                    <StatusBadge status={s.status} />
                    {s.rating>0&&<Stars rating={s.rating} count={s.ratingCount} size={12} />}
                    <span style={{fontFamily:T.font,fontSize:10,color:T.textMuted}}>{s.submitter} · {s.date} · {FSR_NAMES[s.fsrCat]||s.fsrCat}</span>
                  </div>
                </div>
                <Btn size="sm" variant="secondary" onClick={e=>{e.stopPropagation();setSelected(s)}}>View →</Btn>
              </div>
            ))}
          </div>
        )}
      </div>
      {selected&&<SolutionModal sol={selected} onClose={()=>setSelected(null)} showToast={showToast} />}
    </div>
  );
};

// need SECTOR_COLORS from components
Object.assign(window, { SearchResults });
