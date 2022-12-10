<script setup lang="ts">
import { provide, ref } from "vue";
import HelloWorld from './components/HelloWorld.vue';
import { User, SetUser, userKey, setUserKey } from './types/provideInjectType';
const HelloWorldModal = ref<InstanceType<typeof HelloWorld> | null>(null);
const toggleHellWorldModal = () => {
    HelloWorldModal.value?.toggle();
}
const changeFnCallback = (emitObj: { id: number; value: string }) => {
    console.log('changeFnCallback', emitObj.id, emitObj.value);
};
const user = ref<User>({ name: '张三', age: 19 });
const setUser: SetUser = ({ name, age }: User): void => {
    user.value.name = name;
    user.value.age = age;
};
provide(userKey, user);
provide(setUserKey, setUser);
</script>

<template>
    <button @click="toggleHellWorldModal">切换自组建</button>
    <p>用户名称:{{ user.name }}</p>
    <p>用户年龄：{{ user.age }}</p>
    <HelloWorld ref="helloWorldModal" msg="HelloVue3" />
</template>