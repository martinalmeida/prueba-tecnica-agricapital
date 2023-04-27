<template>
    <div class="bg-green-200 mb-4 px-4 py-1 rounded-lg h-208 text-left">
        <div class="grid grid-cols-1 m-5">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.bg-green-200 {
    background-color: #CDDD94;
}
</style>