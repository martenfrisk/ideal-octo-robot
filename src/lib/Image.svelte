<script lang="ts">
  export let imgsrc: string,
    altText = "Placeholder text"
    function newImage() {
      const newSource = "https://picsum.photos/200/200"
      imgsrc === newSource ? imgsrc = "https://picsum.photos/300/200" : imgsrc = newSource
    }
</script>

<div on:click={newImage}>
  <img src={imgsrc} alt={altText} />
</div>

<style>
  div {
    cursor: pointer;
    width: 100%;
    margin: 2rem 0;
    display: flex;
    justify-content: center;
  }
</style>
