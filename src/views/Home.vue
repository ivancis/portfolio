<template>
    <section class="content">
        <works></works>
        <about></about>
    </section>
</template>

<script>
import works from '@/components/works.vue';
import about from '@/components/about.vue';

export default {
    name: 'home',
    components: {
        works,
        about
    }
};
</script>
