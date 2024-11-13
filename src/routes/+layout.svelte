<script>
	import Header from './../shared/layout/header/header.svelte';
	import '../styles/facade.scss';
	import '../styles/colors.scss';
	import { postcss } from 'tailwindcss';
</script>

<Header />
<main>
	<slot />
</main>
