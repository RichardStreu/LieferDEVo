// Check scroll positions --> add classLists

window.addEventListener("scroll", () => {
  if (window.scrollY > 792) {
      document.getElementById("foodHeaderNavbar").classList.add("food-header-navbar-sticky");
  } else {
      document.getElementById("foodHeaderNavbar").classList.remove("food-header-navbar-sticky");
  }
});



