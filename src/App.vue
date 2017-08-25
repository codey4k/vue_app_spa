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
	}
	
	body {}
	
	.menu {
		width : 100%;
		height : 80px;
		background : #00838f;
		box-shadow : 0 5px 10px rgba(#333, .2);
		position : fixed;
		z-index : 1000;
		transition : all .6s;
		
		display : flex;
		align-items : center;
		justify-content : center;
		
		&:hover {
			box-shadow : 0 15px 20px rgba(#333, .3);
		}
		
		&__logo {
			width : 40px;
			height : 40px;
		}
	}

    .header {
        width : 100%;
        height : 400px;
        background : #00838f;
        position : relative;
        top : 80px;
    }
    
    .services {
    	width : 100%;
    	height : 300px;
    	background : #ddd;
    	display : flex;
    	&__wrap {
    		width : 90%;
    		height : 350px;
    		background : linear-gradient(#eee 40%, #ddd 60%);
    		position : relative;
    		top : -50px;
    		margin : auto;
    		border-radius : 10px;
    		box-shadow : 0 0 35px rgba(#555, .3);
    	}
    }
</style>
