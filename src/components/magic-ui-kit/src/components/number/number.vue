<template>
    <magic-ui-input
        type="text"
        inputmode="numeric"
        :pattern="pattern"
        @keydown="onKeyDown($event)"
    />
</template>

<script lang="ts" src="./number.ts" />
<style lang="scss" src="./number.scss" scoped />
