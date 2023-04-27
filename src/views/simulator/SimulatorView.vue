<template>
    <LayoutBody>
        <LayoutHeader />
        <!-- Inicio de contenido de mi app -->
        <BodyTitle title="Simulador de Crédito" />
        <SimulatorCard>
            <HeaderCard>
                <MoneyInput id="monto" placeholder="monto">
                    <span class="text-gray-700 col-span-1 text-lg font-bold flex items-center">Monto
                        a<br>Financiar:</span>
                </MoneyInput>
                <PorcentInput type="tasa" id="tasa" placeholder="tasa">
                    <span class="text-gray-700 col-span-1 text-lg font-bold flex items-center">Tasa:</span>
                </PorcentInput>
                <PorcentInput type="aval" id="aval" placeholder="aval">
                    <span class="text-gray-700 col-span-1 text-lg font-bold flex items-center">Aval:</span>
                </PorcentInput>
            </HeaderCard>
            <BodyCard>
                <CalculeBody>
                    <CalculeCards />
                </CalculeBody>
            </BodyCard>
        </SimulatorCard>
        <!-- Fin de contenido de mi app -->
        <LayoutFooter />
    </LayoutBody>
</template>
  
<script setup lang="ts">
import BodyTitle from "@/components/simulator/BodyTitle.vue";
import SimulatorCard from "@/components/simulator/SimulatorCard.vue"
import HeaderCard from "@/components/simulator/HeaderCard.vue"
import BodyCard from "@/components/simulator/BodyCard.vue"
import MoneyInput from "@/components/simulator/MoneyInput.vue"
import PorcentInput from "@/components/simulator/PorcentInput.vue"
import CalculeBody from "@/components/simulator/CalculeBody.vue";
import CalculeCards from "@/components/simulator/CalculeCards.vue";
</script>
  