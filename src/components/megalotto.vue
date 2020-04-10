<template>
    <article class="work-detail work-detail--megalotto">
        <div class="work-detail__title">
            <h3>Megalotto</h3>
        </div>
        <div class="work-detail__description">
            <ul>
                <li>
                    Front-end development. CSS architecture, web performance,
                    interaction design, SVG animations, etc.
                </li>
                <li>UI design scalability improvements and suggestions for <a href="https://megalotto.com" target="_blank"
                        >Megalotto.com</a
                    >.</li>
                <li>
                    Contribution and enhancement based on consistent functionality of Megalotto design system,
                    originally provided by a (currently discontinued)
                    third-party agency.
                </li>
                <li>
                    Contribution and documentation for in-house front-end
                    framework, based on encapsulated fully supported web components.
                </li>
            </ul>
        </div>
        <div class="work-detail__gallery-wrapper">
            <div class="work-detail__gallery">
                <div class="work-detail__gallery-item">
                    <figure>
                        <img
                            src="../assets/megalotto_3.jpg"
                            alt="Megalotto"
                        />
                    </figure>
                </div>
                <div class="work-detail__gallery-item">
                    <figure>
                        <img
                            src="../assets/megalotto_2.jpg"
                            alt="Megalotto"
                        />
                    </figure>
                </div>
                <div class="work-detail__gallery-item">
                    <figure>
                        <img
                            src="../assets/megalotto_1.jpg"
                            alt="Megalotto"
                        />
                    </figure>
                </div>
                <div class="work-detail__gallery-item">
                    <figure>
                        <img
                            src="../assets/megalotto_4.jpg"
                            alt="Megalotto"
                        />
                    </figure>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
    name: 'megalotto'
};
</script>
<style scoped lang="scss"></style>
