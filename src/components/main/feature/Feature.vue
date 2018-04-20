<template>
    <section class="feature">
        <div class="feature__wrap">
            <h2 class="feature__title">Features</h2>
            <p>dgjidfg idnfgi isdfsdfsd isdfisdfj sdfijsdifsdfijsd s dfjisjsdf ji j isdjfi ijdsfijisdfjiisdifi</p>
        </div>
    </section>
</template>

<script>
export default {
    name : 'Feature'
}
</script>

<style lang="scss" scoped>

.feature {
    display : flex;
    width : 100%;
    height : 200px;
    background : #ddd;
    margin-top : -50px;
    position : relative;
    z-index : 1000;
    
    &__wrap {
        margin : auto;
        display : flex;
        flex-direction : column;
        align-items : center;
        justify-content : center;
    }
    &__title {
        color : #666;
        padding : .8em;
    }
}

</style>