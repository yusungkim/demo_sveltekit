<script lang="ts">
  export let data;

  let { results: movies } = data;
</script>

<h1>Movie</h1>

<ul>
  {#each movies as movie}
    <li>{movie.title}</li>
  {/each}
</ul>
