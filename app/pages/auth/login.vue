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
            <div class="mb-4">
                <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Username</label>
                <input type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" v-model="auth.username" placeholder="Username">
            </div>
            <div class="mb-6">
                <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <input type="password" class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" v-model="auth.password" placeholder="******************">
            </div>
            <div class="flex items-center justify-between">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" @click="login()">
                Login
                </button>
            </div>
        </div>
    </div>
</template>