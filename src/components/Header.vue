<template>
    <header class="header" id="Header">
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
    
    &__title {
        margin : auto;
        color : var(--bg-color);
    }
}

</style>