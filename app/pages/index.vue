<script setup lang="ts">

</script>
<template>
    <div lass="grid mx-auto gap-2">
        <div class="text-5xl font-extrabold ...">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 to-zinc-200">
                {{ useAppConfig().app }}
            </span>
        </div>
        <p class="mx-auto">
            {{ useAppConfig().tagline }}
        </p>
        <a href="/register"class="button bg-zinc-100 px-4 py-2 rounded-lg">Start Now</a>
    </div>
</template>