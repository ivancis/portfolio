<template>
    <section class="works">
        <div class="works-item">
            <router-link
                class="works-thumbnail works-thumbnail--linkiar"
                style="--works-thumbnail-color: #05052D;"
                to="/linkiar"
            >
                <figure>
                    <img src="../assets/linkiar_thumbnail.svg" alt="linkiar" />
                </figure>
            </router-link>
            <div class="works-description">
                <div class="works-title">
                    <router-link
                        class="link"
                        to="/linkiar"
                    >
                        Linkiar
                    </router-link>
                    <em>(2020)</em>
                </div>
                <span class="works-subtitle">UI, UX design & front-end development</span>
            </div>
        </div>
        <div class="works-item">
            <router-link
                class="works-thumbnail works-thumbnail--megalotto"
                style="--works-thumbnail-color: #f8464e;"
                to="/megalotto"
            >
                <figure>
                    <img src="../assets/megalotto_thumbnail.svg" alt="megalotto" />
                </figure>
            </router-link>
            <div class="works-description">
                <div class="works-title">
                    <router-link
                        class="link"
                        to="/megalotto"
                    >
                        Megalotto
                    </router-link>
                    <em>(2020)</em>
                </div>
                <span class="works-subtitle">Front-end development</span>
            </div>
        </div>
        <div class="works-item">
            <router-link
                class="works-thumbnail works-thumbnail--modular"
                style="--works-thumbnail-color: #171c30;"
                to="/modular"
            >
                <figure>
                    <img src="../assets/modular_thumbnail.svg" alt="modular" />
                </figure>
            </router-link>
            <div class="works-description">
                <div class="works-title">
                    <router-link
                        class="link"
                        to="/modular"
                    >
                        Modular
                    </router-link>
                    <em>(2019)</em>
                </div>
                <span class="works-subtitle">UI, UX design & front-end development</span>
            </div>
        </div>
        <div class="works-item">
            <router-link
                class="works-thumbnail works-thumbnail--crucijuegos"
                style="--works-thumbnail-color: #0a3666;"
                to="/crucijuegos"
            >
                <figure>
                    <img src="../assets/crucijuegos_thumbnail.svg" alt="crucijuegos" />
                </figure>
            </router-link>
            <div class="works-description">
                <div class="works-title">
                    <router-link
                        class="link"
                        to="/crucijuegos"
                    >
                        Crucijuegos
                    </router-link>
                    <em>(2018)</em>
                </div>
                <span class="works-subtitle">UI, UX design & front-end development</span>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'works'
};
</script>

<style scoped lang="scss"></style>
