<script lang="ts">
  const props = $props<{ error: any }>()
  let show = $state(process.env.NODE_ENV !== 'production')
</script>

<div class="error-component-root">
  <div class="error-component-container">
    <strong class="error-component-wrong">Something went wrong!</strong>
    <button class="error-component-btn" onclick={() => (show = !show)}>
      {show ? 'Hide Error' : 'Show Error'}
    </button>
  </div>
  <div class="error-component-spacer"></div>

  {#if show}
    <div>
      <pre class="error-component-message">
         {#if props.error.message}
          <code>{props.error.message}</code>
        {/if}
    </pre>
    </div>
  {/if}
</div>

<style>
  .error-component-root {
    padding: '.5rem';
    max-width: '100%';
  }

  .error-component-container {
    display: 'flex';
    align-items: 'center';
    gap: '.5rem';
  }

  .error-component-wrong {
    font-size: '1rem';
  }

  .error-component-btn {
    appearance: 'none';
    font-size: '.6em';
    border: '1px solid currentColor';
    padding: '.1rem .2rem';
    font-weight: 'bold';
    border-radius: '.25rem';
  }

  .error-component-spacer {
    height: '.25rem';
  }

  .error-component-message {
    font-size: '.7em';
    border: '1px solid red';
    border-radius: '.25rem';
    padding: '.3rem';
    color: 'red';
    overflow: 'auto';
  }
</style>
