<template>

<section class="menu" id="Menu">
    <div class="menu__wrap">
        <img src="../assets/logo.png" class="menu__logo" alt="Logo Vue" />
    </div>
</section>

</template>

<script>

export default {
    name : 'Menu'
}

</script>

<style lang="scss" scoped>

.menu {
    width : 100%;
    height : 80px;
    position : fixed;
    background : var(--theme);
    
    display : flex;
    
    box-shadow : 0 5px 20px rgba(#333, .3);

    &__wrap{
        margin : auto;
        display : flex;
        align-items : center;
        justify-content : space-between;
    }

    &__logo{
        width : 50px;
        height : auto;
        cursor : pointer;
    }

}

</style>
