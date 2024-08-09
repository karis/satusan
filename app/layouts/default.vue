<script setup lang="ts">

</script>
<template>
    <header class="fixed flex w-full items-center justify-between p-2 border-b-2">
        <a href="/">
            <h1 class="text-2xl font-bold text-emerald-500">
                {{ useAppConfig().app }}
            </h1>
        </a>
        <div>
            <SButton href="/auth/login"  class="button p-2 bg-emerald-200 font-medium focus:text-emerald-50  focus:bg-emerald-950 py-2 rounded-lg">Login</SButton>
        </div>
    </header>
    <div class="grid grid-cols-1 mx-auto pt-20 h-[97vh]">
        
        <slot />
    </div>
    <footer class="grid grid-cols-1 text-xs text-center text-emerald-200 border-t-2">
        {{ useAppConfig().app }} &copy; {{ new Date().getFullYear() }}
    </footer>
</template>