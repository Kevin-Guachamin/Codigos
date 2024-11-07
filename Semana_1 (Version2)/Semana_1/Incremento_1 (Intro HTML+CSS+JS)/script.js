function showMenu(menu) {
    const menuTitle = document.getElementById('menuTitle');
    const menuContent = document.getElementById('menuContent');
    
    // Cambiar el título según el menú seleccionado
    menuTitle.textContent = `Has seleccionado: ${menu}`;
  
    // Cambiar el contenido según el menú seleccionado
    switch(menu) {
      case 'Inicio':
        menuContent.textContent = 'Bienvenido a la página de inicio de ñanEC.';
        document.getElementById('intro').style.backgroundColor = '#f0f0f0';
        break;
      case 'Restaurantes':
        menuContent.textContent = 'Explora los mejores restaurantes de San José.';
        document.getElementById('intro').style.backgroundColor = '#ffcc99';
        break;
      case 'Recetas':
        menuContent.textContent = 'Descubre recetas típicas de la región.';
        document.getElementById('intro').style.backgroundColor = '#99ff99';
        break;
      case 'Eventos':
        menuContent.textContent = 'Consulta los próximos eventos en San José.';
        document.getElementById('intro').style.backgroundColor = '#99ccff';
        break;
    }
  }
  