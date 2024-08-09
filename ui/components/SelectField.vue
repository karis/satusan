<template>
  <div class="relative">
    <select
      :value="modelValue"
      class="w-full px-3 py-2 text-gray-700 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      @change="handleChange"
    >
      <option v-for="option in props.options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
      <svg class="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'

interface Option {
  value: string | number
  label: string
}

interface Props {
  modelValue: string | number
  options: Option[]
}

const props = withDefaults(defineProps<Props>(),{
  modelValue: '',
  options: () => []
})
const emit = defineEmits(['update:modelValue'])
// function  useFormValue(props: Props, emit: (event: 'update:modelValue', ...args: any[]) => void) {
//   const errorMessage = ref('')
//   const validationListeners = ref({})
//   const inputId = ref('')
// }
function handleChange(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

</script>
