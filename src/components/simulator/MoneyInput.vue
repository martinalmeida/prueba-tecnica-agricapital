<template>
    <label for="input1" class="block m-0 grid grid-cols-2 inline-block max-w-xs h-full">
        <slot></slot>
        <input :id="props.id" type="text" :placeholder="props.placeholder"
            class="my-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50 col-span-1 mx-auto h-full mr-4 font-bold"
            @input="updateInputValue" @blur="removeDollarSignIfNeeded" v-model="inputValue" />
    </label>
</template>
  
<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { useMoneyInputStore } from '@/stores/simulator'

const store = useMoneyInputStore();

interface Props {
    id: string;
    placeholder: string;
}

const props = defineProps<Props>();
const inputValue = ref('');

const updateInputValue = (event: InputEvent) => {
    const target = event.target as HTMLInputElement;
    let value = target.value;
    // Eliminar todos los caracteres no numéricos del valor
    value = value.replace(/[^\d]/g, '');
    // Dar formato al valor para incluir puntuación de miles y millones
    value = Number(value).toLocaleString('es-ES');
    // Agregar signo "$" al principio del valor si no está vacío
    if (value !== '') {
        value = `$ ${value}`;
    }

    inputValue.value = value;
    store.recived(value);
};

const removeDollarSignIfNeeded = () => {
    // Eliminar el signo "$" si el input está vacío
    if (inputValue.value === '$') {
        inputValue.value = '';
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