let lists = document.getElementByClassName("list");
let year1Box = document.getElementById("year1");
let year2Box = document.getElementById("year2");
let year3Box = document.getElementById("year3");
for(const list of lists){
    list.addEventListener("dragstart", function(e){
        let selected = e.target;

        year1Box.addEventListener("dragover", function(e){
            e.preventDefault();
        });

        year1Box.addEventListener("drop", function(e){
            year1Box.appendChild(selected);
            selected = null;
        });
        year2Box.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        year2Box.addEventListener("drop", function(e){
            year2Box.appendChild(selected);
            selected = null;
        });
        year3Box.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        year3Box.addEventListener("drop", function(e){
            year3Box.appendChild(selected);
            selected = null;
        });
    })
}

function toggleNav() {
    var bar = document.getElementById("mySidebar");
    if (bar.style.width >= "250px") {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("mySidebar").style.border = "0px solid #B00000";
        document.getElementById("mySidebar").style.padding = "0";
        document.getElementById("buttoner").style.marginLeft = "-250px";
    } else {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("mySidebar").style.border = "2px solid #B00000";
        document.getElementById("mySidebar").style.padding = "5px";
        document.getElementById("mySidebar").style.paddingTop = "50px";
        document.getElementById("buttoner").style.marginLeft = "0px";
    }
}