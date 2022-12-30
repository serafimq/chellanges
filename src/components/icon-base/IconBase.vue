<script setup>
import { computed } from "vue";
import { getWidth } from "./helper";

const props = defineProps({
  width: {
    type: [String, Number],
    default: "20",
  },
  color: {
    type: String,
    default: "inherit",
  },
});

const styles = computed(() => ({
  width: getWidth(props.width),
  minWidth: getWidth(props.width),
  fill: props.color,
  color: props.color,
}));
</script>

<template>
  <div :style="styles" class="icon-base">
    <slot>icon</slot>
  </div>
</template>

<style lang="scss">
.icon-base {
  display: inline-flex;
  align-items: flex-end;
  justify-content: center;

  svg {
    width: inherit;
  }
}
</style>
