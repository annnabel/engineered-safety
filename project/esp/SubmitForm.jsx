
'use strict';
const { useState, useEffect } = React;

const STEPS = ['Project & Context','Problem & Solution','Links & Attachments','Review & Submit'];

const ProgressBar = ({ step, total }) => (
  <div style={{marginBottom:28}}>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
      <span style={{fontFamily:T.font,fontSize:12,color:T.textMuted,fontWeight:600}}>Step {step} of {total} — {STEPS[step-1]}</span>
      <span style={{fontFamily:T.font,fontSize:12,color:T.textMuted}}>{Math.round((step/total)*100)}% complete</span>
    </div>
    <div style={{height:4,background:T.borderLight,borderRadius:2,overflow:'hidden'}}>
      <div style={{height:'100%',width:`${(step/total)*100}%`,background:T.teal,borderRadius:2,transition:'width 400ms cubic-bezier(.4,0,.2,1)'}} />
    </div>
    <div style={{display:'flex',gap:0,marginTop:10}}>
      {STEPS.map((s,i) => (
        <div key={i} style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',gap:4}}>
          <div style={{width:24,height:24,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:10,fontWeight:700,fontFamily:T.font,
            background: i+1<step?T.teal:i+1===step?T.teal:'white',
            color: i+1<=step?'white':T.textMuted,
            border:`2px solid ${i+1<=step?T.teal:T.borderLight}`,
            transition:'all 300ms',
          }}>{i+1<step?'✓':i+1}</div>
          <span style={{fontSize:9,color:i+1<=step?T.teal:T.textMuted,fontFamily:T.font,fontWeight:i+1===step?700:400,textAlign:'center',lineHeight:1.3}}>{s}</span>
        </div>
      ))}
    </div>
  </div>
);

const Field = ({label,required,helper,error,children}) => (
  <div style={{marginBottom:20}}>
    <label style={{display:'block',fontFamily:T.font,fontSize:12,fontWeight:600,color:T.textSec,marginBottom:5,letterSpacing:.2}}>
      {label} {required&&<span style={{color:T.red}}>*</span>}
      {helper&&<span style={{fontWeight:400,color:T.textMuted,marginLeft:4}}>({helper})</span>}
    </label>
    {children}
    {error&&<div style={{fontSize:11,color:T.red,fontFamily:T.font,marginTop:4}}>⚠ {error}</div>}
  </div>
);

const Input = ({value,onChange,placeholder,disabled,readOnly,error}) => (
  <input value={value} onChange={onChange} placeholder={placeholder} disabled={disabled} readOnly={readOnly}
    style={{
      width:'100%',height:40,padding:'8px 12px',fontFamily:T.font,fontSize:14,color:T.text,
      border:`1px solid ${error?T.red:T.border}`,borderRadius:4,background:disabled||readOnly?T.bg:'white',
      boxSizing:'border-box',outline:'none',cursor:disabled||readOnly?'not-allowed':'text',
    }}
    onFocus={e=>!disabled&&!readOnly&&(e.target.style.border=`1px solid ${T.teal}`,e.target.style.boxShadow=`0 0 0 3px rgba(0,167,181,.15)`)}
    onBlur={e=>e.target.style.boxShadow='none'}
  />
);

const Textarea = ({value,onChange,placeholder,rows=4,error}) => (
  <textarea value={value} onChange={onChange} placeholder={placeholder} rows={rows}
    style={{
      width:'100%',padding:'10px 12px',fontFamily:T.font,fontSize:14,color:T.text,
      border:`1px solid ${error?T.red:T.border}`,borderRadius:4,resize:'vertical',
      boxSizing:'border-box',outline:'none',lineHeight:1.5,
    }}
    onFocus={e=>(e.target.style.border=`1px solid ${T.teal}`,e.target.style.boxShadow=`0 0 0 3px rgba(0,167,181,.15)`)}
    onBlur={e=>e.target.style.boxShadow='none'}
  />
);

