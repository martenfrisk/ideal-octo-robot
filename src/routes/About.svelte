<script>
import Lazy from "src/lib/Lazy.svelte!mount";

</script>
<a href="/">Home</a>
<p>About page</p>
<Lazy foo="aboutProp" date={Date.now()} />
