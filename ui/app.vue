<script setup lang="ts">
import { z } from 'zod';

 const msg = ref('Hello World')
 const numbering = ref(0)
 const auth =ref({
    username: '',
    password: ''
})
const mySchema2 = z.object({
    username: z.string(),
    password: z.string(),
});
</script>
<template>
  <TextArea v-model="msg" name="taTellMe" label="Tell me" />
  <NumberField
    v-model="numbering"
    label="omset"
    :step="1000" name="numbering"
    :format-option="{
        style: 'currency',
        currency: 'IDR',
    }"/>
  <SInput id="usernm" v-model="auth.username" name="username" label="Username" />
  <SInput id="passwd" v-model="auth.password" name="password" label="Password" type="password" />
  <AutoForm :schema="mySchema2" @submit="console.log" />
</template>
