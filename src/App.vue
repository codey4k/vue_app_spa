<template>
	<div class="app">
		<menu class="menu">
			<img class="menu__logo"src="./assets/logo.png"/>
		</menu>
		<header class="header"></header>
		<services class="services"></services>
	</div>
</template>

<script>
	import Menu from './components/Menu.vue'
	import Header from './components/Header.vue'
	import Services from './components/Services.vue'
	
	export default {
		components : {
			'menu' : Menu,
			'header' : Header,
			'services' : Services
		}
	}
</script>

<style lang="scss">
	* {
		margin : 0;
		padding : 0;
		box-sizing : border-box;
		transition : all .6s
	}
	
	img,
	div,
	section{
		display : block;
	}
	
	body {}
	
	.menu {
		width : 100%;
		height : 80px;
		background : #00838f;
		position : fixed;
		z-index : 1000;
		transition : all .6s;
		
		display : flex;
		align-items : center;
		justify-content : center;
		
		&:hover {
			box-shadow : 0 15px 20px rgba(#333, .2);
		}
		
		&__logo {
			width : 40px;
			height : 40px;
		}
	}

    .header {
        width : 100%;
        height : 100vh;
        background : #00838f;
        position : relative;
        display : flex;
        top : 80px;
        h2 {
        	margin : auto;
        }
    }
    
    .services {
    	width : 100%;
    	height : 300px;
    	background : #eee;
    	display : flex;
    	&__wrap {
    		margin : auto;
    		width : 90%;
    		height : 320px;
    		background : #eee;
    		position : relative;
    		top : -25px;
    		border-radius : 10px;
    		box-shadow : 0 0 30px rgba(#333, .4);
    	}
    }
</style>
