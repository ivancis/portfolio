<template>
    <div
        class="switch"
        :class="{'switch--right': right}"
    >
        <input
            v-bind="$filteredAttrs"
            class="input"
            type="checkbox"
            :checked="value"
            @change.stop="onChange($event.target.checked)"
        />
        <label
            class="label"
            :for="$attrs.id"
        >
            <span
                v-if="right"
                class="inner"
            >
                <slot />
            </span>
            <slot v-else />
        </label>
    </div>
</template>

<script lang="ts" src="./switch.ts" />
<style lang="scss" src="./switch.scss" scoped />
