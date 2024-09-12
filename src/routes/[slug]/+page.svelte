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
		<h4>{data.meta.title}</h4>
		<p>Published at {data.meta.date}</p>
	</div>
	<!-- Tags -->
	<!-- <div class="tags">
		{#each data.meta.categories as category}
			<span class="surface-4">&num;{category}</span>
		{/each}
	</div> -->

	<!-- Post -->
	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	.title {
		margin-top: 16px;
	}
</style>
