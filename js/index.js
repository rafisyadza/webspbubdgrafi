 // Toggle menu saat layar kecil
    document.getElementById('menu-toggle').addEventListener('click', function () {
      const nav = document.getElementById('nav-links');
      nav.classList.toggle('show');
    });

    // Scroll ke bagian tertentu
    function scrollToSection(id) {
      const section = document.getElementById(id);
      window.scrollTo({
        top: section.offsetTop - 60, // menghindari tertutup navbar
        behavior: 'smooth'
      });
    }

     // Toggle menu responsive
    document.getElementById('menu-toggle').addEventListener('click', function () {
      document.getElementById('nav-links').classList.toggle('show');
    });

    // Scroll halus
    function scrollToSection(id) {
      const section = document.getElementById(id);
      const offset = -60;
      const y = section.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }


    