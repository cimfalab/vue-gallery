<template>
    <div>
        <app-first-part></app-first-part>
        <app-second-part></app-second-part>
        <app-third-part></app-third-part>
    </div>
</template>

<script>
    import Slider from './components/Slider.vue'
    import Accordion from './components/Accordion.vue'
    import Uploader from './components/Uploader.vue'


    export default {
        components: {
            'app-first-part': Slider,
            'app-second-part': Accordion,
            'app-third-part': Uploader
        }
    }
</script>