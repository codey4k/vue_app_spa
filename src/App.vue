<template>

<div class="wrap">
    <Menu/>
    <Header />
    <Main />
    <Footer/>
</div>

</template>

<script>

import Menu from './components/menu/Menu.vue'
import Main from './components/main/Main.vue'
import Header from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'

export default {
	name : 'App',
	components : {
		'Menu' : Menu,
		'Header' : Header,
		'Main' : Main,
		'Footer' : Footer
	}
}

</script>

<style lang="scss">

:root {
	--theme : #003d3d;
	--bg-color : #ccc;
}

* {
	margin : 0;
	padding : 0;
	border : none;
	outline : none;
	box-sizing : border-box;
	transition : all .6s
}

*::selection {
	color : #eee;
	background : #333;
}
	
img,
nav,
div,
main,
header,
footer,
section {
	display : block;
}
	
li,ol,ul {
	list-style : none;
}

h1,h2,h3,h4,h5,h6 {
	clear : bolth;
}
	
a {
	color : transparent;
	text-decoration : none;
}

body {
	background : #eee;
	min-height : 100vh;
	//height : 2000px;
	font-family : 'Helvetica';
	
	&::-webkit-scrollbar {
		width : 5px;
	}
	&::-webkit-scrollbar-thumb {
		background : var(--theme);
	}
	
}
	
.wrap {
	width : 100%;
	height : auto;
}

</style>
