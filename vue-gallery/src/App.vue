<template>
    <div>
        <app-body></app-body>
    </div>
</template>

<script>
    import Slider from './components/Slider.vue'

    export default {
        components: {
            'app-body': Slider
        }
    }
</script>