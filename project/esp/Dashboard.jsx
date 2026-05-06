
'use strict';
const { useState, useEffect, useRef } = React;

const RECENT = [
  {id:'ES-247',title:'Modular Deck Edge Barrier System',submitter:'S. Thompson',date:'29 Apr 2026',status:'Submitted',sector:'Rail'},
  {id:'ES-246',title:'Rebar Cage Safety Netting',submitter:'M. Chen',date:'28 Apr 2026',status:'Approved',sector:'Roads'},
  {id:'ES-245',title:'Concrete Pour Proximity Sensors',submitter:'A. Patel',date:'27 Apr 2026',status:'Under Review',sector:'Water'},
  {id:'ES-244',title:'Enhanced PPE QR-Code Tracking',submitter:'J. Walsh',date:'25 Apr 2026',status:'Approved',sector:'Defence'},
  {id:'ES-243',title:'Night Works Lighting Protocol',submitter:'R. Davis',date:'24 Apr 2026',status:'Closed',sector:'Energy'},
];

const StatusChart = () => {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current || typeof Chart === 'undefined') return;
    const chart = new Chart(ref.current.getContext('2d'), {
      type:'bar',
      data:{
        labels:['Submitted','Under Review','Approved','Rejected','Closed'],
        datasets:[{
          data:[45,32,98,18,54],
          backgroundColor:['#1a56db','#c75000','#64a70b','#e30613','#999'],
          borderRadius:5, borderSkipped:false,
        }]
      },
      options:{
        indexAxis:'y', responsive:true, maintainAspectRatio:false,
        plugins:{legend:{display:false},tooltip:{callbacks:{label:ctx=>' '+ctx.parsed.x+' ideas'}}},
        scales:{
          x:{grid:{color:'#f0f0f0'},ticks:{font:{family:'Century Gothic, Arial',size:10},color:'#999'}},
          y:{grid:{display:false},ticks:{font:{family:'Century Gothic, Arial',size:11},color:'#4d4d4d'}},
        },
      }
    });
    return () => chart.destroy();
  }, []);
  return <div style={{height:200}}><canvas ref={ref} /></div>;
};

const SectorChart = () => {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current || typeof Chart === 'undefined') return;
    const chart = new Chart(ref.current.getContext('2d'), {
      type:'doughnut',
      data:{
        labels:['Rail','Roads','Defence','Water','Energy','Delivery Partner'],
        datasets:[{
          data:[89,42,36,28,17,15],
          backgroundColor:['#7c3aed','#1d4ed8','#5b21b6','#065f46','#b91c1c','#0e7490'],
          borderWidth:0, hoverOffset:6,
        }]
      },
      options:{
        cutout:'65%', responsive:true, maintainAspectRatio:false,
        plugins:{
          legend:{position:'right',labels:{font:{family:'Century Gothic, Arial',size:11},padding:14,boxWidth:12,color:'#4d4d4d'}},
          tooltip:{callbacks:{label:ctx=>` ${ctx.label}: ${ctx.parsed} ideas`}},
        },
      }
    });
    return () => chart.destroy();
  }, []);
  return <div style={{height:200}}><canvas ref={ref} /></div>;
};

