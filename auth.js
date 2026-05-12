// auth.js - El Guardián de TLU
(function() {
    const session = localStorage.getItem('userTLU');
    
    // Si no hay sesión y no estamos ya en el login, ¡FUERA!
    if (!session && !window.location.pathname.includes('login.html')) {
        window.location.href = '/login.html'; // Ajusta la ruta según tu estructura
    }
})();

// Función global para cerrar sesión
function logout() {
    if(confirm("¿Cerrar sesión segura y salir del sistema?")) {
        localStorage.removeItem('userTLU');
        window.location.href = '/login.html';
    }
}
