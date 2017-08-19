<template>
	<div class="app">
		<menu class="menu">
			<img class="menu__logo"src="./assets/logo.png"/>
		</menu>
		<header class="header"></header>
	</div>
</template>

<script>
	import Menu from './components/Menu.vue'
	import Header from './components/Header.vue'
	
	export default {
		components : {
			'menu' : Menu,
			'header' : Header
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
        height : 300px;
        background : #00838f;
        position : relative;
        top : 80px;
    }
</style>
