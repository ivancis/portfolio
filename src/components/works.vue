<template>
    <section class="works">
        <router-link class="works-item" to="/linkiar">
            <div class="works-thumbnail">
                <figure>
                    <img src="../assets/linkiar_thumbnail.svg" alt="test" />
                </figure>
            </div>
            <div class="works-description">
                <h5 class="works-title">Linkiar (2020)</h5>
                <span class="works-subtitle">UI design, front-end development</span>
            </div>
        </router-link>
        <router-link class="works-item" to="/megalotto">
            <div class="works-thumbnail">
                <figure>
                    <img src="../assets/megalotto_thumbnail.svg" alt="test" />
                </figure>
            </div>
            <div class="works-description">
                <h5 class="works-title">Megalotto (2020)</h5>
                <span class="works-subtitle">Front-end development</span>
            </div>
        </router-link>
        <router-link class="works-item" to="/modular">
            <div class="works-thumbnail">
                <figure>
                    <img src="../assets/modular_thumbnail.svg" alt="test" />
                </figure>
            </div>
            <div class="works-description">
                <h5 class="works-title">Modular (2019)</h5>
                <span class="works-subtitle">UI design, front-end development</span>
            </div>
        </router-link>
        <router-link class="works-item" to="/crucijuegos">
            <div class="works-thumbnail">
                <figure>
                    <img src="../assets/crucijuegos_thumbnail.svg" alt="test" />
                </figure>
            </div>
            <div class="works-description">
                <h5 class="works-title">Crucijuegos (2018)</h5>
                <span class="works-subtitle">UI design, front-end development</span>
            </div>
        </router-link>
    </section>
</template>

<script>
export default {
    name: 'works'
};
</script>

<style scoped lang="scss"></style>
