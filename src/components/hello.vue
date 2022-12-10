<script setup>
import { ref } from "vue";
//枚举
const Transform = ref(0);
const divBgcolor = ref(Color.Red);
let startY = 0;
let moveY = 0;
let moveDistence = 0;
const handleTouchStart = (e) => {
    startY = e.touches[0].clientY;
}
const handleTouchMove = (e) => {
    startY = e.touches[0].clientY;
    moveDistence = startY - moveY;
    Transform.value = moveDistence
    if (moveDistence < 0) return;
    if (moveDistence > 100) {
        moveDistence =100
    }
    if (moveDistence > 0 && moveDistence < 30) {
        divBgcolor.value = Color.Red;
    } else if (moveDistence >= 30 && moveDistence < 60) {
        divBgcolor.value = Color.Blue;
    } else if (moveDistence >= 60 && moveDistence < 100) {
        divBgcolor.value = Color.Gray;
    }
}
const handleTouchEnd = (e) => {
    Transform.value = 0;
    divBgcolor.value = Color.Red;

}
</script>
<template>
    <div class="dropBox" 
    :style="{
    color: Color.Blue,
    transform: `translateY(${Transform}px)`,
    backgroundColor: divBgcolor
    }"
    @touchstart="handleTouchStart" 
    @touchmove="handleTouchMove" 
    @touchend="handleTouchEnd" >
    >
       拖动会产生颜色的变化 
    </div>
</template>
<style>
    .dropBox{
        width: 100%;
        height: 100px;
        display:flex;
        justify-content: center;
        align-content: center;
    }
</style>