<template>
    <div
        class="tooltip"
        @mouseover="openTooltip()"
        @mouseout="closeTooltip()"
    >
        <slot />
        <transition name="fade-in">
            <div
                v-if="isOpen"
                class="content"
            >
                <p class="label">
                    {{ label }}
                </p>
            </div>
        </transition>
    </div>
</template>

<script lang="ts" src="./tooltip.ts" />
<style lang="scss" src="./tooltip.scss" scoped />
