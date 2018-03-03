<template>
    <header class="header" id="Header">
        <img src="./city-street.jpg" class="header__img" alt="header img" />
        <h2 class="header__title">{{msg}}</h2>
    </header>
</template>

<script>
export default {
    name : 'Header',
    data() {
        return {
            msg : 'Happy Hacking with Vue!'
        }
    }
}
</script>

<style lang="scss" scoped>

.header{
    width : 100%;
    height : 400px;
    background : var(--theme);
    display : flex;
    position : relative;
    
    &__title {
        margin : auto;
        color : var(--bg-color);
    }
    
    &__img {
        position : absolute;
        width : 100%;
        height : 100%;
        opacity : .3;
        object-fit : cover;
    }
    
}

</style>