<template>
    <input
        v-bind="$filteredAttrs"
        class="input"
        :class="{
            'has-icon': icon,
            'input--centered': centered,
        }"
        @keydown.delete="onErase($event)"
        @input="onInput($event)"
        @change="onChange($event)"
    />
</template>

<script lang="ts" src="./input.ts" />
<style lang="scss" src="./input.scss" scoped />
