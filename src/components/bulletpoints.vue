<template>
    <div class="bulletpoints">
        <accordion>
            <div class="accordion-list">
                <accordion-item>
                    <template slot="accordion-trigger">
                        <div class="accordion-icon">
                            <svg version="1.1" viewBox="0 0 24 24">
                                <path
                                    class="svg-layout__frame"
                                    d="M5,3h14c1.1,0,2,0.9,2,2v14c0,1.1-0.9,2-2,2H5c-1.1,0-2-0.9-2-2V5C3,3.9,3.9,3,5,3z"
                                />
                                <line
                                    class="svg-layout__horizontal"
                                    x1="3"
                                    y1="9"
                                    x2="21"
                                    y2="9"
                                />
                                <line
                                    class="svg-layout__vertical"
                                    x1="9"
                                    y1="21"
                                    x2="9"
                                    y2="3"
                                />
                            </svg>
                        </div>
                        <div class="accordion-title">
                            <h4>User interface</h4>
                        </div>
                    </template>
                    <template slot="accordion-content">
                        <p class="accordion-content">
                            Years of experience with visual design and wire-framing tools such as Figma, Sketch, Photoshop, Illustrator.
                            From concept research to working prototype, with sensitivity to user-system interaction.
                        </p>
                    </template>
                </accordion-item>
                <accordion-item>
                    <template slot="accordion-trigger">
                        <div class="accordion-icon">
                            <svg version="1.1" viewBox="0 0 24 24">
                                <path
                                    class="svg-ux__head"
                                    d="M16,20v-1c0-2.2-1.8-4-4-4H5c-2.2,0-4,1.8-4,4v1"
                                />
                                <circle
                                    class="svg-ux__body"
                                    cx="8.5"
                                    cy="7"
                                    r="4"
                                />
                                <line
                                    class="svg-ux__line"
                                    x1="18"
                                    y1="13"
                                    x2="23"
                                    y2="8"
                                />
                                <line
                                    class="svg-ux__tick"
                                    x1="16"
                                    y1="11"
                                    x2="18"
                                    y2="13"
                                />
                                <line
                                    class="svg-ux__cross"
                                    x1="23"
                                    y1="13"
                                    x2="18"
                                    y2="8"
                                />
                            </svg>
                        </div>
                        <div class="accordion-title">
                            <h4>User experience</h4>
                        </div>
                    </template>
                    <template slot="accordion-content">
                        <p class="accordion-content">
                            Storyboards, user and process flows, site maps for, relatively, medium size web applications, feature & flow A/B testing.
                        </p>
                    </template>
                </accordion-item>
                <accordion-item>
                    <template slot="accordion-trigger">
                        <div class="accordion-icon">
                            <svg version="1.1" viewBox="0 0 24 24">
                                <polyline
                                    class="svg-code__chevron-right"
                                    points="19,15.8 23,11.8 19,7.8 "
                                />
                                <line
                                    class="svg-code__character"
                                    x1="9"
                                    y1="17.8"
                                    x2="15"
                                    y2="17.8"
                                />
                                <polyline
                                    class="svg-code__chevron-left"
                                    points="5,7.8 1,11.8 5,15.8 "
                                />
                            </svg>
                        </div>
                        <div class="accordion-title">
                            <h4>Development</h4>
                        </div>
                    </template>
                    <template slot="accordion-content">
                        <p class="accordion-content">
                            CSS specialist, design system architecture, performance optimization.
                            Clean code enthusiast. MDX syntax documentation. Accustomed to CMS and modern day JS frameworks.
                        </p>
                    </template>
                </accordion-item>
            </div>
            <div class="accordion-list">
                <accordion-item>
                    <template slot="accordion-trigger">
                        <div class="accordion-icon">
                            <svg class="svg-duck" version="1.1" viewBox="0 0 24 24">
                                <path
                                    class="svg-duck__shape"
                                    d="M21.1,7.2c0-0.2-0.2-0.4-0.4-0.4c-1,0-2-0.6-2.5-1.5c-0.7-1.8-2.4-2.2-4-2.2c-3,0-4.7,2.3-4.7,4.5 c0,1.5,0.2,2.6,1.2,3.5c-1.7,0-2.8,0.5-3.8,0.9c-1.1,0.5-1.9,0.8-3.4,0.2c-0.7-0.3-1.3,0.2-1.3,0.9c0.2,1.9,0.9,3.7,1.9,5.1 c1.2,1.6,2.9,2.7,4.7,2.7c2.1,0,4.3,0,6.4,0c1.6-0.1,2.8-0.8,3.6-1.7c0.8-0.9,1.1-2.1,1.1-3.2c0-2.2-1.4-3.7-2.5-5 C17.4,11,20.9,10.9,21.1,7.2z"
                                />
                                <line
                                    class="svg-duck__eye"
                                    x1="15.1"
                                    y1="7.3"
                                    x2="15.1"
                                    y2="7.3"
                                />
                            </svg>
                        </div>
                        <div class="accordion-title">
                            <h4>Rubberduck</h4>
                        </div>
                    </template>
                    <template slot="accordion-content">
                        <p class="accordion-content">
                            Frequent problem spotter. QA aficionado, some experience with Cypress and manual testing.
                        </p>
                    </template>
                </accordion-item>
                <accordion-item>
                    <template slot="accordion-trigger">
                        <div class="accordion-icon">
                            <svg version="1.1" viewBox="0 0 24 24">
                                <circle
                                    class="svg-compass"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                />
                                <polygon
                                    class="svg-compass__needle"
                                    points="12,6 9,12 12,18 15,12 "
                                />
                            </svg>
                        </div>
                        <div class="accordion-title">
                            <h4>Collaboration</h4>
                        </div>
                    </template>
                    <template slot="accordion-content">
                        <p class="accordion-content">
                            Experienced with agile development. Valid communication and presentation skills. ENFJ-T personality.
                        </p>
                    </template>
                </accordion-item>
            </div>
        </accordion>
    </div>
</template>

<script>
import Accordion from '@/components/accordion';
import AccordionItem from '@/components/accordion-item';

export default {
    name: 'bulletpoints',
    components: {
        Accordion,
        AccordionItem
    },
    methods: {
        addItem: function() {
            this.items.push("Item #"+this.items.length);
        this.scrollToEnd();
        },
        scrollToEnd: function() {
        var container = this.$el.querySelector("#container");
        container.scrollTop = container.scrollHeight;
        },
        populate: function() {
            for(var i = 0; i<100; i++) {
            this.items.push("Item #"+i);
        }
        }
    }

};
</script>

<style scoped lang="scss"></style>
