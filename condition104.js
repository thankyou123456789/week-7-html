let password = '123456789' ;
console.log (password.length);

if(password.length>=8 && password.includes('@')){
    let x = password.length;
    console.log("Thet password is long enough : " + x);
    document.getElementById("demo").innerHTML="Thet password is long enough"+"password is : " + x ;
}
else if(password.length>=8){
    let x = password.length;
    console.log("That password is strong enogh " + x);
    document.getElementById("demo").innerHTML="That password is long enough : " + x ;
}