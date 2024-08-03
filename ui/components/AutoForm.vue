<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { ref } from 'vue'
import { z } from 'zod'

interface Props {
  schema: z.ZodSchema<any>
  initialData?: any
  validationMode?: ValidationMode;
  onSubmit?: (data: any) => void
  onError?: (errors: Record<string, string>) => void
  onSuccess?: (data: any) => void
}

const props = withDefaults(defineProps<Props>(), {
  initialData: () => ({}),
  validationMode: 'aggressive',
  onSubmit: () => {},
  onError: () => {},
  onSuccess: () => {},
})

// Define your form schema using Zod
const formSchema = props.schema
// const formSchema = z.object({
//   name: z.string().min(2, 'Name must be at least 2 characters'),
//   email: z.string().email('Invalid email address'),
//   age: z.number().min(18, 'Must be at least 18 years old'),
//   role: z.enum(['user', 'admin', 'moderator']),
// })

type FormData = z.infer<typeof formSchema>

const formData = ref<FormData>(props.initialData || {})
// const formData = ref<FormData>({
//   name: '',
//   email: '',
//   age: 18,
//   role: 'user',
// })

const errors = ref<Partial<Record<keyof FormData, string>>>({})

const handleSubmit = () => {
  try {
    formSchema.parse(formData.value)
    errors.value = {}
    console.log('Form submitted:', formData.value)
    // Handle successful submission here
  } catch (error) {
    if (error instanceof z.ZodError) {
      errors.value = error.flatten().fieldErrors as Partial<Record<keyof FormData, string>>
    }
  }
}
</script>

<template>
  <form
    class="max-w-md mx-auto mt-8 space-y-6"
    @submit.prevent="handleSubmit">
    <InputField
      v-model="formData.name"
      label="Name"
      :error="errors.name"
      class="w-full"
    />
    <InputField
      v-model="formData.email"
      label="Email"
      type="email"
      :error="errors.email"
      class="w-full"
    />
    <InputField
      v-model.number="formData.age"
      label="Age"
      type="number"
      :error="errors.age"
      class="w-full"
    />
    <SelectField
      v-model="formData.role"
      label="Role"
      :options="[
        { value: 'user', label: 'User' },
        { value: 'admin', label: 'Admin' },
        { value: 'moderator', label: 'Moderator' },
      ]"
      :error="errors.role"
      class="w-full"
    />
    <SButton type="submit" class="w-full">Submit</SButton>
  </form>
</template>
