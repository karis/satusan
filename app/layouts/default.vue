<script setup lang="ts">

</script>
<template>
    <header class="fixed flex w-full justify-between p-2 border-b-2">
        <div>
            <h1 class="text-2xl font-bold">
                {{ useAppConfig().app }}
            </h1>
        </div>
        <div>
            <button class="p-2 bg-zinc-200 font-medium focus:text-zinc-50 focus:bg-zinc-950 rounded-lg">Login</button>
        </div>
    </header>
    <div class="grid grid-cols-1 mx-auto pt-20 h-screen">
        
        <slot />
    </div>
    <footer class="grid grid-cols-1 text-center text-zinc-200 border-t-2">
        {{ useAppConfig().app }} &copy; {{ new Date().getFullYear() }}
    </footer>
</template>