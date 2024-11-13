<script>
	import ContactsBar from './../../contacts-bar/contacts.svelte';
</script>

<header>
	<div class="flex justify-between w-full h-full items-center">
		<div class="ml-auto">
			<ContactsBar />
		</div>
	</div>
</header>
<div class="m-4 w-full text-center">
	<a href="/">Blog</a>
	|
	<a href="/about">About</a>
</div>

<style lang="scss">
	header {
		@apply p-4;
		--bg-section-height: 24px;
		height: calc(var(--bg-section-height) * 4);
		background: linear-gradient(
			to bottom,
			var(--verdigris) 0 var(--bg-section-height),
			var(--tangerine) var(--bg-section-height) calc(var(--bg-section-height) * 2),
			var(--cinnabar) calc(var(--bg-section-height) * 2) calc(var(--bg-section-height) * 3),
			var(--cordovan) calc(var(--bg-section-height) * 3) calc(var(--bg-section-height) * 4),
			white calc(var(--bg-section-height) * 4)
		);
	}
</style>
