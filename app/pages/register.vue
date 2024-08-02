<script setup lang="ts">
    definePageMeta({
        layout: 'blank'
    })
    const register= ref({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    })
    const submit = async () => {
        console.log(JSON.stringify(register.value))
    }
</script>

<template>
     <div class="grid grid-cols-1 w-full bg-zinc-500">
            <div class="grid w-full md:w-2/3 bg-white rounded-lg p-4 m-auto">
            <h1>Register</h1>
            <p>
                 Complete the form below to register for an account.
            </p>
                <form @submit.prevent="submit">
                    <div class="mb-4">
                        <label for="name" class="block text-gray-700 text-sm font-bold mb-2">
                            Name
                        </label>
                        <input type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" v-model="register.name" placeholder="Name">
                    </div>
                    <div class="mb-4">
                        <label for="email" class="block text-gray-700 text-sm font-bold mb-2">
                        Email
                        </label>
                        <input type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" v-model="register.email" placeholder="Email">
                    </div>
                    <div class="mb-4">
                        <label for="password" class="block text-gray-700 text-sm font-bold mb-2">
                        Password
                        </label>
                        <input type="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" v-model="register.password" placeholder="******************">
                    </div>
                    <div class="mb-4">
                        <label for="password_confirmation" class="block text-gray-700 text-sm font-bold mb-2">
                            Confirm Password
                        </label>
                        <input type="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password_confirmation" v-model="register.password_confirmation" placeholder="******************">
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Register
                        </button>
                    </div>
                    <div class="flex items-center justify-between">
                        <a href="/login" class="text-sm text-blue-500 hover:text-blue-700 font-semibold py-1">
                            Already have an account?
                        </a>
                    </div>
                </form>
        </div>
    </div>
</template>