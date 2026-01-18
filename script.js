const toggle = document.getElementById("searchToggle");
const box = document.getElementById("searchBox");

toggle.addEventListener("click", () => {
  box.style.display = box.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-wrapper")) {
    box.style.display = "none";
  }
});

