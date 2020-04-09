<template>
    <div class="wrapper">
        <header>
            <div class="header-field">
                <h1>Hello, I'm Iván. This website is still a WIP.</h1>
                <h2>UI designer & developer</h2>
            </div>
            <div class="header-field header-field--right">
                <a href="https://www.linkedin.com/in/ivandb/">LinkedIn</a>
                <a href="mailto:hello@ivandb.com?Subject=Hello%20Ivan" target="_top">hello@ivandb.com</a>
            </div>
        </header>
        <div class="content">
            <nav class="nav">
                <span v-on:click="component = 'works'" class="nav-link">
                    Portfolio
                </span>
                <span v-on:click="component = 'about'" class="nav-link">
                    Profile
                </span>
            </nav>
            <component v-bind:is="component" />
        </div>
    </div>
</template>

<script>
import works from '@/components/works.vue';
import about from '@/components/about.vue';

export default {
    name: 'home',
    components: {
        works,
        about
    },
    data() {
        return {
            component: 'works'
        };
    }
};
</script>
