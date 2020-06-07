<template>
    <div class="page page--work-detail">
        <div class="detail-nav detail-nav--top">
            <ul class="detail-nav__list">
                <li class="detail-nav__item detail-nav__item--left">
                    <router-link class="detail-nav__link" to="/">
                        <svg class="detail-nav__link-icon" viewBox="0 0 24 24">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        </svg>
                    </router-link>
                </li>
                <li class="detail-nav__item">
                    <router-link class="detail-nav__link" to="/megalotto">
                        <svg class="detail-nav__link-icon" viewBox="0 0 24 24">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                    </router-link>
                </li>
                <li class="detail-nav__item">
                    <router-link class="detail-nav__link" to="/crucijuegos">
                        <svg class="detail-nav__link-icon" viewBox="0 0 24 24">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
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
                        background: #ff8a2212;
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
                    Touchpoint system for Sales, HR, Accounting and Manufacturing department.
                    <!-- <span>outputs management analytics</span> -->
                </p>
                <ul class="work-detail__list">
                    <h6 class="work-detail__list-title">
                        Responsibilities:
                    </h6>
                    <li class="work-detail__list-item">
                        Concept, UI and UX design
                    </li>
                    <li class="work-detail__list-item">
                        Front-end development for a scalable Angular application.
                    </li>
                    <li class="work-detail__list-item">
                        Integration facilitator.
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
            <p><strong>Team:</strong> Cristian, Pablo, Iván.</p>
            <p>
                <strong>Role:</strong> UI design & front-end development.
            </p>
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
