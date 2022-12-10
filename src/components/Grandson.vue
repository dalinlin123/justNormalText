<script setup lang="ts">
import { inject } from 'vue';
import { userKey, setUserKey } from '../types/provideInjectType';
// App --> HelloWorld --> Grandson

const user = inject(userKey);
const setUser = inject(setUserKey);
const changeUser = () => {
    setUser?.({ name: '李四', age: 20 });
};
</script>

<template>
    <h2>孙组件</h2>
    <p>用户名称:{{ user?.name }}</p>
    <button @click="changeUser">修改用户</button>
</template>