<template>
    <div class="accordion">
        <div
            class="toggle"
            :class="[{ 'toggle--wide': wide }]"
            @click="toggle"
        >
            <slot
                name="toggle"
                :visible="visible"
            />
            <magic-ui-icon
                v-show="visible"
                name="up-arrow"
                class="icon"
            />
            <magic-ui-icon
                v-show="!visible"
                name="down-arrow"
                class="icon"
            />
        </div>
        <transition name="expand">
            <div
                v-if="visible"
                class="content"
                :class="{ 'content--no-animation': noAnimation }"
            >
                <slot name="content" />
            </div>
        </transition>
    </div>
</template>

<script lang="ts" src="./accordion.ts" />
<style lang="scss" src="./accordion.scss" scoped />
