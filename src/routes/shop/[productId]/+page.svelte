<script lang="ts">
  export let data;

  const { product } = data;
  console.log(data)
</script>

<h1 class="p-4 text-4xl">{product.title}</h1>
<p class="text-green-500">${product.price.toFixed(2)}</p>
<p>{product.description}</p>
