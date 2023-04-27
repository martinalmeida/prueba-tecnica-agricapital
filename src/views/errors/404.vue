<template>
    <LayoutBody>
        <LayoutHeader />
        <!-- Inicio de contenido de mi app -->
        <div class="flex justify-center items-center py-20 h-screen bg-gray-100">
            <div class="w-full max-w-md px-4">
                <div class="bg-white rounded-lg shadow-lg p-8">
                    <div class="text-center md:text-left">
                        <h2 class="text-4xl font-bold text-green-500 mb-4">¡Error 404!</h2>
                        <p class="text-gray-700 text-lg mb-8">La página que estás buscando no se pudo encontrar.</p>
                        <img src="@/assets/404.svg" alt="Error 404" class="mx-auto w-full mb-8 md:mb-0">
                    </div>
                    <div class="flex justify-center md:justify-start">
                        <a href="/"
                            class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full inline-flex items-center">
                            <svg class="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.707 5.707a1 1 0 011.414 0L10 8.586l2.879-2.879a1 1 0 111.414 1.414L11.414 10l2.879 2.879a1 1 0 01-1.414 1.414L10 11.414l-2.879 2.879a1 1 0 01-1.414-1.414L8.586 10 5.707 7.121a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>Volver a la página principal</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Fin de contenido de mi app -->
        <LayoutFooter />
    </LayoutBody>
</template>

<script setup lang="ts"></script>