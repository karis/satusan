<script setup lang="ts">
 const today= new Date()
</script>
<template>
    <div class="grid grid-cols-2 mx-auto">
        <div lass="flex flex-col gap-4">
            <div class="text-5xl font-extrabold ...">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 to-zinc-200">
                    {{ useAppConfig().app }}
                </span>
            </div>
            <span class="text-2xl font-bold text-zinc-400">
                Time to lift up your business
            </span>
            <p class="">
                {{ useAppConfig().tagline }}
            </p>
            <a href="/register"class="button bg-zinc-100 px-4 py-2 rounded-lg">Start Now</a>
        </div>
        <div class="grid grid-cols-1 gap-2">
            <span>.</span>
        </div>
    </div>
</template>