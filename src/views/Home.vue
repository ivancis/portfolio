<template>
    <section class="page page--home">
        <div class="intro">
            <h1>Hello, my name is Iván</h1>
            <h2>I’m a graphic and UI designer, working on UX also UI developer, working on full front-end</h2>
        </div>

        <div class="content">
            <ul class="nav">
                <li class="nav-item">
                    <button
                        v-on:click="component = 'works'"
                        class="button"
                    >
                        <span>Works</span>
                    </button>
                </li>
                <li class="nav-item">
                    <button
                        v-on:click="component = 'about'"
                        class="button"
                    >
                        <span>About</span>
                    </button>
                </li>
            </ul>
            <keep-alive class="gallery">
                <component v-bind:is="component" />
            </keep-alive>
        </div>
    </section>
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
            component: 'mapa'
        }
    }
};
</script>