const Select = ({value,onChange,options,error}) => (
  <div style={{position:'relative'}}>
    <select value={value} onChange={onChange}
      style={{width:'100%',height:40,padding:'8px 36px 8px 12px',fontFamily:T.font,fontSize:14,color:value?T.text:T.textMuted,border:`1px solid ${error?T.red:T.border}`,borderRadius:4,background:'white',appearance:'none',boxSizing:'border-box',outline:'none',cursor:'pointer'}}
      onFocus={e=>(e.target.style.border=`1px solid ${T.teal}`,e.target.style.boxShadow=`0 0 0 3px rgba(0,167,181,.15)`)}
      onBlur={e=>e.target.style.boxShadow='none'}
    >
      {options.map(o=><option key={o.value||o} value={o.value||o}>{o.label||o}</option>)}
    </select>
    <span style={{position:'absolute',right:12,top:'50%',transform:'translateY(-50%)',pointerEvents:'none',color:T.textMuted,fontSize:12}}>▾</span>
  </div>
);

const AutoSaveBadge = () => (
  <span style={{fontFamily:T.font,fontSize:11,color:T.green,display:'flex',alignItems:'center',gap:4}}>
    <span>✓</span> Draft auto-saved
  </span>
);

const Step1 = ({data,setData,errors}) => (
  <div>
    <div style={{background:'#e3f2fd',border:`1px solid #90caf9`,borderRadius:6,padding:'10px 14px',marginBottom:20,fontFamily:T.font,fontSize:12,color:'#1565c0'}}>
      ℹ Fields below are auto-populated from your profile. Edit if needed.
    </div>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:0}}>
      <div style={{paddingRight:16}}>
        <Field label="Project Name" required helper="auto-populated, editable">
          <Select value={data.project} onChange={e=>setData({...data,project:e.target.value})} options={[
            {value:'FBA',label:'Fremantle Bridges Alliance'},
            {value:'other',label:'Other Project'},
          ]} />
        </Field>
        <Field label="Sector" required helper="auto-populated" error={errors.sector}>
          <Select value={data.sector} onChange={e=>setData({...data,sector:e.target.value})} error={errors.sector} options={[
            {value:'',label:'Select sector…'},
            {value:'Rail',label:'Rail'},
            {value:'Roads',label:'Roads'},
            {value:'Defence',label:'Defence'},
            {value:'Delivery Partner',label:'Delivery Partner'},
            {value:'Water',label:'Water'},
            {value:'Energy',label:'Energy'},
          ]} />
        </Field>
        <Field label="Site Location" required error={errors.location}>
          <Input value={data.location} onChange={e=>setData({...data,location:e.target.value})} placeholder="e.g. North Pylon Pier 3" error={errors.location} />
        </Field>
      </div>
      <div style={{paddingLeft:16,borderLeft:`1px solid ${T.borderLight}`}}>
        <Field label="Submitter Name">
          <Input value={data.submitter} readOnly />
        </Field>
        <Field label="Date" helper="auto-populated">
          <Input value={data.date} readOnly />
        </Field>
        <Field label="Applicable Phase" required error={errors.phase}>
          <Select value={data.phase} onChange={e=>setData({...data,phase:e.target.value})} error={errors.phase} options={[
            {value:'',label:'Select phase…'},
            {value:'Planning',label:'Planning'},
            {value:'Design',label:'Design'},
            {value:'Procurement & Supply',label:'Procurement & Supply'},
            {value:'Construction',label:'Construction'},
            {value:'Completion',label:'Completion'},
          ]} />
        </Field>
      </div>
    </div>
  </div>
);

