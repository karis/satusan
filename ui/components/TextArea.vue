<template>
  <div class="grid gap-1">
    <div>
      <label v-if="props.label" :for="props.id || inputId" class="block text-sm font-medium text-zinc-700"
       >{{ props.label }}</label>
      <textarea
        :id="inputId"
        ref="textareaRef"
        :value="modelValue"
        :maxlength="props.maxLength"
        :rows="props.rows"
        :cols="props.cols"
        :class="[
          'w-full px-3 py-2 text-zinc-950 border rounded-lg focus:outline-none',
          { 'resize-none': autoResize }
        ]"
        :style="{ height: height + 'px' }"
        v-on="validationListeners"
        @input="onInput"
      />
    </div>
    <div class="v-input -footer">
        <p v-if="hint" class="v-input-hint">
          <slot name="hint">
            {{ hint }}
          </slot>
        </p>
        <div v-if="counter" class="v-input-counter">
          <slot name="counter" :count="uncontrolledValue.length">
            {{ uncontrolledValue.length }}
          </slot>
        </div>
      </div>
      <div v-if="!hideError" class="v-input-error" v-text="errorMessage" />
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import { type ValidationMode, useFormValue } from '../composables';

interface Props {
  id?: string;
  name: string;
  modelValue: string;
  autoResize?: boolean;
  counter?: boolean;
  class?: string;
  label?: string;
  placeholder?: string;
  hint?: string;
  rows?: number;
  cols?: number;
  maxLength?: number;
  validationMode?: ValidationMode;
  hideError?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  autoResize: true,
  id: '',
  class: '',
  label: '',
  hint: '',
  placeholder: '',
  rows: 3,
  cols: 30,
  max:0,
  maxLength: 100,
  counter: false,
  validationMode: 'aggressive',
  hideError: false,
});

const emit = defineEmits(['update:modelValue']);

const textareaRef = ref<HTMLTextAreaElement | null>(null);
const height = ref(0);

const resize = () => {
  if (props.autoResize && textareaRef.value) {
    textareaRef.value.style.height = 'auto';
    height.value = textareaRef.value.scrollHeight;
  }
};

const onInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement;
  emit('update:modelValue', target.value);
  resize();
};

onMounted(() => {
  resize();
});

watch(() => props.modelValue, () => {
  resize();
});

const {errorMessage, uncontrolledValue, validationListeners, inputId} =
useFormValue(props, emit);
defineSlots<{
  default(props: object): object;
  hint?(props: object): string;
  counter?(props: { count: { type: boolean } }): boolean;
}>()
</script>
