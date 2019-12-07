<template>
    <div
        class="peek-password"
        :data-v-test-id="$attrs['data-v-test-id']"
    >
        <component
            v-bind="$filteredAttrs"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            icon
            no-icon
            :is="muggle ? 'ui-form-field' : 'magic-ui-form-field'"
            :focused="focused"
            :type="isShown ? 'text' : 'password'"
        />
        <button
            class="toggle"
            type="button"
            data-v-test-id="eye-password"
            @click="togglePassword"
        >
            <magic-ui-icon
                v-if="isShown"
                name="eye-solid"
                class="icon"
                data-v-test-id="eye-icon"
            />
            <magic-ui-icon
                v-else
                name="eye"
                class="icon"
                data-v-test-id="eye-icon"
            />
        </button>
    </div>
</template>

<script lang="ts" src="./peek-password.ts" />
<style lang="scss" src="./peek-password.scss" scoped />
