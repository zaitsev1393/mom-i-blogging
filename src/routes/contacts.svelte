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

<div class="networks">
	{#each socialNetworks as { icon, url }}
		<a href={url} target="_blank">
			<i class="fa-brands fa-{icon} fa-xl"></i>
		</a>
	{/each}
</div>

<style>
	.networks {
		position: fixed;
		right: 24px;
		top: 24px;
		display: flex;
		gap: 12px;
		padding: 8px;
	}
</style>
