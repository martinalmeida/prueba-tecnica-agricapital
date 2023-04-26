<template>
    <nav class="custom-nav bg-white fixed bottom-0 left-0 w-full text-gray-800 py-4 flex justify-around items-center h-20">
        <button class="text-gray-400 hover:text-gray-700 px-2 py-1 flex-1 text-sm flex flex-col items-center">
            <img src="@/assets/home.svg" alt="Home" />
            Home
        </button>
        <button class="text-gray-400 hover:text-gray-700 px-2 py-1 flex-1 text-sm flex flex-col items-center">
            <img src="@/assets/agregar-usuario.svg" alt="Notifications" />
            Notifications
        </button>
        <button class="text-gray-400 hover:text-gray-700 px-2 py-1 flex-1 text-sm flex flex-col items-center">
            <img src="@/assets/users.svg" alt="Messages" />
            Messages
        </button>
        <button class="text-gray-400 hover:text-gray-700 px-2 py-1 flex-1 text-sm flex flex-col items-center">
            <img src="@/assets/calculadora.svg" alt="Settings" />
            Settings
        </button>
        <button class="text-gray-400 hover:text-gray-700 px-2 py-1 flex-1 text-sm flex flex-col items-center">
            <img src="@/assets/stats.svg" alt="Profile" />
            Profile
        </button>
    </nav>
</template>

<style scoped>
.custom-nav {
    background-color: white;
}
</style>
  