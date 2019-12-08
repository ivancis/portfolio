<template>
    <div class="page page--home">
        <section class="section section--intro">
            <div class="column">
                <h2>Hello, my name is <b>Iván.</b></h2>
                <h2>I’m a <b>graphic and UI designer</b>, playing with <b>UX</b>.</h2>
                <h2>Also <b>UI developer</b>, aiming to <b>full front-end.</b></h2>
            </div>
        </section>

        <section class="section section--gallery">
            <!-- <ul class="nav">
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
            </keep-alive> -->

            <div class="grido">
                <div class="grido__item">
                    <span class="filling"></span>
                </div>
                <div class="grido__item">
                    <span class="filling"></span>
                </div>
                <div class="grido__item">
                    <span class="filling"></span>
                </div>
                <div class="grido__item">
                    <span class="filling"></span>
                </div>
                <div class="grido__item">
                    <span class="filling"></span>
                </div>
                <div class="grido__item">
                    <span class="filling"></span>
                </div>
            </div>
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
        about,
    },
    data(){
        return{
            component: 'mapa'
        }
    }
};
</script>
