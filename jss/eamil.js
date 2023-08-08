var masterdatabase=[
    {email:"sahil",password:"sahil"},
    {email:"priynak",password:"priyank"},
    {email:"sarthak",password:"sarthak"},
    {email:"priya",password:"priya"},
    {email:"ansh",passowrd:"ansh"}
     ]
function submit1(){
    let em=document.getElementById("user").value;
    em=em.toLowerCase();
    let pass=document.getElementById("pass").value;
         for(let obj of masterdatabase )
        {   console.log(em);
            console.log(pass);
            if(obj["email"]==em && obj["password"]==pass)
            {
                window.location.replace("http://127.0.0.1:5500/layout/landingpage.html");
                break;
            }
            else
            {
                let x=document.getElementById("para").innerHTML="worng Id or Password";
                break;
            }
        }   
}
function reset2(){
   document.getElementById("user").value="";
   document.getElementById("pass").value="";
}

function val()
{
    let x=document.getElementById("pass");
    let y=document.getElementById("repass");
  if(x.value != y.value)
  {
    document.getElementById("re").innerHTML="Password Miss match";
    document.getElementById("re").style.color="red";
  }
  else
  {
    document.getElementById("re").innerHTML="Passowrd Match"
  }
}

function submit2(){
  
   // window.location.replace("http://127.0.0.1:5500/layout/loginpage.html");
  
}

function val2(){
 var database=[
    {eamil:"admin" ,passowrd:"admin"}
 ]
 let x=document.getElementById("email1").value;
    console.log(x);
}