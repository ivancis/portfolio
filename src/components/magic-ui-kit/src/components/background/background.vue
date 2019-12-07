<template>
    <picture class="picture">
        <source
            v-for="alternative in alternatives"
            :key="alternative.mediaQuery"
            :srcset="alternative.srcset"
            :media="alternative.mediaQuery"
        />
        <img
            class="image"
            :src="cdnPath"
        />
    </picture>
</template>

<script lang="ts" src="./background.ts" />
<style lang="scss" src="./background.scss" scoped />
