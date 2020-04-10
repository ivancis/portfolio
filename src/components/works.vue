<template>
    <section class="content-section works">
        <article
            class="work-item work-item--megalotto"
            v-on:click="component = 'megalotto'"
        >
            <div class="work-item__thumbnail">
                <figure>
                    <img
                        src="../assets/megalotto_thumbnail.jpg"
                        alt="Megalotto"
                    />
                </figure>
            </div>
            <div class="work-item__description">
                <span>UI development</span>
            </div>
        </article>
        <article
            class="work-item work-item--linkiar"
            v-on:click="component = 'linkiar'"
        >
            <div class="work-item__thumbnail">
                <figure>
                    <img src="../assets/linkiar_thumbnail.jpg" alt="Linkiar" />
                </figure>
            </div>
            <div class="work-item__description">
                <span>UI design & development. UX.</span>
            </div>
        </article>
        <article
            class="work-item work-item--crucijuegos"
            v-on:click="component = 'crucijuegos'"
        >
            <div class="work-item__thumbnail">
                <figure>
                    <img
                        src="../assets/crucijuegos_thumbnail.jpg"
                        alt="Crucijuegos"
                    />
                </figure>
            </div>
            <div class="work-item__description">
                <span
                    >UI design & development. UX. Branding, graphics, etc.</span
                >
            </div>
        </article>
        <component v-bind:is="component" />
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
