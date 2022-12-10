<div>
  <h1 class="font-semibold text-6xl">Study SvelteKit</h1>

  <ul class="font-semibold p-5 text-xl">
    <li class="text-lg">
      <a href="https://www.youtube.com/watch?v=EQy-AYhZIlE&list=PLq30BP0TIcqXP149TyFMfRhnMT6T5--e5">
        Youtube Loading Data
      </a>
      <div class="px-5 flex flex-col">
        <span>fetch simultaneously (pass Promise)</span>
        <span>preload (data-sveltekit-preload-data="hover")</span>
        <span>server side load & env ($env/static/private)</span>
      </div>
    </li>
  </ul>
</div>

<style>
  a {
    text-decoration: underline;
  }

  li > div {
    display: flex;
    flex-direction: column;
    padding-bottom: 5px;
    font-size: 1.125rem/* 18px */;
    line-height: 1.75rem/* 28px */;
    color: rgb(22 101 52);
    font-weight: 500;
  }
</style>