<template>
    <section class="content-section works">
        <router-link class="work-item work-item--linkiar" to="/linkiar">
            <div class="work-item__thumbnail">
                <figure>
                    <img src="../assets/linkiar_thumbnail.jpg" alt="Linkiar" />
                </figure>
            </div>
            <div class="work-item__description">
                <h5>Linkiar (2020)</h5>
                <span>Branding, Strategy, UI design & development</span>
            </div>
        </router-link>
        <router-link class="work-item work-item--megalotto" to="/megalotto">
            <div class="work-item__thumbnail">
                <figure>
                    <img
                        src="../assets/megalotto_thumbnail.jpg"
                        alt="Megalotto"
                    />
                </figure>
            </div>
            <div class="work-item__description">
                <h5>Megalotto (2019 ~ 2020)</h5>
                <span>UI/Front-end development</span>
            </div>
        </router-link>
        <router-link class="work-item work-item--crucijuegos" to="/crucijuegos">
            <div class="work-item__thumbnail">
                <figure>
                    <img
                        src="../assets/crucijuegos_thumbnail.jpg"
                        alt="Crucijuegos"
                    />
                </figure>
            </div>
            <div class="work-item__description">
                <h5>Crucijuegos (2016 ~ 2019)</h5>
                <span
                    >Branding, Strategy, Art Direction, UI design &
                    development</span
                >
            </div>
        </router-link>
        <component v-bind:is="component" />
    </section>
</template>
