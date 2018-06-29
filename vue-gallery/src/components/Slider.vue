import

<template>
    <div>
        <b-carousel id="carousel1"
                    controls
                    indicators
                    :interval="4000"
                    v-model="slide"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd"
        >
            <b-carousel-slide img-src="/src/assets/0.jpeg"
                              caption="Lorem ipsum dolor sit amet."
                              text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

            ></b-carousel-slide>

            <b-carousel-slide img-src="/src/assets/1.jpeg"
            ></b-carousel-slide>
            <b-carousel-slide img-src="/src/assets/2.jpeg">
            </b-carousel-slide>
            <b-carousel-slide img-src="/src/assets/3.jpeg">
            </b-carousel-slide>
            <b-carousel-slide img-src="/src/assets/4.jpeg">
            </b-carousel-slide>
            <b-carousel-slide img-src="/src/assets/6.jpeg">
            </b-carousel-slide>
            <b-carousel-slide img-src="/src/assets/7.jpeg">
            </b-carousel-slide>
        </b-carousel>
    </div>
</template>


<script>
    export default {
        name: 'Slider',
        data() {
            return {
                slide: 0,
                sliding: null
            }
        },
        methods: {
            onSlideStart(slide) {
                this.sliding = true
            },
            onSlideEnd(slide) {
                this.sliding = false
            }
        }
    }
</script>