const Step2 = ({data,setData,errors}) => (
  <div>
    <Field label="Problem Statement" required helper="What is the safety issue you observed?" error={errors.problem}>
      <Textarea value={data.problem} onChange={e=>setData({...data,problem:e.target.value})} placeholder="Describe the hazard or safety gap. Be specific about location, task, and who is at risk." rows={5} error={errors.problem} />
    </Field>
    <Field label="Proposed Solution" required helper="How does your idea address the problem?" error={errors.solution}>
      <Textarea value={data.solution} onChange={e=>setData({...data,solution:e.target.value})} placeholder="Describe your proposed engineered safety solution. Include how it would be implemented." rows={5} error={errors.solution} />
    </Field>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
      <Field label="Expected Health Benefit" required error={errors.benefit}>
        <Select value={data.benefit} onChange={e=>setData({...data,benefit:e.target.value})} error={errors.benefit} options={[
          {value:'',label:'Select benefit…'},
          {value:'Eliminate hazard',label:'Eliminate hazard'},
          {value:'Reduce fall risk',label:'Reduce fall risk'},
          {value:'Reduce struck-by risk',label:'Reduce struck-by risk'},
          {value:'Reduce manual handling',label:'Reduce manual handling'},
          {value:'Improve visibility/lighting',label:'Improve visibility/lighting'},
          {value:'Reduce dust/noise exposure',label:'Reduce dust/noise exposure'},
          {value:'Other',label:'Other'},
        ]} />
      </Field>
      <Field label="Risk Level Addressed" required>
        <Select value={data.risk} onChange={e=>setData({...data,risk:e.target.value})} options={[
          {value:'',label:'Select level…'},
          {value:'Critical',label:'Critical (life-threatening)'},
          {value:'High',label:'High (serious injury likely)'},
          {value:'Medium',label:'Medium (injury possible)'},
          {value:'Low',label:'Low (minor inconvenience)'},
        ]} />
      </Field>
    </div>
    {/* File Upload */}
    <Field label="Supporting Files" helper="Optional — photos, drawings, videos">
      <div style={{
        border:`2px dashed ${data.files.length?T.teal:T.border}`,borderRadius:6,
        padding:'28px 24px',textAlign:'center',background:T.bg,cursor:'pointer',transition:'all 150ms',
      }}
      onMouseEnter={e=>(e.currentTarget.style.border=`2px dashed ${T.teal}`,e.currentTarget.style.background='#e6f7f8')}
      onMouseLeave={e=>(e.currentTarget.style.border=`2px dashed ${data.files.length?T.teal:T.border}`,e.currentTarget.style.background=T.bg)}
      onClick={()=>setData({...data,files:[...data.files,`Image_${Date.now()}.jpg`]})}
      >
        <div style={{fontSize:28,marginBottom:8}}>📎</div>
        <div style={{fontFamily:T.font,fontSize:13,color:T.textSec,fontWeight:500}}>Drag & drop files here, or click to select</div>
        <div style={{fontFamily:T.font,fontSize:11,color:T.textMuted,marginTop:4}}>PDF, DOCX, JPG, PNG, MP4 — max 100MB per file</div>
      </div>
      {data.files.length>0&&(
        <div style={{marginTop:10,display:'flex',flexDirection:'column',gap:6}}>
          {data.files.map((f,i)=>(
            <div key={i} style={{display:'flex',alignItems:'center',gap:10,background:'#ecfae3',border:`1px solid #c3e6cb`,borderRadius:4,padding:'8px 12px'}}>
              <span style={{fontSize:14}}>📄</span>
              <span style={{flex:1,fontFamily:T.font,fontSize:12,color:T.text}}>{f}</span>
              <span style={{fontSize:11,color:T.green,fontWeight:600,fontFamily:T.font}}>✓ Ready</span>
              <button onClick={e=>{e.stopPropagation();setData({...data,files:data.files.filter((_,j)=>j!==i)})}} style={{background:'none',border:'none',cursor:'pointer',color:T.textMuted,fontSize:16,lineHeight:1}}>×</button>
            </div>
          ))}
        </div>
      )}
    </Field>
  </div>
);

const FSR_OPTIONS = [
  'Confined Space',
  'Cranes and Lifting',
  'Demolition',
  'Excavation',
  'Formwork & Falsework',
  'General Electrical Safety',
  'Hazardous Dust & Fibres',
  'Hazardous Energy',
  'Heavy Vehicles',
  'Plant and Equipment',
  'Piling',
  'Precast Concrete',
  'Prevention of Falls & Dropped Objects',
  'Scaffolding',
  'Traffic Management',
  'Work in Rail Environments',
  'Work In, Over and Adjacent to Water',
];

