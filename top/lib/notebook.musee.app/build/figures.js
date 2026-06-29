// Simple install-banner controller
class InstallBannerController {
    constructor(element) {
        this.element = element;
        this.textTarget = element.querySelector('[data-install-banner-target="text"]');
        this.init();
    }

    init() {
        // Detect browser and set appropriate text
        const userAgent = navigator.userAgent;
        let textKey = 'default';

        if (userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Edge') === -1) {
            textKey = 'chrome';
        } else if (userAgent.indexOf('Firefox') > -1) {
            textKey = 'firefox';
        } else if (userAgent.indexOf('OPR') > -1) {
            textKey = 'opera';
        }

        if (this.textTarget) {
            const text = this.textTarget.getAttribute(`data-text-${textKey}`);
            if (text) {
                this.textTarget.textContent = text;
            }
        }

        // Setup dismiss button
        const dismissBtn = this.element.querySelector('[data-action="click->install-banner#dismiss"]');
        if (dismissBtn) {
            dismissBtn.addEventListener('click', () => this.dismiss());
        }

        // Check if should show (not dismissed)
        if (!localStorage.getItem('install-banner-dismissed')) {
            this.element.removeAttribute('hidden');
        }
    }

    dismiss() {
        this.element.setAttribute('hidden', '');
        localStorage.setItem('install-banner-dismissed', 'true');
    }
}

// Initialize controller when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const banner = document.querySelector('[data-controller="install-banner"]');
    if (banner) {
        new InstallBannerController(banner);
    }
});
