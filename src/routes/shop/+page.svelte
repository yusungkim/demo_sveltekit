<script lang="ts">
  // receive data from +page.ts
  export let data;
  console.log("+page.svelte data loaded.")

  const { products, users } = data;
</script>

<h1 class="text-3xl">Shop</h1>

{#each products as product}
  <h2 class="text-lg font-bold">{product.title}</h2>
  <p class="text-emerald-600">{product.description}</p>
{/each}
