<template>
    <ul class="list">
        <li
            v-for="(item, index) of items"
            class="item"
            ref="item"
            :key="item.name + index"
        >
            <magic-router-link
                class="link"
                :class="{
                    'is-active': activeItem === item.slug,
                }"
                :to="item.link"
            >
                {{ item.name }}
            </magic-router-link>
        </li>
    </ul>
</template>

<script lang="ts" src="./collapsible-row.ts" />
<style lang="scss" src="./collapsible-row.scss" scoped />
