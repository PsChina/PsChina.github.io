<script setup lang="ts">
defineProps<{ size?: number }>()
</script>

<template>
  <svg
    class="monogram"
    :width="size ?? 36"
    :height="size ?? 36"
    viewBox="0 0 36 36"
    aria-hidden="true"
    role="presentation"
  >
    <rect
      x="0.75"
      y="0.75"
      width="34.5"
      height="34.5"
      rx="6"
      fill="none"
      stroke="currentColor"
      stroke-opacity="0.2"
    />
    <!-- Stylized "PS" monogram -->
    <path
      d="M9 9h7.5a4 4 0 0 1 0 8H11v10"
      fill="none"
      stroke="currentColor"
      stroke-width="1.6"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M24 13c0-1.7-1.3-3-3-3-1.4 0-2.5.8-2.9 2M26 18.5c.2.4.3.9.3 1.5 0 1.7-1.3 3-3 3-1.4 0-2.5-.8-2.9-2"
      fill="none"
      stroke="var(--accent)"
      stroke-width="1.6"
      stroke-linecap="round"
    />
  </svg>
</template>

<style scoped>
.monogram {
  display: block;
  color: var(--fg);
}
</style>
