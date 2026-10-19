/* One-time "unofficial, not for safety" notice, shown on first visit. Shared by every page. */
(function(){
  const KEY='tt-notice-v1';
  let seen=false;try{seen=localStorage.getItem(KEY)==='1'}catch(e){}
  if(seen)return;
  const css=`.ttn{position:fixed;inset:0;z-index:5000;display:grid;place-items:center;background:rgba(0,0,0,.7);padding:16px;
    font:15px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,system-ui,sans-serif;-webkit-font-smoothing:antialiased}
  .ttn .c{background:#1c1c1e;color:#fff;border-radius:16px;padding:18px 16px;max-width:420px;width:100%;display:grid;gap:10px}
  .ttn h2{margin:0;font-size:1.15rem}.ttn h2 span{color:#ffd60a}
  .ttn p{margin:0;color:#d1d1d6;font-size:.9rem}.ttn a{color:#bf5af2}
  .ttn button{font-weight:600;font-size:1rem;font-family:inherit;color:#000;background:#bf5af2;border:0;border-radius:12px;padding:12px;cursor:pointer;margin-top:4px}`;
  const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
  const d=document.createElement('div');d.className='ttn';d.setAttribute('role','dialog');d.setAttribute('aria-modal','true');d.setAttribute('aria-label','Before you use this radar');
  d.innerHTML=`<div class="c"><h2>Before you <span>use this</span></h2>
    <p>RadixAus is a <b>radar app</b> by Team Twister. It isn't made or endorsed by the Bureau of Meteorology.</p>
    <p><b>Don't use it for safety decisions.</b> Radar here can be late, missing or wrong. Check <a href="https://www.bom.gov.au/weather-and-climate/warnings-and-alerts" target="_blank" rel="noopener">BoM's official warnings</a>, and call 000 in an emergency or the SES on 132 500 for storm help.</p>
    <p>Radar and warnings © Commonwealth of Australia, Bureau of Meteorology. Radar archive via NCI Australia. Satellite imagery NASA / USGS / ESA. Maps © Esri. <a href="about.html">Full credits and disclaimer</a></p>
    <button type="button">I understand</button></div>`;
  const go=()=>{try{localStorage.setItem(KEY,'1')}catch(e){}d.remove()};
  d.querySelector('button').onclick=go;
  const add=()=>{document.body.appendChild(d);d.querySelector('button').focus()};
  document.body?add():addEventListener('DOMContentLoaded',add);
})();
