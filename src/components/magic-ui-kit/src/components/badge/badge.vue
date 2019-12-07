<template>
    <div
        class="badge"
        :class="[{ 'badge--floats': floats }]"
    >
        <slot />
    </div>
</template>

<script lang="ts" src="./badge.ts" />
<style lang="scss" src="./badge.scss" scoped />
