<template>
    <div id="app">
        <header class="header">
            <ul class="header-list">
                <li class="header-item">
                    <h1 class="header-title">Iván Díaz Bonansea</h1>
                </li>
                <li class="header-item">
                    <p>UI designer & developer</p>
                    <a
                        class="header-link link"
                        href="https://www.linkedin.com/in/ivandb/"
                        target="_blank"
                    >
                        LinkedIn
                    </a>
                    <a
                        class="header-link link"
                        href="mailto:email@ivandb.com?Subject=Hello%20Ivan"
                        target="_top"
                    >
                        email@ivandb.com
                    </a>
                </li>
            </ul>
        </header>
        <section class="content">
            <router-view />
        </section>
    </div>
</template>

<style lang="scss">
/* @import 'styles/_base.scss'; */
</style>
