<script lang="ts">
  export let data;
  console.log("Data Received and Rendered Page: /shop/+page.svelte");

  let { results: movies } = data;
  console.log(movies);
</script>

<h1 class="text-4xl py-3">Popular Movies</h1>

<div class="grid grid-cols-1 xl:grid-cols-2">
  {#each movies as movie}
    <div class="p-2">
      <div class="flex gap-2">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt="img"
          class="w-28 object-cover"
        />
        <div>
          <div class="flex gap-2 justify-between items-start">
            <h2 class="text-3xl">{movie.title}</h2>
            <div class="flex flex-col items-end min-w-fit">
              <div>{movie.release_date}</div>
              <div>({movie.vote_average})</div>
            </div>
          </div>
          <p class="">{movie.overview}</p>
        </div>
      </div>
    </div>
  {/each}
</div>
