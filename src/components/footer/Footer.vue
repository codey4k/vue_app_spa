<template>

<footer class="footer">
    <div class="footer__container">
        <p class="footer__copyright">Copyright &copy; CodeY4k</p>
    </div>
</footer>

</template>

<script>

export default {
    name : 'Footer'
}

</script>

<style lang="scss" scoped>

.footer {
    width : 100%;
    height : 150px;
    background : var(--theme);
    display : flex;
    
    &__container {
        margin : auto;
        width : 80%;
        height : 50%;
        display : inline-flex;
        align-items : center;
        justify-content : center;
    }
    
    &__copyright {
        color : var(--bg-color);
    }
}

</style>