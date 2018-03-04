<template>

<main class="main" id="main">
    <div class="main__wrap">
        <Services />
    </div>
</main>

</template>

<script>

import Services from './services/Services.vue'

export default {
    name : 'Main',
    
    components: {
        'Services' : Services
    }
}

</script>

<style lang="scss" scoped>

.main {
    width : 100%;
    height : 1000px;
    
    &__wrap {
        margin : 0  auto;
        width : 80%;
        height : 100%;
        background : orange;
    }
}

</style>