function toggleNav() {
    var bar = document.getElementById("mySidebar");
    if (bar.style.width >= "250px") {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("mySidebar").style.border = "0px solid #B00000";
      document.getElementById("main").style.marginLeft= "0";
      document.getElementById("buttoner").style.marginLeft= "-250px";
    } else {
      document.getElementById("mySidebar").style.width = "250px";
      document.getElementById("mySidebar").style.border = "2px solid #B00000";
      document.getElementById("main").style.marginLeft = "250px";
      document.getElementById("buttoner").style.marginLeft= "0px";
    }
  }