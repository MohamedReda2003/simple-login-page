function mouse_animation(){ 
    if(email.value=="" || psw.value==""){ 
    btn_mvt() ;
    document.getElementById("email").style.border="3px solid red" ;
    document.getElementById("psw").style.border="3px solid red" ;
    document.body.style.background = "yellow";
    bt.value="empty info" ;
    } 
    else{ 
    document.getElementById("email").style.border="3px solid green" ;
    document.getElementById("psw").style.border="3px solid green" ;
    document.body.style.background = "linear-gradient(79deg, rgba(16,227,0,1) 0%, rgba(103,207,111,0.5327380952380952) 100%)";
    
    bt.value="submit your login" ;
    bt.style.left="120px"; 
    } 
} 
flag=1 ;
function btn_mvt(){ 
    if(flag==1){ 
        bt.style.left="210px" ;
        flag=2 ;
    } 
    else if(flag==2){ 
        bt.style.left="80px" ;
        flag=1 ;
    } 
}