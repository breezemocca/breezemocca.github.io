document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = document.querySelectorAll(".gallery-item img");

  galleryItems.forEach((item) => {
    item.addEventListener("click", function () {
      const modal = document.createElement("div");
      modal.classList.add("modal");
      modal.innerHTML = `
        <div class="modal-content">
          <span class="close-button">&times;</span>
          <img src="${item.src}" alt="${item.alt}">
        </div>
      `;
      document.body.appendChild(modal);

      modal.querySelector(".close-button").addEventListener("click", function () {
        document.body.removeChild(modal);
      });

      modal.addEventListener("click", function (e) {
        if (e.target === modal) {
          document.body.removeChild(modal);
        }
      });
    });
  });
});
