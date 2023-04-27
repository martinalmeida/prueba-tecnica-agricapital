<template>
    <div v-if="monto !== ''" class="flex flex-col gap-4 max-w-screen-xl">
        <div class="bg-white rounded-lg shadow-md p-3 mt-4">
            <div class="flex flex-col items-center justify-center">
                <div class="flex items-center">
                    <div class="mr-4">
                        <img src="@/assets/calendar12.svg">
                    </div>
                    <div>
                        <h1 class="font-semibold text-2xl">
                            {{ plazo12 }}
                        </h1>
                        <h2 class="text-md mb-1">
                            12 cuotas mensuales
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white rounded-lg shadow-md p-3">
            <div class="flex flex-col items-center justify-center">
                <div class="flex items-center">
                    <div class="mr-4">
                        <img src="@/assets/calendar24.svg">
                    </div>
                    <div>
                        <h1 class="font-semibold text-2xl">
                            {{ plazo24 }}
                        </h1>
                        <h2 class="text-md mb-1">
                            24 cuotas mensuales
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white rounded-lg shadow-md p-3 mb-4">
            <div class="flex flex-col items-center justify-center">
                <div class="flex items-center">
                    <div class="mr-4">
                        <img src="@/assets/calendar36.svg">
                    </div>
                    <div>
                        <h1 class="font-semibold text-2xl">
                            {{ plazo36 }}
                        </h1>
                        <h2 class="text-md mb-1">
                            36 cuotas mensuales
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, watch, ref } from 'vue'
import { useMoneyInputStore } from '@/stores/simulator'

const stores = useMoneyInputStore();

const monto = computed(() => stores.valueInput)
const tasa = computed(() => stores.valueTasa)
const aval = computed(() => stores.valueAval)
const plazo12 = ref(null)
const plazo24 = ref(null)
const plazo36 = ref(null)

watch(
    () => monto.value,
    (nuevoValor, viejoValor) => {
        const montoFinal = ((moneyCovert(nuevoValor)) * (1 + ((floatConvert(aval.value) / 100))));
        const tasaInteres = (floatConvert(tasa.value) / 100)

        if (monto.value == "$ 0") {
            plazo12.value = ""
            plazo24.value = ""
            plazo36.value = ""
        } else {
            plazo12.value = calcularCuota(
                montoFinal,
                tasaInteres,
                12,
                1000000,
                1800,
                4000
            )

            plazo24.value = calcularCuota(
                montoFinal,
                tasaInteres,
                24,
                1000000,
                1800,
                4000
            )

            plazo36.value = calcularCuota(
                montoFinal,
                tasaInteres,
                36,
                1000000,
                1800,
                4000
            )
        }
    },
    { immediate: true }
);

function calcularCuota(montoFinal, tasaInteres, plazo, costoAdiccional, seguroVida, servicioAcompaniamiento) {
    const cuota = ((montoFinal * tasaInteres) / (1 - ((1 + tasaInteres) ** - plazo)) + (montoFinal / costoAdiccional) * seguroVida + servicioAcompaniamiento);
    let value = Number(Math.round(cuota)).toLocaleString('es-ES');
    return value = `$ ${value}`;
}

function moneyCovert(moneda) {
    let sinSimbolos = moneda.replace(/\$|\s|\.+/g, '');
    let entero = parseInt(sinSimbolos);
    return entero;
}

function floatConvert(value) {
    return parseFloat(value.slice(0, -1).replace(",", "."));
}
</script>

<style scoped>
h2 {
    color: #31823E;
}
</style>