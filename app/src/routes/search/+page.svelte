<script lang="ts">
	import Nav from "../../components/nav.svelte";
	import { submitForm } from ".";

	let formData = {
		query: ""
	};

	let results: string[] = [];

	async function handleSummit(){
		results = submitForm(formData);
		return results
	}
</script>

<Nav></Nav>

<h1>Search page</h1>

<div>
	<form on:submit|preventDefault={handleSummit}>
		<label for="search-input">Search:</label>
		<input type="text" bind:value={formData.query} placeholder="Search..."/>
		<button type="submit">Search</button>
	</form>
</div>

{#if results.length > 0}
	<ul>
		{#each results as result}
			<li>{result}</li>
		{/each}
	</ul>
{:else}
	<p>No results found.</p>
{/if}