<template>
    <nav class="custom-nav bg-white fixed bottom-0 left-0 w-full text-gray-800 py-4 flex justify-around items-center h-20">
        <button
            class="h-full w-full flex justify-center items-center text-gray-800 text-xs flex flex-col items-center bg-transparent"
            :style="{ 'background-color': active === 0 ? '#BFDB57' : 'transparent' }" @click="active = 0">
            <img src="@/assets/home.svg" alt="Home" />
            <span class="whitespace-nowrap">Inicio</span>
        </button>
        <button
            class="h-full w-full flex justify-center items-center text-gray-800 text-xs flex flex-col items-center bg-transparent"
            :style="{ 'background-color': active === 1 ? '#BFDB57' : 'transparent' }" @click="active = 1">
            <img src="@/assets/agregar-usuario.svg" alt="Notifications" />
            <span class="whitespace-nowrap">Nueva Solicitud</span>
        </button>
        <button
            class="h-full w-full flex justify-center items-center text-gray-800 text-xs flex flex-col items-center bg-transparent"
            :style="{ 'background-color': active === 2 ? '#BFDB57' : 'transparent' }" @click="active = 2">
            <img src="@/assets/users.svg" alt="Messages" />
            <span class="whitespace-nowrap">Solicitudes</span>
        </button>
        <button
            class="h-full w-full flex justify-center items-center text-gray-800 text-xs flex flex-col items-center bg-transparent"
            :style="{ 'background-color': active === 3 ? '#BFDB57' : 'transparent' }" @click="active = 3">
            <img src="@/assets/calculadora.svg" alt="Settings" />
            <span class="whitespace-nowrap">Simulador</span>
        </button>
        <button
            class="h-full w-full flex justify-center items-center text-gray-800 text-xs flex flex-col items-center bg-transparent"
            :style="{ 'background-color': active === 4 ? '#BFDB57' : 'transparent' }" @click="active = 4">
            <img src="@/assets/stats.svg" alt="Profile" />
            <span class="whitespace-nowrap">Estadísticas</span>
        </button>
    </nav>
</template>
  
<script>
export default {
    data() {
        return {
            active: 3, // El botón "Simulador" estará activo por defecto
        };
    },
};
</script>
  
<style scoped>
.custom-nav {
    background-color: white;
    margin: 0;
    padding: 0;
}

.custom-nav button {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-shadow: none;
}
</style>