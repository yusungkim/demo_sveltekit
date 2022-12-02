<script lang="ts">
  let count = 0
  const increment = () => {
    count += 1
  }
</script>

<button on:click={increment} class="p-2 border rounded-lg bg-orange-300 shadow-lg active:bg-orange-400 hover:scale-105 transition transform duration-200 ease-out">
  count is {count}
</button>
