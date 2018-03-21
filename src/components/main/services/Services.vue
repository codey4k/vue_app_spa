<template>
    <section class="services">
        <div class="services__wrap">
            <h2 class="services__title">Features</h2>
            <p>dgjidfg idnfgi isdfsdfsd isdfisdfj sdfijsdifsdfijsd s dfjisjsdf ji j isdjfi ijdsfijisdfjiisdifi</p>
        </div>
    </section>
</template>

<script>
export default {
    name : 'Services'
}
</script>

<style lang="scss" scoped>

.services {
    display : flex;
    width : 100%;
    height : 200px;
    background : transparent;
    margin-top : -50px;
    position : relative;
    
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