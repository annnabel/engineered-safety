
'use strict';
const { useState, useEffect, useRef } = React;

// ── ESL REVIEW QUEUE ───────────────────────────────────────────────────────
const QUEUE = [
  {id:'ES-247',title:'Modular Deck Edge Barrier System',submitter:'S. Thompson',role:'Rigger',days:3,status:'Submitted',sector:'Rail',fsrCat:'FSR-001',summary:'Quick-clip aluminium barrier modules eliminate the need for traditional timber edge protection on deck pours.',priority:'Normal'},
  {id:'ES-245',title:'Concrete Pour Proximity Sensors',submitter:'A. Patel',role:'Site Engineer',days:9,status:'Under Review',sector:'Water',fsrCat:'FSR-007',summary:'Ultrasonic sensors create automatic exclusion zones around pump booms during pours.',priority:'Overdue'},
  {id:'ES-243',title:'Dust Suppression Auto-Mist Ring',submitter:'T. Nguyen',role:'Concrete Finisher',days:5,status:'Submitted',sector:'Energy',fsrCat:'FSR-007',summary:'Auto-activating mist ring on concrete saws suppresses respirable silica dust at source.',priority:'Normal'},
  {id:'ES-240',title:'Pier Cap Fall Arrest Anchors',submitter:'B. Williams',role:'Ironworker',days:14,status:'Submitted',sector:'Roads',fsrCat:'FSR-001',summary:'Permanent cast-in fall arrest anchor points on all pier caps eliminate temporary rigging each shift.',priority:'Overdue'},
  {id:'ES-239',title:'Formwork Deflection Sensor Array',submitter:'L. Park',role:'Formwork Carpenter',days:2,status:'Submitted',sector:'Defence',fsrCat:'FSR-006',summary:'IoT displacement sensors on shoring legs provide 30-second early warning before deflection threshold.',priority:'Normal'},
  {id:'ES-237',title:'Nightworks Proximity Lighting',submitter:'R. Davis',role:'Electrician',days:6,status:'Submitted',sector:'Delivery Partner',fsrCat:'FSR-007',summary:'Programmable LED matrix eliminates shadow zones across 40m deck spans during night concrete pours.',priority:'Normal'},
];

// ── FEEDBACK MODAL ──────────────────────────────────────────────────────────
const FeedbackModal = ({ idea, mode, onClose, onSubmit }) => {
  const [feedback, setFeedback] = React.useState('');
  if (!idea) return null;

  const isLeadership = mode === 'leadership';
  const title    = isLeadership ? 'Return with Feedback' : 'Return to Submitter';
  const subtitle = isLeadership
    ? 'Your feedback will be sent to the submitter and the Engineered Safety Lead.'
    : 'Your feedback will be sent back to the submitter so they can revise and resubmit.';
  const recipients = isLeadership
    ? ['Submitter','Engineered Safety Lead']
    : ['Submitter'];

  return (
    <div style={{position:'fixed',inset:0,zIndex:3000,display:'flex',alignItems:'center',justifyContent:'center'}} onClick={onClose}>
      <div style={{position:'absolute',inset:0,background:'rgba(0,0,0,.55)'}} />
      <div onClick={e=>e.stopPropagation()} style={{position:'relative',background:T.white,borderRadius:10,width:'100%',maxWidth:520,boxShadow:T.s3,margin:'0 16px',overflow:'hidden',animation:'slideUp .2s ease'}}>

        {/* Header */}
        <div style={{padding:'18px 24px',borderBottom:`1px solid ${T.borderLight}`,display:'flex',gap:12,alignItems:'flex-start'}}>
          <div style={{flex:1}}>
            <h3 style={{fontFamily:T.font,fontSize:16,fontWeight:700,color:T.text,margin:'0 0 4px'}}>{title}</h3>
            <div style={{fontFamily:T.font,fontSize:11,color:T.textMuted}}>{idea.id} · {idea.title}</div>
          </div>
          <button onClick={onClose} style={{background:'none',border:'none',cursor:'pointer',fontSize:22,color:T.textMuted,padding:'0 4px'}}
            onMouseEnter={e=>e.currentTarget.style.color=T.red}
            onMouseLeave={e=>e.currentTarget.style.color=T.textMuted}>×</button>
        </div>

        {/* Body */}
        <div style={{padding:'20px 24px'}}>
          <div style={{background:'#fff8e1',border:`1px solid #ffe082`,borderRadius:6,padding:'10px 14px',marginBottom:18,fontFamily:T.font,fontSize:12,color:'#6d4c00'}}>
            {subtitle}
          </div>

          {/* Recipients */}
          <div style={{marginBottom:16}}>
            <div style={{fontFamily:T.font,fontSize:11,fontWeight:600,color:T.textMuted,textTransform:'uppercase',letterSpacing:.6,marginBottom:8}}>Will be notified</div>
            <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
              {recipients.map(r => (
                <span key={r} style={{background:T.bg,border:`1px solid ${T.border}`,borderRadius:12,padding:'4px 12px',fontFamily:T.font,fontSize:12,color:T.textSec,fontWeight:500}}>{r}</span>
              ))}
            </div>
          </div>

          <div>
            <label style={{display:'block',fontFamily:T.font,fontSize:12,fontWeight:600,color:T.textSec,marginBottom:6}}>
              Feedback / Reason for return <span style={{color:T.red}}>*</span>
            </label>
            <textarea
              value={feedback}
              onChange={e=>setFeedback(e.target.value)}
              rows={5}
              placeholder="Explain what needs to be revised or clarified before this idea can be approved…"
              style={{width:'100%',padding:'10px 12px',fontFamily:T.font,fontSize:13,color:T.text,border:`1px solid ${T.border}`,borderRadius:4,resize:'vertical',boxSizing:'border-box',outline:'none',lineHeight:1.5}}
              onFocus={e=>{e.target.style.border=`1px solid ${T.teal}`;e.target.style.boxShadow=`0 0 0 3px rgba(0,167,181,.15)`;}}
              onBlur={e=>{e.target.style.boxShadow='none';e.target.style.border=`1px solid ${T.border}`;}}
            />
          </div>
        </div>

        {/* Footer */}
        <div style={{padding:'14px 24px',borderTop:`1px solid ${T.borderLight}`,display:'flex',gap:10,justifyContent:'flex-end',background:T.bg}}>
          <Btn variant="ghost" size="sm" onClick={onClose}>Cancel</Btn>
          <Btn variant="danger" size="sm" disabled={!feedback.trim()} onClick={()=>{if(feedback.trim())onSubmit(feedback);}}>
            Send Feedback & Return
          </Btn>
        </div>
      </div>
    </div>
  );
};