const Dashboard = ({ nav, showToast }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => { const t = setTimeout(() => setLoading(false), 900); return () => clearTimeout(t); }, []);

  return (
    <div style={{background:T.bg,minHeight:'calc(100vh - 64px)'}}>
      {/* Hero Banner */}
      <div style={{background:'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)',padding:'48px 32px',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',left:0,top:0,bottom:0,width:5,background:T.red}} />
        <div style={{position:'absolute',right:0,top:0,bottom:0,width:'35%',backgroundImage:'repeating-linear-gradient(45deg,rgba(255,255,255,.02) 0px,rgba(255,255,255,.02) 1px,transparent 1px,transparent 8px)',pointerEvents:'none'}} />
        <div style={{fontSize:10,fontWeight:700,color:T.teal,letterSpacing:2.5,textTransform:'uppercase',fontFamily:T.font,marginBottom:10}}>FREMANTLE BRIDGES ALLIANCE · PERTH WA · FBA</div>
        <h1 style={{fontSize:30,fontWeight:700,color:'white',margin:'0 0 6px',fontFamily:T.font,lineHeight:1.2}}>Engineered Safety Platform</h1>
        <p style={{fontSize:15,color:'rgba(255,255,255,.6)',margin:'0 0 28px',fontFamily:T.font,maxWidth:520}}>Capture, validate, and scale safety innovations across the project workforce.</p>
        <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
          <Btn size="lg" onClick={() => nav('submit')}>+ Submit New Idea</Btn>
          <Btn size="lg" variant="teal" onClick={() => nav('search')}>
            Browse Solutions
          </Btn>
        </div>
      </div>

      <div style={{padding:'28px 32px'}}>
        {/* KPI Cards */}
        <div style={{display:'flex',gap:16,marginBottom:28,flexWrap:'wrap'}}>
          <KPICard loading={loading} label="Total Submitted" value="247" trend={12} trendLabel="vs last month" accent={T.teal} />
          <KPICard loading={loading} label="Pending Reviews" value="8" cta="View Now" onCta={() => nav('esl')} accent={T.orange} />
          <KPICard loading={loading} label="Approved This Month" value="12" trend={8} trendLabel="vs last month" accent={T.green} />
          <KPICard loading={loading} label="Avg Implementation" value="45d" trend={-6} trendLabel="days improvement" accent={T.red} />
        </div>

        {/* Charts Row */}
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:28}}>
          <Card>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:16}}>
              <h3 style={{fontFamily:T.font,fontSize:15,fontWeight:600,color:T.text,margin:0}}>Ideas by Status</h3>
              <button onClick={() => nav('esl')} style={{background:'none',border:'none',cursor:'pointer',color:T.teal,fontSize:11,fontFamily:T.font,fontWeight:600}}>View All →</button>
            </div>
            <StatusChart />
          </Card>
          <Card>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:16}}>
              <h3 style={{fontFamily:T.font,fontSize:15,fontWeight:600,color:T.text,margin:0}}>Ideas by Sector</h3>
              <button onClick={() => nav('search')} style={{background:'none',border:'none',cursor:'pointer',color:T.teal,fontSize:11,fontFamily:T.font,fontWeight:600}}>Browse →</button>
            </div>
            <SectorChart />
          </Card>
        </div>

        {/* Recent + Quick Links */}
        <div style={{display:'grid',gridTemplateColumns:'1fr 300px',gap:16}}>
          {/* Recent Activity Table */}
          <Card style={{padding:0,overflow:'hidden'}}>
            <div style={{padding:'20px 24px 14px',borderBottom:`1px solid ${T.borderLight}`}}>
              <h3 style={{fontFamily:T.font,fontSize:15,fontWeight:600,color:T.text,margin:0}}>Recent Activity</h3>
            </div>
            <table style={{width:'100%',borderCollapse:'collapse'}}>
              <thead>
                <tr style={{background:T.bg}}>
                  {['ID','Title','Submitter','Date','Status'].map(h=>(
                    <th key={h} style={{textAlign:'left',padding:'9px 16px',fontSize:10,fontWeight:700,color:T.textMuted,fontFamily:T.font,textTransform:'uppercase',letterSpacing:.6}}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {RECENT.map((row,i) => (
                  <tr key={row.id}
                    style={{borderTop:`1px solid ${T.borderLight}`,cursor:'pointer',transition:'background 100ms'}}
                    onMouseEnter={e=>e.currentTarget.style.background='#f8f9fa'}
                    onMouseLeave={e=>e.currentTarget.style.background='transparent'}
                  >
                    <td style={{padding:'11px 16px',fontSize:11,color:T.teal,fontFamily:T.font,fontWeight:700}}>{row.id}</td>
                    <td style={{padding:'11px 16px',fontSize:13,color:T.text,fontFamily:T.font}}>{row.title}</td>
                    <td style={{padding:'11px 16px',fontSize:12,color:T.textMuted,fontFamily:T.font}}>{row.submitter}</td>
                    <td style={{padding:'11px 16px',fontSize:12,color:T.textMuted,fontFamily:T.font,whiteSpace:'nowrap'}}>{row.date}</td>
                    <td style={{padding:'11px 16px'}}><StatusBadge status={row.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{padding:'12px 24px',borderTop:`1px solid ${T.borderLight}`,textAlign:'center'}}>
              <button onClick={() => nav('esl')} style={{background:'none',border:'none',cursor:'pointer',color:T.teal,fontSize:12,fontFamily:T.font,fontWeight:600}}>View all submissions →</button>
            </div>
          </Card>

          {/* Quick Actions */}
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            {[
              {icon:'💡',title:'Submit New Idea',desc:'Log a safety innovation in under 5 min',action:'submit',accent:T.red},
              {icon:'🔍',title:'Browse Solutions',desc:'Search the approved knowledge library',action:'search',accent:T.teal},
              {icon:'📋',title:'Review Queue',desc:'8 ideas awaiting your approval',action:'esl',accent:T.orange},
              {icon:'📊',title:'Leadership Report',desc:'Monthly KPIs, trends & escalations',action:'leadership',accent:T.green},
            ].map(q => (
              <button key={q.action} onClick={() => nav(q.action)} style={{
                background:T.white,border:`1px solid ${T.borderLight}`,borderLeft:`4px solid ${q.accent}`,
                borderRadius:8,padding:'14px 16px',textAlign:'left',cursor:'pointer',
                boxShadow:T.s1,transition:'box-shadow 150ms',fontFamily:T.font,
              }}
              onMouseEnter={e=>e.currentTarget.style.boxShadow=T.s2}
              onMouseLeave={e=>e.currentTarget.style.boxShadow=T.s1}
              >
                <div style={{fontSize:18,marginBottom:3,lineHeight:1}}>{q.icon}</div>
                <div style={{fontSize:13,fontWeight:700,color:T.text,marginBottom:1}}>{q.title}</div>
                <div style={{fontSize:11,color:T.textMuted,lineHeight:1.4}}>{q.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{marginTop:48,paddingTop:24,borderTop:`1px solid ${T.borderLight}`,display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <div style={{display:'flex',alignItems:'center',gap:10}}>
            <div style={{background:T.red,width:24,height:24,borderRadius:2,display:'flex',alignItems:'center',justifyContent:'center'}}>
              <span style={{color:'white',fontWeight:700,fontSize:8,fontFamily:T.font}}>LOR</span>
            </div>
            <div>
              <div style={{fontSize:10,fontWeight:700,color:T.text,fontFamily:T.font,letterSpacing:1,textTransform:'uppercase'}}>The Power of Experience</div>
              <div style={{fontSize:10,color:T.textMuted,fontFamily:T.font}}>Laing O'Rourke · Fremantle Bridges Alliance · Perth WA</div>
            </div>
          </div>
          <div style={{fontSize:10,color:T.textMuted,fontFamily:T.font}}>© 2026 Laing O'Rourke. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { Dashboard });
