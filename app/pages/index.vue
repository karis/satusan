<script setup lang="ts">
    definePageMeta({
        layout: 'default',
        auth: false
    })
 const today= new Date()
 const message= ref('Hai')
 const messageCounter= ref(0)
</script>
<template>
    <div class="grid grid-cols-1 m-2 lg:grid-cols-2 lg:mx-20 !text-emerald-500">
        <div class="grid col-span-1 gap-4  content-center">
            <div class="text-7xl font-extrabold ...">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-emerald-200">
                    {{ useAppConfig().app }}
                </span>
            </div>
            <span class="text-md font-bold text-emerald-600">
                Time to lift up your business,<br>Maintain start from 100 rupiah.
            </span>
            <!-- <p class="">
                {{ useAppConfig().tagline }}
            </p> -->
            <a href="/register" class="flex hover:bg-emerald-950 hover:text-emerald-50 button w-fit bg-emerald-100 px-4 py-2 rounded-lg">Start Now</a>
        </div>
        <div class="grid col-span-1 gap-2 content-center">
            <span class="font-semibold">Tell me something about your business</span>
            <TextArea v-model="message" name="taTellMe" />
            <NumberField 
                v-model="messageCounter" 
                name="numbering" 
                label="Average Turnover per Month" 
                :format-option="{
                    style: 'currency',
                    currency: 'IDR',
                }"
                :step="1000"
            />
            <SButton class="button" variant="success">Send</SButton>
        </div>
    </div>
</template>