<script setup lang="ts">
// Decorative section frame: 4 corner brackets — editorial design "register marks".
</script>

<template>
  <div
    class="frame"
    aria-hidden="true"
  >
    <span class="frame__corner frame__corner--tl" />
    <span class="frame__corner frame__corner--tr" />
    <span class="frame__corner frame__corner--bl" />
    <span class="frame__corner frame__corner--br" />
  </div>
</template>

<style scoped>
.frame {
  position: absolute;
  inset: 1.5rem;
  pointer-events: none;
}

.frame__corner {
  position: absolute;
  width: 12px;
  height: 12px;
  border: 1px solid var(--border-strong);
}

.frame__corner--tl {
  top: 0;
  left: 0;
  border-right: none;
  border-bottom: none;
}
.frame__corner--tr {
  top: 0;
  right: 0;
  border-left: none;
  border-bottom: none;
}
.frame__corner--bl {
  bottom: 0;
  left: 0;
  border-right: none;
  border-top: none;
}
.frame__corner--br {
  bottom: 0;
  right: 0;
  border-left: none;
  border-top: none;
}

@media (max-width: 640px) {
  .frame {
    inset: 0.75rem;
  }
}
</style>
