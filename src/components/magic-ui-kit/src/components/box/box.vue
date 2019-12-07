<template>
    <div
        class="box"
        :class="[elevationClass, {
            'box--no-bottom-padding': noBottomPadding,
            'box--add-bottom-margin': addBottomMargin,
        }]"
    >
        <slot />
    </div>
</template>

<script lang="ts" src="./box.ts" />
<style lang="scss" src="./box.scss" scoped />
