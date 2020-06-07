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
                    work-detail__cover-background--crucijuegos
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
                    <img
                        src="../assets/crucijuegos_thumbnail.svg"
                        alt="Crucijuegos"
                    />
                </div>
            </div>
        </div>
        <div class="work-detail__content">
            <div class="work-detail__description">
                <h3 class="work-detail__title">Crucijuegos</h3>
                <p class="work-detail__text">
                    Web platform redesign, ecommerce salespoint integration.
                </p>

                <ul class="work-detail__list">
                    <h6 class="work-detail__list-title">
                        Responsibilities:
                    </h6>
                    <li class="work-detail__list-item">
                        Team lead of 6, during the digital transformation process.
                    </li>
                    <li class="work-detail__list-item">
                        Buy-in gain facilitator (for peers, executives, investors).
                    </li>
                    <li class="work-detail__list-item">
                        UI designer and CSS developer for Angular, Python & Electron applications.
                    </li>
                    <li class="work-detail__list-item">
                        Performance optimization of existing applications
                        through concept and code refactoring.
                    </li>
                    <li class="work-detail__list-item">
                        Graphic designer with commercial focus. Slideshow presentations, email marketing,
                        social media, brochures, etc.
                    </li>
                    <li class="work-detail__list-item">
                        External resource coordination (content manager, SEO and advertisement agencies, photographers, etc.).
                    </li>
                    <li class="work-detail__list-item">
                        Area manager for compliance with IRAM-ISO regulation.
                    </li>
                </ul>
                <!-- <a
                    href="https://insumos.crucijuegos.com"
                    class="link"
                    target="_blank"
                    >Visit main website</a
                > -->
            </div>
        </div>
        <div class="work-detail__gallery-wrapper">
            <div class="work-detail__gallery">
                <div class="work-detail__gallery-item">
                    <figure>
                        <img src="../assets/crucijuegos_1.jpg" alt="" />
                    </figure>
                </div>
                <div class="work-detail__gallery-item">
                    <figure>
                        <img src="../assets/crucijuegos_2.jpg" alt="" />
                    </figure>
                </div>
                <div class="work-detail__gallery-item">
                    <figure>
                        <img src="../assets/crucijuegos_4.jpg" alt="" />
                    </figure>
                </div>
                <div class="work-detail__gallery-item">
                    <figure>
                        <img src="../assets/crucijuegos_5.jpg" alt="" />
                    </figure>
                </div>
                <div class="work-detail__gallery-item">
                    <figure>
                        <img src="../assets/crucijuegos_3.jpg" alt="" />
                    </figure>
                </div>
                <div class="work-detail__gallery-item">
                    <figure>
                        <img src="../assets/timekeeper2.jpg" alt="" />
                    </figure>
                </div>
            </div>
        </div>
        <div class="work-detail__credits">
            <p>
                Created at
                <a href="https://crucijuegos.com/" class="link" target="_blank"
                    >Crucijuegos</a
                >
            </p>
            <p>
                <strong>Team:</strong> Cristian, Pablo, Iván.
            </p>
            <p>
                <strong>Role:</strong> Product designer & developer.
            </p>
        </div>
    </div>
</template>

<script></script>
