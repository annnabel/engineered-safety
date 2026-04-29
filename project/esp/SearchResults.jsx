
'use strict';
const { useState, useMemo } = React;

const SOLUTIONS = [
  {id:'ES-246',title:'Rebar Cage Safety Netting',summary:'Tensioned polyethylene netting beneath rebar cages eliminates dropped-object risk during vertical pour operations.',sector:'Rail',status:'Approved',phase:'Construction',rating:4.7,ratingCount:31,submitter:'M. Chen',date:'28 Apr 2026',fsrCat:'FSR-002',tags:['LOR Preferred'],description:'Workers on the FBA project identified a dropped-object hazard during rebar cage assembly over live traffic corridors. This solution involves installing tensioned HDPE netting systems below all vertical rebar cages during assembly. The netting is rated to 250kg and can be deployed in under 15 minutes by two workers. Zero dropped-object incidents recorded since implementation.',evidence:'Deployed on Pier 3, Pier 4, and Pier 5 deck works. Photo documentation available.'},
  {id:'ES-244',title:'PPE QR-Code Tracking System',summary:'QR-coded PPE items linked to worker profiles enable real-time compliance monitoring via kiosk scan.',sector:'Roads',status:'Approved',phase:'Construction',rating:4.5,ratingCount:18,submitter:'J. Walsh',date:'25 Apr 2026',fsrCat:'FSR-007',tags:['Case Study'],description:'Non-compliance with PPE requirements at deck-level access points was identified as a recurring issue. Each helmet, harness and vest is assigned a unique QR code linked to the worker\'s profile. Kiosk scanners at site access gates verify compliance before workers can enter elevated work zones. Compliance rates increased from 72% to 98% in 6 weeks.',evidence:'Case study report available. Deployed at all four main pylon access points.'},
  {id:'ES-241',title:'Modular Deck Edge Barrier',summary:'Quick-clip modular barriers deploy in under 5 minutes and exceed AS 1657 requirements for work-at-height edge protection.',sector:'Defence',status:'Approved',phase:'Construction',rating:4.8,ratingCount:43,submitter:'S. Thompson',date:'20 Apr 2026',fsrCat:'FSR-001',tags:['LOR Preferred','Case Study'],description:'Traditional timber edge-barriers required 45 minutes to install and were frequently damaged during concrete pours. The modular system uses interlocking aluminium sections with quick-clip base anchors. Each section weighs 8kg and can be moved by one worker. System complies with AS 1657 and has been tested to 900N lateral load.',evidence:'Full case study available. Cost saving: $2,400/week vs. previous system.'},
  {id:'ES-238',title:'Concrete Pour Proximity Sensor',summary:'Ultrasonic sensors create an exclusion zone around concrete pump booms, halting movement when workers enter the 3m radius.',sector:'Water',status:'Approved',phase:'Construction',rating:4.3,ratingCount:12,submitter:'A. Patel',date:'15 Apr 2026',fsrCat:'FSR-007',tags:[],description:'Concrete pump boom strikes were identified as a high-potential incident risk. Ultrasonic proximity sensors mounted at 1m intervals along the boom detect personnel within 3m and trigger an automatic hydraulic stop. Workers must press a reset button after the boom is repositioned. Reduces struck-by risk from concrete pump operations to near-zero.',evidence:'Installed on 2 of 3 concrete pumps. Incident near-miss reduction: 100% in 3 months.'},
  {id:'ES-235',title:'Night Works Lighting Matrix',summary:'LED matrix system provides 500-lux task illumination across the full deck span, eliminating shadow zones during night pours.',sector:'Energy',status:'Approved',phase:'Construction',rating:4.1,ratingCount:9,submitter:'R. Davis',date:'10 Apr 2026',fsrCat:'FSR-007',tags:[],description:'Night concrete pours required temporary lighting that left shadow zones between fixtures, creating trip and fall hazards. The LED matrix uses programmable positioning to eliminate all shadow zones across a 40m deck span. Lighting levels maintained at 500 lux per AS/NZS 1680.',evidence:''},
  {id:'ES-233',title:'Pre-Cast Deck Safe-Lift Protocol',summary:'Colour-coded rigging inspection tags and a two-person sign-off system prevent pre-cast deck panel lift errors.',sector:'Delivery Partner',status:'Approved',phase:'Construction',rating:4.6,ratingCount:22,submitter:'P. Kumar',date:'7 Apr 2026',fsrCat:'FSR-006',tags:['LOR Preferred'],description:'Pre-cast deck panel lifts present collapse and dropped-load risks. The protocol requires: (1) colour-coded tag inspection — green tags on all rigging; (2) independent two-person sign-off before each lift; (3) exclusion zone delineation by dogman. Zero lift incidents since implementation across 47 deck panel installations.',evidence:''},
  {id:'ES-230',title:'Dust Suppression Auto-Mist',summary:'Automated misting ring on concrete saws activates when ambient dust exceeds 2mg/m³, maintaining safe silica exposure levels.',sector:'Rail',status:'Under Review',phase:'Construction',rating:0,ratingCount:0,submitter:'T. Nguyen',date:'2 Apr 2026',fsrCat:'FSR-007',tags:[],description:'Concrete cutting operations generate respirable crystalline silica dust exceeding WES limits. The misting ring attaches to any concrete saw and is triggered by an integrated dust sensor. Water consumption is 4L/hr. Preliminary testing shows 94% dust reduction.',evidence:''},
  {id:'ES-228',title:'Formwork Failure Early Warning',summary:'Vibration sensors on formwork shoring detect deflection events 30+ seconds before threshold breach, allowing safe evacuation.',sector:'Roads',status:'Under Review',phase:'Construction',rating:0,ratingCount:0,submitter:'L. Park',date:'28 Mar 2026',fsrCat:'FSR-006',tags:[],description:'Formwork and shoring systems present a collapse risk, particularly during concrete curing. IoT vibration and displacement sensors attached to shoring legs continuously monitor for deflection anomalies. Alert triggers site-wide audible alarm 30+ seconds before predicted failure, providing evacuation time.',evidence:''},
  {id:'ES-225',title:'Bridge Pier Working Platform',summary:'Cantilevered aluminium platform system for pier cap works eliminates the need for scaffolding and reduces assembly time by 60%.',sector:'Defence',status:'Approved',phase:'Construction',rating:4.4,ratingCount:15,submitter:'B. Williams',date:'22 Mar 2026',fsrCat:'FSR-001',tags:[],description:'Access to pier cap reinforcement zones required complex scaffold erection over water, taking 3 days per pier. The cantilevered aluminium platform brackets attach to cast-in anchor points and support a full 3m × 4m work platform. Certified to 450kg UDL. System is demountable and reusable across all piers.',evidence:'Deployed at Piers 1–4. Scaffold cost saving: $18,000 per pier.'},
];

