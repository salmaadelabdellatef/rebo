var users=[
    {Uname:"jana",pass:"123"}
];
function signup(){
    var sn=document.getElementById('username').value;
    var sp=document.getElementById('Upassword').value;
    var sc=document.getElementById('confirmpass').value;
    var se=document.getElementById('email').value;
    var regex=/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    if(sn==""||sp==""||sc==""||se==""){
        alert("enter empty field");
    }
    else if(!se.match(regex)){
        alert("Enter a strong email (regex)");
    }
    else if(sp!==sc){
        alert("Enter again confirm password its not the same");
    }
    else{
        var obj={Uname:sn,pass:sp};
        users.push(obj);
        alert("signup succefuly");
    }
}
function  Login(){
    var un=document.getElementById('Uname').value;
    var up=document.getElementById('pass').value;
    if(un==""||up==""){
        alert("Enter empty fields");
    }
    var login=false;
    for(var i=0;i<users.length;i++){
        if(un== users[i].Uname && up== users[i].pass ){
            login=true;
            break;
        }
    }
    if(login){
        alert("login succefuly");
        window.location.href="welcome.html";
    }
    else{
        alert("try again you cannot login");
    }
}
function abdate(){
            var fn=document.getElementById('Fusername').value;
            var fp=document.getElementById('newpass').value;
            var abd=false;
            if(fn==""||fp==""){
                alert("enter empty field");
            }
            for(var i=0;i<users.length;i++){
                if(fn==users[i].Uname){
                    users[i].pass=fp;
                    abd=true;
                    break;
                }
            }
            if(abd){
                alert("password abdated");
            }
            else{
                alert("cant find username");
            }
        }