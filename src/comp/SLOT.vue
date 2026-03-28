<script lang="js" setup>
import { useSlots } from 'vue';

/**
 * 在 <script setup> 使用 slots 和 attrs 的情况应该是相对来说较为罕见的，
 * 因为可以在模板中直接通过 $slots 和 $attrs 来访问它们。
*/
let theSlot=useSlots()
console.log('what is slot',theSlot.default)
</script>

<template>
  <div>
    <slot></slot>
  </div>
</template>
