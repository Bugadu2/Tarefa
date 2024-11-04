      // Alternar tema claro/escuro
      function toggleTheme() {
        document.body.classList.toggle('light-theme');
        document.body.classList.toggle('dark-theme');
      }
 
      // Alternar visibilidade do menu lateral
      function toggleMenu() {
        document.getElementById('sidebar').classList.toggle('active')
     }
     function toggleMenu() {
      var sidebar = document.getElementById("sidebar");
      sidebar.classList.toggle("active"); // Alterna a classe "active" ao clicar no botão
    }
    function toggleMenu() {
      var sidebar = document.getElementById("sidebar");
      var overlay = document.getElementById("overlay");
    
      sidebar.classList.toggle("active"); // Alterna a visibilidade do menu
      overlay.classList.toggle("active"); // Alterna a visibilidade do overlay
    }
    