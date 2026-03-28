<script setup>
import { useCounterStore } from '@/stores/counter'
import { GridLayout, GridItem } from 'vue-grid-layout-v3';
import {ref} from 'vue'

// access the `store` variable anywhere in the component ✨
const store = useCounterStore()

store.increment()
console.log('store',store.count)




const Vue3GridLayoutData = ref({
    layout: [
        { x: 0, y: 0, w: 2, h: 2, i: '0', static: false },
        { x: 2, y: 0, w: 2, h: 4, i: '1', static: true },
        { x: 4, y: 0, w: 2, h: 5, i: '2', static: false },
        { x: 6, y: 0, w: 2, h: 3, i: '3', static: false },
        { x: 8, y: 0, w: 2, h: 3, i: '4', static: false },
        { x: 10, y: 0, w: 2, h: 3, i: '5', static: false },
        { x: 0, y: 5, w: 2, h: 5, i: '6', static: false },
        { x: 2, y: 5, w: 2, h: 5, i: '7', static: false },
        { x: 4, y: 5, w: 2, h: 5, i: '8', static: false },
        { x: 6, y: 3, w: 2, h: 4, i: '9', static: true },
        { x: 8, y: 4, w: 2, h: 4, i: '10', static: false },
        { x: 10, y: 4, w: 2, h: 4, i: '11', static: false },
        { x: 0, y: 10, w: 2, h: 5, i: '12', static: false },
        { x: 2, y: 10, w: 2, h: 5, i: '13', static: false },
        { x: 4, y: 8, w: 2, h: 4, i: '14', static: false },
        { x: 6, y: 8, w: 2, h: 4, i: '15', static: false },
        { x: 8, y: 10, w: 2, h: 5, i: '16', static: false },
        { x: 10, y: 4, w: 2, h: 2, i: '17', static: false },
        { x: 0, y: 9, w: 2, h: 3, i: '18', static: false },
        { x: 2, y: 6, w: 2, h: 2, i: '19', static: false },
    ],
    draggable: true,
    resizable: true,
    index: 0,
});
</script>

<template>
  <div>
    Vue3 Grid Layout
    <br>
    https://merfais.github.io/vue-grid-layout-v3/

    <section>
      <GridLayout
        v-model:layout="Vue3GridLayoutData.layout"
        :col-num="12"
        :row-height="30"
        :is-draggable="Vue3GridLayoutData.draggable"
        :is-resizable="Vue3GridLayoutData.resizable"
        :vertical-compact="true"
        :use-css-transforms="true"
    >
        <GridItem
            v-for="(item, index) in Vue3GridLayoutData.layout"
            :key="index"
            :static="item.static"
            :x="item.x"
            :y="item.y"
            :w="item.w"
            :h="item.h"
            :i="item.i"
        >
            <span class="text">{{(item.static)}}</span>
        </GridItem>
    </GridLayout>
    </section>
  </div>
</template>

<style scoped lang="scss">
.vue-grid-layout {
    background: #eee;
}

.vue-grid-item:not(.vue-grid-placeholder) {
    background: #ccc;
    border: 1px solid black;
}

.vue-grid-item.static {
    background: #cce;
}

.vue-grid-item .text {
    font-size: 24px;
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 100%;
    width: 100%;
}
</style>
