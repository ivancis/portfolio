<template>
    <div class="about">
        <div class="about-body">
            <p class="about-p">
                I'm passionated for UI design and CSS.
            </p>
            <p class="about-p">
                With every engagement I try to get involved as a whole asset,
                bringing my multidisciplinary expertise to improve efficiency
                and general <em>niceness</em> of the interactive system.
            </p>
            <p class="about-p about-p--year">
                Born in Rosario, Argentina. Now living in Marbella, Spain.
            </p>
        </div>
        <accordion>
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
                        +5 years of experience wireframing and designing
                        prototypes from low to high fidelity; crafting and
                        enhancing design systems.
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
                        Experienced in information architecture for small-medium
                        size applications and websites. Card sorting with
                        development teams, Userlytics for user feeback, A/B
                        testing. Big fan of interaction design.
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
                        +5 years of experience working on the front of the
                        front-end. CSS specialist, scalability, performance
                        optimization, familiar with W3C and accessibility
                        standards. All around best practices and clean code
                        enforcer. Experienced with popular JS frameworks.
                        Storybook documentation. Several CMS platforms.
                    </p>
                </template>
            </accordion-item>
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
                        Experience in working with front & back-end development
                        teams, proposing logic workarounds. QA out of monkey,
                        exploratory and manual testing, user simulation, gherkin
                        syntax BDD writing.
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
                        Experienced in working with development teams as a
                        member and in a management roles (up to 5 people).
                        Experienced with Agile, Scrum and continuous delivery
                        methodologies.
                    </p>
                </template>
            </accordion-item>
        </accordion>
    </div>
</template>

<script>
import Accordion from '@/components/accordion';
import AccordionItem from '@/components/accordion-item';

export default {
    name: 'about',
    components: {
        Accordion,
        AccordionItem
    }
};
</script>

<style scoped lang="scss"></style>
