

const buttonPress = ()=>{
   const display=document.querySelector(".display-1");
   const button =document.querySelector(".btn");


button.addEventListener('click',()=>{
for (let i=1; i<11; i++) {
	console.log(i);
    setTimeout( function timer(){

    	if (i===2){
    	 display.classList.add('display-2');
    }
     }, i*400 );
    
    setTimeout( function timer(){

    	if (i===3){
    	 display.classList.add('display-3');
    }
     }, i*400 );
    setTimeout( function timer(){

    	if (i===4){
    	 display.classList.add('display-4');
    }
     }, i*400 );

    setTimeout( function timer(){

    	if (i===5){
    	 display.classList.add('display-5');
    }
     }, i*400 );

    setTimeout( function timer(){

    	if (i===6){
    	 display.classList.add('display-6');
    }
     }, i*400 );

    setTimeout( function timer(){

    	if (i===7){
    	 display.classList.add('display-7');
    }
     }, i*400 );

    setTimeout( function timer(){

    	if (i===8){
    	 display.classList.add('display-8');
    }
     }, i*400 );

    setTimeout( function timer(){

    	if (i===9){
    	 display.classList.add('display-9');
    }
     }, i*400 );

    setTimeout( function timer(){

    	if (i===10){
    	 display.classList.add('display-10');
    }
     }, i*400 );
}

});
}

buttonPress();
