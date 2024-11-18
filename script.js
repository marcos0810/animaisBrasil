// Função para alternar a visibilidade do menu lateral
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}

// Função para esconder o menu quando um item for clicado
function hideMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('active'); // Remove a classe 'active' para esconder o menu
}
