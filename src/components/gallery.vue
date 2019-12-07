<template>
    <div class="gallery gallery--gallery">
        <div class="gallery-element gallery-element--slideshow">
            <hooper
                class="slideshow"
                :infiniteScroll="true"
                pagination="no"
            >
                <slide>
                    <div class="slide-item">
                        HELLO
                    </div>
                </slide>

                <slide>
                    <div class="slide-item">
                        HELLO
                    </div>
                </slide>

                <hooper-navigation slot="hooper-addons">
                    <div class="button button--icon" slot="hooper-next">
                        <span class="icon">></span>
                    </div>
                </hooper-navigation>
            </hooper>
        </div>
    </div>
</template>

<script>

import { Hooper, Slide, Navigation as HooperNavigation} from 'hooper';
export default {
    name: 'gallery',
    components: {
      Hooper,
      Slide,
      HooperNavigation
    }
};
</script>

<style scoped lang="scss"></style>
