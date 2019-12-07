<template>
    <div class="reconnect-loader">
        <magic-ui-loader class="loader" />
        <p
            v-html="$t('loader.reconnecting')"
            class="text"
        />
    </div>
</template>

<script lang="ts" src="./reconnect-loader.ts" />
<style lang="scss" src="./reconnect-loader.scss" scoped />
