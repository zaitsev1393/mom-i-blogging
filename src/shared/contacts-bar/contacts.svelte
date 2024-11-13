<script>
	const socialNetworks = [
		{
			icon: 'twitter',
			url: 'https://twitter.com/StarnightViewer'
		},
		{
			icon: 'github',
			url: 'https://github.com/zaitsev1393'
		},
		{
			icon: 'linkedin',
			url: 'https://www.linkedin.com/in/glib-zaycev-89096a10a/'
		}
	];
</script>

<div class="flex gap-2 duration-300">
	{#each socialNetworks as { icon, url }}
		<a href={url} target="_blank">
			<i class="fa-brands fa-{icon} fa-2xl"></i>
		</a>
	{/each}
</div>

<style>
	a {
		color: var(--cordovan);
		transition: 0.3s;
		&:hover {
			transform: scale(1.1);
		}
	}
</style>
