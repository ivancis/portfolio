<template>
    <svg
        class="megalotto-ball"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120 120"
        fill="url(#megalotto-gradient)"
    >
        <linearGradient id="megalotto-gradient" x2="100%" y1="244.61%">
            <stop offset=".62%" stop-color="#FF6847" ></stop>
            <stop offset="96.81%" stop-color="#F8464E" ></stop>
        </linearGradient>
        <circle
            cy="50"
            cx="60"
            r="50"
        >
            <animate
                attributeName="cx"
                attributeType="XML"
                repeatCount="indefinite"
                begin="0s"
                dur="20s"
                values="60; 70; 60; 50; 60;"
                calcMode="spline"
                keySplines="
                    0.445, 0.05, 0.55, 0.95;
                    0.445, 0.05, 0.55, 0.95;
                    0.445, 0.05, 0.55, 0.95;
                    0.445, 0.05, 0.55, 0.95"
            />
            <animate
                attributeName="cy"
                attributeType="XML"
                repeatCount="indefinite"
                begin="0s"
                dur="20s"
                values="50; 60; 70; 60; 50;"
                calcMode="spline"
                keySplines="
                    0.445, 0.05, 0.55, 0.95;
                    0.445, 0.05, 0.55, 0.95;
                    0.445, 0.05, 0.55, 0.95;
                    0.445, 0.05, 0.55, 0.95"
            />
            <animate
                attributeName="r"
                attributeType="XML"
                repeatCount="indefinite"
                begin="0s"
                dur="120s"
                values="50; 40; 50;"
                calcMode="spline"
                keySplines="
                    0.445, 0.05, 0.55, 0.95;
                    0.445, 0.05, 0.55, 0.95"
            />
        </circle>
    </svg>
</template>

<script>
export default {
    name: 'megalottoBall'
};
</script>

<style scoped lang="scss"></style>
