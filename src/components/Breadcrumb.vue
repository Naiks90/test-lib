<template>
  <div class="breadcrumb">
    <template v-for="(item, index) in items" :key="index">
      <component
        :is="linkComponent"
        :href="item.url"
        class="breadcrumb__link"
        :class="{ 'active': index === items.length - 1 }"
      >
        {{ item.title }}
      </component>
      <svg
        v-if="index < items.length - 1"
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
      >
        <path
          d="M6.76465 12L10.7646 8L6.76465 4"
          stroke="#686868"
          stroke-width="1.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
    linkComponent: {
      type: [String, Object],
      default: 'a'
    }
  }
};
</script>

<style lang="scss">
.breadcrumb {
  @apply flex gap-2 items-center text-xs font-medium tracking-tight leading-[1.4];

  @screen md {
    @apply text-sm tracking-tighter;
  }

  svg {
    @apply w-3 h-3 flex-shrink-0;

    @screen md {
      @apply w-4 h-4;
    }
  }

  &__link {
    @apply transition-colors py-1 md:px-2 hover:text-cyan-500 text-gray-400 no-underline;

    &.active {
      @apply min-w-[40px] text-cyan-500 pointer-events-none break-all line-clamp-1;
    }
  }
}
</style>
