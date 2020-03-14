<template>
    <div class="page page--home">
        <h2>Hello, I'm Iván</h2>
        <p>
            I design & build web products, caring for clear, well crafted user interaction.
            <br/>
        </p>
        <nav class="nav">
            <a
                class="nav__link"
                v-on:click="component = 'about'"
            >
                About
            </a>
            <a
                v-on:click="component = 'works'"
                class="nav__link"
            >
                Works
            </a>
        </nav>
        <article class="content">
            <component v-bind:is="component" />
        </article>
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
