<template>

<section class="menu" id="Menu">
    <div class="menu__wrap">
        <div class="menu__left">menu</div>
        <img src="../assets/logo.png" class="menu__logo" alt="Logo Vue" />
        <div class="menu__icon" >icon</div>
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
                    height : '60px',
                    background : 'rgba(0, 76, 76, 0.90)'
                })
            }
            else{
                Object.assign(menu.style,{
                    height : '80px',
                    background : 'transparent'
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
    --width-std : 40px;

    width : 100%;
    height : 80px;
    color : #eee;
    position : fixed;
    background : transparent;
    
    display : flex;
    z-index : 2000;
    
    &:hover {
        box-shadow : 0 10px 20px rgba(#333, .3);
    }

    &__wrap{
        width : 80%;
        height : 50%;
        margin : auto;
        display : flex;
        align-items : center;
        justify-content : space-between;
    }
    
    &__left {
        width : var(--width-std);
        height : 20px;
        background : #eee;
    }

    &__logo{
        width : var(--width-std);
        height : auto;
        cursor : pointer;
    }
    
    &__icon {
        //--box : 4px;
        width : var(--width-std);
        height : var(--box);
        cursor : pointer;
        background : var(--bg-color);
        
    }

}

</style>
