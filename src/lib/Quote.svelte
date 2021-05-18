<script lang="ts">
  // let quote: string
  export let defaultQuote: {
    author: string
    id: number
    quote: string
    permalink: string
  }
  async function getRandomQuote() {
    const response = await fetch(
      "http://quotes.stormconsultancy.co.uk/random.json"
    )
    const data = await response.json()
    defaultQuote = data
  }
</script>

  <button on:click={getRandomQuote}>New quote</button>
  <div>
    {#if defaultQuote}
      <p>
        "{defaultQuote.quote}"
      </p>
      <p>- {defaultQuote.author}</p>
    {/if}
  </div>
