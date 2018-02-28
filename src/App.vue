<template>
	<div class="wrap">
		<Header />
	</div>
</template>

<script>
import Header from './components/Header.vue'
export default {
	name : 'App',
	components: {
		Header
	}
}

</script>

<style lang="scss">

:root {
	--theme : linear-gradient( 135deg, #79F1A4 10%, #0E5CAD 100%);
	--bg-color : #eee;
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

*::before, *::after {
	content : "";
	display : block;
	position : absolute;
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
	height : 2000px;
	font-family : 'Helvetica';
	
	&::-webkit-scrollbar {
		width : 5px;
	}
	&::-webkit-scrollbar-thumb {
		background : #0E5CAD;
	}
	
}
	
.wrap {
	width : 100%;
	height : auto;
}

</style>
