import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });

  document.addEventListener('click', () => {
    for (let i = 0; i < 5; i++) {
      const newArticle = document.createElement("article");
      newArticle.classList = 'message';
      newArticle.textContent = 'Text';
      document.body.appendChild(newArticle);
    }
  })
});
