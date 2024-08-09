<script setup lang="ts">
    import { z } from 'zod';
    
    const mySchema = z.object({
        name: z.string().default('john doe'),
        email: z.string().email(),
        phone: z.string().min(10),
        passwordForm : z
            .object({
                password: z.string(),
                confirm: z.string(),
            })
            .refine((data) => data.password === data.confirm, {
                message: "Passwords don't match",
                path: ["confirm"], 
            }),
                })
</script>
<template>
    <AutoForm :schema="mySchema" @submit="console.log" />
</template>