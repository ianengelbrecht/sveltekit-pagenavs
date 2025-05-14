<script lang="ts">
  import '../app.css';
  const { children} = $props()
</script>

<div class="p-4">
  {@render children()}
</div>