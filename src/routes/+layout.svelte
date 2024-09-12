<script>
	import Contacts from './contacts.svelte';
	import 'open-props/style';
	import 'open-props/normalize';
	import 'open-props/buttons';
	import '../styles/facade.css';
</script>

<Contacts />

<main>
	<h3>glib zaycev, swe</h3>

	<header>
		<a href="/">Blog</a>
		<a href="/about">About</a>
		<a href="/portfolio">Portoflio</a>
	</header>
	<div class="hr"></div>

	<slot />
</main>

<style>
	main {
		height: 100vh;
		width: 50vw;
		padding: 4rem;
		background: #222;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}
	header {
		display: flex;
		gap: 16px;
	}
</style>
