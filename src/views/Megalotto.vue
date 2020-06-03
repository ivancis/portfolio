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
                    work-detail__cover-background--megalotto
                "
            >
                <div
                    class="
                        work-detail__cover-background-element
                        work-detail__cover-background-element--megalotto
                    "
                >
                    <div class="megalotto-balls">
                        <div class="megalotto-ball-item megalotto-ball-item--1">
                            <megalotto-ball />
                        </div>
                        <div class="megalotto-ball-item megalotto-ball-item--2">
                            <megalotto-ball />
                        </div>
                        <div class="megalotto-ball-item megalotto-ball-item--3">
                            <megalotto-ball />
                        </div>
                    </div>
                </div>
            </div>
            <div class="work-detail__cover-content">
                <div class="work-detail__logo work-detail__logo--megalotto">
                    <img
                        src="../assets/megalotto_thumbnail.svg"
                        alt="linkiar"
                    />
                </div>
            </div>
        </div>
        <div class="work-detail__content">
            <div class="work-detail__description">
                <h3 class="work-detail__title">Megalotto</h3>
                <p class="work-detail__text">
                    Lottery and casino application.
                </p>
                <ul class="work-detail__list">
                    <h6 class="work-detail__list-title">
                        Responsibilities:
                    </h6>
                    <li class="work-detail__list-item">
                        Front-end development for VueJS, UI ownership. CSS architecture.
                    </li>
                    <li class="work-detail__list-item">
                        Interaction design, responsive design, SVG animations,
                        performance optimization.
                    </li>
                    <li class="work-detail__list-item">
                        Consistency and scalability contributions to the design system.
                    </li>
                    <li class="work-detail__list-item">
                        Contribution to in house front-end framework of encapsulated, fully supported, web
                        components.
                    </li>
                </ul>
                <!-- <a href="https://megalotto.com" class="link" target="_blank"
                    >Visit website</a
                > -->
            </div>
        </div>
        <div class="work-detail__gallery-wrapper">
            <div class="work-detail__gallery">
                <div class="work-detail__gallery-item">
                    <figure>
                        <img src="../assets/megalotto_1.jpg" alt="" />
                    </figure>
                </div>
                <div class="work-detail__gallery-item">
                    <figure>
                        <img src="../assets/megalotto_2.jpg" alt="" />
                    </figure>
                </div>
                <div class="work-detail__gallery-item">
                    <figure>
                        <img src="../assets/megalotto_4.jpg" alt="" />
                    </figure>
                </div>
                <div class="work-detail__gallery-item">
                    <figure>
                        <img src="../assets/megalotto_5.jpg" alt="" />
                    </figure>
                </div>
                <div
                    class="work-detail__gallery-item work-detail__gallery-item--full"
                >
                    <figure>
                        <img src="../assets/megalotto_3.jpg" alt="" />
                    </figure>
                </div>
            </div>
        </div>
        <div class="work-detail__credits">
            <p>
                Created at
                <a href="https://www.gig.com/" class="link" target="_blank"
                    >GIG</a
                >
            </p>
            <p>
                <strong>Team:</strong> Adam Rojek, Marcos Duque, Juanjo Reina,
                Elin Storelid, Antonio Serrano, Iván Díaz Bonansea ...
            </p>
            <p><strong>Role:</strong> Front-end developer, UI specialist.</p>
        </div>
        <div class="detail-nav detail-nav--bottom">
            <ul class="detail-nav__list">
                <li class="detail-nav__item">
                    <router-link class="detail-nav__link" to="/linkiar">
                        <svg class="detail-nav__link-icon" viewBox="0 0 24 24">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                        <span class="detail-nav__link-label link"
                            >Previous project</span
                        >
                    </router-link>
                </li>
                <li class="detail-nav__item">
                    <router-link class="detail-nav__link" to="/modular">
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
import megalottoBall from '@/components/megalotto-ball.vue';

export default {
    name: 'Megalotto',
    components: {
        megalottoBall
    }
};
</script>
