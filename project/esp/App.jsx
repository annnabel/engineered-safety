'use strict';
const { useState } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentColor": "#00a7b5",
  "primaryCTA": "#e30613",
  "density": "comfortable",
  "showHero": true
}/*EDITMODE-END*/;

// ── ROLE DEFINITIONS ────────────────────────────────────────────────────────
const ROLES = [
  { id:'team',       label:'Project Team Member',       desc:'Submit and track your safety ideas',            defaultView:'submit'     },
  { id:'esl',        label:'Engineered Safety Lead',    desc:'Review and action ideas from your team',        defaultView:'esl'        },
  { id:'leadership', label:'Project Leadership',        desc:'Final approvals and implementation oversight',  defaultView:'leadership'  },
];

const NAV_BY_ROLE = {
  team:       [{id:'dashboard',label:'Home'},{id:'submit',label:'Submit Idea'},{id:'search',label:'Search Library'}],
  esl:        [{id:'dashboard',label:'Home'},{id:'esl',label:'My Reviews'},{id:'search',label:'Search Library'}],
  leadership: [{id:'dashboard',label:'Home'},{id:'leadership',label:'Approvals'},{id:'search',label:'Search Library'}],
};

const STEP_BY_ROLE = { team:1, esl:2, leadership:3 };

// ── ROLE PICKER ─────────────────────────────────────────────────────────────
const RolePicker = ({ onSelect }) => {
  const [selected, setSelected] = useState('');
  const role = ROLES.find(r => r.id === selected);

  return (
    <div style={{minHeight:'100vh',background:T.bg,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:32}}>
      <div style={{maxWidth:480,width:'100%'}}>

        {/* Branding */}
        <div style={{textAlign:'center',marginBottom:36}}>
          <div style={{display:'inline-flex',alignItems:'center',gap:12,marginBottom:20}}>
            <div style={{background:T.red,width:52,height:52,borderRadius:5,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
              <span style={{color:'white',fontWeight:700,fontSize:14,fontFamily:T.font,letterSpacing:1}}>LOR</span>
            </div>
            <div style={{textAlign:'left'}}>
              <div style={{fontWeight:700,fontSize:19,color:T.text,fontFamily:T.font,lineHeight:1.2}}>Engineered Safety</div>
              <div style={{fontSize:11,color:T.textMuted,fontFamily:T.font,letterSpacing:.3}}>Platform · Fremantle Bridges Alliance</div>
            </div>
          </div>
          <h2 style={{fontFamily:T.font,fontSize:24,fontWeight:700,color:T.text,margin:'0 0 6px'}}>Welcome back</h2>
          <p style={{fontFamily:T.font,fontSize:13.5,color:T.textMuted,margin:0}}>Select your role to continue to the platform</p>
        </div>

        {/* Card */}
        <div style={{background:T.white,borderRadius:10,padding:32,boxShadow:T.s2}}>

          <div style={{marginBottom:role ? 16 : 28}}>
            <label style={{display:'block',fontFamily:T.font,fontSize:12,fontWeight:600,color:T.textSec,marginBottom:7,letterSpacing:.2}}>
              I am a… <span style={{color:T.red}}>*</span>
            </label>
            <div style={{position:'relative'}}>
              <select
                value={selected}
                onChange={e => setSelected(e.target.value)}
                style={{
                  width:'100%',height:46,padding:'10px 38px 10px 14px',
                  fontFamily:T.font,fontSize:14,color:selected ? T.text : T.textMuted,
                  border:`1px solid ${T.border}`,borderRadius:6,background:'white',
                  appearance:'none',boxSizing:'border-box',outline:'none',cursor:'pointer',
                }}
                onFocus={e  => { e.target.style.border=`1px solid ${T.teal}`; e.target.style.boxShadow=`0 0 0 3px rgba(0,167,181,.15)`; }}
                onBlur={e   => { e.target.style.boxShadow='none'; e.target.style.border=`1px solid ${T.border}`; }}
              >
                <option value="">Select your role…</option>
                {ROLES.map(r => <option key={r.id} value={r.id}>{r.label}</option>)}
              </select>
              <span style={{position:'absolute',right:14,top:'50%',transform:'translateY(-50%)',pointerEvents:'none',color:T.textMuted,fontSize:12}}>▾</span>
            </div>
          </div>

          {/* Role description hint */}
          {role && (
            <div style={{
              background:'#e6f7f8',border:`1px solid #b2dfdb`,borderRadius:6,
              padding:'11px 14px',marginBottom:24,
              display:'flex',gap:10,alignItems:'center',animation:'slideUp .2s ease',
            }}>
              <div style={{width:36,height:36,borderRadius:'50%',background:T.teal,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                <span style={{color:'white',fontWeight:700,fontSize:12,fontFamily:T.font}}>
                  {role.label.split(' ').map(w=>w[0]).join('').slice(0,2)}
                </span>
              </div>
              <div>
                <div style={{fontFamily:T.font,fontSize:13,fontWeight:600,color:T.teal,marginBottom:2}}>{role.label}</div>
                <div style={{fontFamily:T.font,fontSize:11.5,color:T.textSec}}>{role.desc}</div>
              </div>
            </div>
          )}

          <button
            disabled={!selected}
            onClick={() => onSelect(selected)}
            style={{
              width:'100%',height:46,background:selected ? T.red : '#d4d4d4',color:'white',border:'none',
              borderRadius:6,fontFamily:T.font,fontSize:14,fontWeight:700,
              cursor:selected ? 'pointer' : 'not-allowed',transition:'background 150ms',letterSpacing:.2,
            }}
            onMouseEnter={e => selected && (e.currentTarget.style.background = T.redHover)}
            onMouseLeave={e => (e.currentTarget.style.background = selected ? T.red : '#d4d4d4')}
          >
            Enter Platform →
          </button>

          <div style={{marginTop:20,paddingTop:16,borderTop:`1px solid ${T.borderLight}`,fontFamily:T.font,fontSize:11,color:T.textMuted,textAlign:'center'}}>
            Fremantle Bridges Alliance · Perth WA · April 2026
          </div>
        </div>
      </div>
    </div>
  );
};

// ── WORKFLOW BANNER ─────────────────────────────────────────────────────────


// ── APP ROOT ────────────────────────────────────────────────────────────────
const App = () => {
  const [role, setRole]   = useState(null);
  const [view, setView]   = useState('dashboard');
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type='success') => {
    const id = Date.now();
    setToasts(p => [...p, { id, message, type }]);
  };
  const dismissToast = id => setToasts(p => p.filter(t => t.id !== id));

  const nav = v => {
    setView(v);
    window.scrollTo({ top:0, behavior:'smooth' });
  };

  const handleRoleSelect = r => {
    setRole(r);
    setView(ROLES.find(x => x.id === r)?.defaultView || 'dashboard');
  };

  if (!role) return <RolePicker onSelect={handleRoleSelect} />;

  const roleNav   = NAV_BY_ROLE[role] || NAV_BY_ROLE.team;
  const roleStep  = STEP_BY_ROLE[role] || 1;
  const roleLabel = ROLES.find(r2 => r2.id === role)?.label || '';

  return (
    <div style={{ fontFamily:T.font, minHeight:'100vh', background:T.bg }}>
      <Header view={view} nav={nav} notifCount={3} roleNav={roleNav} roleLabel={roleLabel} onSwitchRole={() => setRole(null)} />

      {view === 'dashboard'  && <Dashboard    nav={nav} showToast={showToast} role={role} />}
      {view === 'submit'     && <SubmitForm   nav={nav} showToast={showToast} />}
      {view === 'search'     && <SearchResults nav={nav} showToast={showToast} />}
      {view === 'esl'        && <ESLDashboard nav={nav} showToast={showToast} />}
      {view === 'leadership' && <LeadershipDashboard nav={nav} showToast={showToast} />}

      {toasts.map(t => (
        <Toast key={t.id} message={t.message} type={t.type} onDismiss={() => dismissToast(t.id)} />
      ))}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
