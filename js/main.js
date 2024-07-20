const { createApp } = Vue;

createApp({
    data() {
        return {
            imageSrc: 'img/firstpage.png',
            isSmallScreen: false
        };
    },
    mounted() {
        this.updateImage();
        this.checkScreenSize();
        window.addEventListener('resize', this.updateImage);
        window.addEventListener('resize', this.checkScreenSize);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.updateImage);
        window.removeEventListener('resize', this.checkScreenSize);
    },
    methods: {
        updateImage() {
            if (window.innerWidth >= 1180 && window.innerWidth <= 1024) {
                this.imageSrc = 'img/firstpage_ipad.png';
            } else {
                this.imageSrc = 'img/firstpage.png';
            }
        },
        checkScreenSize() {
            this.isSmallScreen = window.innerWidth < 1023;
        }
    }
}).mount('#app');
