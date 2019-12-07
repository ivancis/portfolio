<template>
    <div
        class="radio"
        :class="{ 'radio--inline': inline }"
    >
        <input
            v-bind="$filteredAttrs"
            ref="input"
            class="input"
            type="radio"
            :id="$attrs.id || 'radio'"
            :checked.prop="checked"
            :value="value"
            @keypress.enter.stop="onChange()"
            @change.stop="onChange()"
        />
        <label
            class="label"
            :class="{ 'label--bold': bold }"
            :for="$attrs.id || 'radio'"
        >
            <slot />
        </label>
    </div>
</template>

<script lang="ts" src="./radio.ts" />
<style lang="scss" src="./radio.scss" scoped />
