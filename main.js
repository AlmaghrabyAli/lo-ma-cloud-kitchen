// Navbar background and stickiness effect on scroll
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});



document.getElementById('searchMeals').addEventListener('input', function() {
  let searchValue = this.value.toLowerCase();
  document.querySelectorAll('.card').forEach(function(card) {
    // ابحث في العنوان والوصف فقط (أو كما تريد)
    let title = card.querySelector('.meal-title').textContent.toLowerCase();
    let desc = card.querySelector('.meal-desc').textContent.toLowerCase();
    if (title.includes(searchValue) || desc.includes(searchValue)) {
      card.style.display = ''; // تظهر البطاقة
    } else {
      card.style.display = 'none'; // تخفى البطاقة
    }
  });
});







window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY + 120;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollPos > top && scrollPos < top + height) {
      document.querySelectorAll(".nav-links li").forEach(li => {
        const link = li.querySelector("a");
        // شيل active فقط من الروابط الداخلية (#)
        if (link.getAttribute("href").startsWith("#")) {
          li.classList.remove("active");
        }
      });

      const activeLink = document.querySelector(`.nav-links li a[href="#${id}"]`);
      if (activeLink) {
        activeLink.parentElement.classList.add("active");
      }
    }
  });
});