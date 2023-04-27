<template>
    <label for="input1" class="block m-0 grid grid-cols-2 inline-block max-w-xs h-full">
        <slot></slot>
        <input v-if="type == 'tasa'" value="3,0%" :id="props.id" type="text" :placeholder="props.placeholder"
            class="my-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50 col-span-1 mx-auto h-full mr-4"
            @input="onInput" @keydown.delete="onDelete" />
        <input v-if="type == 'aval'" value="8,33%" :id="props.id" type="text" :placeholder="props.placeholder"
            class="my-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50 col-span-1 mx-auto h-full mr-4"
            @input="onInput" @keydown.delete="onDelete" />
    </label>
</template>
  
<script setup lang="ts">
import { defineProps } from 'vue';
import { useMoneyInputStore } from '@/stores/simulator'

const stores = useMoneyInputStore();

interface Props {
    type: string;
    id: string;
    placeholder: string;
}

const props = defineProps<Props>();

const onInput = (event: InputEvent) => {
    const input = event.target as HTMLInputElement;
    // Solo permitimos valores numéricos y una sola coma utilizando una expresión regular
    input.value = input.value.replace(/[^0-9,]|,(?=.*?,)/g, '');
    // Agregamos el signo de porcentaje al final del valor, si aún no existe
    if (!input.value.endsWith('%')) {
        input.value += '%';
    }
    if (props.type == 'tasa') {
        stores.recivedTasa(input.value);
    }
    if (props.type == 'aval') {
        stores.recivedAval(input.value);
    }
};

const onDelete = (event: KeyboardEvent) => {
    const input = event.target as HTMLInputElement;
    // Si se borra todo el contenido del input, quitamos el signo de porcentaje
    if (input.value === '%') {
        input.value = '';
    }
    // Si se borra el último carácter y no es el signo de porcentaje, se lo agregamos de nuevo
    else if (input.value.endsWith('%')) {
        input.value = input.value.substring(0, input.value.length - 1);
    }
};

</script>
  
<style scoped>
input[type="text"] {
    height: 48px;
    border-radius: 24px;
    text-align: center;
    font-weight: 700;
    font-size: 1.2rem;
}

::placeholder {
    color: #ededed;
    text-align: center;
    font-weight: bold;
}
</style>
  