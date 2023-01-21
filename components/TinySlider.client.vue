<template>
  <div ref="tinysilder">
    <slot />
  </div>
</template>

<style src="tiny-slider/dist/tiny-slider.css" />

<script setup lang="ts">
import { tns } from "tiny-slider/src/tiny-slider";
import type { TinySliderSettings } from "tiny-slider/src/tiny-slider";
import { ref, onMounted } from "vue";

const tinysilder = ref<HTMLElement>();
const props = defineProps<{
  options?: Omit<TinySliderSettings, "container">;
}>();
onMounted(async () => {
  await nextTick();
  tns({ container: tinysilder.value, ...props.options });
});
</script>
