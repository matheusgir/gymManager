const currentPage = location.pathname;
const menuItems = document.querySelectorAll("header .header__links a");

for (const item of menuItems) {
  if (currentPage.includes(item.getAttribute("href"))) {
    item.classList.add("active");
  }
}
