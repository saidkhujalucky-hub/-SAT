(()=>{
 const base=(window.SAT_CONFIG?.apiBase||'./api').replace(/\/$/,'');
 window.SATClient={async api(path,method='GET',body){const token=localStorage.getItem('sat_session')||'';let r;try{r=await fetch(base+path,{method,headers:{'Content-Type':'application/json',...(token?{Authorization:'Bearer '+token}:{})},body:body===undefined?undefined:JSON.stringify(body)});}catch{throw Error('API_UNAVAILABLE');}let d;try{d=await r.json();}catch{throw Error('API_UNAVAILABLE');}if(!r.ok){if(r.status===401)localStorage.removeItem('sat_session');throw Error(d.error||'SERVER_ERROR');}return d;},lang(){return localStorage.getItem('sat_language')||'ru';},setLang(lang){localStorage.setItem('sat_language',lang);document.documentElement.lang=lang;}};
})();
