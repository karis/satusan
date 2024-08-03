<template>
  <button
    :class="[
      'px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2',
      variant === 'primary' ? 'bg-zinc-100 text-zinc-950 hover:text-zinc-50 hover:bg-zinc-700 focus:ring-zinc-500' :
      variant === 'success' ? 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-400' :
      variant === 'danger' ? 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-400' :
      variant === 'warning' ? 'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-400' :
      variant === 'info' ? 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400' :
      variant === 'secondary' ? 'bg-zinc-500 text-white hover:bg-zinc-600 focus:ring-zinc-400' :
      'bg-zinc-200 text-zinc-700 hover:bg-zinc-300 focus:ring-zinc-500'
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
