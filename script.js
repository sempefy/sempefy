function auth(){
    let username = document.getElementById('uname').value;
    let password  = document.getElementById('pword').value;
   if (username == "admin"){
    window.location.href = "/page1.html";
   }
   
    
}
function addMaintRec(){
    
   
    window.location.href = "y1.html";
   }
   
function addRecord(){
    
   
    window.location.href = "addrecord.html";
   }

    
function rowadd() {
    window.location.href = "addrecord.html";
}

    
function rowsa(){
   
     
     
    var addRow = document.getElementById("myTable");
 
    var row = addRow.insertRow(-1);
    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)
    var cell3 = row.insertCell(2)
    var cell4 = row.insertCell(3)
    var cell5 = row.insertCell(4)
     cell1.innerHTML = document.getElementById("adddate").value;
     cell2.innerHTML =  document.getElementById("adddevice").value;
     cell3.innerHTML =  document.getElementById("addissue").value;
     cell4.innerHTML =  document.getElementById("adddiscription").value;
     cell5.innerHTML =  document.getElementById("addstatus").value;
     
     
    

}
   
   
      
    
    
   
   

   
    





