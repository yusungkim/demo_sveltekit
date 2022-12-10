<script lang="ts">
  export let data;
  console.log("Data Received and Rendered Page: /shop/+page.svelte")

  let { results: movies } = data;
</script>

<h1 class="text-4xl py-3">Popular Movies</h1>

<ul>
  {#each movies as movie}
    <li class="p-2">
      <h2 class="text-3xl">{movie.title}</h2>
      <p>{movie.overview}</p>
    </li>
  {/each}
</ul>
