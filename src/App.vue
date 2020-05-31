<template>
    <div id="app">
        <header class="header">
            <ul class="header-list">
                <li class="header-item">
                    <router-link
                        to="/"
                        tag="h1"
                        class="header-title"
                    >
                        Iván Díaz Bonansea
                    </router-link>
                </li>
                <li class="header-item">
                    <p>Product designer and developer.</p>
                    <span class="contact-links">
                        <a
                            class="header-link link"
                            href="mailto:email@ivandb.com?Subject=Hello%20Ivan"
                            target="_top"
                        >
                            email@ivandb.com
                        </a>
                        <!-- <span>/</span>
                        <a
                            class="header-link link"
                            href="https://www.linkedin.com/in/ivandb/"
                            target="_blank"
                        >
                            LinkedIn
                        </a> -->
                    </span>
                </li>
            </ul>
        </header>
        <router-view />
    </div>
</template>

<style lang="scss">
/* @import 'styles/_base.scss'; */
</style>
