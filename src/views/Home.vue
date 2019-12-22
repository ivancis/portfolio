<template>
    <div class="page page--home">
        <section class="section section--cover">
            <div class="intro-text">
                <h2>Hello, I'm Iván</h2>
            </div>
        </section>
        <section class="section section--intro">
            <div class="intro-text">
                <h4>
                    I studied <b>graphic design</b> in Argentina and specialized
                    in <b>digital UI and UX.</b>
                </h4>
                <h4>
                    Also I've been working as a
                    <b>front-end UI developer</b> for 5 Earth years.
                </h4>
            </div>
            <div class="nav">
                <span class="nav__text"
                    >Check out the
                    <b v-on:click="component = 'about'" class="nav__link"
                        >About</b
                    >
                    section and some of my
                    <b v-on:click="component = 'works'" class="nav__link"
                        >works</b
                    >.</span
                >
            </div>
        </section>
        <section class="section section--content">
            <component v-bind:is="component" />
        </section>
        <footer class="section section--footer">hello@ivandb.com</footer>
    </div>
</template>

<script>
import gallery from '@/components/gallery.vue';
import works from '@/components/works.vue';
import about from '@/components/about.vue';

export default {
    name: 'home',
    components: {
        gallery,
        works,
        about
    },
    data() {
        return {
            panel: 1,
            component: ''
        };
    }
};
</script>
