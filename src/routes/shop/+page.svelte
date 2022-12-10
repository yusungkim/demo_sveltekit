<script lang="ts">
  // receive data from +page.ts
  export let data;
  console.log("Data Received and Rendered Page: /shop/+page.svelte");

  const { products, users } = data;
</script>

<h1 class="text-3xl">Shop</h1>

<div class="flex flex-col gap-3">
{#each products as product}
  <a data-sveltekit-preload-data="hover" href={`/shop/${product.id}`}>
    <h2 class="text-lg font-bold">{product.title}</h2>
    <p class="text-emerald-600">{product.description}</p>
  </a>
{/each}
</div>