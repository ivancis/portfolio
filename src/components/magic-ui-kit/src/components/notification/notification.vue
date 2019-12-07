<template>
    <div
        class="notification"
        :class="[ variant ? `notification--${variant}` : '' ]"
        @close="close"
    >
        <div class="content">
            <magic-ui-icon
                v-if="variant !== 'message'"
                class="icon icon--status"
                :name="iconVariant"
                :class="[ iconVariant ]"
            />
            <div
                class="text"
                ref="content"
            />
        </div>
        <magic-ui-button
            v-if="dismissible"
            icon
            no-margin
            no-padding
            class="button"
            variant="transparent"
            @click="close"
        >
            <magic-ui-icon
                name="close"
                class="icon"
            />
        </magic-ui-button>
    </div>
</template>

<script lang="ts" src="./notification.ts" />
<style lang="scss" src="./notification.scss" scoped />
