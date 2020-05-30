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
                class="work-detail__cover-background crucijuegos-background"
            ></div>

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
                    Crucijuegos is 30 year old company that designs,
                    manufactures and distributes heavy duty playgrounds and aqua
                    parks for public spaces and the general public.<br />They
                    are focused primarely on the Argentinian market with a
                    tendency of expansion to Latin American regions.
                </p>

                <ul class="work-detail__list">
                    <h6 class="work-detail__list-title">
                        Mentionable challenges:
                    </h6>
                    <li class="work-detail__list-item">
                        Design and develop internal and external digital
                        products. Some of them with an intended low learning
                        curve, aimed to non-tech personas.
                    </li>
                    <li class="work-detail__list-item">
                        Organize and coordinate small development team to
                        achieve MVPs on tight schedules.
                    </li>
                </ul>

                <ul class="work-detail__list">
                    <h6 class="work-detail__list-title">
                        Main responsibilities:
                    </h6>
                    <li class="work-detail__list-item">
                        Manager of the development team during the digital
                        transformation process.
                    </li>
                    <li class="work-detail__list-item">
                        UI designer & developer for all web and isolated digital
                        products (Angular, Python & Electron based
                        applications).
                    </li>
                    <li class="work-detail__list-item">
                        Performance optimization of existing applications
                        through code-refactoring and design adjustments.
                    </li>
                    <li class="work-detail__list-item">
                        Graphic designer with commercial focus: email marketing,
                        social media, brochures, etc.
                    </li>
                    <li class="work-detail__list-item">
                        External resource coordination (SEO specialist,
                        photographer, graphic design agency).
                    </li>
                    <li class="work-detail__list-item">
                        Responsible for the IT area to comply with IRAM-ISO
                        regulation.
                    </li>
                </ul>
                <a
                    href="https://insumos.crucijuegos.com"
                    class="link"
                    target="_blank"
                    >Visit commercial website</a
                >
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
                        <img src="../assets/crucijuegos_3.jpg" alt="" />
                    </figure>
                </div>
                <div class="work-detail__gallery-item">
                    <figure>
                        <img src="../assets/timekeeper2.jpg" alt="" />
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
            </div>
        </div>
        <div class="work-detail__credits">
            <p>Work created at Crucijuegos</p>
            <p>
                <strong>Team:</strong> Cristian Aragon, Pablo Ladreyt, Iván Díaz
                Bonansea.
            </p>
            <p>
                <strong>Roles:</strong> Team manager, UI designer, front-end
                developer.
            </p>
        </div>
        <div class="detail-nav detail-nav--bottom">
            <ul class="detail-nav__list">
                <li class="detail-nav__item">
                    <router-link class="detail-nav__link" to="/modular">
                        <svg class="detail-nav__link-icon" viewBox="0 0 24 24">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                        <span class="detail-nav__link-label link"
                            >Previous project</span
                        >
                    </router-link>
                </li>
                <li class="detail-nav__item">
                    <router-link class="detail-nav__link" to="/linkiar">
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

<script></script>
