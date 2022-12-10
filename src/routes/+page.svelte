<script>
  import Counter from "../lib/Counter.svelte";
</script>

<main class="max-w-7xl mx-auto px-8 sm:px-16">
  <section class="pt-6">
    <div class="flex-col">
      <h2 class="text-4xl font-semibold pb-5">Counter demo</h2>
      <Counter />
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 h-20"
      >
        {#each [1, 2, 3, 4] as _}
          <Counter />
        {/each}
      </div>
    </div>
  </section>
</main>
