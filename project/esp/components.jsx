
'use strict';
const { useState, useEffect, useRef } = React;

// ── DESIGN TOKENS ──────────────────────────────────────────────────────────
const T = {
  red:'#e30613', redHover:'#b80409', redActive:'#7a0206',
  teal:'#00a7b5', tealDark:'#009cde',
  green:'#64a70b', orange:'#fe5000', yellow:'#ffcd00',
  text:'#2d2d2d', textSec:'#4d4d4d', textMuted:'#999999',
  border:'#cccccc', borderLight:'#e6e6e6',
  bg:'#f2f2f2', white:'#ffffff',
  font:'"Century Gothic", Arial, Helvetica, sans-serif',
  s1:'0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)',
  s2:'0 3px 6px rgba(0,0,0,.15),0 2px 4px rgba(0,0,0,.12)',
  s3:'0 10px 20px rgba(0,0,0,.15),0 3px 6px rgba(0,0,0,.10)',
};

// ── LOR LOGO ───────────────────────────────────────────────────────────────
const LORLogo = ({ onClick }) => (
  <div onClick={onClick} style={{display:'flex',alignItems:'center',gap:10,cursor:'pointer',userSelect:'none'}}>
    <div style={{background:T.red,width:38,height:38,borderRadius:3,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
      <span style={{color:'white',fontWeight:700,fontSize:11,fontFamily:T.font,letterSpacing:1}}>LOR</span>
    </div>
    <div style={{lineHeight:1.25}}>
      <div style={{fontWeight:700,fontSize:14,color:T.text,fontFamily:T.font}}>Engineered Safety</div>
      <div style={{fontWeight:400,fontSize:10,color:T.textMuted,fontFamily:T.font,letterSpacing:.3}}>Platform · FBA</div>
    </div>
  </div>
);

// ── HEADER ─────────────────────────────────────────────────────────────────
const Header = ({ view, nav, notifCount=3, roleNav=[], roleLabel='', onSwitchRole }) => {
  const [menu, setMenu] = useState(false);
  return (
    <header style={{
      background:T.white,borderBottom:`1px solid ${T.borderLight}`,
      height:64,display:'flex',alignItems:'center',padding:'0 32px',
      position:'sticky',top:0,zIndex:100,boxShadow:T.s1,gap:8,
    }}>
      <LORLogo onClick={() => nav('dashboard')} />
      <nav style={{display:'flex',gap:2,flex:1,marginLeft:16}}>
        {roleNav.map(n => (
          <button key={n.id} onClick={() => nav(n.id)} style={{
            background:'none',border:'none',borderBottom:`2px solid ${view===n.id?T.teal:'transparent'}`,
            cursor:'pointer',padding:'8px 14px',fontFamily:T.font,fontSize:13.5,
            fontWeight:view===n.id?600:400,color:view===n.id?T.teal:T.textSec,
            transition:'color 120ms',borderRadius:'4px 4px 0 0',
          }}>{n.label}</button>
        ))}
      </nav>
      <div style={{display:'flex',alignItems:'center',gap:12,flexShrink:0}}>
        <div style={{position:'relative'}}>
          <button style={{background:'none',border:'none',cursor:'pointer',padding:'4px 8px',fontSize:18,color:T.textSec,lineHeight:1}}>🔔</button>
          {notifCount>0 && <span style={{position:'absolute',top:0,right:0,background:T.red,color:'white',borderRadius:'50%',width:16,height:16,fontSize:9,fontWeight:700,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:T.font}}>{notifCount}</span>}
        </div>
        <div style={{position:'relative'}}>
          <button onClick={()=>setMenu(p=>!p)} style={{
            background:T.teal,border:'none',cursor:'pointer',
            width:34,height:34,borderRadius:'50%',color:'white',
            fontFamily:T.font,fontSize:12,fontWeight:700,
          }}>JA</button>
          {menu && (
            <div style={{position:'absolute',right:0,top:42,background:T.white,border:`1px solid ${T.borderLight}`,borderRadius:8,boxShadow:T.s2,minWidth:200,zIndex:200,overflow:'hidden'}}>
              <div style={{padding:'12px 16px',borderBottom:`1px solid ${T.borderLight}`}}>
                <div style={{fontWeight:600,fontSize:13,color:T.text,fontFamily:T.font}}>Jake Anderson</div>
                <div style={{fontSize:11,color:T.teal,fontFamily:T.font,fontWeight:600,marginTop:2}}>{roleLabel}</div>
              </div>
              {['My Profile','Preferences','Help & Support'].map(itm => (
                <button key={itm} onClick={()=>setMenu(false)} style={{display:'block',width:'100%',textAlign:'left',background:'none',border:'none',padding:'9px 16px',fontSize:13,fontFamily:T.font,color:T.text,cursor:'pointer'}}
                onMouseEnter={e=>e.currentTarget.style.background=T.bg}
                onMouseLeave={e=>e.currentTarget.style.background='none'}
                >{itm}</button>
              ))}
              <div style={{borderTop:`1px solid ${T.borderLight}`}}>
                <button onClick={()=>{setMenu(false);onSwitchRole&&onSwitchRole();}} style={{display:'block',width:'100%',textAlign:'left',background:'none',border:'none',padding:'9px 16px',fontSize:13,fontFamily:T.font,color:T.red,cursor:'pointer',fontWeight:600}}
                onMouseEnter={e=>e.currentTarget.style.background='#fce4ec'}
                onMouseLeave={e=>e.currentTarget.style.background='none'}
                >Switch Role</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

// ── BUTTON ─────────────────────────────────────────────────────────────────
const Btn = ({ children, variant='primary', size='md', onClick, disabled, style:ext={} }) => {
  const [h,setH] = useState(false);
  const vs = {
    primary:{bg:h?T.redHover:T.red,color:'white',border:'none'},
    secondary:{bg:h?'#fce4e6':'#fff5f5',color:T.redActive,border:`2px solid ${T.red}`},
    teal:{bg:h?T.tealDark:T.teal,color:'white',border:'none'},
    ghost:{bg:h?T.borderLight:T.bg,color:T.text,border:`1px solid ${T.textMuted}`},
    danger:{bg:h?T.redHover:T.red,color:'white',border:'none'},
  };
  const sz = {sm:{p:'6px 14px',fs:12,h:32},md:{p:'9px 20px',fs:13.5,h:40},lg:{p:'12px 28px',fs:15,h:48}};
  const v = vs[variant]||vs.primary; const s = sz[size]||sz.md;
  return (
    <button onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
      onClick={onClick} disabled={disabled}
      style={{...v,padding:s.p,fontSize:s.fs,height:s.h,borderRadius:4,
        cursor:disabled?'not-allowed':'pointer',fontFamily:T.font,fontWeight:600,
        opacity:disabled?.6:1,display:'inline-flex',alignItems:'center',
        justifyContent:'center',gap:6,transition:'all 120ms',
        boxSizing:'border-box',flexShrink:0,...ext}}
    >{children}</button>
  );
};

// ── STATUS BADGE ───────────────────────────────────────────────────────────
const BADGE_CFG = {
  'Submitted':     {bg:'#e8f0fe',color:'#1a56db'},
  'Under Review':  {bg:'#fff3e0',color:'#c75000'},
  'Pending Decision':{bg:'#f3e8ff',color:'#7c3aed'},
  'Approved':      {bg:'#ecfae3',color:T.green},
  'Rejected':      {bg:'#fce4ec',color:T.red},
  'Closed':        {bg:'#f5f5f5',color:T.textMuted},
  'In Progress':   {bg:'#fff8e1',color:'#e65100'},
  'New':           {bg:'#ecfae3',color:T.green},
  'LOR Preferred': {bg:'#fffde7',color:'#c79200'},
  'Case Study':    {bg:'#e8eaf6',color:'#3949ab'},
  'Not Started':   {bg:'#f5f5f5',color:T.textMuted},
  'Pending Approval':{bg:'#f3e8ff',color:'#7c3aed'},
};
const StatusBadge = ({status,icon}) => {
  const c = BADGE_CFG[status]||{bg:T.bg,color:T.textMuted};
  return <span style={{background:c.bg,color:c.color,padding:'3px 10px',borderRadius:12,fontSize:11,fontWeight:600,fontFamily:T.font,display:'inline-block',whiteSpace:'nowrap'}}>{icon&&<span style={{marginRight:4}}>{icon}</span>}{status}</span>;
};

// ── SECTOR TAG ─────────────────────────────────────────────────────────────
const SECTOR_COLORS = {Rail:'#7c3aed',Roads:'#1d4ed8',Defence:'#5b21b6','Delivery Partner':'#0e7490',Water:'#065f46',Energy:'#b91c1c',Other:'#6b7280'};
const SectorTag = ({sector}) => (
  <span style={{background:SECTOR_COLORS[sector]||SECTOR_COLORS.Other,color:'white',padding:'2px 10px',borderRadius:12,fontSize:10,fontWeight:500,fontFamily:T.font,display:'inline-block'}}>{sector}</span>
);

// ── KPI CARD ───────────────────────────────────────────────────────────────
const KPICard = ({label,value,trend,trendLabel,cta,onCta,loading,accent}) => (
  <div style={{background:T.white,borderRadius:8,padding:'20px',boxShadow:T.s1,flex:'1 1 160px',borderTop:`3px solid ${accent||T.teal}`,minWidth:0}}>
    {loading ? (
      <div style={{animation:'pulse 1.5s ease infinite'}}>
        <div style={{height:11,width:'55%',background:T.borderLight,borderRadius:3,marginBottom:12}} />
        <div style={{height:36,width:'40%',background:T.borderLight,borderRadius:3,marginBottom:8}} />
        <div style={{height:10,width:'45%',background:T.borderLight,borderRadius:3}} />
      </div>
    ) : (
      <>
        <div style={{fontSize:11,color:T.textMuted,fontFamily:T.font,fontWeight:600,textTransform:'uppercase',letterSpacing:.7,marginBottom:8}}>{label}</div>
        <div style={{fontSize:34,fontWeight:700,color:T.text,fontFamily:T.font,lineHeight:1,marginBottom:6}}>{value}</div>
        {trend!=null&&<div style={{fontSize:11,color:trend>0?T.green:T.red,fontFamily:T.font,fontWeight:600}}>{trend>0?'↑':'↓'} {Math.abs(trend)}% {trendLabel}</div>}
        {cta&&<button onClick={onCta} style={{background:'none',border:'none',cursor:'pointer',color:T.teal,fontSize:11,fontFamily:T.font,fontWeight:600,padding:0,marginTop:6,display:'block'}}>{cta} →</button>}
      </>
    )}
  </div>
);

// ── TOAST ──────────────────────────────────────────────────────────────────
const Toast = ({message,type='success',onDismiss}) => {
  useEffect(()=>{const t=setTimeout(onDismiss,5000);return()=>clearTimeout(t);},[]);
  const cfg={success:{bg:'#ecfae3',border:T.green,icon:'✓'},error:{bg:'#fce4ec',border:T.red,icon:'✗'},warning:{bg:'#fff8e1',border:T.orange,icon:'⚠'},info:{bg:'#e3f2fd',border:T.teal,icon:'ℹ'}};
  const c=cfg[type]||cfg.info;
  return (
    <div style={{position:'fixed',bottom:24,right:24,zIndex:3000,background:c.bg,border:`1px solid ${c.border}`,borderLeft:`4px solid ${c.border}`,borderRadius:8,padding:'14px 44px 14px 16px',maxWidth:380,boxShadow:T.s2,fontFamily:T.font,fontSize:13.5,color:T.text,display:'flex',alignItems:'center',gap:10,animation:'slideUp .25s ease'}}>
      <span style={{fontSize:16,flexShrink:0}}>{c.icon}</span>
      {message}
      <button onClick={onDismiss} style={{position:'absolute',right:12,top:'50%',transform:'translateY(-50%)',background:'none',border:'none',cursor:'pointer',color:T.textMuted,fontSize:20,lineHeight:1}}>×</button>
    </div>
  );
};

// ── STAR RATING ────────────────────────────────────────────────────────────
const Stars = ({rating, count, size=14}) => (
  <span style={{display:'inline-flex',alignItems:'center',gap:3}}>
    {[1,2,3,4,5].map(i=>(
      <span key={i} style={{fontSize:size,color:i<=Math.round(rating)?'#f59e0b':'#ddd',lineHeight:1}}>★</span>
    ))}
    <span style={{fontSize:11,color:T.textMuted,fontFamily:T.font,marginLeft:2}}>{rating} ({count})</span>
  </span>
);

// ── PAGE SHELL ─────────────────────────────────────────────────────────────
const Page = ({children,title,subtitle,actions,breadcrumb}) => (
  <div style={{background:T.bg,minHeight:'calc(100vh - 64px)',padding:'28px 32px'}}>
    {breadcrumb && <div style={{fontSize:11,color:T.textMuted,fontFamily:T.font,marginBottom:12}}>{breadcrumb}</div>}
    {(title||actions) && (
      <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',marginBottom:24}}>
        <div>
          <h1 style={{fontFamily:T.font,fontSize:24,fontWeight:700,color:T.text,margin:0,lineHeight:1.2}}>{title}</h1>
          {subtitle&&<p style={{fontFamily:T.font,fontSize:13.5,color:T.textMuted,margin:'4px 0 0'}}>{subtitle}</p>}
        </div>
        {actions&&<div style={{display:'flex',gap:8}}>{actions}</div>}
      </div>
    )}
    {children}
  </div>
);

// ── SECTION CARD ───────────────────────────────────────────────────────────
const Card = ({children,style:ext={}}) => (
  <div style={{background:T.white,borderRadius:8,padding:24,boxShadow:T.s1,...ext}}>{children}</div>
);

// ── DAYS PENDING INDICATOR ─────────────────────────────────────────────────
const DaysPending = ({days}) => (
  <span style={{fontFamily:T.font,fontSize:12,fontWeight:600,color:days>7?T.red:days>3?T.orange:T.green}}>
    {days}d {days>7?'🔴':days>3?'⚠️':''}
  </span>
);

Object.assign(window, {T,LORLogo,Header,Btn,StatusBadge,SectorTag,KPICard,Toast,Stars,Page,Card,DaysPending});
