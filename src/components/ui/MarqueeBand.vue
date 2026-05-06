<script setup lang="ts">
defineProps<{ items: string[] }>()
</script>

<template>
  <div
    class="marquee"
    role="presentation"
    aria-hidden="true"
  >
    <div class="marquee__track">
      <template
        v-for="copy in 2"
        :key="copy"
      >
        <template
          v-for="(item, i) in items"
          :key="`${copy}-${i}`"
        >
          <span>{{ item }}</span>
          <span class="dot">·</span>
        </template>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// Inherits .marquee styles from main.scss.
</style>
