var body=document.querySelector("#pBody");
var mouth=document.querySelector("#mouth");
var pupils=document.querySelectorAll(".pupils");

body.addEventListener("mouseover",function(){
	mouth.style.borderRadius="50%";
	mouth.style.transition="1s";
	var i=0;
	while(i<2){
		pupils[i].style.backgroundColor="#fff";
		pupils[i].style.height="10px";
		pupils[i].style.borderTop="8px solid #000";
		pupils[i].style.transition="1s";
		i++;
	}
	
	
})

body.addEventListener("mouseleave",function(){
	mouth.style.borderRadius="10%";
	mouth.style.transition="1s";
	var i=0;
	while(i<2){
		pupils[i].style.backgroundColor="#000";
		pupils[i].style.height="20px";
		pupils[i].style.borderTop="0px";
		pupils[i].style.transition="1s";
		i++;
	}
})



