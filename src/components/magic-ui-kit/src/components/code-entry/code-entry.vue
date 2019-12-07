<template>
    <magic-ui-form-field
        no-margin
        :style="{ '--magic-code-entry-digits': length }"
    >
        <magic-ui-form-field
            v-for="(code, i) in $v.digits.$each.$iter"
            ref="inputs"
            no-margin
            no-icon
            class="digit"
            :key="'digit' + i"
            :has-error="code.digit.$error"
            :has-success="!code.digit.$invalid"
        >
            <magic-ui-number
                v-wmodel="code.digit.$model"
                min="0"
                max="9"
                maxlength="1"
                centered
                :focused="currentField === +i"
                @change.stop
                @erase="handleDelete($event, +i)"
                @input.stop="handleInput(+i)"
            />
        </magic-ui-form-field>
    </magic-ui-form-field>
</template>

<script lang="ts" src="./code-entry.ts" />
<style lang="scss" src="./code-entry.scss" scoped />
