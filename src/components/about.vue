<template>
    <div class="content content--about">
        <div class="grido">
            <div class="grido__item">
                <div class="card card--about">
                    <span class="card-icon">
                        <!-- <img src="../assets/icons/iconLayout.svg"> -->
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 30"
                        >
                            <rect
                                class="layout__box"
                                x="6"
                                y="6"
                                width="18"
                                height="18"
                            />
                            <line
                                class="layout__row"
                                x1="6"
                                y1="12"
                                x2="24"
                                y2="12"
                            />
                            <line
                                class="layout__col"
                                x1="12"
                                y1="24"
                                x2="12"
                                y2="6"
                            />
                        </svg>
                    </span>
                    <b class="card-label">Graphic interface</b>
                </div>
            </div>
            <div class="grido__item">
                <div class="card card--about">
                    <span class="card-icon">X</span>
                    <b class="card-label">User experience</b>
                </div>
            </div>
            <div class="grido__item">
                <div class="card card--about">
                    <span class="card-icon">X</span>
                    <b class="card-label">Front-end</b>
                </div>
            </div>
            <div class="grido__item">
                <div class="card card--about">
                    <span class="card-icon">X</span>
                    <b class="card-label">Rubberduck</b>
                </div>
            </div>
            <div class="grido__item">
                <div class="card card--about">
                    <span class="card-icon">X</span>
                    <b class="card-label">Brand</b>
                </div>
            </div>
            <div class="grido__item">
                <div class="card card--about">
                    <span class="card-icon">X</span>
                    <b class="card-label">Team</b>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'about'
};
</script>

<style scoped lang="scss"></style>
