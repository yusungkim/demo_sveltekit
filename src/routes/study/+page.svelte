<script lang="ts">
  import { Icon } from "@steeze-ui/svelte-icon";
  import { Play } from "@steeze-ui/heroicons";  
</script>
<div>
  <h1 class="py-5 font-semibold text-6xl">Study SvelteKit</h1>

  <ul class="flex flex-col font-semibold px-5 text-xl gap-2">
    <li class="text-lg">
      <div class="flex items-center gap-2">
        <h2 class="">Loading Data (22/12/10)</h2>
        <a class=""
          href="https://www.youtube.com/watch?v=EQy-AYhZIlE&list=PLq30BP0TIcqXP149TyFMfRhnMT6T5--e5"
        >
          <Icon src={Play} theme="solid" class="text-red-500" size="24" />
        </a>
      </div>
      <div class="px-5 flex flex-col">
        <span>fetch simultaneously (pass Promise)</span>
        <span>preload (data-sveltekit-preload-data="hover")</span>
        <span>server side load & env ($env/static/private)</span>
      </div>
    </li>

    <li class="text-lg">
      <div class="flex items-center gap-2">
        <h2 class="">Route Params (22/12/10)</h2>
        <a class=""
          href="https://www.youtube.com/watch?v=gNgQFF-tmuo&list=PLq30BP0TIcqXP149TyFMfRhnMT6T5--e5&index=2"
        >
          <Icon src={Play} theme="solid" class="text-red-500" size="24" />
        </a>
      </div>
      <div class="px-5 flex flex-col">
        <span>fetch simultaneously (pass Promise)</span>
        
      </div>
    </li>
  </ul>
</div>
