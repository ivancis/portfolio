<template>
    <!-- TODO: Modify how we do cms text so component can have real scoped styles -->
    <component
        v-bind="$filteredAttrs"
        v-html="processedText"
        class="text"
        :class="{
            'text--content': contentText,
            'text--offer': offerText,
            'text--carousel': carouselText,
            'text--marketing-banner': marketingBannerText,
        }"
        :is="tag || 'div'"
    />
</template>

<script lang="ts" src="./text.ts" />
<style lang="scss" src="./text.scss" scoped />
