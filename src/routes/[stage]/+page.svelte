<script lang="ts">
  import { goto } from '$app/navigation';
  const { data } = $props();
  const { stage } = data;

  // trying to pick up the value change here...
  $effect(() => {
    console.log('stage changed to', stage);
  });

  const handleButtonClick = (ev: Event) => {
    ev.preventDefault();
    goto('/' + (stage == 'new' ? 'old' : 'new'), {
      invalidateAll: true, // I thought this might work but it doesn't
    });
  };
</script>

<div class="flex flex-col gap-4">
  <div>Stage is <span class="font-bold">{stage}</span> (this should update)</div>
  <button class="p-2 w-66 border rounded cursor-pointer" onclick={handleButtonClick}>goto {stage == 'new'? 'old': 'new'} via button click handler</button>
  <a href={'/' + (stage == 'new' ? 'old' : 'new')}>goto {stage == 'new'? 'old': 'new'} via link</a>
</div>