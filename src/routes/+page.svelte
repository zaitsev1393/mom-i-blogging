<script lang="ts">
	import Date from './../shared/date/date.svelte';
	export let data;
</script>

<svelte:head>
	<title>Title</title>
</svelte:head>

<section>
	{#each data.posts as post}
		<div>
			<a href={post.slug} class="title">
				<Date date={post.date} />
				{post.title}
			</a>
		</div>
	{/each}
</section>
