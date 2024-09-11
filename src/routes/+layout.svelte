<script>
	import Contacts from './contacts.svelte';
	import 'open-props/style';
	import 'open-props/normalize';
	import 'open-props/buttons';
	// import '../app.css';
	import '../md.css';
</script>

<Contacts />

<main>
	<h3>glib zaycev, swe</h3>

	<header>
		<a href="/blog">Blog</a>
		<a href="/about">About</a>
		<a href="/portfolio">Portoflio</a>
	</header>
	<div class="hr"></div>

	<slot />
</main>

<style>
	@import './app.css';
	main {
		height: 100vh;
		width: 50vw;
		margin: 0 auto;
	}
	header {
		display: flex;
		gap: 16px;
	}
</style>
