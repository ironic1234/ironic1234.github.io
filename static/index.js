let sidebarOpen = false;

function openSidebar() {
    if (sidebarOpen) {
        document.getElementById("sidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("sidebarButton").style.marginLeft = "0%";
    }
    else {
        document.getElementById("sidebar").style.width = "13%";
        document.getElementById("main").style.marginLeft = "13%";
        document.getElementById("sidebarButton").style.marginLeft = "13%";
    }
    sidebarOpen = !sidebarOpen;
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("sidebar").style.transition = "0.5s";
        document.getElementById("main").style.transition = "0.5s";
        document.getElementById("sidebarButton").style.transition = "0.5s";
    }, 300);
});
        
