<template>
    <svg
        ref="svg"
        v-bind="attributes"
        xmlns="http://www.w3.org/2000/svg"
        :class="['icon', {
            'icon--badge': badge,
        }]"
    />
</template>

<script lang="ts" src="./icon.ts" />
<style lang="scss" src="./icon.scss" scoped />
