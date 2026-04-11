const res=document.getElementById('res');
function run(){
 let p=+points.value,s=+stats.value;
 if(!p||!s){res.innerText="Enter values";return;}
 res.innerText=`Points per stat: ${(p/s).toFixed(2)}`;
}
