// --- Hamburger Menu Toggle ---
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

// لما تضغط على زر المنيو
menuBtn.addEventListener('click', (event) => {
  event.stopPropagation(); // عشان الضغط على الزر ما يقفلش المنيو
  menu.classList.toggle('active');
  menuBtn.classList.toggle('open');
});

// لما تضغط في أي مكان في الصفحة
document.addEventListener('click', (event) => {
  // لو المنيو مفتوحة والضغط مش على الزر أو المنيو نفسها
  if (
    menu.classList.contains('active') &&
    !menu.contains(event.target) &&
    event.target !== menuBtn
  ) {
    menu.classList.remove('active');
    menuBtn.classList.remove('open');
  }
});

 // تكبير الصور عند الضغط
    const popup = document.getElementById("imagePopup");
    const popupImg = document.getElementById("popupImg");
    const closePopup = document.getElementById("closePopup");

    document.querySelectorAll(".zoomable").forEach(img => {
      img.addEventListener("click", () => {
        popup.style.display = "flex";
        popupImg.src = img.src;
      });
    });

    closePopup.addEventListener("click", () => {
      popup.style.display = "none";
    });

    popup.addEventListener("click", (e) => {
      if (e.target === popup) popup.style.display = "none";
    });