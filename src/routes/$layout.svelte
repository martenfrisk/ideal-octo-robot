<nav>
  <a href="/">Home</a>
  <a href="/about/">About</a>
</nav>

<main>
  <slot />
</main>

<style>
  nav {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin: 2rem auto;
  }
  a {
    text-decoration: none;
    color: darkslateblue;
  }
  a:hover {
    text-decoration: underline;
  }
  :global(h1) {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
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
