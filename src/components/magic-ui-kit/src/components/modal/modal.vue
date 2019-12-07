<template>
    <div
        ref="modal"
        role="dialog"
        class="modal"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
        :class="`modal--${size}`"
    >
        <header
            id="modalTitle"
            class="header"
            data-v-test-id="modal-title"
        >
            <div class="action">
                <magic-ui-button
                    v-if="backArrow && dismissible"
                    icon
                    tiny
                    no-margin
                    variant="light"
                    class="button button--left"
                    data-v-test-id="modal-go-back-btn"
                    @click="goBack"
                >
                    <magic-ui-icon
                        name="left-arrow-long"
                        class="icon"
                    />
                </magic-ui-button>
                <magic-ui-button
                    v-if="dismissible"
                    data-v-test-id="modal-close-btn"
                    icon
                    tiny
                    no-margin
                    variant="light"
                    class="button button--right"
                    @click="close"
                >
                    <magic-ui-icon
                        name="close"
                        class="icon"
                    />
                </magic-ui-button>
            </div>
            <slot name="header" />
        </header>
        <section
            id="modalDescription"
            class="body"
            data-v-test-id="modal-body"
        >
            <slot />
        </section>
    </div>
</template>

<script lang="ts" src="./modal.ts" />
<style lang="scss" src="./modal.scss" scoped />
