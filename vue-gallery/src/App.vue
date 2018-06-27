<template>
    <div>
        <app-body></app-body>
    </div>
</template>

<script>
    import Slider from './components/Slider.vue'
    import Accordion from './components/Accordion.vue'

    export default {
        components: {
            'app-body': Slider, Accordion
        }
    }
</script>