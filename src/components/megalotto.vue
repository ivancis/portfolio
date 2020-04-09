<template>
    <article class="work-detail work-detail--megalotto">
        <div class="work-detail__title">
            <h3>Megalotto.</h3>
        </div>
        <div class="work-detail__description">
            <ul>
                <li>Front-end development. CSS architecture, web performance, interaction design, SVG animations, etc.</li>
                <li>UI design scalability improvements and suggestions.</li>
                <li>Contribution and enhancement of Megalotto design system, originally provided by a (currently discontinued) third-party agency.</li>
                <li>Contribution and documentation for in-house front-end framework, built on encapsulated web components.</li>
            </ul>
        </div>
        <div class="work-detail__gallery-wrapper">
            <div class="work-detail__gallery">
                <div class="work-detail__gallery-item">
                    <figure>
                        <img src="http://via.placeholder.com/600x450" alt="Alt">
                    </figure>
                </div>
                <div class="work-detail__gallery-item">
                    <figure>
                        <img src="http://via.placeholder.com/600x450" alt="Alt">
                    </figure>
                </div>
                <div class="work-detail__gallery-item">
                    <figure>
                        <img src="http://via.placeholder.com/600x450" alt="Alt">
                    </figure>
                </div>
                <div class="work-detail__gallery-item">
                    <figure>
                        <img src="http://via.placeholder.com/600x450" alt="Alt">
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
    name: 'megalotto',
    components: {
        Hooper,
        Slide
    },
    data() {
        return {
            hooperSettings: {
                itemsToShow: 1,
                centerMode: true
            }
        };
    }
};
</script>
<style scoped lang="scss"></style>
