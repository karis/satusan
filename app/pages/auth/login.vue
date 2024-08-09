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
        <div class="grid w-full md:w-2/3 lg:w-1/3 rounded-lg p-4 m-auto gap-4">
            <h1 class="text-3xl font-bold">Login</h1>
            <span class="text-md text-emerald-400">
                Enter your credentials to access your account.
            </span>
            <SInput v-model="auth.username" name="username" label="Username" type="email" />
            <SInput v-model="auth.password" name="password" label="Password" type="password" />            
            <div class="flex items-center justify-between">
            <SButton @click="login" class="button" variant="success">Login</SButton>
            </div>
            <!-- <span class="text-sm text-center indent-2">Already have an account? <a href="/auth/lo" class="text-emerald-600 font-light">Login</a></span> -->
            <div class="flex items-center my-4">
                <div class="flex-grow border-t border-emerald-300"></div>
                <span class="flex-shrink mx-4 text-emerald-500">or</span>
                <div class="flex-grow border-t border-emerald-300"></div>
            </div>
        </div>
    </div>
</template>