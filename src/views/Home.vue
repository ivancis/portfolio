<template>
        <div class="page page--home">
            <works></works>
            <about></about>
            <bulletpoints></bulletpoints>
        </div>
</template>

<script>
import works from '@/components/works.vue';
import about from '@/components/about.vue';
import bulletpoints from '@/components/bulletpoints.vue';

export default {
    name: 'home',
    components: {
        works,
        about,
        bulletpoints
    }
};
</script>
