<template>
    <magic-ui-form-field
        no-margin
        class="date"
        :has-error="$v.age || $v.fullDate.$error"
        :message="message"
        :info="info"
        :has-info="!!info"
    >
        <magic-ui-form-field
            class="day"
            no-margin
            no-icon
            :has-success="!$v.fullDate.day.$invalid"
            :has-error="$v.fullDate.day.$error || $v.age"
        >
            <magic-ui-number
                v-wmodel="$v.fullDate.day.$model"
                data-v-test-id="date-day"
                min="0"
                max="31"
                maxlength="2"
                :focused="currentField === DateField.DAY"
                :placeholder="$t('ui-date.day.placeholder')"
                @input="handleInput('day', DateField.MONTH, 31)"
                @change.stop
                @blur="$v.fullDate.day.$touch()"
            />
        </magic-ui-form-field>
        <magic-ui-form-field
            class="month"
            no-margin
            no-icon
            :has-success="!$v.fullDate.month.$invalid"
            :has-error="$v.fullDate.month.$error || $v.age"
        >
            <magic-ui-number
                v-wmodel="$v.fullDate.month.$model"
                data-v-test-id="date-month"
                min="0"
                max="12"
                maxlength="2"
                :focused="currentField === DateField.MONTH"
                :placeholder="$t('ui-date.month.placeholder')"
                @input="handleInput('month', DateField.YEAR, 12)"
                @erase="handleDelete($event, 'month', DateField.DAY)"
                @change.stop
                @blur="$v.fullDate.month.$touch()"
            />
        </magic-ui-form-field>
        <magic-ui-form-field
            v-wmodel="$v.fullDate.year.$model"
            class="year"
            no-margin
            no-icon
            :focused="currentField === DateField.YEAR"
            :has-success="!$v.fullDate.year.$invalid"
            :has-error="$v.fullDate.year.$error || $v.age"
        >
            <magic-ui-number
                v-wmodel="$v.fullDate.year.$model"
                data-v-test-id="date-year"
                min="0"
                max="2099"
                maxlength="4"
                :focused="currentField === DateField.YEAR"
                :placeholder="$t('ui-date.year.placeholder')"
                @erase="handleDelete($event, 'year', DateField.MONTH)"
                @change.stop
                @blur="$v.fullDate.year.$touch()"
            />
        </magic-ui-form-field>
    </magic-ui-form-field>
</template>

<script lang="ts" src="./date.ts" />
<style lang="scss" src="./date.scss" scoped />
