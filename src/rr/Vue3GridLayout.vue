<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

function printRoute() {
  console.log('route (reactive):', route)
  console.log('route snapshot:', {
    fullPath: route.fullPath,
    path: route.path,
    name: route.name,
    params: { ...route.params },
    query: { ...route.query },
    meta: route.meta,
  })
  console.log('router.currentRoute.value:', router.currentRoute.value)
}

onMounted(() => {
  // keep an initial lightweight snapshot in console
  console.log('initial route:', { path: route.path, name: route.name })
})
</script>
<template>
  <section class="dotVUE">
    <h3 @click="printRoute">點擊列印路由資訊</h3>
  </section>
</template>
<style lang="scss">
.dotVUE{
  --ui-color-primary:#1890ff;
  padding: 16px;
  border-radius: 8px;
  background: linear-gradient(135deg, var(--ui-color-primary), color-mix(in srgb, var(--ui-color-primary) 60%, black));
  transition: background 350ms ease, transform 250ms ease, filter 200ms ease;

  &:hover{
    background: linear-gradient(135deg, color-mix(in srgb, var(--ui-color-primary) 85%, white), color-mix(in srgb, var(--ui-color-primary) 40%, black));
    transform: translateY(-3px);
  }

  h3{
    height: 30px;
    background: transparent;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 8px;
  }
  h3:hover{
    filter: brightness(0.95);
  }
}
</style>
