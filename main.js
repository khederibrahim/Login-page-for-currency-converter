let login = document.querySelector(".login");
let aLogin = document.querySelector("a");
let dh1 = document.getElementById("dh1");
let h1 = document.getElementById("h1");
let form1 = document.getElementById("form1");
let userName = document.getElementById("userName");
let uName = document.getElementById("uName");
let password = document.getElementById("password");
let uP = document.getElementById("uP")
// let verCode = document.getElementById("verification_code");
// let p = document.getElementById("p");





form1.onmouseenter = function(){
    form1.style.cssText = "color: green";
}
form1.onmouseleave = function(){
    
    setTimeout(function(){
        form1.style.cssText = "color: black";
    }, 500);
}
userName.onmouseenter = function(){
    
    uName.focus();
    
};

uName.addEventListener ("mouseleave",function(e){
    if (!isNaN(uName.value)){
        uName.value = "";
        uName.style.cssText = "border: 2px solid red;";
        uP.classList.add("active");
        e.preventDefault();
    } else {
        uP.classList.remove("active");
        uName.style.cssText = "border : 1px solid #ccc`;";
    }
});
login.addEventListener("click", function(e){

    //focusing on the fields.


    
    
    if(uName.value === "" || password.value === "" || !isNaN(uName.value)){
        if (!isNaN(uName.value)){
            uName.style.cssText = "border: 2px solid red;"
            uP.classList.add("active");
            
        } 
        e.preventDefault();
    }
});













































// function randChar(e) {
//     var result = '';
//     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for ( let i = 0; i < e; i++ ) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
// }


// let myP = document.createElement("p");
// let text = document.createTextNode(randChar(5));
// myP.appendChild(text);
// p.appendChild(myP);

// let value = verCode.value;
// if (value === p) {
//     console.log(value)
// } else {
//     console.log("not")
// }







