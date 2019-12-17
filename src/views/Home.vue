<template>
    <div class="page page--home">
        <section class="section section--intro">
            <div class="intro-text">
                <h2>Hello, I'm <b v-on:click="component = 'about'">Iván </b><em>Díaz Bonansea</em></h2>
                <h2>this is my showcase on the internet.</h2>
            </div>
        </section>
        <section class="section section--content">
            <div class="intro-text">
                <h4>I’m a <b>graphic designer,</b> specialized in <b>digital UI and UX.</b></h4>
                <h4>Also I've been working as a <b>front-end UI developer</b> for X Earth years.</h4>
            </div>
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
                <transition name="fade" mode="out-in">
                    <div
                        v-if="panel == 1"
                        key="panel1"
                    >
                        <a
                            href="#"
                            class="nav__link"
                            @click.prevent="panel = 2"
                        >
                            Some works
                        </a>
                    </div>
                    <div
                        v-if="panel == 2"
                        key="panel2"
                    >
                        <a
                            href="#"
                            class="nav__link"
                            @click.prevent="panel = 1"
                        >
                            My info
                        </a>
                    </div>
                </transition>
            </div>
            <transition name="fade" mode="out-in">
                <div
                    v-if="panel == 1"
                    key="panel1"
                    class="content content--works"
                >
                    <div class="grido">
                        <div class="grido__item">about</div>
                        <div class="grido__item">about</div>
                        <div class="grido__item">about</div>
                        <div class="grido__item">about</div>
                        <div class="grido__item">about</div>
                        <div class="grido__item">about</div>
                    </div>
                </div>
                <div
                    v-if="panel == 2"
                    key="panel2"
                    class="content content--about"
                >
                    <div class="grido">
                        <div class="grido__item">works</div>
                        <div class="grido__item">works</div>
                        <div class="grido__item">works</div>
                        <div class="grido__item">works</div>
                        <div class="grido__item">works</div>
                        <div class="grido__item">works</div>
                    </div>
                </div>
            </transition>
            <component v-bind:is="component" />
        </section>
        <footer>
            <ul>
                <li>linkedIn/in/ivandb</li>
                <li>email@ivandb.com</li>
            </ul>
        </footer>
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
            panel: 1,
            component: 'about'
        }
    }
};
</script>
