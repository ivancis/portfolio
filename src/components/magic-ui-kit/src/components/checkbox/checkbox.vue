<template>
    <div
        class="checkbox"
        :class="[{
            'checkbox--inline': inline,
            'checkbox--no-label': noLabel,
            'checkbox--no-margin': noMargin,
        }]"
    >
        <input
            v-bind="$filteredAttrs"
            class="input"
            type="checkbox"
            :id="$attrs.id || 'checkbox'"
            :checked.prop="value"
            :indeterminate.prop="indeterminate"
            @change.stop="handleChange($event)"
        />
        <label
            class="label"
            :class="{ 'label--bold': bold }"
            :for="$attrs.id || 'checkbox'"
        >
            <slot />
        </label>
    </div>
</template>

<script lang="ts" src="./checkbox.ts" />
<style lang="scss" src="./checkbox.scss" scoped />