const Step3 = ({data,setData}) => (
  <div>
    <Field label="FSR Category" helper="Select all relevant Fatal & Severe Risk categories" required>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:8}}>
        {FSR_OPTIONS.map(fsr=>{
          const checked = data.fsrs.includes(fsr);
          return (
            <label key={fsr} onClick={()=>setData({...data,fsrs:checked?data.fsrs.filter(f=>f!==fsr):[...data.fsrs,fsr]})}
              style={{
                display:'flex',alignItems:'center',gap:8,padding:'10px 12px',cursor:'pointer',
                borderRadius:6,border:`2px solid ${checked?T.teal:T.borderLight}`,
                background:checked?'#e6f7f8':'white',transition:'all 120ms',userSelect:'none',
              }}
              onMouseEnter={e=>{if(!checked)e.currentTarget.style.borderColor=T.border;}}
              onMouseLeave={e=>{if(!checked)e.currentTarget.style.borderColor=T.borderLight;}}
            >
              <div style={{
                width:18,height:18,borderRadius:4,flexShrink:0,
                border:`2px solid ${checked?T.teal:T.border}`,
                background:checked?T.teal:'white',
                display:'flex',alignItems:'center',justifyContent:'center',transition:'all 120ms',
              }}>
                {checked&&<span style={{color:'white',fontSize:10,fontWeight:700,lineHeight:1}}>✓</span>}
              </div>
              <span style={{fontFamily:T.font,fontSize:12,color:checked?T.teal:T.text,fontWeight:checked?600:400,lineHeight:1.3}}>{fsr}</span>
            </label>
          );
        })}
      </div>
    </Field>
    {data.fsrs.length>0&&(
      <div style={{display:'flex',gap:6,flexWrap:'wrap',marginTop:-8,marginBottom:20}}>
        {data.fsrs.map(f=>(
          <span key={f} style={{background:'#e6f7f8',color:T.teal,border:`1px solid #b2dfdb`,padding:'3px 10px',borderRadius:12,fontSize:11,fontFamily:T.font,fontWeight:600,display:'flex',alignItems:'center',gap:4}}>
            {f.split(':')[0]}
            <button onClick={()=>setData({...data,fsrs:data.fsrs.filter(x=>x!==f)})} style={{background:'none',border:'none',cursor:'pointer',color:T.teal,fontSize:14,lineHeight:1,padding:0}}>×</button>
          </span>
        ))}
      </div>
    )}
    <Field label="Linked PC1 Incident" helper="Optional — paste PC1 reference number">
      <Input value={data.pc1} onChange={e=>setData({...data,pc1:e.target.value})} placeholder="e.g. PC1-2026-0142" />
    </Field>
    <Field label="Success Metrics" helper="Optional — how will effectiveness be measured?">
      <Textarea value={data.metrics} onChange={e=>setData({...data,metrics:e.target.value})} placeholder="e.g. Reduce fall incidents by 50% on Pier 3 deck works within 3 months of implementation." rows={3} />
    </Field>
  </div>
);

const Step4 = ({data}) => (
  <div>
    <div style={{background:'#e3f2fd',border:`1px solid #90caf9`,borderRadius:6,padding:'12px 16px',marginBottom:24,fontFamily:T.font,fontSize:12,color:'#1565c0'}}>
      Please review your submission before sending. You can go back to edit any section.
    </div>
    {[
      {label:'Project',value:data.project==='FBA'?'Fremantle Bridges Alliance':data.project},
      {label:'Sector',value:data.sector},
      {label:'Location',value:data.location},
      {label:'Phase',value:data.phase},
      {label:'Problem',value:data.problem,long:true},
      {label:'Solution',value:data.solution,long:true},
      {label:'Health Benefit',value:data.benefit},
      {label:'Risk Level',value:data.risk},
      {label:'FSR Categories',value:data.fsrs.join(', ')||'—'},
      {label:'Attachments',value:data.files.length?data.files.join(', '):'None'},
    ].map(r=>(
      <div key={r.label} style={{display:'grid',gridTemplateColumns:'160px 1fr',gap:0,borderBottom:`1px solid ${T.borderLight}`,padding:'10px 0'}}>
        <span style={{fontFamily:T.font,fontSize:12,fontWeight:600,color:T.textMuted,textTransform:'uppercase',letterSpacing:.5,paddingTop:1}}>{r.label}</span>
        <span style={{fontFamily:T.font,fontSize:13,color:T.text,lineHeight:1.5}}>{r.value||<span style={{color:T.textMuted,fontStyle:'italic'}}>Not provided</span>}</span>
      </div>
    ))}
  </div>
);

