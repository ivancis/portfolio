<template>
    <div class="page page--work-detail">
        <div class="detail-nav detail-nav--top">
            <ul class="detail-nav__list">
                <li class="detail-nav__item">
                    <router-link class="detail-nav__link" to="/">
                        <svg class="detail-nav__link-icon" viewBox="0 0 24 24">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                        <span class="detail-nav__link-label link">Go back</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="work-detail__cover">
            <div
                class="
                    work-detail__cover-background
                    work-detail__cover-background--modular
                "
            >
                <div
                    class="
                        work-detail__cover-background-element
                        work-detail__cover-background-element--modular
                    "
                >
                    <vue-css-doodle class="doodle">
                        :doodle {
                            @grid: 400 / 100vmax;
                        }

                        @size: 1px calc(140% + 1px);
                        transform: rotate(@p(±45deg));
                        background: #384162;
                        );
                    </vue-css-doodle>
                </div>
            </div>

            <div class="work-detail__cover-content">
                <div class="work-detail__logo work-detail__logo--modular">
                    <img src="../assets/modular_thumbnail.svg" alt="linkiar" />
                </div>
            </div>
        </div>
        <div class="work-detail__content">
            <div class="work-detail__description">
                <h3 class="work-detail__title">Modular</h3>
                <p class="work-detail__text">
                    ERP & CMS system touchpoint for Sales, HR, Accounting and Factory; with an output of management analytics.</br>
                    Personal project.
                </p>
                <ul class="work-detail__list">
                    <h6 class="work-detail__list-title">
                        Responsibilities:
                    </h6>
                    <li class="work-detail__list-item">
                        Plan and produce a scalable Angular based platform, that stores and display extensive
                        amounts of data, with dynamic & interchangeable modules.
                    </li>
                    <li class="work-detail__list-item">
                        Integration between company areas and processes through digital transformation.
                    </li>
                </ul>
                <!-- <span
                    >(This project is running in production and stores sensible
                    data. There isn't a demo URL ready ATM.)</span
                > -->
            </div>
        </div>
        <div class="work-detail__gallery-wrapper">
            <div class="work-detail__gallery">
                <div class="work-detail__gallery-item">
                    <figure>
                        <img src="../assets/modular_1.jpg" alt="" />
                    </figure>
                </div>
                <div class="work-detail__gallery-item">
                    <figure>
                        <img src="../assets/modular_2.jpg" alt="" />
                    </figure>
                </div>
                <div class="work-detail__gallery-item">
                    <figure>
                        <img src="../assets/modular_3.jpg" alt="" />
                    </figure>
                </div>
                <div class="work-detail__gallery-item">
                    <figure>
                        <img src="../assets/modular_4.jpg" alt="" />
                    </figure>
                </div>
            </div>
        </div>
        <div class="work-detail__credits">
            <p><strong>Team:</strong> Cristian Aragon, Iván Díaz Bonansea.</p>
            <p>
                <strong>Roles:</strong>Team lead, UI, UX designer & front-end developer.
            </p>
        </div>
        <div class="detail-nav detail-nav--bottom">
            <ul class="detail-nav__list">
                <li class="detail-nav__item">
                    <router-link class="detail-nav__link" to="/megalotto">
                        <svg class="detail-nav__link-icon" viewBox="0 0 24 24">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                        <span class="detail-nav__link-label link"
                            >Previous project</span
                        >
                    </router-link>
                </li>
                <li class="detail-nav__item">
                    <router-link class="detail-nav__link" to="/crucijuegos">
                        <span class="detail-nav__link-label link"
                            >Next project</span
                        >
                        <svg class="detail-nav__link-icon" viewBox="0 0 24 24">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import VueCssDoodle from '@luxdamore/vue-css-doodle';
import '@luxdamore/vue-css-doodle/dist/VueCssDoodle.css';

Vue.use(VueCssDoodle);

export default {};
</script>
