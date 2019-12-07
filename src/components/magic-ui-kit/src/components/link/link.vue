<template>
    <magic-ui-button
        v-if="button && to"
        v-bind="$attrs"
        data-v-test-id="link-test"
        button-tag="magic-router-link"
        :to.prop="to"
        @click="clicked()"
    >
        <slot />
    </magic-ui-button>
    <magic-router-link
        v-else-if="to"
        v-bind="$attrs"
        data-v-test-id="link-test"
        :to="to"
    >
        <slot />
    </magic-router-link>
    <a
        v-else
        v-bind="$attrs"
        data-v-test-id="link-test"
        class="link"
        :class="{ 'is-disabled': disabled }"
        @click="clicked()"
    >
        <slot />
    </a>
</template>

<script lang="ts" src="./link.ts" />
<style lang="scss" src="./link.scss" scoped />
