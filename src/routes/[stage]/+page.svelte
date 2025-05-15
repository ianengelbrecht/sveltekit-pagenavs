<script lang="ts">
  import { goto } from '$app/navigation';
  const { data } = $props();
  const { stage } = $derived(data); // we need this to make the html below update when the url params change

  $effect(() => {
    console.log('stage changed to', stage);
  });

  const handleButtonClick = (ev: Event) => {
    ev.preventDefault();
    goto('/' + (stage == 'new' ? 'old' : 'new'));
  };
</script>

<div class="flex flex-col gap-4">
  <div>Stage is <span class="font-bold">{stage}</span> (this should update)</div>
  <button class="p-2 w-66 border rounded cursor-pointer" onclick={handleButtonClick}>goto {stage == 'new'? 'old': 'new'} via button click handler</button>
  <a href={'/' + (stage == 'new' ? 'old' : 'new')}>goto {stage == 'new'? 'old': 'new'} via link</a>
</div>