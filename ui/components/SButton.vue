<template>
  <button
    :class="[
      'px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2',
      variant === 'primary' ? 'bg-emerald-100 text-emerald-950 hover:text-emerald-50 hover:bg-emerald-700 focus:ring-emerald-500' :
      variant === 'success' ? 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-400' :
      variant === 'danger' ? 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-400' :
      variant === 'warning' ? 'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-400' :
      variant === 'info' ? 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400' :
      variant === 'secondary' ? 'bg-emerald-500 text-white hover:bg-emerald-600 focus:ring-emerald-400' :
      'bg-emerald-200 text-emerald-700 hover:bg-emerald-300 focus:ring-emerald-500'
    ]"
    :disabled="props.disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { inject } from 'vue';

interface Props {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  disabled?: boolean;
  href?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  disabled: false,
  href: '',
});

const action = inject('buttonAction', () => {});

const handleClick = () => {
  if(props.href) {
    navigateTo(props.href)
  }
  action();
};
</script>
