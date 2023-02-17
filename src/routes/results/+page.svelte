<script>
  export let data = { choices: [], error: false };
  import { page } from "$app/stores";
  const q = $page.url.searchParams.get("q");
  let { choices, error } = data;
</script>

<div class="text-right p-3">
  <button on:click={() => history.back()}>Go back</button>
</div>

{#if error}
  <div
    class="bg-red-100 border border-red-400 text-red-700 px-4 mt-4 lg:mx-48 py-3 rounded relative"
    role="alert"
  >
    <strong class="font-bold">Holy smokes!</strong>
    <span class="block sm:inline"
      >Something happened. Please try again later.</span
    >
    <br />
    <span class="block sm:inline">API Rate limit reached.</span>
    <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
      <svg
        class="fill-current h-6 w-6 text-red-500"
        role="button"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        ><title>Close</title><path
          d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
        /></svg
      >
    </span>
  </div>
{/if}

<div class="mt-4 text-center lg:mx-48">
  <h1 class="text-lg">Your prompt</h1>
  <hr class="my-3" />
  <p>{q}</p>
</div>

{#if choices.length}
  <div class="mt-4 text-center">
    <h1 class="text-lg mb-3">Responses</h1>
    <hr class="my-3" />
    {#each choices as response}
      <p class="my-3">{response}</p>
      <hr />
    {/each}
  </div>
{/if}
