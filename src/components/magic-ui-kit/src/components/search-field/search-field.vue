<template>
    <div class="search-field">
        <magic-ui-form-field
            v-bind="$filteredAttrs"
            search
            no-margin
            :placeholder="$t('search.search.placeholder')"
            :value="value"
        />
        <magic-ui-icon
            v-if="!value"
            name="search"
            class="icon icon--search"
        />
        <transition name="fade-in">
            <button
                v-if="value"
                class="button"
                type="button"
                @click.prevent="onClear()"
            >
                <magic-ui-icon
                    name="close"
                    class="icon icon--remove"
                />
            </button>
        </transition>
    </div>
</template>

<script lang="ts" src="./search-field.ts" />
<style lang="scss" src="./search-field.scss" scoped />
