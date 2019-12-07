<template>
    <div
        class="form-field"
        :class="{
            'has-success': hasSuccess,
            'has-alert': hasWarning && shouldDisplayMessage,
            'has-error': hasError && shouldDisplayMessage,
            'has-focus': focused,
            'form-field--no-margin': noMargin,
            'form-field--centered': centered,
        }"
        :data-v-test-id="$attrs['data-v-test-id']"
        @input="onInput($event)"
        @change="onChange($event)"
        @focus.capture="onFocus($event)"
        @blur.capture="onBlur()"
    >
        <label
            v-if="label"
            class="label"
        >
            {{ label }}
        </label>
        <slot>
            <component
                ref="input"
                v-bind="$filteredAttrs"
                class="field"
                :is="muggle ? 'ui-input' : 'magic-ui-input'"
                :class="{
                    'form-field--no-margin': noMargin,
                    'form-field--centered': centered,
                }"
                :icon="(hasValidationState && !noIcon) || $attrs.icon"
            />
            <magic-ui-icon
                v-if="hasSuccess && !noIcon"
                name="field-success"
                class="icon icon--success"
                data-v-test-id="icon-success"
            />
            <magic-ui-icon
                v-else-if="hasError && !noIcon"
                name="field-error"
                class="icon icon--error"
                data-v-test-id="icon-error"
            />
        </slot>
        <transition name="fade-in-grow">
            <div
                v-if="shouldDisplayMessage && message"
                class="message"
            >
                <magic-ui-icon
                    name="field-error"
                    class="icon icon--error"
                />
                <magic-ui-text
                    data-v-test-id="message-test"
                    class="text"
                    :content="message"
                />
            </div>
        </transition>
        <transition name="fade-in-grow">
            <div
                v-if="hasInfo && info && !shouldDisplayMessage"
                class="message"
            >
                <magic-ui-text
                    class="text"
                    :content="info"
                />
            </div>
        </transition>
    </div>
</template>

<script lang="ts" src="./form-field.ts" />
<style lang="scss" src="./form-field.scss" scoped />
