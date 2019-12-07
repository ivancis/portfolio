<template>
    <div
        class="progress-bar"
        :class="{'is-complete': isComplete}"
        :style="styles"
    >
        <div class="bar">
            <div class="track" />
            <div class="filler" />
        </div>
    </div>
</template>

<script lang="ts" src="./progress-bar.ts" />
<style lang="scss" src="./progress-bar.scss" scoped />
