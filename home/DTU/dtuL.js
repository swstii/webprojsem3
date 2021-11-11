var user_email = localStorage.getItem("Email");
var user_name = localStorage.getItem("Name");
var url = localStorage.getItem("PhotoURL");

alert(user_email);

const formHead = document.getElementById("formHeadingDTU");

if(user_email == null){

    formHead.textContent = "Please sign-in to contact some seniors!";
    document.getElementById('formDTU').style.visibility = "hidden";
}else{
    formHead.textContent = "Contact Us";
    document.getElementById('formDTU').style.visibility = "visible";
}