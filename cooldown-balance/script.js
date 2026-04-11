const res=document.getElementById('res');
function run(){
 let d=+damage.value,c=+cooldown.value;
 if(!d||!c){res.innerText="Enter values";return;}
 res.innerText=`DPS: ${(d/c).toFixed(2)}`;
}
