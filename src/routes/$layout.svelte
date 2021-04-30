<nav><a href="/">Home</a><a href="/about/">About</a></nav>

<main>
  <slot />
</main>

<style>
  nav {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  main {
    background-color: #fff;
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
</style>
