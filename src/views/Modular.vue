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
            <div class="work-detail__cover-background modular-background"></div>

            <div class="work-detail__cover-content">
                <div class="work-detail__logo work-detail__logo--modular">
                    <img src="../assets/modular-logo.svg" alt="Modular" />
                </div>
            </div>
        </div>
        <div class="work-detail__content">
            <div class="work-detail__description">
                <h3 class="work-detail__title">Modular</h3>
                <p class="work-detail__text">
                    Modular is an Angular based ERP system that connects all
                    major departments of, virtually, any given industry in a
                    single place, keeping in the loop every touchpoint related
                    to Sales, Clients, C level management, HR, Accounting,
                    Factory, etc.<br /><br />
                    What started as an challenging personal project turned out
                    to be the cornerstone of the digital transformation for
                    <router-link class="link" to="/crucijuegos"
                        >Crucijuegos</router-link
                    >.
                </p>
                <ul class="work-detail__list">
                    <h6 class="work-detail__list-title">
                        Main responsibilities:
                    </h6>
                    <li class="work-detail__list-item">
                        Concept, first-stage UX/UI designer, front-end
                        developer.
                    </li>
                </ul>
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
            <p><strong>Roles:</strong> UX and UI and designer & developer</p>
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

<script></script>
