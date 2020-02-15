<template>
    <div class="page page--home">
        <section class="section section--cover">
            <div class="intro-text">
                <h2>Hello, I'm Iván</h2>
                <h4>I design and build digital products, focused on relevant visual interfaces and user experiences.</h4>
                <h4>Also this is my <a href="mailto:hello@ivandb.com?Subject=Hello%20Iván" target="_top">email</a>.</h4>
            </div>
        </section>
        <section class="section section--intro">
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
