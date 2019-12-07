<template>
    <div
        class="radio-group"
        :class="{
            'radio-group--space': space,
            'radio-group--left': left,
            'radio-group--right': right,
            'radio-group--inline': inline,
            'radio-group--column': column,
        }"
        @register="register"
        @change="change"
        @input.stop
        @keydown.up="moveFocus(-1, $event)"
        @keydown.down="moveFocus(1, $event)"
        @keydown.left="moveFocus(-1, $event)"
        @keydown.right="moveFocus(1, $event)"
        @focus.capture="focusCurrent"
    >
        <div class="wrapper">
            <slot />
        </div>
    </div>
</template>

<script lang="ts" src="./radio-group.ts" />
<style lang="scss" src="./radio-group.scss" scoped />
