<template>
    <div class="page page--work-detail">
        <div class="detail-nav detail-nav--top">
            <ul class="detail-nav__list">
                <li class="detail-nav__item detail-nav__item--left">
                    <router-link class="detail-nav__link" to="/">
                        <svg class="detail-nav__link-icon" viewBox="0 0 24 24">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></path>
                        </svg>
                    </router-link>
                </li>
                <li class="detail-nav__item">
                    <router-link class="detail-nav__link" to="/">
                        <svg class="detail-nav__link-icon" viewBox="0 0 24 24">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                    </router-link>
                </li>
                <li class="detail-nav__item">
                    <router-link class="detail-nav__link" to="/">
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
                    work-detail__cover-background--garp
                "
            >
                <!-- <div
                    class="
                        work-detail__cover-background-element
                        work-detail__cover-background-element--crucijuegos
                    "
                >
                </div> -->
            </div>

            <div class="work-detail__cover-content">
                <div class="work-detail__logo work-detail__logo--crucijuegos">
                    <!-- <img
                        src="../assets/crucijuegos_thumbnail.svg"
                        alt="Crucijuegos"
                    /> -->
                </div>
            </div>
        </div>
        <div class="work-detail__content">
            <div class="work-detail__description">
                <h3 class="work-detail__title">Garp</h3>
                <p class="work-detail__text">
                    Hello garp.
                </p>

                <ul class="work-detail__list">
                    <h6 class="work-detail__list-title">
                        Responsibilities:
                    </h6>
                    <li class="work-detail__list-item">
                        Garp.
                    </li>
                </ul>
            </div>
        </div>
        <div class="work-detail__gallery-wrapper">
            <div class="work-detail__gallery">
                <div class="work-detail__gallery-item">
                    <figure>
                        <img src="../assets/garp_1.jpg" alt="" />
                    </figure>
                </div>
                <div class="work-detail__gallery-item">
                    <figure>
                        <img src="../assets/garp_2.jpg" alt="" />
                    </figure>
                </div>
            </div>
        </div>
        <div class="work-detail__credits">
            <p>
                Personal project.
            </p>
            <!-- <p>
                <strong>Team:</strong> Cristian Aragon, Pablo Ladreyt, Iván Díaz
                Bonansea.
            </p> -->
            <p><strong>Role:</strong> UX and UI designer.</p>
        </div>
    </div>
</template>

<script></script>