const SolutionModal = ({sol,onClose,showToast}) => {
  const [comment,setComment] = useState('');
  const [comments,setComments] = useState([
    {user:'K. McDonald',role:'ESL',text:'Excellent solution — recommend for all overhead works going forward.',date:'22 Apr 2026'},
    {user:'S. Thompson',role:'Submitter',text:'Thanks! Happy to present at the next safety standup if needed.',date:'23 Apr 2026'},
  ]);
  if(!sol) return null;
  return (
    <div style={{position:'fixed',inset:0,zIndex:2000,display:'flex',alignItems:'flex-start',justifyContent:'center',paddingTop:40}} onClick={onClose}>
      <div style={{position:'absolute',inset:0,background:'rgba(0,0,0,.55)'}} />
      <div onClick={e=>e.stopPropagation()} style={{
        position:'relative',background:T.white,borderRadius:10,
        width:'100%',maxWidth:720,maxHeight:'85vh',
        display:'flex',flexDirection:'column',boxShadow:T.s3,margin:'0 16px',
      }}>
        {/* Modal Header */}
        <div style={{padding:'20px 24px',borderBottom:`1px solid ${T.borderLight}`,display:'flex',gap:12,alignItems:'flex-start',flexShrink:0}}>
          <div style={{flex:1}}>
            <div style={{fontFamily:T.font,fontSize:10,color:T.textMuted,marginBottom:4}}>{sol.id} · {sol.fsrCat}</div>
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
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24,marginBottom:20}}>
            <div>
              <div style={{fontFamily:T.font,fontSize:10,fontWeight:700,color:T.textMuted,textTransform:'uppercase',letterSpacing:.8,marginBottom:6}}>Problem</div>
              <p style={{fontFamily:T.font,fontSize:13,color:T.textSec,lineHeight:1.6,margin:0}}>{sol.description.substring(0,180)}…</p>
            </div>
            <div>
              <div style={{fontFamily:T.font,fontSize:10,fontWeight:700,color:T.textMuted,textTransform:'uppercase',letterSpacing:.8,marginBottom:6}}>Proposed Solution</div>
              <p style={{fontFamily:T.font,fontSize:13,color:T.textSec,lineHeight:1.6,margin:0}}>{sol.description.substring(180,360)}…</p>
            </div>
          </div>

          {/* Image placeholder */}
          <div style={{background:T.bg,borderRadius:6,height:140,display:'flex',alignItems:'center',justifyContent:'center',marginBottom:20,border:`1px dashed ${T.border}`}}>
            <div style={{textAlign:'center',color:T.textMuted,fontFamily:'monospace',fontSize:11}}>
              <div style={{fontSize:24,marginBottom:4}}>📷</div>
              site photography / supporting documents
            </div>
          </div>

          {/* Meta Grid */}
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginBottom:20}}>
            {[
              {k:'Sector',v:<SectorTag sector={sol.sector} />},
              {k:'Phase',v:sol.phase},
              {k:'Submitted by',v:sol.submitter},
              {k:'Date',v:sol.date},
              {k:'FSR Category',v:sol.fsrCat},
              {k:'Evidence',v:sol.evidence||'Not yet documented'},
            ].map(r=>(
              <div key={r.k} style={{padding:'8px 12px',background:T.bg,borderRadius:4}}>
                <div style={{fontFamily:T.font,fontSize:10,fontWeight:600,color:T.textMuted,textTransform:'uppercase',letterSpacing:.5,marginBottom:3}}>{r.k}</div>
                <div style={{fontFamily:T.font,fontSize:12,color:T.text}}>{r.v}</div>
              </div>
            ))}
          </div>

          {/* Comments */}
          <div style={{borderTop:`1px solid ${T.borderLight}`,paddingTop:16}}>
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
    if(sortBy==='Effectiveness') r = [...r].sort((a,b) => b.rating - a.rating);
    if(sortBy==='Newest') r = [...r].sort((a,b) => b.id.localeCompare(a.id));
    if(sortBy==='Oldest') r = [...r].sort((a,b) => a.id.localeCompare(b.id));
    return r;
  }, [q, sectors, statuses, phases, sortBy]);

  const activeChips = [...sectors.map(s=>({label:s,remove:()=>setSectors(a=>a.filter(x=>x!==s))})), ...statuses.map(s=>({label:s,remove:()=>setStatuses(a=>a.filter(x=>x!==s))})), ...phases.map(s=>({label:s,remove:()=>setPhases(a=>a.filter(x=>x!==s))}))];
  const clearAll = () => { setSectors([]); setStatuses([]); setPhases([]); setQ(''); };

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
      </div>
      <div style={{padding:'14px 16px',flex:1,display:'flex',flexDirection:'column',gap:8}}>
        <div style={{fontFamily:T.font,fontSize:14,fontWeight:700,color:T.teal,lineHeight:1.3}}>{sol.title}</div>
        <div style={{fontFamily:T.font,fontSize:11.5,color:T.textMuted,fontStyle:'italic',lineHeight:1.45,flex:1}}>{sol.summary}</div>
        <div style={{display:'flex',gap:6,flexWrap:'wrap',alignItems:'center'}}>
          <SectorTag sector={sol.sector} />
          <StatusBadge status={sol.status} />
        </div>
        {sol.rating>0&&<Stars rating={sol.rating} count={sol.ratingCount} size={13} />}
        <div style={{fontFamily:T.font,fontSize:10,color:T.textMuted,marginTop:2}}>{sol.submitter} · {sol.date}</div>
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
        <FilterGroup title="Sector" options={SECTORS} selected={sectors} onToggle={v=>toggle(sectors,setSectors,v)} />
        <FilterGroup title="Status" options={STATUSES} selected={statuses} onToggle={v=>toggle(statuses,setStatuses,v)} />
        <FilterGroup title="Phase" options={PHASES} selected={phases} onToggle={v=>toggle(phases,setPhases,v)} />
        {(sectors.length||statuses.length||phases.length||q)
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
                  </div>
                  <div style={{fontFamily:T.font,fontSize:12,color:T.textMuted,fontStyle:'italic',marginBottom:6}}>{s.summary}</div>
                  <div style={{display:'flex',gap:8,alignItems:'center',flexWrap:'wrap'}}>
                    <SectorTag sector={s.sector} />
                    <StatusBadge status={s.status} />
                    {s.rating>0&&<Stars rating={s.rating} count={s.ratingCount} size={12} />}
                    <span style={{fontFamily:T.font,fontSize:10,color:T.textMuted}}>{s.submitter} · {s.date}</span>
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
