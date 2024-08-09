<script setup lang="ts">
interface Props {
  id?: string;
  modelValue: string;
  name: string;
  label?: string;
  type?: string;
  validationMode?: ValidationMode;
}

const props = withDefaults(defineProps<Props>(), {
    id: '',
    label: '',
    type: 'text',
    validationMode: 'aggressive'
})
const emit = defineEmits(['update:modelValue']);

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};

const showPassword = ref(false)
  const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value
  }
const {errorMessage,  validationListeners} = useFormValue(props, emit);

defineSlots<{
  default(props: object): object;
  // hint?(props: object): string;
}>()
</script>

<template>

  <div class="relative border-emerald-500 border-2 rounded-md">
  <!-- <div class="grid grid-cols-1 mb-4 relative"> -->
    <!-- <label :for="inputId" class="block text-sm font-medium text-emerald-700 mb-1">{{ label }}</label> -->
    <input
      :id="'id'+name"
      :name="'name'+name"
      placeholder=" "
      :value="props.modelValue"
      :type="showPassword ? 'text' : props.type"
      class="block px-3 pb-2.5 pt-4 w-full text-sm text-emerald-900 bg-transparent rounded-lg border-1 border-emerald-300 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
      @input="handleInput"
      v-on="validationListeners"
       >
       <label :for="name" class="absolute text-sm text-emerald-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-90 peer-focus:-translate-y-4 left-1">{{ props.label }}</label>

    <!-- <input
      :id="id"
      :name="name"
      :value="props.modelValue"
      :type="showPassword ? 'text' : props.type"
      class="w-full px-3 py-2 border border-emerald-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      @input="handleInput"
      v-on="validationListeners"
    > -->
    <span v-if="type === 'date'" class="absolute right-3 top-1/2 transform -translate-y-1/2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </span>
    <span v-if="type === 'tel'" class="absolute right-3 top-1/2 transform -translate-y-1/2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    </span>
    <span v-if="type === 'email'" class="absolute right-3 top-1/2 transform -translate-y-1/2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </span>
    <span v-if="type === 'password'" class="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" @click="togglePasswordVisibility">
      <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
      </svg>
    </span>

    <div class="v-input-error" v-text="errorMessage" />
  </div>
</template>