const DETAIL_COMMENTS = [
  {user:'S. Thompson',role:'Submitter',text:'Happy to provide a demonstration on-site. We have a prototype ready for inspection.',date:'26 Apr 2026'},
  {user:'M. Chen',role:'Safety Rep',text:'This aligns with our edge protection deficiency identified in the March safety audit. Recommend fast-tracking.',date:'27 Apr 2026'},
];

const IdeaDetailModal = ({idea, onClose, onApprove, onReturn, onClarify, showToast}) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(DETAIL_COMMENTS);
  const [tab, setTab] = useState('details');
  if (!idea) return null;

  return (
    <div style={{position:'fixed',inset:0,zIndex:2000,display:'flex',alignItems:'flex-start',justifyContent:'center',paddingTop:40}} onClick={onClose}>
      <div style={{position:'absolute',inset:0,background:'rgba(0,0,0,.55)'}} />
      <div onClick={e=>e.stopPropagation()} style={{position:'relative',background:T.white,borderRadius:10,width:'100%',maxWidth:760,maxHeight:'88vh',display:'flex',flexDirection:'column',boxShadow:T.s3,margin:'0 16px'}}>
        <div style={{padding:'18px 24px',borderBottom:`1px solid ${T.borderLight}`,display:'flex',gap:12,alignItems:'flex-start',flexShrink:0}}>
          <div style={{flex:1}}>
            <div style={{fontFamily:T.font,fontSize:10,color:T.textMuted,marginBottom:4}}>{idea.id} · {idea.fsrCat} · Submitted by {idea.submitter} ({idea.role})</div>
            <h2 style={{fontFamily:T.font,fontSize:18,fontWeight:700,color:T.text,margin:'0 0 8px'}}>{idea.title}</h2>
            <div style={{display:'flex',gap:8,alignItems:'center',flexWrap:'wrap'}}>
              <StatusBadge status={idea.status} />
              <SectorTag sector={idea.sector} />
              <DaysPending days={idea.days} />
              <span style={{fontFamily:T.font,fontSize:11,color:T.textMuted}}>pending review</span>
            </div>
          </div>
          <button onClick={onClose} style={{background:'none',border:'none',cursor:'pointer',fontSize:22,color:T.textMuted,padding:'2px 6px'}}
          onMouseEnter={e=>e.currentTarget.style.color=T.red} onMouseLeave={e=>e.currentTarget.style.color=T.textMuted}>×</button>
        </div>

        <div style={{display:'flex',gap:0,borderBottom:`1px solid ${T.borderLight}`,flexShrink:0}}>
          {['details','timeline','comments'].map(t=>(
            <button key={t} onClick={()=>setTab(t)} style={{
              padding:'10px 20px',background:'none',border:'none',borderBottom:`2px solid ${tab===t?T.teal:'transparent'}`,
              cursor:'pointer',fontFamily:T.font,fontSize:13,fontWeight:tab===t?600:400,
              color:tab===t?T.teal:T.textMuted,textTransform:'capitalize',
            }}>{t}</button>
          ))}
        </div>

        <div style={{flex:1,overflowY:'auto',padding:'20px 24px'}}>
          {tab==='details' && (
            <>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20,marginBottom:20}}>
                <div>
                  <div style={{fontFamily:T.font,fontSize:10,fontWeight:700,color:T.textMuted,textTransform:'uppercase',letterSpacing:.8,marginBottom:6}}>Problem</div>
                  <p style={{fontFamily:T.font,fontSize:13,color:T.textSec,lineHeight:1.6,margin:0,background:T.bg,padding:'10px 12px',borderRadius:6}}>
                    Workers on elevated deck formwork are exposed to unprotected edges during night concrete pours. Traditional timber barriers require 45 min to erect and are frequently damaged by concrete trucks.
                  </p>
                </div>
                <div>
                  <div style={{fontFamily:T.font,fontSize:10,fontWeight:700,color:T.textMuted,textTransform:'uppercase',letterSpacing:.8,marginBottom:6}}>Proposed Solution</div>
                  <p style={{fontFamily:T.font,fontSize:13,color:T.textSec,lineHeight:1.6,margin:0,background:T.bg,padding:'10px 12px',borderRadius:6}}>
                    {idea.summary}
                  </p>
                </div>
              </div>
              <div style={{background:T.bg,borderRadius:6,height:120,display:'flex',alignItems:'center',justifyContent:'center',marginBottom:20,border:`1px dashed ${T.border}`}}>
                <div style={{textAlign:'center',color:T.textMuted,fontFamily:'monospace',fontSize:11}}>📷 site photos / drawings (3 files attached)</div>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:8}}>
                {[{k:'Sector',v:<SectorTag sector={idea.sector} />},{k:'Phase',v:'Construction'},{k:'FSR Category',v:idea.fsrCat},{k:'Risk Level',v:'High'},{k:'Days Pending',v:<DaysPending days={idea.days} />},{k:'Submitter',v:`${idea.submitter} (${idea.role})`}].map(r=>(
                  <div key={r.k} style={{padding:'10px 12px',background:T.bg,borderRadius:4}}>
                    <div style={{fontFamily:T.font,fontSize:9,fontWeight:700,color:T.textMuted,textTransform:'uppercase',letterSpacing:.6,marginBottom:3}}>{r.k}</div>
                    <div style={{fontFamily:T.font,fontSize:12,color:T.text}}>{r.v}</div>
                  </div>
                ))}
              </div>
            </>
          )}
          {tab==='timeline' && (
            <div style={{display:'flex',flexDirection:'column',gap:0}}>
              {[
                {date:'24 Apr 2026',user:'S. Thompson',action:'Submitted idea',icon:'📥',color:T.teal},
                {date:'24 Apr 2026',user:'System',action:'Auto-routed to ESL Jake Anderson for review',icon:'🔀',color:T.textMuted},
                {date:'25 Apr 2026',user:'System',action:'Day 1 reminder sent to ESL',icon:'⏰',color:T.textMuted},
                {date:'29 Apr 2026',user:'Pending',action:'Awaiting ESL review decision',icon:'⏳',color:T.orange},
              ].map((ev,i)=>(
                <div key={i} style={{display:'flex',gap:14,paddingBottom:20,position:'relative'}}>
                  <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:0}}>
                    <div style={{width:32,height:32,borderRadius:'50%',background:ev.color+'22',border:`2px solid ${ev.color}`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:14,flexShrink:0}}>{ev.icon}</div>
                    {i<3&&<div style={{width:2,flex:1,background:T.borderLight,marginTop:4,minHeight:20}} />}
                  </div>
                  <div style={{paddingTop:6}}>
                    <div style={{fontFamily:T.font,fontSize:13,fontWeight:600,color:T.text}}>{ev.action}</div>
                    <div style={{fontFamily:T.font,fontSize:11,color:T.textMuted,marginTop:2}}>{ev.user} · {ev.date}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {tab==='comments' && (
            <>
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
              <div style={{display:'flex',gap:8,marginTop:8}}>
                <input value={comment} onChange={e=>setComment(e.target.value)} placeholder="Add a comment or clarification request…"
                  style={{flex:1,height:36,padding:'7px 12px',fontFamily:T.font,fontSize:13,border:`1px solid ${T.border}`,borderRadius:4,outline:'none'}}
                  onFocus={e=>e.target.style.border=`1px solid ${T.teal}`}
                  onBlur={e=>e.target.style.border=`1px solid ${T.border}`}
                  onKeyDown={e=>{if(e.key==='Enter'&&comment.trim()){setComments(p=>[...p,{user:'Jake Anderson',role:'ESL',text:comment,date:'29 Apr 2026'}]);setComment('');}}}
                />
                <Btn size="sm" variant="teal" onClick={()=>{if(comment.trim()){setComments(p=>[...p,{user:'Jake Anderson',role:'ESL',text:comment,date:'29 Apr 2026'}]);setComment('');}}}>Post</Btn>
              </div>
            </>
          )}
        </div>

        <div style={{padding:'14px 24px',borderTop:`1px solid ${T.borderLight}`,display:'flex',gap:10,justifyContent:'space-between',flexShrink:0,background:T.bg}}>
          <Btn variant="ghost" size="sm" onClick={()=>{onClarify(idea.id);onClose();}}>Request Clarification</Btn>
          <div style={{display:'flex',gap:10}}>
            <Btn variant="ghost" size="sm" onClick={()=>{onReturn(idea);onClose();}}>↩ Return with Feedback</Btn>
            <Btn variant="teal" size="sm" onClick={()=>{onApprove(idea.id);onClose();}}>Approve & Forward to Leadership ✓</Btn>
          </div>
        </div>
      </div>
    </div>
  );
};

const ESLDashboard = ({ nav, showToast }) => {
  const [items, setItems] = useState(QUEUE);
  const [selected, setSelected] = useState(null);
  const [feedbackTarget, setFeedbackTarget] = useState(null);
  const [filterStatus, setFilterStatus] = useState('All');
  const overdue = items.filter(i=>i.days>7);

  const approve = (id) => { setItems(p=>p.filter(i=>i.id!==id)); showToast(`✓ ${id} approved and forwarded to Project Leadership.`,'success'); };
  const returnWithFeedback = (idea, feedback) => {
    setItems(p=>p.filter(i=>i.id!==idea.id));
    setFeedbackTarget(null);
    showToast(`↩ ${idea.id} returned to ${idea.submitter} with your feedback.`,'warning');
  };
  const clarify = (id) => { showToast(`Clarification request sent to submitter of ${id}.`,'info'); };

  const visible = filterStatus==='All' ? items : items.filter(i=>i.status===filterStatus);

  return (
    <Page title="My Reviews" subtitle="Ideas awaiting your approval — Fremantle Bridges Alliance"
      breadcrumb="Home › My Reviews"
      actions={<Btn variant="secondary" size="sm" onClick={()=>showToast('Export ready — check your downloads.','info')}>Export List</Btn>}
    >
      {/* Overdue Alert */}
      {overdue.length>0&&(
        <div style={{background:'#fce4ec',border:`1px solid ${T.red}`,borderLeft:`4px solid ${T.red}`,borderRadius:6,padding:'12px 16px',marginBottom:20,display:'flex',gap:12,alignItems:'center'}}>
          <span style={{fontSize:20}}>⚠️</span>
          <div style={{flex:1}}>
            <div style={{fontFamily:T.font,fontSize:13,fontWeight:700,color:T.red}}>{overdue.length} item{overdue.length>1?'s are':' is'} overdue (&gt;7 days pending)</div>
            <div style={{fontFamily:T.font,fontSize:12,color:'#7f0000',marginTop:2}}>Items not reviewed within 14 days will be escalated to Project Leadership.</div>
          </div>
          <Btn variant="danger" size="sm" onClick={()=>setFilterStatus('Overdue')}>View Overdue</Btn>
        </div>
      )}

      {/* KPI Row */}
      <div style={{display:'flex',gap:16,marginBottom:24,flexWrap:'wrap'}}>
        <KPICard label="Pending Reviews" value={items.length} cta="All items" onCta={()=>setFilterStatus('All')} accent={T.teal} />
        <KPICard label="Overdue (>7 days)" value={overdue.length} cta={overdue.length?'View overdue':undefined} onCta={()=>setFilterStatus('Overdue')} accent={T.red} />
        <KPICard label="Reviewed This Week" value="5" trend={25} trendLabel="vs last week" accent={T.green} />
        <KPICard label="Avg Days in Queue" value="5.8d" accent={T.orange} />
      </div>

      {/* Filter Bar */}
      <div style={{display:'flex',gap:10,alignItems:'center',marginBottom:16}}>
        {['All',...new Set(items.map(i=>i.status))].map(s=>(
          <button key={s} onClick={()=>setFilterStatus(s)} style={{
            padding:'6px 14px',borderRadius:20,fontFamily:T.font,fontSize:12,fontWeight:600,
            border:`1px solid ${filterStatus===s?T.teal:T.border}`,
            background:filterStatus===s?T.teal:'white',
            color:filterStatus===s?'white':T.textSec,cursor:'pointer',transition:'all 120ms',
          }}>{s} {s==='All'?`(${items.length})`:s==='Overdue'?`(${overdue.length})`:''}</button>
        ))}
        <button style={{marginLeft:'auto',padding:'6px 14px',borderRadius:4,fontFamily:T.font,fontSize:12,fontWeight:500,border:`1px solid ${T.border}`,background:'white',color:T.textSec,cursor:'pointer'}}>
          Oldest First ▾
        </button>
      </div>

      {/* Table */}
      <Card style={{padding:0,overflow:'hidden'}}>
        <table style={{width:'100%',borderCollapse:'collapse'}}>
          <thead>
            <tr style={{background:T.bg}}>
              {['','Idea','Submitter','Sector','Status','Days Pending','Actions'].map((h,i)=>(
                <th key={i} style={{textAlign:'left',padding:'10px 16px',fontSize:10,fontWeight:700,color:T.textMuted,fontFamily:T.font,textTransform:'uppercase',letterSpacing:.6,borderBottom:`2px solid ${T.borderLight}`,whiteSpace:'nowrap'}}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visible.map((row,i) => (
              <tr key={row.id}
                style={{borderTop:`1px solid ${T.borderLight}`,cursor:'pointer',transition:'background 100ms',background:row.days>7?'#fff5f5':'white'}}
                onMouseEnter={e=>e.currentTarget.style.background=row.days>7?'#ffe8e8':'#f8f9fa'}
                onMouseLeave={e=>e.currentTarget.style.background=row.days>7?'#fff5f5':'white'}
              >
                <td style={{padding:'12px 16px',width:8}}>
                  <input type="checkbox" style={{width:15,height:15,accentColor:T.teal,cursor:'pointer'}} />
                </td>
                <td style={{padding:'12px 16px'}} onClick={()=>setSelected(row)}>
                  <div style={{fontFamily:T.font,fontSize:13,fontWeight:600,color:T.teal,marginBottom:2}}>{row.title}</div>
                  <div style={{fontFamily:T.font,fontSize:11,color:T.textMuted}}>{row.id} · {row.fsrCat}</div>
                </td>
                <td style={{padding:'12px 16px'}}>
                  <div style={{fontFamily:T.font,fontSize:12,color:T.text}}>{row.submitter}</div>
                  <div style={{fontFamily:T.font,fontSize:10,color:T.textMuted}}>{row.role}</div>
                </td>
                <td style={{padding:'12px 16px'}}><SectorTag sector={row.sector} /></td>
                <td style={{padding:'12px 16px'}}><StatusBadge status={row.status} /></td>
                <td style={{padding:'12px 16px'}}><DaysPending days={row.days} /></td>
                <td style={{padding:'12px 16px'}}>
                  <div style={{display:'flex',gap:6}}>
                    <button onClick={()=>setSelected(row)} style={{background:'none',border:`1px solid ${T.border}`,borderRadius:4,padding:'5px 10px',fontFamily:T.font,fontSize:11,fontWeight:600,color:T.textSec,cursor:'pointer'}}
                    onMouseEnter={e=>{e.currentTarget.style.borderColor=T.teal;e.currentTarget.style.color=T.teal}}
                    onMouseLeave={e=>{e.currentTarget.style.borderColor=T.border;e.currentTarget.style.color=T.textSec}}
                    >Review</button>
                    <button onClick={()=>approve(row.id)} style={{background:'none',border:`1px solid ${T.green}`,borderRadius:4,padding:'5px 10px',fontFamily:T.font,fontSize:11,fontWeight:600,color:T.green,cursor:'pointer'}}
                    onMouseEnter={e=>{e.currentTarget.style.background=T.green;e.currentTarget.style.color='white'}}
                    onMouseLeave={e=>{e.currentTarget.style.background='none';e.currentTarget.style.color=T.green}}
                    >✓</button>
                    <button onClick={()=>setFeedbackTarget(row)} style={{background:'none',border:`1px solid ${T.border}`,borderRadius:4,padding:'5px 10px',fontFamily:T.font,fontSize:11,fontWeight:600,color:T.textMuted,cursor:'pointer'}}
                    onMouseEnter={e=>{e.currentTarget.style.borderColor=T.red;e.currentTarget.style.color=T.red}}
                    onMouseLeave={e=>{e.currentTarget.style.borderColor=T.border;e.currentTarget.style.color=T.textMuted}}
                    >↩</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {visible.length===0&&(
          <div style={{textAlign:'center',padding:'48px',fontFamily:T.font}}>
            <div style={{fontSize:32,marginBottom:10}}>✅</div>
            <div style={{fontSize:15,fontWeight:600,color:T.text,marginBottom:6}}>No ideas pending your review</div>
            <div style={{fontSize:13,color:T.textMuted}}>Great work! Check back tomorrow.</div>
          </div>
        )}
      </Card>
      {selected&&<IdeaDetailModal idea={selected} onClose={()=>setSelected(null)} onApprove={approve} onReturn={(idea)=>{setSelected(null);setFeedbackTarget(idea);}} onClarify={clarify} showToast={showToast} />}
      {feedbackTarget&&<FeedbackModal idea={feedbackTarget} mode="esl" onClose={()=>setFeedbackTarget(null)} onSubmit={(fb)=>returnWithFeedback(feedbackTarget,fb)} />}
    </Page>
  );
};

// ── LEADERSHIP DASHBOARD ────────────────────────────────────────────────────
const TrendChart = () => {
  const ref = useRef(null);
  useEffect(()=>{
    if(!ref.current||typeof Chart==='undefined') return;
    const months = ['Nov','Dec','Jan','Feb','Mar','Apr'];
    const chart = new Chart(ref.current.getContext('2d'),{
      type:'line',
      data:{
        labels:months,
        datasets:[
          {label:'Submitted',data:[18,22,31,29,38,45],borderColor:'#1a56db',backgroundColor:'rgba(26,86,219,.08)',tension:.35,fill:true,pointRadius:4,pointBackgroundColor:'#1a56db'},
          {label:'Approved',data:[10,14,18,20,25,30],borderColor:T.green,backgroundColor:'rgba(100,167,11,.08)',tension:.35,fill:true,pointRadius:4,pointBackgroundColor:T.green},
        ]
      },
      options:{
        responsive:true,maintainAspectRatio:false,
        plugins:{legend:{position:'top',labels:{font:{family:'Century Gothic, Arial',size:11},boxWidth:12}}},
        scales:{
          x:{grid:{color:'#f0f0f0'},ticks:{font:{family:'Century Gothic, Arial',size:10},color:'#999'}},
          y:{grid:{color:'#f0f0f0'},ticks:{font:{family:'Century Gothic, Arial',size:10},color:'#999'},beginAtZero:true},
        },
      }
    });
    return ()=>chart.destroy();
  },[]);
  return <div style={{height:200}}><canvas ref={ref} /></div>;
};

const ImplDonut = () => {
  const ref = useRef(null);
  useEffect(()=>{
    if(!ref.current||typeof Chart==='undefined') return;
    const chart = new Chart(ref.current.getContext('2d'),{
      type:'doughnut',
      data:{
        labels:['Approved','Under Review','Submitted','Rejected','Closed'],
        datasets:[{data:[98,32,45,18,54],backgroundColor:['#64a70b','#c75000','#1a56db','#e30613','#999'],borderWidth:0,hoverOffset:6}]
      },
      options:{cutout:'68%',responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'right',labels:{font:{family:'Century Gothic, Arial',size:11},padding:12,boxWidth:12}}}}
    });
    return ()=>chart.destroy();
  },[]);
  return <div style={{height:200}}><canvas ref={ref} /></div>;
};

const ESCALATED = [
  {id:'ES-240',title:'Pier Cap Fall Arrest Anchors',days:14,assignee:'ESL Jake Anderson',sector:'Roads'},
  {id:'ES-229',title:'Traffic Management Barrier Gates',days:18,assignee:'ESL K. McDonald',sector:'Water'},
];

const IMPL_ACTIONS = [
  {id:'ACT-012',idea:'Rebar Cage Safety Netting',assignee:'J. Walsh',due:'30 May 2026',status:'In Progress',progress:60,dueColor:T.green},
  {id:'ACT-011',idea:'PPE QR-Code Tracking',assignee:'M. Chen',due:'15 May 2026',status:'Pending Approval',progress:80,dueColor:T.orange},
  {id:'ACT-010',idea:'Modular Deck Edge Barriers',assignee:'S. Thompson',due:'10 May 2026',status:'In Progress',progress:45,dueColor:T.orange},
  {id:'ACT-009',idea:'Night Works Lighting Matrix',assignee:'R. Davis',due:'1 May 2026',status:'Not Started',progress:0,dueColor:T.red},
];

// Ideas forwarded by ESL awaiting Leadership final approval
const PENDING_LEADERSHIP = [
  {id:'ES-241',title:'Automated Rebar Cage Netting System',submitter:'M. Chen',role:'Site Engineer',days:2,sector:'Rail',fsrCat:'FSR-001',summary:'Pre-tensioned netting system deploys automatically around rebar cages, eliminating manual edge protection during cage assembly.'},
  {id:'ES-238',title:'Smart PPE Compliance Scanner',submitter:'J. Walsh',role:'Safety Officer',days:4,sector:'Roads',fsrCat:'FSR-003',summary:'AI-powered camera at site entry scans PPE compliance and denies access to non-compliant workers in real time.'},
  {id:'ES-235',title:'Concrete Pump Exclusion Zone Beacons',submitter:'A. Patel',role:'Site Engineer',days:1,sector:'Energy',fsrCat:'FSR-007',summary:'Wireless beacons on pump booms broadcast live exclusion zone radii to wearable crew alerts.'},
];

const LeadershipDashboard = ({ nav, showToast }) => {
  const [pendingItems, setPendingItems] = useState(PENDING_LEADERSHIP);
  const [feedbackTarget, setFeedbackTarget] = useState(null);

  const approveImpl = (id) => {
    setPendingItems(p=>p.filter(i=>i.id!==id));
    showToast(`✓ ${id} approved for implementation. Project team notified.`,'success');
  };
  const returnWithFeedback = (idea, feedback) => {
    setPendingItems(p=>p.filter(i=>i.id!==idea.id));
    setFeedbackTarget(null);
    showToast(`↩ ${idea.id} returned to submitter and ESL with your feedback.`,'warning');
  };

  return (
    <Page title="Reports & Approvals" subtitle="Monthly summary · Fremantle Bridges Alliance · April 2026"
      breadcrumb="Home › Reports & Approvals"
      actions={
        <div style={{display:'flex',gap:8}}>
          <Btn variant="secondary" size="sm" onClick={()=>showToast('Generating PDF report… Check your downloads.','info')}>Export Monthly Report</Btn>
        </div>
      }
    >
      {/* ── PENDING FINAL APPROVAL ── */}
      {pendingItems.length > 0 && (
        <div style={{marginBottom:28}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:12}}>
            <div>
              <h2 style={{fontFamily:T.font,fontSize:16,fontWeight:700,color:T.text,margin:'0 0 2px'}}>Pending Your Approval</h2>
              <p style={{fontFamily:T.font,fontSize:12,color:T.textMuted,margin:0}}>Ideas approved by ESL — awaiting your final decision before implementation</p>
            </div>
            <span style={{background:'#f3e8ff',color:'#7c3aed',padding:'3px 12px',borderRadius:12,fontSize:12,fontWeight:700,fontFamily:T.font}}>{pendingItems.length} awaiting</span>
          </div>
          <Card style={{padding:0,overflow:'hidden',border:`1px solid #e9d5ff`}}>
            {pendingItems.map((item, i) => (
              <div key={item.id} style={{
                padding:'16px 20px',
                borderTop: i > 0 ? `1px solid ${T.borderLight}` : 'none',
                display:'flex',gap:16,alignItems:'flex-start',
              }}>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{display:'flex',gap:10,alignItems:'center',marginBottom:5,flexWrap:'wrap'}}>
                    <span style={{fontFamily:T.font,fontSize:11,fontWeight:700,color:'#7c3aed'}}>{item.id}</span>
                    <SectorTag sector={item.sector} />
                    <span style={{fontFamily:T.font,fontSize:10,color:T.textMuted}}>{item.fsrCat}</span>
                    <StatusBadge status="Pending Decision" />
                    <DaysPending days={item.days} />
                    <span style={{fontFamily:T.font,fontSize:10,color:T.textMuted}}>since ESL approval</span>
                  </div>
                  <div style={{fontFamily:T.font,fontSize:14,fontWeight:600,color:T.text,marginBottom:3}}>{item.title}</div>
                  <div style={{fontFamily:T.font,fontSize:12,color:T.textSec,lineHeight:1.5}}>{item.summary}</div>
                  <div style={{fontFamily:T.font,fontSize:11,color:T.textMuted,marginTop:4}}>Submitted by {item.submitter} ({item.role})</div>
                </div>
                <div style={{display:'flex',flexDirection:'column',gap:8,flexShrink:0}}>
                  <Btn variant="teal" size="sm" onClick={()=>approveImpl(item.id)}>Approve for Implementation ✓</Btn>
                  <Btn variant="ghost" size="sm" onClick={()=>setFeedbackTarget(item)}>↩ Return with Feedback</Btn>
                </div>
              </div>
            ))}
          </Card>
        </div>
      )}
      {/* KPI Cards — no scroll required */}
      <div style={{display:'flex',gap:16,marginBottom:24,flexWrap:'wrap'}}>
        <KPICard label="Total Submitted" value="247" trend={12} trendLabel="vs last month" cta="View All" onCta={()=>nav('search')} accent={T.teal} />
        <KPICard label="Pending Approval" value="8" cta="Review Now" onCta={()=>nav('esl')} accent={T.orange} />
        <KPICard label="Approved This Month" value="12" trend={8} trendLabel="vs last month" accent={T.green} />
        <KPICard label="Avg Implementation" value="45d" trend={-6} trendLabel="days vs target" accent={T.red} />
      </div>

      {/* Charts Row */}
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:24}}>
        <Card>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:16}}>
            <h3 style={{fontFamily:T.font,fontSize:14,fontWeight:700,color:T.text,margin:0}}>Submission Trend (6 months)</h3>
            <span style={{fontFamily:T.font,fontSize:10,color:T.textMuted}}>Nov 2025 – Apr 2026</span>
          </div>
          <TrendChart />
        </Card>
        <Card>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:16}}>
            <h3 style={{fontFamily:T.font,fontSize:14,fontWeight:700,color:T.text,margin:0}}>Ideas by Status</h3>
            <span style={{fontFamily:T.font,fontSize:10,color:T.textMuted}}>247 total</span>
          </div>
          <ImplDonut />
        </Card>
      </div>

      {/* Escalated Alerts + Impl Actions */}
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:24}}>
        <Card>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12}}>
            <h3 style={{fontFamily:T.font,fontSize:14,fontWeight:700,color:T.text,margin:0}}>🚨 Escalated Items</h3>
            <StatusBadge status="Submitted" />
          </div>
          {ESCALATED.length>0 ? (
            <div style={{background:'#fce4ec',border:`1px solid ${T.red}`,borderRadius:6,padding:'10px 14px',marginBottom:12,fontFamily:T.font,fontSize:12,color:'#7f0000'}}>
              ⚠ {ESCALATED.length} items have been pending review for over 14 days. Immediate action required.
            </div>
          ) : (
            <div style={{fontFamily:T.font,fontSize:13,color:T.green}}>✓ No escalated items</div>
          )}
          {ESCALATED.map(e=>(
            <div key={e.id} style={{borderTop:`1px solid ${T.borderLight}`,padding:'10px 0',display:'flex',gap:12,alignItems:'center'}}>
              <div style={{flex:1}}>
                <div style={{fontFamily:T.font,fontSize:13,fontWeight:600,color:T.text}}>{e.title}</div>
                <div style={{fontFamily:T.font,fontSize:11,color:T.textMuted,marginTop:2}}>{e.id} · {e.assignee}</div>
              </div>
              <DaysPending days={e.days} />
            </div>
          ))}
          <div style={{paddingTop:12}}>
            <button onClick={()=>nav('esl')} style={{background:'none',border:'none',cursor:'pointer',color:T.teal,fontFamily:T.font,fontSize:12,fontWeight:600}}>View all escalated items →</button>
          </div>
        </Card>

        {/* Top 5 Sectors */}
        <Card>
          <h3 style={{fontFamily:T.font,fontSize:14,fontWeight:700,color:T.text,margin:'0 0 14px'}}>Ideas by Sector</h3>
          {[{sector:'Rail',n:89,pct:36},{sector:'Roads',n:62,pct:25},{sector:'Defence',n:42,pct:17},{sector:'Water',n:36,pct:15},{sector:'Energy',n:18,pct:7}].map(r=>(
            <div key={r.sector} style={{marginBottom:12}}>
              <div style={{display:'flex',justifyContent:'space-between',marginBottom:4}}>
                <div style={{display:'flex',gap:8,alignItems:'center'}}>
                  <SectorTag sector={r.sector} />
                  <span style={{fontFamily:T.font,fontSize:12,color:T.textSec}}>{r.n} ideas</span>
                </div>
                <span style={{fontFamily:T.font,fontSize:11,color:T.textMuted,fontWeight:600}}>{r.pct}%</span>
              </div>
              <div style={{height:5,background:T.borderLight,borderRadius:3,overflow:'hidden'}}>
                <div style={{height:'100%',width:`${r.pct}%`,background:SECTOR_COLORS[r.sector]||T.teal,borderRadius:3,transition:'width 600ms ease'}} />
              </div>
            </div>
          ))}
        </Card>
      </div>

      {/* Implementation Actions Table */}
      <Card style={{padding:0,overflow:'hidden'}}>
        <div style={{padding:'16px 24px',borderBottom:`1px solid ${T.borderLight}`,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <h3 style={{fontFamily:T.font,fontSize:14,fontWeight:700,color:T.text,margin:0}}>Implementation Actions</h3>
          <button onClick={()=>nav('esl')} style={{background:'none',border:'none',cursor:'pointer',color:T.teal,fontFamily:T.font,fontSize:12,fontWeight:600}}>View All →</button>
        </div>
        <table style={{width:'100%',borderCollapse:'collapse'}}>
          <thead>
            <tr style={{background:T.bg}}>
              {['Action','Assigned To','Due Date','Status','Progress'].map(h=>(
                <th key={h} style={{textAlign:'left',padding:'9px 16px',fontSize:10,fontWeight:700,color:T.textMuted,fontFamily:T.font,textTransform:'uppercase',letterSpacing:.5,borderBottom:`1px solid ${T.borderLight}`}}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {IMPL_ACTIONS.map((a,i)=>(
              <tr key={a.id} style={{borderTop:`1px solid ${T.borderLight}`,transition:'background 100ms'}}
              onMouseEnter={e=>e.currentTarget.style.background='#f8f9fa'}
              onMouseLeave={e=>e.currentTarget.style.background='white'}
              >
                <td style={{padding:'12px 16px'}}>
                  <div style={{fontFamily:T.font,fontSize:13,fontWeight:600,color:T.text}}>{a.idea}</div>
                  <div style={{fontFamily:T.font,fontSize:10,color:T.textMuted}}>{a.id}</div>
                </td>
                <td style={{padding:'12px 16px',fontFamily:T.font,fontSize:12,color:T.textSec}}>{a.assignee}</td>
                <td style={{padding:'12px 16px'}}>
                  <span style={{fontFamily:T.font,fontSize:12,fontWeight:600,color:a.dueColor}}>{a.due}</span>
                </td>
                <td style={{padding:'12px 16px'}}><StatusBadge status={a.status} /></td>
                <td style={{padding:'12px 16px',width:140}}>
                  <div style={{display:'flex',alignItems:'center',gap:8}}>
                    <div style={{flex:1,height:5,background:T.borderLight,borderRadius:3,overflow:'hidden'}}>
                      <div style={{height:'100%',width:`${a.progress}%`,background:a.progress>=80?T.green:a.progress>=40?T.teal:T.orange,borderRadius:3}} />
                    </div>
                    <span style={{fontFamily:T.font,fontSize:10,color:T.textMuted,flexShrink:0,width:28,textAlign:'right'}}>{a.progress}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* Footer */}
      <div style={{marginTop:40,paddingTop:20,borderTop:`1px solid ${T.borderLight}`,display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div style={{display:'flex',alignItems:'center',gap:8}}>
          <div style={{background:T.red,width:22,height:22,borderRadius:2,display:'flex',alignItems:'center',justifyContent:'center'}}>
            <span style={{color:'white',fontWeight:700,fontSize:7,fontFamily:T.font}}>LOR</span>
          </div>
          <div style={{fontFamily:T.font,fontSize:9,fontWeight:700,color:T.text,letterSpacing:1.2,textTransform:'uppercase'}}>The Power of Experience</div>
        </div>
        <div style={{fontFamily:T.font,fontSize:10,color:T.textMuted}}>Laing O'Rourke · FBA · Report generated 29 Apr 2026</div>
      </div>

      {feedbackTarget&&<FeedbackModal idea={feedbackTarget} mode="leadership" onClose={()=>setFeedbackTarget(null)} onSubmit={(fb)=>returnWithFeedback(feedbackTarget,fb)} />}
    </Page>
  );
};

Object.assign(window, { ESLDashboard, LeadershipDashboard });
