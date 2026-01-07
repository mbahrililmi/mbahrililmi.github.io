// Component Loader: Loads HTML components into placeholders

document.addEventListener("DOMContentLoaded", function () {
  const includeElements = document.querySelectorAll("[data-include]");
  includeElements.forEach(function (el) {
    const file = el.getAttribute("data-include");
    fetch(file)
      .then((response) => {
        if (!response.ok) throw new Error("Component not found: " + file);
        return response.text();
      })
      .then((html) => {
        el.innerHTML = html;
      })
      .catch((err) => {
        el.innerHTML = `<div style='color:red'>${err.message}</div>`;
      });
  });
});
