<template>
    <div class="page page--home">
        <works></works>
        <about></about>
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
    }
};
</script>
