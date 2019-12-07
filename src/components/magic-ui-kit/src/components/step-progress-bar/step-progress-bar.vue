<template>
    <ul class="step-progress-bar">
        <li
            v-for="i in steps"
            :key="i"
            class="step"
            :class="stepClass(i)"
        />
    </ul>
</template>

<script lang="ts" src="./step-progress-bar.ts" />
<style lang="scss" src="./step-progress-bar.scss" scoped />
