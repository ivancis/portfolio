<template>
    <component
        :data-v-test-id="$attrs['data-v-test-id']"
        :is="buttonTag"
        v-bind="$filteredAttrs"
        :to="to"
        class="button"
        :class="[buttonVariant, {
            'button--hollow': hollow,
            'button--icon': icon,
            'button--round': round,
            'button--left': left,
            'button--right': right,
            'button--small': small,
            'button--tiny': tiny,
            'button--wide': wide,
            'button--no-margin': noMargin,
            'button--less-margin': lessMargin,
            'button--no-padding': noPadding,
            'button--less-padding': lessPadding,
            'button--add-space': addSpace,
            'is-loading': loading,
            'is-disabled': $attrs.disabled,
        }]"
    >
        <slot />
    </component>
</template>

<script lang="ts" src="./button.ts" />
<style lang="scss" src="./button.scss" scoped />
