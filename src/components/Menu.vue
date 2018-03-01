<template>

<section class="menu" id="Menu">
    <div class="menu__wrap">
        <img src="../assets/logo.png" class="menu__logo" alt="Logo Vue" />
    </div>
</section>

</template>

<script>

export default {
    name : 'Menu',
    
    methods : {
        handler : function(){
            const scroll = document.documentElement.scrollTop || document.body.scrollTop,
                menu = document.getElementById('Menu')
                
                
            if(scroll >= 30){
                Object.assign(menu.style, {
                    height : '60px'
                })
            }
            else{
                Object.assign(menu.style,{
                    height : '80px'
                })
            }
        }
    },
    
    created:function(){
        window.addEventListener('scroll',this.handler)
    },
    
    destroyed:function(){
        window.removeEventListener('scroll', this.handler)
    }
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
        width : 45px;
        height : auto;
        cursor : pointer;
    }

}

</style>
