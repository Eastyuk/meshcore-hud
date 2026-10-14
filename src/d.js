(()=>{const K="D",ck=window.__mcChecks=window.__mcChecks||{};try{const u=import.meta.url;if(!u.startsWith("data:"))return void(ck[K]="n/a");const c=u.indexOf(","),meta=u.slice(5,c)
;let t;if(/;base64/i.test(meta)){const b=atob(u.slice(c+1)),a=new Uint8Array(b.length);for(let i=0;i<b.length;i++)a[i]=b.charCodeAt(i);t=(new TextDecoder).decode(a)
}else t=decodeURIComponent(u.slice(c+1));const m=t.lastIndexOf("\n//#");if(m<0)return void(ck[K]="n/a");const body=t.slice(0,m);let h=2166136261
;for(let i=0;i<body.length;i++)h^=body.charCodeAt(i),h=Math.imul(h,16777619)>>>0;const got=h.toString(16).padStart(8,"0"),want=t.slice(m+4).trim()
;ck[K]=got===want?"ok":"bad "+got+" want "+want}catch(e){ck[K]="n/a"}})(),(window.__mcq=window.__mcq||[]).push(()=>{class McTracker extends McBase{static get defaults(){return{
trackers:[],trail_hours:72,center:"zone.home",title:"Trackers"}}getCardSize(){return 9}_watch(){if(!this._ids||Date.now()-this._idsT>6e4){
const ps=(this._config.trackers||[]).map(t=>String(t.prefix));this._ids=Object.keys(this._hass.states).filter(k=>ps.some(p=>k.includes(p))),this._idsT=Date.now()}return this._ids}
_build(){
this._shell("","\n.px{width:100%;max-width:400px;height:auto;display:block;margin:0 auto;font-family:'B612',sans-serif}\n.px *{vector-effect:non-scaling-stroke}\n.px .ring{fill:none;stroke:#26394a;stroke-width:1;stroke-dasharray:2 5}\n.px .rim{fill:none;stroke:#2b3d49;stroke-width:1.2}\n.px .zn{fill:#45d16e;fill-opacity:.06;stroke:#45d16e;stroke-opacity:.5;stroke-width:1}\n.px .rl{fill:#6a8391;font-size:19px;paint-order:stroke;stroke:#070b10;stroke-width:3px}\n.px .cd{fill:#e6edf1;font-size:21px;font-weight:700}\n.px .trl{fill:none;stroke:#e056d8;stroke-opacity:.55;stroke-width:1.4;stroke-linejoin:round}\n.px .tg{fill:#e056d8;stroke:#070b10;stroke-width:1}\n.px .tt{fill:#e056d8;font-size:22px;paint-order:stroke;stroke:#070b10;stroke-width:4px}\n.px .own{fill:none;stroke:#e056d8;stroke-width:1.4}\n.trk{padding:10px 0;border-top:1px solid var(--rule)}\n.trk:first-child{border-top:0;padding-top:0}\n.trk .l1{display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 10px;margin-bottom:8px}\n.trk .l1 .t{font-size:16px}\n.trk .l1 .sp{flex:1}\n.trk .act{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}\n",'<div class="hd" id="hd"></div><div class="sec" id="plot"></div><div class="sec" id="rows"></div>'),
this.shadowRoot.addEventListener("click",async e=>{const b=e.target.closest("button[data-act]");if(!b)return;if("more"===b.dataset.act)return void this._more(b.dataset.id)
;const out=this.shadowRoot.getElementById("to-"+b.dataset.pk);b.disabled=!0,out.innerHTML='<span class="d">Tracing route. This can take 20 s.</span>';try{
out.innerHTML=mcTraceHtml(await this._trace(b.dataset.pk))}catch(err){out.innerHTML=`<span class="r">Trace failed: ${mcEsc(err.message||err)}</span>`}b.disabled=!1})}_model(){
const h=this._hass,c=this._config,now=Date.now()/1e3,home=mcCenter(h,c.center),all=mcContacts(h,home);return(c.trackers||[]).map(t=>{
const p=String(t.prefix),ct=all.find(n=>n.pk.startsWith(p)),dtId=t.device_tracker||mcFindKey(h,`device_tracker.meshcore_${p}_gps_`),dt=mcSt(h,dtId);let lat=NaN,lon=NaN,src=""
;dt&&isFinite(parseFloat(dt.attributes.latitude))&&"unavailable"!==dt.state?(lat=+dt.attributes.latitude,lon=+dt.attributes.longitude,
src="GPS tracker entity"):ct&&ct.geo&&(lat=ct.lat,lon=ct.lon,src="Last advert");const g=isFinite(lat)?mcGeo(home.lat,home.lon,lat,lon):{d:NaN,b:NaN
},ok=mcNum(h,mcFindKey(h,`sensor.meshcore_${p}_request_successes_`)),bad=mcNum(h,mcFindKey(h,`sensor.meshcore_${p}_request_failures_`)),batId=mcFindKey(h,`sensor.meshcore_${p}_`,k=>k.includes("battery")),age=ct?ct.age:NaN,cls=ct?isFinite(age)&&age<3600?"g":isFinite(age)&&age<86400?"a":"r":"r",word=ct?"g"===cls?"Live":"a"===cls?"Stale":"Dark":"Not found"
;return{t,p,ct,dtId,lat,lon,src,d:g.d,b:g.b,ok,bad,bat:mcNum(h,batId),batId,age,cls,word,now,home}})}_render(){
const c=this._config,h=this._hass,M=this._model(),live=M.filter(m=>"g"===m.cls).length
;this._q("#hd").innerHTML=`<span class="t">${mcEsc(c.title)}</span><span class="sp"></span><span class="id"><span class="m ${live?"g":"r"}">${live}</span> of <span class="m">${M.length}</span> live</span>`,
(!this._histT||Date.now()-this._histT>6e5)&&(this._histT=Date.now(),this._fetchTrails(M).then(()=>this._drawPlot(this._model()))),this._drawPlot(M);let rows=""
;for(const m of M)rows+=`<div class="trk"><div class="l1"><span class="t">${mcEsc(m.t.name||m.ct&&m.ct.name||m.p)}</span><span class="m d">${mcEsc(m.p)}</span><span class="pill ${m.cls}">${m.word}</span><span class="sp"></span><span class="m">${mcKm(m.d)} ${isFinite(m.b)?String(Math.round(m.b)).padStart(3,"0")+"\xb0 "+mcCardinal(m.b):""}</span></div>\n<div class="kv">\n<div><span class="k">Last advert</span><span class="v ${m.cls}">${m.ct?m.ct.skew?"Clock ahead":mcAge(m.age)+" ago":"--"}</span></div>\n<div><span class="k">Position from</span><span class="v">${m.src||"No fix"}</span></div>\n<div><span class="k">Polls answered</span><span class="v m ${0===m.ok&&m.bad>0?"r":""}">${isFinite(m.ok)?m.ok:"--"} of ${isFinite(m.ok+m.bad)?m.ok+m.bad:"--"}</span></div>\n<div><span class="k">Battery</span><span class="v m">${isFinite(m.bat)?mcNumTxt(m.bat,0)+" "+mcEsc(mcSt(h,m.batId).attributes.unit_of_measurement||""):"--"}</span></div>\n${m.t.note?`<div><span class="k">Carried by</span><span class="v">${mcEsc(m.t.note)}</span></div>`:""}\n</div><div class="act">${m.ct&&m.ct.added?`<button data-act="trace" data-pk="${mcEsc(m.ct.pk)}">Trace route</button>`:""}${m.ct?`<button data-act="more" data-id="${m.ct.id}">Open contact</button>`:""}${m.dtId?`<button data-act="more" data-id="${m.dtId}">Open GPS entity</button>`:""}</div><div class="cap" id="to-${mcEsc(m.ct?m.ct.pk:m.p)}"></div></div>`
;M.length&&!live&&(rows+='<div class="cap" style="margin-top:8px">No tracker has sent an advert in the last hour. Positions shown are the last ones received.</div>'),
this._q("#rows").innerHTML=rows||'<div class="cap">Add trackers: to the card config with the public key prefix of each tracker.</div>'}async _fetchTrails(M){const ids=[]
;for(const m of M)m.dtId&&ids.push(m.dtId),m.ct&&ids.push(m.ct.id);if(!ids.length)return;const start=new Date(Date.now()-36e5*(+this._config.trail_hours||72)).toISOString();try{
const r=await this._hass.callWS({type:"history/history_during_period",start_time:start,entity_ids:ids,minimal_response:!1,no_attributes:!1,significant_changes_only:!1}),tr={}
;for(const id of ids){const pts=[];for(const e of r[id]||[]){const a=e.a||e.attributes||{},la=parseFloat(a.latitude??a.adv_lat),lo=parseFloat(a.longitude??a.adv_lon)
;if(isFinite(la)&&isFinite(lo)&&(0!==la||0!==lo)){const p=[la,lo],q=pts[pts.length-1];q&&q[0]===la&&q[1]===lo||pts.push(p)}}tr[id]=pts}this._trails=tr}catch(e){
console.warn("meshcore-tracker-card history",e)}}_drawPlot(M){
const h=this._hass,c=this._config,home=M.length?M[0].home:mcCenter(h,c.center),zs=mcSt(h,c.center||"zone.home"),zr=zs?(+zs.attributes.radius||0)/1e3:0,dmax=Math.max(2*zr,...M.map(m=>isFinite(m.d)?m.d:0)),D=mcNiceCeil(Math.max(.25,1.15*dmax),[.25,.5,1,2,5,10,25,50,100,250,500]),R=250,X=(d,b)=>[R*d*Math.sin(mcRad(b))/D,-R*d*Math.cos(mcRad(b))/D]
;let s='<svg viewBox="-300 -300 600 600" class="px" role="img" aria-label="Tracker positions relative to home">';for(let i=1;i<=4;i++){const r=R*i/4
;s+=`<circle r="${r}" class="${4===i?"rim":"ring"}"/><text x="${(.5*r+6).toFixed(1)}" y="${(.866*-r).toFixed(1)}" class="rl">${mcKm(D*i/4)}</text>`}
for(const[a,l]of[[0,"N"],[90,"E"],[180,"S"],[270,"W"]])s+=`<text x="${(274*Math.sin(mcRad(a))).toFixed(1)}" y="${(-274*Math.cos(mcRad(a))+5).toFixed(1)}" text-anchor="middle" class="cd">${l}</text>`
;zr>0&&(s+=`<circle r="${(R*zr/D).toFixed(1)}" class="zn"><title>Home zone</title></circle>`),
s+='<line x1="-9" x2="9" y1="0" y2="0" class="own"/><line y1="-9" y2="9" x1="0" x2="0" class="own"/>';for(const m of M){for(const id of[m.dtId,m.ct&&m.ct.id]){
const pts=this._trails&&id?this._trails[id]:null;pts&&pts.length>1&&(s+=`<polyline class="trl" points="${pts.map(p=>{
const g=mcGeo(home.lat,home.lon,p[0],p[1]),[x,y]=X(Math.min(g.d,D),g.b);return`${x.toFixed(1)},${y.toFixed(1)}`}).join(" ")}"/>`)}if(!isFinite(m.d))continue
;const[x,y]=X(Math.min(m.d,D),m.b),q=9
;s+=`<path d="M${x.toFixed(1)},${(y-q).toFixed(1)}L${(x+.9*q).toFixed(1)},${(y+.7*q).toFixed(1)}L${(x-.9*q).toFixed(1)},${(y+.7*q).toFixed(1)}Z" class="tg" opacity="${"g"===m.cls?1:.55}"/><text x="${(x+12).toFixed(1)}" y="${(y+5).toFixed(1)}" class="tt">${mcEsc(m.t.name||m.p)}</text>`
}s+="</svg>",this._q("#plot").innerHTML=`<div class="sh"><span>Position relative to home</span><span>trail ${+c.trail_hours||72} h, rim ${mcKm(D)}</span></div>${s}`}}
mcRegister("meshcore-tracker-card",McTracker,"MeshCore trackers","Tracker status, proximity plot with trails, reachability trace.");class McCensus extends McBase{
static get defaults(){return{center:"zone.home",exclude:[],title:"Mesh census",prune_days:30}}getCardSize(){return 10}constructor(){super(),this._minGap=15e3}_watch(){
return(!this._ids||Date.now()-this._idsT>6e4)&&(this._ids=Object.keys(this._hass.states).filter(k=>k.startsWith("binary_sensor.meshcore_")&&k.endsWith("_contact")),
this._idsT=Date.now()),this._ids}_build(){
this._shell("","\n.hg{display:grid;grid-template-columns:auto 1fr auto;gap:5px 10px;align-items:center}\n.hg .fl{font-size:12px;color:var(--dim);white-space:nowrap}\n.hg .ft{font-size:12px;text-align:right;min-width:2.5em}\n.hg .bar{display:flex;height:12px;background:#0e161d;border:1px solid var(--rule)}\n.hg .bar i{display:block;height:100%}\n.t2{background:var(--cyn)}.t1{background:var(--wht)}.t3{background:#6a8391}.t0{background:#3b5360}\n.lg{display:flex;flex-wrap:wrap;gap:4px 14px;margin-top:8px;font-size:11px;color:var(--dim)}\n.lg b{display:inline-block;width:10px;height:10px;margin-right:5px;vertical-align:-1px}\n.tops{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:14px 18px}\n.tops ol{list-style:none;margin:0;padding:0}\n.tops li{display:grid;grid-template-columns:14px 1fr auto;gap:6px;align-items:baseline;padding:3px 0;border-top:1px solid rgba(27,39,49,.7)}\n.tops li:first-child{border-top:0}\n.tops li .nm{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.tops li .x{font-size:12px;color:var(--dim);white-space:nowrap}\n.tops .ic{color:var(--cyn)}\n.foot{display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin-top:12px}\n",'<div class="hd" id="hd"></div><div class="sec" id="rec"></div><div class="sec" id="dist"></div><div class="sec" id="tops"></div><div class="sec" id="dq"></div>'),
this.shadowRoot.addEventListener("click",async e=>{const a=e.target.closest("[data-more]");if(a)return void this._more(a.dataset.more)
;const b=e.target.closest('button[data-act="prune"]');if(!b)return;const d=+this._config.prune_days||30
;if(window.confirm(`Remove discovered contacts not updated in ${d} days from Home Assistant? Contacts saved on the node are kept. The node itself is not changed.`)){b.disabled=!0
;try{await this._hass.callService("meshcore","clear_discovered_contacts",{days_threshold:d}),b.textContent="Removed. Counts update shortly."}catch(err){
b.textContent="Remove failed: "+(err.message||err),b.disabled=!1}}})}_render(){
const h=this._hass,c=this._config,home=mcCenter(h,c.center),ex=(c.exclude||[]).map(String),all=mcContacts(h,home).filter(n=>!ex.some(p=>n.pk.startsWith(p))),located=all.filter(n=>n.geo).length
;this._q("#hd").innerHTML=`<span class="t">${mcEsc(c.title)}</span><span class="sp"></span><span class="id"><span class="m w">${all.length}</span> known, <span class="m w">${located}</span> with position</span>`
;const TY=[2,1,3,0],tkey=n=>2===n.type||1===n.type||3===n.type?n.type:0,hist=(buckets,pick)=>{const rows=buckets.map(b=>({...b,c:{0:0,1:0,2:0,3:0},n:0}));for(const n of all){
const i=pick(n);i>=0&&(rows[i].c[tkey(n)]++,rows[i].n++)}const mx=Math.max(1,...rows.map(r=>r.n))
;return rows.map(r=>`<span class="fl">${r.l}</span><div class="bar">${TY.map(t=>r.c[t]?`<i class="t${t}" style="width:${(r.c[t]/mx*100).toFixed(2)}%" title="${(MC_TYPES[t]||{
label:"Other"}).label}: ${r.c[t]}"></i>`:"").join("")}</div><span class="ft m">${r.n}</span>`).join("")
},RB=[["Under 15 min",900],["15 to 60 min",3600],["1 to 6 h",21600],["6 to 24 h",86400],["1 to 3 d",259200],["3 to 7 d",604800],["7 to 30 d",2592e3],["Over 30 d",1/0]],rb=RB.map(([l])=>({
l})).concat([{l:"Bad clock"}]);this._q("#rec").innerHTML=`<div class="sh"><span>Time since last advert</span></div><div class="hg">${hist(rb,n=>{
if(!isFinite(n.age))return rb.length-1;for(let i=0;i<RB.length;i++)if(n.age<RB[i][1])return i;return RB.length-1
})}</div><div class="lg"><span><b class="t2"></b>Repeaters</span><span><b class="t1"></b>Clients</span><span><b class="t3"></b>Room servers</span></div>`
;const DB=[["0 to 5 km",5],["5 to 10 km",10],["10 to 25 km",25],["25 to 50 km",50],["50 to 100 km",100],["100 to 200 km",200],["Over 200 km",1/0]],db=DB.map(([l])=>({l
})),recent=n=>isFinite(n.age)&&n.age<86400;this._q("#dist").innerHTML=`<div class="sh"><span>Distance, nodes heard in the last 24 h</span></div><div class="hg">${hist(db,n=>{
if(!recent(n)||!n.geo)return-1;for(let i=0;i<DB.length;i++)if(n.d<DB[i][1])return i;return-1})}</div>`;const heard=all.filter(n=>recent(n)&&n.geo),li=(n,x)=>{
return`<li><span class="ic">${t=n.type,{2:"\u25c6",1:"\u25cf",3:"\u25a0"
}[t]||"\u25cf"}</span><a class="lnk nm" data-more="${n.id}">${mcEsc(n.name)}</a><span class="x m">${x}</span></li>`;var t
},far=heard.slice().sort((a,b)=>b.d-a.d).slice(0,6),near=heard.filter(n=>n.d>.05).sort((a,b)=>a.d-b.d).slice(0,6),newest=all.filter(n=>isFinite(n.age)).sort((a,b)=>a.age-b.age).slice(0,6)
;this._q("#tops").innerHTML=`<div class="tops">\n<div><div class="sh"><span>Farthest heard, 24 h</span></div><ol>${far.map(n=>li(n,`${mcKm(n.d)} ${String(Math.round(n.b)).padStart(3,"0")}\xb0`)).join("")||'<li class="cap">None</li>'}</ol></div>\n<div><div class="sh"><span>Nearest heard, 24 h</span></div><ol>${near.map(n=>li(n,`${mcKm(n.d)} ${String(Math.round(n.b)).padStart(3,"0")}\xb0`)).join("")||'<li class="cap">None</li>'}</ol></div>\n<div><div class="sh"><span>Latest adverts</span></div><ol>${newest.map(n=>li(n,`${mcAge(n.age)} ago`)).join("")||'<li class="cap">None</li>'}</ol></div>\n</div>`
;const pd=+c.prune_days||30,idle=all.filter(n=>!n.added&&(!isFinite(n.age)||n.age>86400*pd)).length,skew=all.filter(n=>n.skew).length
;this._q("#dq").innerHTML=`<div class="sh"><span>Contact store</span></div><div class="kv">\n<div><span class="k">Contact entities</span><span class="v m">${all.length}</span></div>\n<div><span class="k">No position</span><span class="v m">${all.length-located}</span></div>\n<div><span class="k">Clock ahead</span><span class="v m ${skew?"a":""}">${skew}</span></div>\n<div><span class="k">Idle over ${pd} d</span><span class="v m ${idle>100?"a":""}">${idle}</span></div>\n</div><div class="foot"><button data-act="prune">Remove idle discovered contacts</button><span class="cap">Removes discovered contacts idle over ${pd} d. Contacts saved on the radio stay. Each contact entity writes to the recorder on every advert.</span></div>`
}}mcRegister("meshcore-census-card",McCensus,"MeshCore census","Recency and distance histograms of every heard node, top lists, contact store health.")
;class McStatus extends McBase{static get defaults(){return{gateway:"",relay:"",trackers:[],nf:6,center:"zone.home"}}getCardSize(){return 2}constructor(){super(),this._minGap=1e4}
_build(){
this._shell("","\n.ss{display:flex;flex-wrap:wrap}\n.ss div{flex:1 1 128px;display:flex;flex-direction:column;padding:10px 14px;border-right:1px solid var(--rule);border-bottom:1px solid var(--rule);min-width:0}\n.ss .k{font-size:11px;color:var(--dim)}\n.ss .v{font-family:'B612',sans-serif;font-weight:700;font-size:19px;white-space:nowrap}\n.ss .s{font-size:11px;color:var(--dim);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\nha-card{border-right:0}\n",'<div class="ss" id="ss"></div>')
}_render(){
const h=this._hass,c=this._config,now=Date.now()/1e3,home=mcCenter(h,c.center),all=mcContacts(h,home),G=c.gateway?new McNode(h,c.gateway):null,R=c.relay?new McNode(h,c.relay):null,cell=(k,v,cls,s)=>`<div><span class="k">${k}</span><span class="v ${cls}">${v}</span><span class="s">${s||"&nbsp;"}</span></div>`
;let o="";if(G){const st=G.s("node_status");o+=cell("Gateway","online"===st?"Online":mcEsc(st||"Unknown"),"online"===st?"g":"r",`battery ${mcNumTxt(G.n("battery_percentage"),0)}%`)
}if(R){
const on=mcSt(h,R.online),ok=on&&"on"===on.state,lsr=on&&on.attributes.last_successful_request?Date.parse(on.attributes.last_successful_request)/1e3:NaN,ivl=on?parseFloat(on.attributes.update_interval):NaN,age=now-lsr
;o+=cell("Relay",ok?"Online":"Offline",ok?isFinite(ivl)&&age>2.5*ivl?"r":isFinite(ivl)&&age>1.25*ivl?"a":"g":"r",`polled ${mcAge(age)} ago`)}
o+=cell("Heard, 1 h",all.filter(n=>isFinite(n.age)&&n.age<3600).length,"c",`${all.filter(n=>isFinite(n.age)&&n.age<86400).length} in 24 h`)
;const sf=mcFindSf(h,c),bw=mcFindBw(h,c),smin=mcSnrMin(isFinite(sf)?sf:7);if(R){
const nbs=mcNeighbors(h,c.relay,all),lv=nbs.filter(n=>n.live),worst=lv.length?Math.min(...lv.map(n=>n.snr-smin)):NaN
;o+=cell("Worst link margin",isFinite(worst)?mcNumTxt(worst,1,!0)+" dB":"--",mcMarginCls(worst),`${lv.length} of ${nbs.length} neighbours live`)
;const nf=R.n("noise_floor"),ex=nf-mcThermal(1e3*(isFinite(bw)?bw:62.5),+c.nf||6)
;o+=cell("Noise floor",mcNumTxt(nf,0)+" dBm",ex<6?"g":ex<15?"a":"r",`${mcNumTxt(ex,0,!0)} dB over thermal`)
;const G2=((R.n("rx_airtime_utilization")||0)+(R.n("airtime_utilization")||0))/100,pc=1-Math.exp(-2*G2)
;o+=cell("Channel load",Math.round(100*G2)+"%",pc>.3?"r":pc>.15?"a":"g",`collision estimate ${Math.round(100*pc)}%`)}if((c.trackers||[]).length){
const tk=c.trackers.map(t=>all.find(n=>n.pk.startsWith(String(t.prefix)))),lv=tk.filter(n=>n&&isFinite(n.age)&&n.age<3600).length,newest=Math.min(...tk.map(n=>n&&isFinite(n.age)?n.age:1/0))
;o+=cell("Trackers live",`${lv} of ${tk.length}`,lv===tk.length?"g":lv?"a":"r",isFinite(newest)?`last heard ${mcAge(newest)} ago`:"never heard")}
Object.values(window.__mcChecks||{}).some(v=>String(v).startsWith("bad"))&&(o+='<div class="ckf"><span class="k">Module check</span><span class="v r">Failed</span><span class="s">resource copy is corrupt, re-register it</span></div>'),
this._q("#ss").innerHTML=o}}mcRegister("meshcore-status-card",McStatus,"MeshCore status strip","One row of mesh system state: gateway, relay, links, noise, load, trackers."),
console.info(`%c MESHCORE-HUD %c ${MC_VERSION} check ${JSON.stringify(window.__mcChecks||{})} `,"background:#070b10;color:#3fd0e0;padding:2px 4px","background:#3fd0e0;color:#070b10;padding:2px 4px")
});
//#74d29666
