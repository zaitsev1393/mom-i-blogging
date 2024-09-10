<script lang="ts">
	import Date from './../../shared/date/date.svelte';
	export let data;
</script>

<svelte:head>
	<title>Title</title>
</svelte:head>

<h4>Recent posts</h4>

<section>
	{#each data.posts as post}
		<div>
			<a href="blog/{post.slug}" class="title">
				<Date date={post.date} />{post.title}
			</a>
		</div>
	{/each}
</section>

<style>
	.posts-title {
		font-size: 24px;
		font-weight: bold;
		margin-top: 24px;
	}
</style>
