<template>
    <li class="accordion__item" :class="{ accordion__item_active: visible }">
        <div
            class="accordion__trigger"
            :class="{ accordion__trigger_active: visible }"
            @click="open"
        >
            <slot name="accordion-trigger"></slot>
        </div>

        <transition
            name="accordion"
            @enter="start"
            @after-enter="end"
            @before-leave="start"
            @after-leave="end"
        >
            <div
                v-show="visible"
                :class="{ accordion__content_active: visible }"
                class="accordion__content"
            >
                <ul>
                    <slot name="accordion-content"></slot>
                </ul>
            </div>
        </transition>
    </li>
</template>

<script>
export default {
    props: {},
    inject: ['Accordion'],
    data() {
        return {
            index: null
        };
    },
    computed: {
        visible() {
            return this.index == this.Accordion.active;
        }
    },
    methods: {
        open() {
            if (this.visible) {
                this.Accordion.active = null;
            } else {
                this.Accordion.active = this.index;
            }
        },
        start(el) {
            el.style.height = el.scrollHeight + 'px';
        },
        end(el) {
            el.style.height = '';
        }
    },
    created() {
        this.index = this.Accordion.count++;
    }
};
</script>