const SubmitForm = ({ nav, showToast }) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    project:'FBA', sector:'Rail', location:'', submitter:'Jake Anderson',
    date:'29 Apr 2026', phase:'', problem:'', solution:'', benefit:'', risk:'',
    files:[], fsrs:[], pc1:'', metrics:'',
  });

  const validate = () => {
    const e = {};
    if(step===1){ if(!data.sector)e.sector='Please select a sector'; if(!data.location)e.location='Please enter site location'; if(!data.phase)e.phase='Please select a phase'; }
    if(step===2){ if(!data.problem||data.problem.length<20)e.problem='Please describe the problem (min 20 characters)'; if(!data.solution||data.solution.length<20)e.solution='Please describe the solution (min 20 characters)'; if(!data.benefit)e.benefit='Please select the expected health benefit'; }
    if(step===3){ if(!data.fsrs.length)e.fsrs='Please select at least one FSR category'; }
    setErrors(e);
    return !Object.keys(e).length;
  };

  const next = () => { if(validate()) setStep(s=>Math.min(s+1,4)); };
  const back = () => { setErrors({}); setStep(s=>Math.max(s-1,1)); };

  const submit = () => {
    setSubmitted(true);
    showToast('✓ Idea ES-248 submitted successfully! Routing to your ESL for review.','success');
  };

  if(submitted) return (
    <div style={{background:T.bg,minHeight:'calc(100vh - 64px)',display:'flex',alignItems:'center',justifyContent:'center',padding:32}}>
      <div style={{background:T.white,borderRadius:12,padding:'48px 40px',maxWidth:520,textAlign:'center',boxShadow:T.s2}}>
        <div style={{width:64,height:64,background:'#ecfae3',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 20px',fontSize:28}}>✓</div>
        <h2 style={{fontFamily:T.font,fontSize:22,fontWeight:700,color:T.text,margin:'0 0 8px'}}>Idea Submitted!</h2>
        <div style={{fontFamily:T.font,fontSize:13,color:T.textMuted,marginBottom:6}}>Your submission has been assigned reference number</div>
        <div style={{fontFamily:T.font,fontSize:20,fontWeight:700,color:T.teal,marginBottom:16}}>ES-248</div>
        <p style={{fontFamily:T.font,fontSize:13,color:T.textSec,lineHeight:1.6,marginBottom:28}}>Your idea has been sent to your Engineering Safety Lead for initial review. You'll receive an email notification when its status changes.</p>
        <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
          <Btn onClick={() => { setSubmitted(false); setStep(1); setData({project:'FBA',sector:'Rail',location:'',submitter:'Jake Anderson',date:'29 Apr 2026',phase:'',problem:'',solution:'',benefit:'',risk:'',files:[],fsrs:[],pc1:'',metrics:''}); }}>Submit Another</Btn>
          <Btn variant="secondary" onClick={() => nav('dashboard')}>Back to Dashboard</Btn>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{background:T.bg,minHeight:'calc(100vh - 64px)',padding:'28px 32px'}}>
      <div style={{maxWidth:800,margin:'0 auto'}}>
        <div style={{fontFamily:T.font,fontSize:11,color:T.textMuted,marginBottom:12}}>Home › Submit New Idea</div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:24}}>
          <div>
            <h1 style={{fontFamily:T.font,fontSize:22,fontWeight:700,color:T.text,margin:0}}>Submit a Safety Idea</h1>
            <p style={{fontFamily:T.font,fontSize:13,color:T.textMuted,margin:'4px 0 0'}}>Fremantle Bridges Alliance · FBA</p>
          </div>
          <AutoSaveBadge />
        </div>

        <Card>
          <ProgressBar step={step} total={4} />

          {Object.keys(errors).length>0&&(
            <div style={{background:'#fce4ec',border:`1px solid ${T.red}`,borderRadius:6,padding:'12px 16px',marginBottom:20}}>
              <div style={{fontFamily:T.font,fontSize:13,fontWeight:600,color:T.red,marginBottom:6}}>Please fix the following errors:</div>
              {Object.values(errors).map((e,i)=><div key={i} style={{fontFamily:T.font,fontSize:12,color:T.red}}>• {e}</div>)}
            </div>
          )}

          {step===1&&<Step1 data={data} setData={setData} errors={errors} />}
          {step===2&&<Step2 data={data} setData={setData} errors={errors} />}
          {step===3&&<Step3 data={data} setData={setData} errors={errors} />}
          {step===4&&<Step4 data={data} errors={errors} />}

          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:28,paddingTop:20,borderTop:`1px solid ${T.borderLight}`}}>
            <div style={{display:'flex',gap:10}}>
              {step>1&&<Btn variant="ghost" onClick={back}>← Back</Btn>}
              <Btn variant="secondary" onClick={() => showToast('Draft saved. You can resume any time.','info')}>Save Draft</Btn>
            </div>
            <div style={{display:'flex',gap:10}}>
              {step<4
                ? <Btn onClick={next}>Next Step →</Btn>
                : <Btn onClick={submit}>Submit Idea ✓</Btn>
              }
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

Object.assign(window, { SubmitForm });
