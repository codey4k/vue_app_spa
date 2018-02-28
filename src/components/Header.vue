<template>
    <header class="header" id="Header">
        <h2>{{msg}}</h2>
    </header>
</template>

<script>
export default {
    name : 'Header',
    data() {
        return {
            msg : 'Happy Hacking whit Vue!'
        }
    }
}
</script>

<style lang="scss" scoped>

.header{
    width : 100%;
    height : 200px;
    background : var(--theme);
}

</style>