const { createApp } = Vue;

createApp({
    data() {
        return {
            isSmallScreen: false
        };
    },
    mounted() {
        this.checkScreenSize();
        window.addEventListener('resize', this.checkScreenSize);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkScreenSize);
    },
    methods: {
        checkScreenSize() {
            this.isSmallScreen = window.innerWidth < 1023;
        }
    }
}).mount('#app');


const container = document.querySelector('.fullwidthbanner-container');

const addLeaf = () => {
    if (container.children.length < 10) {
        const leaf = document.createElement('div');
        leaf.classList.add('leaf');
        leaf.style.setProperty('--left-start', Math.random());
        leaf.style.setProperty('--left-end', Math.random());
        leaf.style.animationDuration = `${Math.random() * 5 + 5}s`; // 隨機動畫持續時間5-10秒
        container.appendChild(leaf);
    }
};

// 初始隨機添加1到3片葉子
const initialLeafCount = Math.floor(Math.random() * 3) + 1;
for (let i = 0; i < initialLeafCount; i++) {
    addLeaf();
}

// 每5秒添加一片葉子，直到達到最多10片
setInterval(addLeaf, 5000);