<template>
    <div class="max-w-5xl mx-auto mt-16 px-4 pt-12 pb-0">
        <h1 class="text-2xl font-bold text-gray-800 mb-2 text-center" style="font-size: 22px;">{{ title }}</h1>
    </div>
</template>  
  
<script setup lang="ts">
import { defineProps } from 'vue';
// Definimos una interfaz para especificar los tipos de propiedades que se pueden pasar al componente
interface Props {
    title: string;
}
// Definimos las propiedades del componente utilizando la función defineProps() y la interfaz Props
const props = defineProps<Props>();
</script>  

<style scoped>
h1 {
    color: #374309;
}
</style>