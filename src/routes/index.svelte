<script lang="ts">
  // @ts-nocheck
  import Image from "../lib/Image.svelte!mount";
  import Counter from "../lib/Counter.svelte!mount"
</script>

<div>
  <h1>Hello Partial!</h1>
  <div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eveniet
      odio alias expedita officia quasi cum aspernatur optio, quos nemo
      reprehenderit. Quod, corporis. Necessitatibus nulla excepturi culpa modi
      molestias minus.
    </p>
  </div>
  <div class="cv">
    <Counter />
  </div>
  <Image imgsrc="https://picsum.photos/300/200" />
</div>

<style>
  .cv {
    content-visibility: auto;
    contain-intrinsic-size: 57px 200px;
  }
  div {
    width: 100%;
    flex-wrap: wrap;
    flex-direction: column;
    display: flex;
    align-items: center;
  }
  p {
    width: 50%;
  }
  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }
  }
</style>
