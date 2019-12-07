<template>
    <li
        v-if="link"
        v-bind="$filteredAttrs"
    >
        <magic-router-link
            :to="link"
            class="menu-item"
            :class="{ 'is-active': isActive }"
        >
            <slot />
            <div class="action">
                <magic-ui-badge v-if="badge">
                    {{ badgeText }}
                </magic-ui-badge>

                <magic-ui-icon
                    name="right-arrow"
                    class="icon"
                />
            </div>
        </magic-router-link>
    </li>
    <li
        v-else
        v-bind="$filteredAttrs"
        class="menu-item"
        :class="{ 'is-active': isActive }"
    >
        <slot />
        <div class="action">
            <magic-ui-badge v-if="badge">
                {{ badgeText }}
            </magic-ui-badge>

            <magic-ui-icon
                name="right-arrow"
                class="icon"
            />
        </div>
    </li>
</template>

<script lang="ts" src="./menu-item.ts" />
<style lang="scss" src="./menu-item.scss" scoped />
