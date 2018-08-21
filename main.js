
function fnameValidator(){
    var text = document.getElementById("first").value;
    var regex = /^[a-zA-Z]+$/;
    if(text.toString().match(regex)){
        document.getElementById("fname").style.display = "none";
    }
    else{
        document.getElementById("fname").style.display = "inline-block";
    }
}
function lnameValidator(){
    var text = document.getElementById("last").value;
    var regex = /^[a-zA-Z]+$/;
    if(text.toString().match(regex)){
        document.getElementById("lname").style.display = "none";
    }
    else{
        document.getElementById("lname").style.display = "inline-block";
    }
}
function phoneValidator(){
    var text = document.getElementById("phone").value;
    var regex = /^\d{10}$/;
    if(text.toString().match(regex)){
        document.getElementById("contact").style.display = "none";
    }
    else{
        document.getElementById("contact").style.display = "inline-block";
    }
}
function emailValidator(){
    var text = document.getElementById("emails").value;
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(text.toString().match(regex)){
        document.getElementById("emessage").style.display = "none";
    }
    else{
        document.getElementById("emessage").style.display = "inline-block";
    }
}
function Validator(){
    var fname = document.getElementById("first").value;
    var lname = document.getElementById("last").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("emails").value;
    
    if(fname.toString().length==0){
        document.getElementById("fname").style.display = "inline-block";
        return false;
    }
    else if(lname.toString().length==0){
        document.getElementById("lname").style.display = "inline-block";
        return false;
    }
    else if(phone.toString().length==0){
        document.getElementById("contact").style.display = "inline-block";
        return false;
    }
    else if(email.toString().length==0){
        document.getElementById("emessage").style.display = "inline-block";
        return false;
    }
    else{
        return true;
    }
}
