
<template>
  <div class="breadcrumb-secondary">
    <template v-for="(item, index) in items" :key="index">
      <component
        :is="linkComponent"
        :href="item.url"
        class="breadcrumb-secondary__link"
        :class="{ 'active': index === items.length - 1 }"
      >
        {{ item.title }}
      </component>
      <svg v-if="index < items.length - 1" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 12.5L10 8.5L6 4.5" stroke="#D0D5DD" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
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
.breadcrumb-secondary{
  @apply text-gray-400 font-medium py-1 px-2 flex gap-2 items-center;

  &__link {
    @apply transition-colors hover:text-cyan-500 text-gray-400 no-underline;
    &.active {
      @apply text-gray-200 bg-cyan-800 py-1 px-2 rounded-md line-clamp-1 break-all pointer-events-none;
    }
  }
}
</style>