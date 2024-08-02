<script setup lang="ts">

</script>
<template>
    <header class="fixed flex w-full items-center justify-between p-2 border-b-2">
        <a href="/">
            <h1 class="text-2xl font-bold">
                {{ useAppConfig().app }}
            </h1>
        </a>
        <div>
            <a href="/auth/login"  class="button p-2 bg-zinc-200 font-medium focus:text-zinc-50 focus:bg-zinc-950 rounded-lg">Login</a>
        </div>
    </header>
    <div class="grid grid-cols-1 mx-auto pt-20 h-[97vh]">
        
        <slot />
    </div>
    <footer class="grid grid-cols-1 text-xs text-center text-zinc-200 border-t-2">
        {{ useAppConfig().app }} &copy; {{ new Date().getFullYear() }}
    </footer>
</template>