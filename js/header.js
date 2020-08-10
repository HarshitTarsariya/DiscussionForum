document.getElementById("profileNavigator").className = "";
document.getElementById("homeNavigator").className = "";


var page = (location.href.split("/").slice(-1))[0];
if (page == "profile.html")
    document.getElementById("profileNavigator").className = "active";
else if (page == "index.html")
    document.getElementById("homeNavigator").className = "active";