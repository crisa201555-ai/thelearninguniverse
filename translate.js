const translations = {
    es: {
        welcome: "¡Hola, EXPLORADOR!",
        mission_btn: "✨ Crear una clase",
        view_class: "🚀 Ver mi clase",
        inbox: "📧 Bandeja de entrada",
        logout: "Cerrar sesión...",
        store_title: "🛒 La Tienda Galáctica",
        buy_total: "¡Suma el total de la compra!",
        change_calc: "¡Calcula el vuelto!"
    },
    en: {
        welcome: "Hello, EXPLORER!",
        mission_btn: "✨ Create a class",
        view_class: "🚀 View my class",
        inbox: "📧 Inbox",
        logout: "Logout...",
        store_title: "🛒 The Galactic Store",
        buy_total: "Sum the total of the purchase!",
        change_calc: "Calculate the change!"
    }
};

function changeLanguage(lang) {
    localStorage.setItem('selectedLang', lang);
    
    // Buscamos todos los elementos con el atributo 'data-i18n'
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });
}

// Al cargar la página, aplicar el idioma guardado
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'es';
    changeLanguage(savedLang);
});
