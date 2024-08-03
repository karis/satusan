<script setup lang="ts">
    const auth =ref({
        username: '',
        password: ''
    })

    async function login() {
        console.log(JSON.stringify(auth.value))
    }
</script>
<template>
    <div class="grid grid-cols-1 w-full">
        <div class="grid w-full md:w-2/3 lg:w-1/3 rounded-lg p-4 m-auto">
            <h1 class="text-3xl font-bold">Login</h1>
            <span class="text-md text-zinc-400">
                Enter your credentials to access your account.
            </span>
            <SInput v-model="auth.username" name="username" label="Username" type="email" />
            <SInput v-model="auth.password" name="password" label="Password" type="password" />            
            <div class="flex items-center justify-between">
            <!-- <button class="bg-zinc-500 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" @click="login()">
                Login
            </button> -->
            <SButton @click="login" class="button" variant="success">Login</SButton>
            </div>
        </div>
    </div>
</template>