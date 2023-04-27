<template>
    <div v-if="monto !== ''" class="bg-white rounded-lg m-0">
        <div class="flex flex-col items-center justify-center">
            <div class="flex items-center mb-4">
                <div class="mr-4">
                    <img src="@/assets/money.svg">
                </div>
                <div>
                    <h2 class="text-gray-900 text-xl mb-1">
                        Valor del Crédito:
                    </h2>
                    <h1 class="font-semibold text-2xl">
                        {{ monto }}
                    </h1>
                </div>
            </div>
        </div>
    </div>
    <slot></slot>
    <div class="bg-white flex items-center justify-center text-center rounded-lg m-0 mt-4">
        <h4 class="text-md font-regular text-gray-900 mb-3">
            La cuota incluye seguro de vida deudor y<br> servicio de acompañamiento AgriClub.
        </h4>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useMoneyInputStore } from '@/stores/simulator'

const store = useMoneyInputStore()

const monto = computed(() => store.valueInput)

</script>

<style scoped>
h1 {
    color: #374309;
}
</style>