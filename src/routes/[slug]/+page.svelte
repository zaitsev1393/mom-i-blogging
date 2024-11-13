<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<div class="title">
		<div class="text-gray-600 text-md text-center roboto-light-italic">
			Published at {data.meta.date}
		</div>
		<hr class="my-4" />
		<div class="text-6xl text-center roboto-light">{data.meta.title}</div>
		<hr class="my-4" />
	</div>
	<!-- Tags -->
	<!-- <div class="tags">
		{#each data.meta.categories as category}
			<span class="surface-4">&num;{category}</span>
		{/each}
	</div> -->

	<!-- Post -->
	<div class="prose mt-16">
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	.title {
		margin-top: 16px;
	}
</style>
