<template>
    <section class="works">
        <router-link class="works-item" to="/linkiar">
            <div class="works-thumbnail">
                <figure>
                    <img src="../assets/linkiar_thumbnail.jpg" alt="Linkiar" />
                </figure>
            </div>
            <div class="works-description">
                <h5 class="works-title">Linkiar (2020)</h5>
                <span class="works-subtitle">Branding, Strategy, UI design & development</span>
            </div>
        </router-link>
        <router-link class="works-item" to="/megalotto">
            <div class="works-thumbnail">
                <figure>
                    <img
                        src="../assets/megalotto_thumbnail.jpg"
                        alt="Megalotto"
                    />
                </figure>
            </div>
            <div class="works-description">
                <h5 class="works-title">Megalotto (2019 ~ 2020)</h5>
                <span class="works-subtitle">UI/Front-end development</span>
            </div>
        </router-link>
        <router-link class="works-item" to="/crucijuegos">
            <div class="works-thumbnail">
                <figure>
                    <img
                        src="../assets/crucijuegos_thumbnail.jpg"
                        alt="Crucijuegos"
                    />
                </figure>
            </div>
            <div class="works-description">

                <h5 class="works-title">Crucijuegos (2016 ~ 2019)</h5>
                <span class="works-subtitle">Art Direction, UI design & development</span>
            </div>
        </router-link>
    </section>
</template>

<script>
import megalotto from '@/components/megalotto.vue';
import linkiar from '@/components/linkiar.vue';
import crucijuegos from '@/components/crucijuegos.vue';

export default {
    name: 'works',
    components: {
        megalotto,
        linkiar,
        crucijuegos
    },
    data() {
        return {
            hooperSettings: {
                itemsToShow: 2,
                centerMode: true
            },
            component: ''
        };
    }
};
</script>

<style scoped lang="scss"></style>
