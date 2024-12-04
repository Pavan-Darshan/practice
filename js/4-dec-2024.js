const x=document.getElementById("location");
function getLocation(){
    if(navigator.geolocation){
        
        navigator.geolocation.getCurrentPosition(showPosition);
       
    }
    else{
        x.innerHTML="Geoloction not working...."
    }
}
function showPosition(position){
    x.innerHTML="Lattidude :"+ position.coords.latitude +"<br>Longitude :"+ position.coords.longitude;
    
   
}

function login(){
   
    localStorage.setItem("Name",document.getElementById("name").value);
    localStorage.setItem("Phone",document.getElementById("contact").value);
    alert("Login sucessfully done.......");
    
}