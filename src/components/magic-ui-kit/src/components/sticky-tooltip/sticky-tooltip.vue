<template>
    <div class="sticky-tooltip">
        <div
            class="clickable"
            @click="openTooltip()"
        >
            <slot name="clickable" />
        </div>
        <transition name="fade-in">
            <div
                v-if="isOpen"
                class="content"
            >
                <magic-ui-icon
                    name="close"
                    class="icon"
                    @click="closeTooltip()"
                />
                <slot name="content" />
            </div>
        </transition>
    </div>
</template>

<script lang="ts" src="./sticky-tooltip.ts" />
<style lang="scss" src="./sticky-tooltip.scss" scoped />
