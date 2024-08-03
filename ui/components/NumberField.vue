<template>
  <div class="grid gap-1">
    <label v-if="props.label" :for="props.id || inputId" class="block text-sm font-medium text-zinc-700" >
      {{ props.label }}
    </label>
    <div class="outline outline-2 outline-offset-1 focus:outline-zinc-950 rounded-md w-fit" :class="props.class">
      <button
        class="px-2 py-1 rounded-l hover:bg-zinc-300 focus:outline-none"
        @click="decrease"
      >
        -
      </button>
      <input
        :id="props.id"
        type="text"
        :value="formattedValue"
        class="min-w-5 text-center focus:outline-none"
        :class="value<=0 ? 'text-red-500' : ''"
        @input="updateValue"
        v-on="validationListeners"
        >
      <button
        class="px-2 py-1 rounded-r hover:bg-zinc-300 focus:outline-none"
        @click="increase"
      >
        +
      </button>
    </div>
    <div class="v-input-error" v-text="errorMessage" />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
interface Props {
  id?: string
  modelValue: number
  name: string
  label?: string
  class?: string
  step?: number
  min?: number
  max?: number
  formatOption?: Intl.NumberFormatOptions
  validationMode?: ValidationMode;
}
const props = withDefaults(defineProps<Props>(), {
  id: '',
  label: '',
  class: '',
  step: 1,
  min: -1000000,
  max: Infinity,
  formatOption: undefined,
  validationMode: 'aggressive',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const value = ref(props.modelValue)

const formattedValue = computed(() => {
  if (props.formatOption?.style === 'currency') {
    return new Intl.NumberFormat('en-US', { style: 'currency',
      currency: props.formatOption.currency,
      currencySign: 'accounting',
      currencyDisplay: 'code'}
    ).format(value.value)
  }
  return value.value.toString()
})

const increase = () => {
  if (props.max !== undefined && value.value >= props.max) return
  value.value += props.step
  emit('update:modelValue', value.value)
}

const decrease = () => {
  if (props.min !== undefined && value.value <= props.min) return
  value.value -= props.step
  emit('update:modelValue', value.value)
}

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement
  const newValue = parseFloat(target.value.replace(/,/g, ''))
  if (!isNaN(newValue)) {
    value.value = newValue
    emit('update:modelValue', newValue)
  }
}

const {errorMessage, validationListeners, inputId} =
useFormValue(props, emit);
defineSlots<{
  default(props: object): object;
}>()
</script>
