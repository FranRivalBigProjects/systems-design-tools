const res=document.getElementById('res');
function run(){
 let a=+atk.value,h=+hp.value;
 if(!a||!h){res.innerText="Enter values";return;}
 res.innerText=a/h>0.5?"Burst meta":"Sustain meta";
}
