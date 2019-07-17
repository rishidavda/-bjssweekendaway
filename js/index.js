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

function addHeader() {
  const headerContainer = document.getElementById("header");

  const header = document.createElement("div");
  header.className = "topnav";
  header.id = "myTopnav";

  const logo = document.createElement("img");
  logo.className = "logo";
  logo.src = "images/BJSS-280x150.png";
  logo.width = "90";
  logo.height = "50";

  const navBtn = document.createElement("div");
  navBtn.className = "btn btn-nav";
  navBtn.id = "btn-nav";
  navBtn.onclick = function() {
    navToggle();
  };

  const navBtnMiddle = document.createElement("div");
  navBtnMiddle.className = "btn-nav-middle";

  navBtn.appendChild(navBtnMiddle);

  header.appendChild(logo);
  header.appendChild(navBtn);

  headerContainer.appendChild(header);
}

function addNavList() {
  // add new links here
  const navLinks = [
    { text: "index", link: "index.html" },
    { text: "Venue map", link: "MapOfVenue.html" },
    { text: "Saturday", link: "Saturday.html" },
    { text: "Sunday", link: "Sunday.html" },
    { text: "Family guidelines & baby sitting", link: "FamilyGuidelines.html" },
    { text: "Leisure facilities", link: "LeisureFacilities.html" },
    { text: "Check-in & check-out", link: "Check-in&Check-out.html" }
  ];
  const headerContainer = document.getElementById("header");

  const navListContainer = document.createElement("div");
  navListContainer.id = "navList";

  const navList = document.createElement("ul");

  // add a links to the navigation
  for (var link of navLinks) {
    const indexItem = document.createElement("li");
    const indexLink = document.createElement("a");
    const indexText = document.createTextNode(link.text);
    indexLink.appendChild(indexText);
    indexLink.href = link.link;
    indexItem.appendChild(indexLink);
    navList.appendChild(indexItem);
  }

  navListContainer.appendChild(navList);
  headerContainer.appendChild(navListContainer);
}
