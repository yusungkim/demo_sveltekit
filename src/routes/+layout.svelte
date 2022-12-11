<script>
  import "../app.css";
  import Navbar from "$lib/Navbar.svelte";
  import NavItem from "$lib/NavItem.svelte";

  // https://github.com/steeze-ui/icons
	import { Home, Play, ShoppingCart, CodeBracket, Users } from '@steeze-ui/heroicons'
</script>

<Navbar>
  <NavItem href="/" src="{Home}" label="Home" />
  <NavItem href="/shop" src="{ShoppingCart}" label="Shop" preload />
  <NavItem href="/movies" src="{Play}" label="Movie" preload />
  <NavItem href="/contacts" src="{Users}" label="Contact" preload />
  <NavItem href="/study" src="{CodeBracket}" label="Study" />
</Navbar>
<main class="max-w-7xl mx-auto px-8 sm:px-16">
  <slot />
</main>
