<template>
    <div>关于我们</div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();

router.getRoutes().forEach((route) => console.log(route.hidden));
</script>