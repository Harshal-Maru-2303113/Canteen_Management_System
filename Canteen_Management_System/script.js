function clearform(id,error_id,error){
    document.getElementById(id).value="";
    document.getElementById(error_id).style.display = "block";
    document.getElementById(error_id).innerHTML=error;
}

function submitform(){
    const roll_no = document.getElementById("roll-no").value;
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    const confi_pass = document.getElementById("confi-pass").value;
    if(roll_no === ""){
        clearform("roll-no","error-rn","Enter your Roll_No");
    }
    if(email === ""){
        clearform("email","error-email","Enter your IITGOA Email");
    }
    if(name === ""){
        clearform("name","error-name","Enter your Name");
    }
    if(password === ""){
        clearform("password","error-pass","Enter a Password");
    }
    if(confi_pass === ""){
        clearform("confi-pass","error-confi-pass","Confirm your Password");
    }
    if(password !== confi_pass){
        clearform("confi-pass","error-confi-pass","Password is not matching");       
    }
}

function switchpassword(id,id_img){
    const type = document.getElementById(id_img).scr;
    if(type==='not_show.png'){
        document.getElementById(id).setAttribute('type','text');
        document.getElementById(id_img).scr = "show.png";
    }
    else{
        document.getElementById(id).setAttribute('type','password');
        document.getElementById(id_img).scr = "not_show.png";
    }
}