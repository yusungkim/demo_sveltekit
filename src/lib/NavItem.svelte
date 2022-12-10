<script lang="ts">
  // https://github.com/steeze-ui/icons
  import { Icon } from "@steeze-ui/svelte-icon";
  import { Home } from "@steeze-ui/heroicons";

  export let src = Home;
  export let label = "Home";
  export let href = "/";
  export let preload = false;
</script>

<a {href} data-sveltekit-preload-data="{preload ? "hover" : null}" class="flex justify-center items-center px-2 hover:bg-blue-400 rounded-md">
  <li class="flex justify-center items-center gap-1">
    <Icon {src} theme="solid" class="text-blue-600" size="24" />
    <span class="flex justify-center items-center">
      {label}
    </span>
    
  </li>
</a>
