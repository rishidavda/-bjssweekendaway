/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navToggle() {
  var x = document.getElementById("btn-nav");
  if (x.className === "btn btn-nav") {
    x.className += " btn-nav-active";
    document.getElementById("navList").className = "showList";
  } else {
    x.className = "btn btn-nav";
    document.getElementById("navList").className = "";
  }
}
