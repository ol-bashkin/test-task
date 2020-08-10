export const heightMixin = {
    methods: {
        setVh() {
            let vh = window ? window.innerHeight * 0.01 : 0;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        }
    },
    mounted() {
        this.setVh();
        window.addEventListener("resize", () => {
            this.setVh();
        });
    }
};
