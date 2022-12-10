<script setup lang="ts">
import { nextTick, ref, computed, ComputedRef, watch } from 'vue';
const count = ref<number>(0)
const ipt = ref<HTMLInputElement | null>(null);
const toggleModal = ref<boolean>(false);
const inputValue = ref(""); // 初始值为空字符串

const handleInput = (e: Event) => {
  console.log((e.target as HTMLInputElement).value);
  inputValue.value = (e.target as HTMLInputElement).value;
  count.value = Number(inputValue.value); 
  
}
const toggle = async () => {
  toggleModal.value = !toggleModal.value;
  await nextTick();
  if (toggleModal.value) {
    ipt.value?.focus();
  }
};
const props = defineProps({
  msg: {
    type: [String, Number],
    required: false,
  },
  birthday: {
    type: Number,
    default: 2015,
    required: true,
    vaildator: (val: number) => {
      return [2015, 2016].includes(val);
    }
  }
});
type TBirthday = 2015 | 2016 | 2017;
interface Props { 
  msg: string | number;
  birthday?: TBirthday;

}
const porps = withDefaults(defineProps<Props>(), { birthday: 2015 });
watch(count, (newVal, oldVal) => {
  console.log(newVal.toFixed(2))
  
})
defineExpose({
  toggle
});
const double: ComputedRef<number> = computed(() => {
  return +count.value * 2
});
const stepCount: ComputedRef<(step: number) => number> = computed(() => {
  return function (step:number) {
    return count.value * step
  }
})
</script>

<template>
<Teleport to="body">
  <div class="modle" v-if="toggleModal">
    <p>count:{{count}}</p>
    <p>doubel:{{double}}</p>
    <p>stepCount:{{ stepCount(5) }}</p>
    <p>msg:{{ msg }}</p>
    <p>birthday:{{ birthday }}</p>
    <input type="text " ref="ipt" v-modle="count" @input="handleInput">
  </div>
</Teleport>
</template>
<style scoped>
.modal {
  background: #f5f5f5;
  width: 300px;
  padding: 20px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
}
</style>