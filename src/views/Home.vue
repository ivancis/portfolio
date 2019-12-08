<template>
    <div class="page page--home">
        <section class="section section--intro">
            <div class="column">
                <h2>Hello, my name is <b>Iván.</b></h2>
                <h2>I’m a <b>graphic and UI designer</b>, passionate about UX.</h2>
                <h2>Also an experienced <b>UI developer</b>, aiming to be full front-end.</h2>
                <div class="nav">
                    <span class="nav__text">Here you'll find more</span>
                    <a
                        v-on:click="component = 'about'"
                        class="nav__link"
                    >
                        <span class="nav__text">about me</span>
                    </a>
                    <span class="nav__text">and some of</span>
                    <a
                        v-on:click="component = 'works'"
                        class="nav__link"
                    >
                        <span class="nav__text">my works</span>
                    </a>
                </div>
            </div>
        </section>

        <component v-bind:is="component" />
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
        about,
    },
    data(){
        return{
            component: 'about'
        }
    }
};
</script>
