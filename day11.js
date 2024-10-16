function register(){
    var name = document.getElementById("name").value;
        
    var email= document.getElementById("email").value;
    
    var password= document.getElementById("password").value;
    
    var form= new FormData();
    
    form.append("n", name);
    form.append("e", email); 
    form.append("p", password);
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
    
    if(request.readyState == 4 && request.status == 200) {
    
    var response = request.responseText;

    if(response== "sucess"){
        window.location.reload();
    }
    else{
        alert(response);
    }


  
    
    }
}
    request.open("POST", "Process.php", true);
    
    request.send(form);

}
    
