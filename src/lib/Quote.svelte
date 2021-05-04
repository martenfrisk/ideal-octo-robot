<script context="module">
  export async function get() {
    const response = await this.fetch('https://zenquotes.io/api/random')
    const data = await response.json()
    return { data }
  }
</script>

<script>
  export let data
</script>

<p>Quote goes here:</p>
{#if data}
<p>{data}</p>
{:else}
<p>No quote 😔</p>
{/if}