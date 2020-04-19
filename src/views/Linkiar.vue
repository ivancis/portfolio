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
            <div class="work-detail__cover-background linkiar-background"></div>

            <div class="work-detail__cover-content">
                <div class="work-detail__logo work-detail__logo--linkiar">
                    <img src="../assets/linkiar-logo.svg" alt="linkiar" />
                </div>
            </div>
        </div>
        <div class="work-detail__content">
            <div class="work-detail__description">
                <h3 class="work-detail__title">Linkiar</h3>
                <p class="work-detail__text">
                    Linkiar is a Svelte based SPA tool that aims to say goodbye
                    to manually comparing product details and other little tasks
                    that waste huge amounts of time for a specific group of
                    stock-based supply companies.<br /><br />
                </p>
                <ul class="work-detail__list">
                    <h6 class="work-detail__list-title">
                        Main responsibilities:
                    </h6>
                    <li class="work-detail__list-item">UX wireframes.</li>
                    <li class="work-detail__list-item">
                        UI design & front-end development.
                    </li>
                    <li class="work-detail__list-item">
                        Feature specification and back-end coordination
                        (acceptance criteria, UAT).
                    </li>
                </ul>
                <span
                    >Feel free to check out my
                    <a
                        href="https://www.figma.com/file/bFd5hsJnrvTjuJXX9agfqz/ant?node-id=0%3A2462"
                        target="_blank"
                        >Figma playground</a
                    >, since we are still on very early stage to share a stable
                    URL</span
                >
            </div>
        </div>
        <div class="work-detail__gallery-wrapper">
            <div class="work-detail__gallery">
                <div
                    class="work-detail__gallery-item work-detail__gallery-item--full"
                >
                    <figure>
                        <img src="../assets/linkiar_1.jpg" alt="" />
                    </figure>
                </div>
            </div>
        </div>
        <div class="work-detail__credits">
            <p>Work created at Crucijuegos</p>
            <p>
                <strong>Team:</strong> Cristian Aragon, Iván Díaz
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

<script></script>
