const { ref, createApp } = Vue;
createApp({
    setup() {
        const count = ref(0);
        const resColor = ref("grey");
        const increment = () => {
            count.value += 1;
            if (count.value > 10) {
                resColor.value = "green";
            }
            if (count.value === 0) {
                resColor.value = "black";
            }
            if (count.value < 0) {
                resColor.value = "red";
            }
            if (count.value > 0 && count.value <= 10) {
                resColor.value = "gray";
            }
        };
        const decrement = () => {
            count.value -= 1;
            if (count.value > 10) {
                resColor.value = "green";
            }
            if (count.value === 0) {
                resColor.value = "black";
            }
            if (count.value < 0) {
                resColor.value = "red";
            }
            if (count.value > 0 && count.value <= 10) {
                resColor.value = "gray";
            }
        };
        const reset = () => {
            count.value = 0;
            if (count.value === 0) {
                resColor.value = "black";
            }
        };
        return {
            count,
            resColor,
            increment,
            decrement,
            reset,
        };
    },
}).mount("#app");