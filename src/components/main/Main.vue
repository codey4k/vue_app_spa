<template>

<main class="main" id="main">
    <div class="main__wrap">
        <Feature />
    </div>
</main>

</template>

<script>

import Feature from './feature/Feature.vue'

export default {
    name : 'Main',
    
    components: {
        'Feature' : Feature
    }
}

</script>

<style lang="scss" scoped>

.main {
    width : 100%;
    height : 1000px;
    /*z-index : 1000;*/
    position : relative;
    
    &__wrap {
        margin : 0  auto;
        width : 80%;
        height : 100%;
        /*background : orange;*/
    }
}

</style>