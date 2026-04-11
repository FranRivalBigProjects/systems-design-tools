const res=document.getElementById('res');
function run(){
 let p1=+p1.value,p2=+p2.value;
 if(!p1||!p2){res.innerText="Enter values";return;}
 res.innerText=p1>p2?"Player 1 OP":"Balanced or Player 2 stronger";
}
