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
                    work-detail__cover-background--linkiar
                "
            >
                <div
                    class="
                        work-detail__cover-background-element
                        work-detail__cover-background-element--linkiar
                    "
                >
                    <vue-particles
                        class="particles"
                        color="#dedede"
                        :particleOpacity="1"
                        :particlesNumber="80"
                        shapeType="circle"
                        :particleSize="1"
                        linesColor="#04a89d"
                        :linesWidth="1"
                        :lineLinked="true"
                        :lineOpacity="0.5"
                        :linesDistance="150"
                        :moveSpeed="3"
                        :hoverEffect="false"
                        :clickEffect="false"
                    >
                    </vue-particles>
                </div>
            </div>
            <div class="work-detail__cover-content">
                <div class="work-detail__logo work-detail__logo--linkiar">
                    <img
                        src="../assets/linkiar_thumbnail.svg"
                        alt="linkiar"
                    />
                </div>
            </div>
        </div>
        <div class="work-detail__content">
            <div class="work-detail__description">
                <h3 class="work-detail__title">Linkiar</h3>
                <p class="work-detail__text">
                    Automation data-list tool for a particular purchase model.
                </p>
                <ul class="work-detail__list">
                    <h6 class="work-detail__list-title">
                        Responsibilities:
                    </h6>
                    <li class="work-detail__list-item">
                        UX and UI design.
                    </li>
                    <li class="work-detail__list-item">
                        Front-end development.
                    </li>
                    <li class="work-detail__list-item">
                        Feature specification out of requests, UAC and UAT.
                    </li>
                </ul>
                <!-- <span
                    >(This project is on a very early stage to share a stable
                    URL.)</span
                > -->
            </div>
        </div>
        <div class="work-detail__gallery-wrapper">
            <div class="work-detail__gallery">
                <div class="work-detail__gallery-item">
                    <figure>
                        <img src="../assets/linkiar_2.jpg" alt="" />
                    </figure>
                </div>
                <div class="work-detail__gallery-item">
                    <figure>
                        <img src="../assets/linkiar_1.jpg" alt="" />
                    </figure>
                </div>
                <!-- <div class="work-detail__gallery-item">
                    <figure>
                        <img src="../assets/linkiar_3.png" alt="" />
                    </figure>
                </div>
                <div class="work-detail__gallery-item">
                    <figure>
                        <img src="../assets/linkiar_4.png" alt="" />
                    </figure>
                </div> -->
            </div>
        </div>
        <div class="work-detail__credits">
            <p><strong>Team:</strong> Cristian Aragon, Iván Díaz Bonansea.</p>
            <p>
                <strong>Roles:</strong>UI, UX designer & front-end developer.
            </p>
        </div>
        <div class="detail-nav detail-nav--bottom">
            <ul class="detail-nav__list">
                <li class="detail-nav__item">
                    <router-link class="detail-nav__link" to="/crucijuegos">
                        <svg class="detail-nav__link-icon" viewBox="0 0 24 24">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                        <span class="detail-nav__link-label link"
                            >Previous project</span
                        >
                    </router-link>
                </li>
                <li class="detail-nav__item">
                    <router-link class="detail-nav__link" to="/megalotto">
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
import VueParticles from 'vue-particles';
Vue.use(VueParticles);

export default {};
</script>
