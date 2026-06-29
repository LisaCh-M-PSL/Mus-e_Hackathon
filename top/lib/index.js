// Initialize the application loader
document.addEventListener('DOMContentLoaded', () => {
    console.log('Application de visite numérique chargée');
    
    // Simulate app loading (replace with actual app initialization)
    // For now, just display the loader
    const loadingText = document.querySelector('.loader-text');
    if (loadingText) {
        setTimeout(() => {
            loadingText.textContent = 'Application prête';
        }, 3000);
    }
});

// Service worker registration (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // navigator.serviceWorker.register('/./service_worker.js')
        //     .catch(error => console.log('Service Worker enregistrement échoué:', error));
    });
}
