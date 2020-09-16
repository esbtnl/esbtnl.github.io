

function showInfo(n){
    //alert(n);
    var x = document.getElementById("info-groupie" + n);
    
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
