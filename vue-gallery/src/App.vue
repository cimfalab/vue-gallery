<template>
    <div>
        <app-main></app-main>
        <app-bar></app-bar>
    </div>
</template>

<script>
    import Slider from './components/Slider.vue'
    import Accordion from './components/Accordion.vue'

    export default {
        components: {
            'app-main': Slider,
            'app-bar': Accordion
        }
    }
</script>