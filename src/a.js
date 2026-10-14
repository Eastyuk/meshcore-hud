if((()=>{const K="A",ck=window.__mcChecks=window.__mcChecks||{};try{const u=import.meta.url;if(!u.startsWith("data:"))return void(ck[K]="n/a")
;const c=u.indexOf(","),meta=u.slice(5,c);let t;if(/;base64/i.test(meta)){const b=atob(u.slice(c+1)),a=new Uint8Array(b.length);for(let i=0;i<b.length;i++)a[i]=b.charCodeAt(i)
;t=(new TextDecoder).decode(a)}else t=decodeURIComponent(u.slice(c+1));const m=t.lastIndexOf("\n//#");if(m<0)return void(ck[K]="n/a");const body=t.slice(0,m);let h=2166136261
;for(let i=0;i<body.length;i++)h^=body.charCodeAt(i),h=Math.imul(h,16777619)>>>0;const got=h.toString(16).padStart(8,"0"),want=t.slice(m+4).trim()
;ck[K]=got===want?"ok":"bad "+got+" want "+want}catch(e){ck[K]="n/a"}})(),!window.__meshcoreHud){window.__meshcoreHud=!0;const MC_VERSION="1.0.0";function mcInjectFonts(){}
const MC_CSS="\n:host{display:block;--glass:#070b10;--panel:#0b1117;--rule:#1b2731;--rule2:#2b3d49;--wht:#e6edf1;--dim:#8196a4;--dim2:#4d6270;--cyn:#3fd0e0;--grn:#45d16e;--mag:#e056d8;--amb:#f2a900;--red:#ff4a3d}\nha-card{background:var(--glass);color:var(--wht);border:1px solid var(--rule);border-radius:10px;overflow:hidden;font-family:'B612',Roboto,system-ui,sans-serif;font-size:13px;line-height:1.4;box-shadow:none}\n.m{font-family:'B612',Roboto,system-ui,sans-serif;font-variant-numeric:tabular-nums}\n.b{font-weight:700}\n.hd{display:flex;flex-wrap:wrap;align-items:baseline;gap:2px 12px;padding:12px 14px 10px;border-bottom:1px solid var(--rule)}\n.hd .t{font-size:16px}\n.hd .id{color:var(--dim);font-size:12px}\n.hd .sp{flex:1}\n.pill{font-size:11px;padding:1px 7px;border-radius:3px;border:1px solid currentColor;white-space:nowrap}\n.g{color:var(--grn)}.a{color:var(--amb)}.r{color:var(--red)}.c{color:var(--cyn)}.mg{color:var(--mag)}.d{color:var(--dim)}.w{color:var(--wht)}\n.sec{padding:10px 14px 12px;border-bottom:1px solid var(--rule)}\n.sec:last-child{border-bottom:0}\n.sh{font-size:12px;color:var(--dim);margin:0 0 8px;display:flex;justify-content:space-between;gap:8px}\nbutton{font:inherit;font-size:12px;color:var(--wht);background:transparent;border:1px solid var(--rule2);border-radius:3px;padding:5px 9px;cursor:pointer;line-height:1.2}\nbutton[aria-pressed=\"true\"]{border-color:var(--cyn);color:var(--cyn);background:rgba(63,208,224,.08)}\nbutton:hover{border-color:var(--dim)}\nbutton:focus-visible{outline:2px solid var(--cyn);outline-offset:2px}\nbutton:disabled{opacity:.5;cursor:default}\n.err{padding:14px;color:var(--amb)}\n.kv{display:grid;grid-template-columns:repeat(auto-fill,minmax(118px,1fr));gap:8px 14px}\n.kv div{display:flex;flex-direction:column}\n.kv .k{font-size:11px;color:var(--dim)}\n.kv .v{font-size:15px}\n.cap{font-size:11px;color:var(--dim);line-height:1.45}\ntable{border-collapse:collapse;width:100%}\ntd,th{padding:4px 6px 4px 0;text-align:left;font-weight:400;vertical-align:middle}\nth{font-size:11px;color:var(--dim);border-bottom:1px solid var(--rule)}\ntd.n,th.n{text-align:right}\ntr+tr td{border-top:1px solid rgba(27,39,49,.6)}\na.lnk{color:inherit;text-decoration:none;border-bottom:1px dotted var(--dim2);cursor:pointer}\na.lnk:hover{border-bottom-color:var(--cyn)}\npre{white-space:pre-wrap;word-break:break-word;font-size:11px;margin:6px 0 0;color:var(--dim)}\n",MC_HEX={
cyn:"#3fd0e0",wht:"#ffffff",mag:"#e056d8",g:"#45d16e",a:"#f2a900",r:"#ff4a3d",d:"#4d6270"},MC_R=6371.0088,mcRad=d=>d*Math.PI/180,mcDeg=r=>180*r/Math.PI
;function mcGeo(lat1,lon1,lat2,lon2){
const p1=mcRad(lat1),p2=mcRad(lat2),dp=p2-p1,dl=mcRad(lon2-lon1),a=Math.sin(dp/2)**2+Math.cos(p1)*Math.cos(p2)*Math.sin(dl/2)**2,d=2*MC_R*Math.asin(Math.min(1,Math.sqrt(a))),y=Math.sin(dl)*Math.cos(p2),x=Math.cos(p1)*Math.sin(p2)-Math.sin(p1)*Math.cos(p2)*Math.cos(dl)
;return{d,b:(mcDeg(Math.atan2(y,x))+360)%360}}
const MC_CARD=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],mcCardinal=b=>MC_CARD[Math.round(b/22.5)%16],mcEsc=s=>String(s??"").replace(/[&<>"']/g,c=>({
"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])),mcClamp=(v,a,b)=>Math.max(a,Math.min(b,v));function mcNumTxt(v,dp=1,plus=!1){if(!isFinite(v))return"--"
;const t=Math.abs(v).toFixed(dp);return v<0&&0!==Number(t)?"\u2212"+t:(plus&&v>0?"+":"")+t}function mcAge(s){if(!isFinite(s))return"--";if(s<0&&(s=0),s<60)return Math.round(s)+" s"
;if(s<3600)return Math.round(s/60)+" min";if(s<86400){const h=Math.floor(s/3600),m=Math.round(s%3600/60);return h+" h"+(m?" "+String(m).padStart(2,"0")+" min":"")}
const d=Math.floor(s/86400),h=Math.round(s%86400/3600);return d+" d"+(h&&d<10?" "+h+" h":"")}function mcKm(d){
return isFinite(d)?d<1?Math.round(1e3*d)+" m":d<10?d.toFixed(1)+" km":Math.round(d)+" km":"--"}function mcNiceCeil(v,steps){for(const s of steps)if(v<=s)return s
;return steps[steps.length-1]}const mcSnrMin=sf=>-2.5*(sf-4),mcThermal=(bwHz,nf)=>10*Math.log10(bwHz)-174+nf;function mcToa(pl,sf,bwHz,cr=5,pre=16){
const ts=Math.pow(2,sf)/bwHz,de=ts>.016?1:0;return(pre+4.25)*ts+(8+Math.max(Math.ceil((8*pl-4*sf+28+16)/(4*(sf-2*de)))*cr,0))*ts}function mcSt(h,id){return id?h.states[id]:void 0}
function mcNum(h,id){const s=mcSt(h,id);if(!s)return NaN;const v=parseFloat(s.state);return isFinite(v)?v:NaN}function mcTs(iso){const t=Date.parse(iso)
;return isFinite(t)?t/1e3:NaN}function mcFindKey(h,prefix,test){for(const k in h.states)if(k.startsWith(prefix)&&(!test||test(k)))return k}class McNode{
constructor(h,prefix,domain="sensor"){this.h=h,this.p=prefix,this.dom=domain,this.slug="";const on=mcFindKey(h,`binary_sensor.meshcore_${prefix}_online_`);if(on&&(this.online=on,
this.slug=on.slice(`binary_sensor.meshcore_${prefix}_online_`.length)),!this.slug){const ns=mcFindKey(h,`sensor.meshcore_${prefix}_node_status_`)
;ns&&(this.slug=ns.slice(`sensor.meshcore_${prefix}_node_status_`.length))}}id(metric){const a=`sensor.meshcore_${this.p}_${metric}_${this.slug}`
;if(this.slug&&this.h.states[a])return a;const b=`sensor.meshcore_${this.p}_${metric}`;return this.h.states[b]?b:void 0}n(metric){return mcNum(this.h,this.id(metric))}s(metric){
const s=mcSt(this.h,this.id(metric));return s?s.state:void 0}st(metric){return mcSt(this.h,this.id(metric))}}function mcCenter(h,id){const s=mcSt(h,id||"zone.home")
;return s&&isFinite(s.attributes.latitude)?{lat:+s.attributes.latitude,lon:+s.attributes.longitude,name:s.attributes.friendly_name||"Home"}:{lat:h.config.latitude,
lon:h.config.longitude,name:"Home"}}const MC_TYPES={1:{key:"cli",label:"Clients",one:"Client"},2:{key:"rpt",label:"Repeaters",one:"Repeater"},3:{key:"room",label:"Rooms",
one:"Room server"},4:{key:"sen",label:"Sensors",one:"Sensor"}};let _mcCache={states:null,t:0,home:null,list:null};function mcContacts(h,home){const now=Date.now()/1e3
;if(_mcCache.states===h.states&&_mcCache.home&&_mcCache.home.lat===home.lat&&_mcCache.home.lon===home.lon&&now-_mcCache.t<3)return _mcCache.list;const out=[]
;for(const id in h.states){if(!id.startsWith("binary_sensor.meshcore_")||!id.endsWith("_contact"))continue
;const s=h.states[id],a=s.attributes,lat=parseFloat(a.adv_lat??a.latitude),lon=parseFloat(a.adv_lon??a.longitude),geo=isFinite(lat)&&isFinite(lon)&&!(Math.abs(lat)<.001&&Math.abs(lon)<.001)&&Math.abs(lat)<=90,adv=parseFloat(a.last_advert)
;let age=isFinite(adv)&&adv>15e8?now-adv:NaN,skew=!1;isFinite(age)&&age<-600&&(skew=!0,age=NaN);const n={id,s,a,
name:String(a.adv_name||"").trim()||String(a.pubkey_prefix||"").slice(0,6),
type:+a.type||("Repeater"===a.node_type_str?2:"Client"===a.node_type_str?1:"Room Server"===a.node_type_str?3:0),pk:String(a.pubkey_prefix||""),lat,lon,geo,age,skew,
added:!!a.added_to_node,state:s.state,d:NaN,b:NaN};if(geo){const g=mcGeo(home.lat,home.lon,lat,lon);n.d=g.d,n.b=g.b}out.push(n)}return _mcCache={states:h.states,t:now,home,list:out
},out}function mcNeighbors(h,relay,contacts){const pre=`sensor.meshcore_${relay}_neighbor_`,now=Date.now()/1e3,out=[];for(const id in h.states){if(!id.startsWith(pre))continue
;const hex=id.slice(pre.length);if(!/^[0-9a-f]{6}$/.test(hex))continue
;const s=h.states[id],a=s.attributes,snr=parseFloat(s.state),pk=String(a.pubkey_prefix||hex),c=contacts.find(x=>x.pk.startsWith(pk.slice(0,6))),polled=mcTs(s.last_updated),secs=parseFloat(a.secs_ago)
;out.push({id,hex,snr,live:isFinite(snr),name:String(a.resolved_name||c&&c.name||hex).trim(),seen48:parseFloat(a.seen_48h),
age:isFinite(secs)&&isFinite(polled)?secs+(now-polled):NaN,contact:c})}return out.sort((x,y)=>y.live-x.live||(isFinite(y.snr)?y.snr:-99)-(isFinite(x.snr)?x.snr:-99)),out}
function mcFindSf(h,cfg){if(cfg&&cfg.sf_entity)return mcNum(h,cfg.sf_entity);const k=mcFindKey(h,"sensor.meshcore_",x=>x.includes("_spreading_factor"));return k?mcNum(h,k):NaN}
function mcFindBw(h,cfg){if(cfg&&cfg.bw_entity)return mcNum(h,cfg.bw_entity);const k=mcFindKey(h,"sensor.meshcore_",x=>x.includes("_bandwidth"));return k?mcNum(h,k):NaN}
function mcMarginCls(m){return isFinite(m)?m>=5?"g":m>=0?"a":"r":"d"}async function mcStats(h,ids,hours=168,period="hour"){
const start=new Date(Date.now()-36e5*hours).toISOString(),r=await h.callWS({type:"recorder/statistics_during_period",start_time:start,statistic_ids:ids,period,
types:["mean","min","max"]}),out={};for(const id of ids)out[id]=(r[id]||[]).map(p=>({t:("number"==typeof p.start?p.start:Date.parse(p.start))/1e3,v:p.mean,lo:p.min,hi:p.max
})).filter(p=>isFinite(p.v));return out}function mcSpark(pts,opt={}){const W=opt.w||160,H=opt.h||38
;if(!pts||pts.length<2)return`<svg viewBox="0 0 ${W} ${H}" class="spk" preserveAspectRatio="none"><text x="${W/2}" y="${H/2+4}" text-anchor="middle" class="spk-na">no history</text></svg>`
;const t0=pts[0].t,t1=pts[pts.length-1].t;let lo=1/0,hi=-1/0;for(const p of pts)lo=Math.min(lo,isFinite(p.lo)?p.lo:p.v),hi=Math.max(hi,isFinite(p.hi)?p.hi:p.v)
;if(isFinite(opt.ref)&&(lo=Math.min(lo,opt.ref),hi=Math.max(hi,opt.ref)),hi-lo<(opt.minSpan||1e-6)){const m=(hi+lo)/2,s=(opt.minSpan||1)/2;lo=m-s,hi=m+s}
const X=t=>2+(t-t0)/Math.max(1,t1-t0)*(W-4),Y=v=>H-2-(v-lo)/(hi-lo)*(H-4);let band="",line="";if(!1!==opt.band){
const top=pts.map(p=>`${X(p.t).toFixed(1)},${Y(isFinite(p.hi)?p.hi:p.v).toFixed(1)}`),bot=pts.slice().reverse().map(p=>`${X(p.t).toFixed(1)},${Y(isFinite(p.lo)?p.lo:p.v).toFixed(1)}`)
;band=`<polygon points="${top.join(" ")} ${bot.join(" ")}" class="spk-b"/>`}
line=`<polyline points="${pts.map(p=>`${X(p.t).toFixed(1)},${Y(p.v).toFixed(1)}`).join(" ")}" class="spk-l"/>`
;const ref=isFinite(opt.ref)?`<line x1="0" x2="${W}" y1="${Y(opt.ref).toFixed(1)}" y2="${Y(opt.ref).toFixed(1)}" class="spk-r"/>`:"",last=pts[pts.length-1]
;return`<svg viewBox="0 0 ${W} ${H}" class="spk" preserveAspectRatio="none">${ref}${band}${line}<circle cx="${X(last.t).toFixed(1)}" cy="${Y(last.v).toFixed(1)}" r="2" class="spk-d"/></svg>`
}
const MC_SPARK_CSS=".spk{width:100%;height:38px;display:block}.spk-b{fill:rgba(63,208,224,.13);stroke:none}.spk-l{fill:none;stroke:var(--cyn);stroke-width:1.3;vector-effect:non-scaling-stroke}.spk-r{stroke:var(--mag);stroke-width:1;stroke-dasharray:3 3;vector-effect:non-scaling-stroke}.spk-d{fill:var(--wht)}.spk-na{fill:var(--dim2);font-size:10px;font-family:'B612',sans-serif}"
;function mcArc(v,min,max,opt={}){const A0=-120,pt=(a,r=42)=>[r*Math.sin(mcRad(a)),-r*Math.cos(mcRad(a))],arc=(a0,a1,r=42)=>{const[x0,y0]=pt(a0,r),[x1,y1]=pt(a1,r)
;return`M${x0.toFixed(2)},${y0.toFixed(2)}A${r},${r} 0 ${a1-a0>180?1:0} 1 ${x1.toFixed(2)},${y1.toFixed(2)}`},f=isFinite(v)?mcClamp((v-min)/(max-min),0,1):0,av=A0+240*f;let mk=""
;if(isFinite(opt.mark)){const am=A0+240*mcClamp((opt.mark-min)/(max-min),0,1),[x0,y0]=pt(am,34),[x1,y1]=pt(am,49)
;mk=`<line x1="${x0.toFixed(1)}" y1="${y0.toFixed(1)}" x2="${x1.toFixed(1)}" y2="${y1.toFixed(1)}" class="gm"/>`}let ticks="";for(let i=0;i<=4;i++){
const a=A0+240*i/4,[x0,y0]=pt(a,47),[x1,y1]=pt(a,51);ticks+=`<line x1="${x0.toFixed(1)}" y1="${y0.toFixed(1)}" x2="${x1.toFixed(1)}" y2="${y1.toFixed(1)}" class="gt"/>`}
const cls=opt.cls||"c"
;return`<svg viewBox="-56 -54 112 88" class="gauge" role="img" aria-label="${mcEsc(opt.label||"")} ${mcEsc(opt.txt||"")}">\n<path d="${arc(A0,120)}" class="gb"/>${f>.001?`<path d="${arc(A0,av)}" class="gv ${cls}"/>`:""}${ticks}${mk}\n<text x="0" y="6" text-anchor="middle" class="gx ${cls}">${mcEsc(opt.txt??mcNumTxt(v,opt.dp??0))}</text>\n<text x="0" y="22" text-anchor="middle" class="gu">${mcEsc(opt.unit||"")}</text>\n<text x="${pt(A0,42)[0].toFixed(1)}" y="31" text-anchor="middle" class="gl">${mcEsc(opt.lo??min)}</text>\n<text x="${pt(120,42)[0].toFixed(1)}" y="31" text-anchor="middle" class="gl">${mcEsc(opt.hi??max)}</text></svg>`
}
const MC_GAUGE_CSS=".gauge{width:100%;max-width:150px;display:block;margin:0 auto}.gb{fill:none;stroke:var(--rule2);stroke-width:7}.gv{fill:none;stroke-width:7}.gv.g{stroke:var(--grn)}.gv.a{stroke:var(--amb)}.gv.r{stroke:var(--red)}.gv.c{stroke:var(--cyn)}.gt{stroke:var(--dim2);stroke-width:1}.gm{stroke:var(--mag);stroke-width:2.2}.gx{font-family:'B612',sans-serif;font-weight:700;font-size:19px}.gx.g{fill:var(--grn)}.gx.a{fill:var(--amb)}.gx.r{fill:var(--red)}.gx.c{fill:var(--cyn)}.gu{fill:var(--dim);font-size:9.5px;font-family:'B612',sans-serif}.gl{fill:var(--dim2);font-size:8px;font-family:'B612',sans-serif}"
;class McBase extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._last=0,this._pending=null,this._minGap=4e3,this._sig=null,this._force=!0}
static get defaults(){return{}}setConfig(c){this._config=Object.assign({},this.constructor.defaults,c||{}),this._built=!1,this._force=!0,this._hass&&this._doRender()}set hass(h){
const first=!this._hass;this._hass=h,!first&&this._built?this._schedule():this._doRender()}get hass(){return this._hass}_schedule(){if(this._pending)return
;const wait=Math.max(0,this._minGap-(Date.now()-this._last));this._pending=setTimeout(()=>{this._pending=null,this._doRender()},wait)}_watch(){return null}_changed(){
const ids=this._watch();if(!ids)return!0;const sig=ids.map(i=>this._hass.states[i]),old=this._sig;if(this._sig=sig,!old||old.length!==sig.length)return!0
;for(let i=0;i<sig.length;i++)if(sig[i]!==old[i])return!0;return!1}_doRender(){if(this._hass&&this._config)if(this._built||(this._build(),this._built=!0,this._force=!0),
this._changed()||this._force){this._force=!1,this._last=Date.now();try{this._render()}catch(e){console.error(this.localName,e),this._fail(e)}}else this._last=Date.now()}_fail(e){
const el=this.shadowRoot.querySelector(".body")||this.shadowRoot,d=document.createElement("div");d.className="err",d.textContent="Card error: "+(e&&e.message?e.message:e),
el.appendChild(d)}connectedCallback(){this._tick=setInterval(()=>{this._force=!0,this._doRender()},this._tickMs||6e4)}disconnectedCallback(){clearInterval(this._tick),
clearTimeout(this._pending),this._pending=null}getCardSize(){return 6}getGridOptions(){return{columns:12,rows:"auto",min_columns:6}}_q(sel){
return this.shadowRoot.querySelector(sel)}_more(id){id&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:id},bubbles:!0,composed:!0}))}
_shell(title,extraCss,body){this.shadowRoot.innerHTML=`<style>${MC_CSS}${extraCss||""}</style><ha-card><div class="body">${body}</div></ha-card>`}async _trace(prefix){
const r=await this._hass.callWS({type:"call_service",domain:"meshcore",service:"trace",service_data:{pubkey_prefix:prefix,timeout:20},return_response:!0})
;return r&&void 0!==r.response?r.response:r}}function mcTraceHtml(resp){if(!resp)return'<span class="a">No response.</span>';const t=void 0!==resp.trace?resp.trace:resp
;if(null===t)return`<span class="r">Trace failed: ${{contact_not_on_device:"the contact is not saved on the companion radio. Save it on the radio, then trace again."
}[resp.error]||mcEsc(resp.error||"no route")}</span>`
;const hops=t.hops??t.hop_count??t.path_len??(Array.isArray(t.path)?t.path.length:void 0),rtt=t.rtt_ms??t.round_trip_ms??(isFinite(t.rtt)?t.rtt:void 0)
;let s='<span class="g">Reached.</span> ';return void 0!==hops&&(s+=`<span class="m">${mcEsc(hops)}</span> hops. `),
void 0!==rtt&&(s+=`Round trip <span class="m">${mcEsc(Math.round(rtt))} ms</span>.`),s+`<pre class="m">${mcEsc(JSON.stringify(t,null,1))}</pre>`}
function mcRegister(tag,cls,name,desc){customElements.get(tag)||customElements.define(tag,cls),window.customCards=window.customCards||[],
window.customCards.find(c=>c.type===tag)||window.customCards.push({type:tag,name,description:desc,preview:!1})}Object.assign(window,{MC_VERSION,mcInjectFonts,MC_CSS,MC_HEX,MC_R,
mcRad,mcDeg,mcGeo,MC_CARD,mcCardinal,mcEsc,mcClamp,mcNumTxt,mcAge,mcKm,mcNiceCeil,mcSnrMin,mcThermal,mcToa,mcSt,mcNum,mcTs,mcFindKey,McNode,mcCenter,MC_TYPES,mcContacts,
mcNeighbors,mcFindSf,mcFindBw,mcMarginCls,mcStats,mcSpark,MC_SPARK_CSS,mcArc,MC_GAUGE_CSS,McBase,mcTraceHtml,mcRegister});const q=Array.isArray(window.__mcq)?window.__mcq:[]
;window.__mcq={push:f=>{try{f()}catch(e){console.error("meshcore-hud part",e)}}};for(const f of q)window.__mcq.push(f)}
//#471850b0
