<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts" setup>
import type { GenericObject } from 'vee-validate';
import { ref, computed } from 'vue'
import { z } from 'zod'

const props = defineProps<{
  schema: z.ZodObject<GenericObject>
}>()

const emit = defineEmits<{
  (e: 'submit', data: GenericObject): void
}>()

const formData = ref<Record<string, any>>({})

const fields = computed(() => {
  return Object.entries(props.schema.shape).map(([name, field]) => {
    const fieldInfo: GenericObject = {
      name,
      label: name.charAt(0).toUpperCase() + name.slice(1),
      required: !field.isOptional(),
      value: formData.value[name],
    }


    if (field instanceof z.ZodObject) {
      Object.entries(field.shape).map(([nestedName, nestedField]) => {
        console.log('===>'+JSON.stringify(nestedName))
        console.log(JSON.stringify(nestedField))
        if (nestedName.toLowerCase().includes('password')) {
          fieldInfo.type = 'password'
        }
      })
    }
    if (field instanceof z.ZodString) {
      fieldInfo.type = 'text'
    } else if (field instanceof z.ZodNumber) {
      fieldInfo.type = 'number'
    } else if (field instanceof z.ZodEnum) {
      fieldInfo.type = 'select'
      fieldInfo.options = field.options.map((option: string) => ({
        value: option,
        label: option,
      }))
    }

    return fieldInfo
  })
})

const validateForm = () => {
  const result = props.schema.safeParse(formData.value)
  if (result.success) {
    if (formData.value.password && formData.value.confirmPassword) {
      if (formData.value.password !== formData.value.confirmPassword) {
        return { success: false, error: { confirmPassword: ['Passwords do not match'] } }
      }
    }
    return { success: true, data: result.data }
  }
  return { success: false, error: result.error.flatten().fieldErrors }
}

const handleSubmit = () => {
  const validationResult = validateForm()
  if (validationResult.success) {
    emit('submit', validationResult.data as GenericObject)
  } else {
    // Handle validation errors
    console.error('Validation errors:', validationResult.error)
  }
}
</script>

<template>
  <form class="space-y-4" @submit.prevent="handleSubmit">
    <div v-for="field in fields" :key="field.name" class="group">
      <div class="flex flex-col focus:outline-1 group-focus:outline-emerald-950 group-focus:outline-offset-2">

        <label :for="field.name" class="mb-1 text-sm font-medium text-gray-700">
          {{ field.label }}
        </label>
        <input
          v-if="field.type === 'text' || field.type === 'number' || field.type === 'password' || field.type === 'email'"
          :id="field.name"
          v-model="formData[field.name]"
          :type="field.type"
          :required="field.required"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
        <select
          v-else-if="field.type === 'select'"
          :id="field.name"
          v-model="formData[field.name]"
          :required="field.required"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option v-for="option in field.options" :key="option.value" :value="option.value">
            {{ option.label }}
          </option>
        </select>
        <textarea
          v-else-if="field.type === 'textarea'"
          :id="field.name"
          :required="field.required"
          :value="formData[field.name] as string"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
    </div>
    <button
      type="submit"
      class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Submit
    </button>
  </form>
</template>
