<script lang="ts">
  import { goto } from '$app/navigation';
  const { data } = $props();
  const { stage } = data;

  const localStage = $state(stage)
  const handleButtonClick = (ev: Event) => {
    ev.preventDefault();
    goto('/' + (localStage == 'new' ? 'old' : 'new'), {
      invalidateAll: true,
    });
  };
</script>

<div>Stage is {localStage}</div>
<button class="p-2 border rounded cursor-pointer" onclick={handleButtonClick}>Go to {localStage == 'new'? 'old': 'new'}</button>
<a href={'/' + (localStage == 'new' ? 'old' : 'new')}>Go to {localStage == 'new'? 'old': 'new'}</a>