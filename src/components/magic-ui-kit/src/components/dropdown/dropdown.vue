<template>
    <div
        class="dropdown"
        :class="[{
            'dropdown--ellipsis': ellipsis,
        }]"
        :data-option="currentOption"
    >
        <!--  TODO: Allow v-bind on select. On Chrome currently causes rendering issues where the select is flashing when focused. -->
        <select
            class="select"
            :class="[{
                'select--light': light,
                'select--link': link,
                'is-disabled': disabled,
                'has-value': hasValue,
            }]"
            :disabled="disabled"
            @focus="setFocused(true)"
            @blur="setFocused(false)"
            @change.stop="changed($event.target)"
        >
            <option
                v-if="hasEmptyPlaceholder || placeholderLabel"
                v-html="placeholderLabel"
                selected
                value
                class="option"
                :disabled="!allowEmpty"
            />
            <option
                v-for="({ value: val, name }, index) in options"
                class="option"
                :key="`${name}.${index}`"
                :value="index"
                :selected="value !== null && val == value"
            >
                {{ name }}
            </option>
        </select>
        <magic-ui-icon
            class="icon"
            :name="isFocused ? 'up-arrow' : 'down-arrow'"
        />
    </div>
</template>

<script lang="ts" src="./dropdown.ts" />
<style lang="scss" src="./dropdown.scss" scoped />
