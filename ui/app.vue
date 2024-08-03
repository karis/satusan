<script setup lang="ts">
 const msg = ref('Hello World')
 const numbering = ref(0)
 const auth =ref({
    username: '',
    password: ''
})
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
  <AutoForm />
</template>
