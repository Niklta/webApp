const products = document.querySelectorAll(".product");

products.forEach((product) => {
  product.addEventListener("click", function () {
    const link = this.getAttribute("data-link");
    const isConfirmed = confirm("Открыть карточку товара?");
    if (isConfirmed) {
        window.location.href = link;
    }
  });
});

const filterButtons = document.querySelectorAll(".filter-button");
const categories = document.querySelectorAll(".category");

filterButtons.forEach((button) => {
button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");

    categories.forEach((categorySection) => {
    if (
        category === "all" ||
        categorySection.getAttribute("data-category") === category
    ) {
        categorySection.style.display = "block";
    } else {
        categorySection.style.display = "none";
    }
    });
});
});
