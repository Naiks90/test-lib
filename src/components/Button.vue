<template>
    <button v-bind="$attrs" :class="[getSizeClass, getTypeClass]" :disabled="loading || disabled">
        <Loader v-if="loading" :width="7" :size="loaderSize" :radius="8" :colorStart="colorStart" :colorEnd="colorEnd" />
        <template v-else>
            <slot />
        </template>
    </button>
</template>

<script setup>
// import Icon from "~/components/Icon.vue";
import Loader from "./Loader.vue"
import { computed } from "vue"

const props = defineProps({
    loading: Boolean,
    disabled: Boolean,
    size: {
        type: String,
        validator: function (value) {
            return ['lg', 'md', 'sm'].indexOf(value) !== -1
        },
    },
    type: {
        type: String,
        validator: function (value) {
            return ['primary', 'secondary', 'red', 'gray', 'tag', 'filters', 'secondary-outlined', 'green', 'border-red', 'border-green'].indexOf(value) !== -1
        },
    },
    loaderSize: {
        type: Number,
        default: 32,
    },
    colorStart: {
        type: String,
        default: '#ddd'
    },
    colorEnd: {
        type: String,
        default: '#333'
    }
})
const getSizeClass = computed(() => {
    const classSwitch = { lg: 'btn-lg', md: 'btn-md', sm: 'btn-sm' }
    return classSwitch[props.size] ?? ''
})

const getTypeClass = computed(() => {
    const classSwitch = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        red: 'btn-red',
        gray: 'btn-gray',
        tag: 'btn-tag',
        filters: 'btn-filters',
        'secondary-outlined': 'btn-secondary-outlined',
        green: 'btn-green',
        'border-red': 'btn-border-red',
        'border-green': 'btn-border-green'
    }
    return classSwitch[props.type] ?? ''
})

</script>
<style lang="scss">
@tailwind base;
@tailwind components;

@layer components {
    .btn {
        @apply rounded-lg leading-none flex items-center justify-center gap-2 transition;
        height: 48px;
        user-select: none;
    }

    .btn-lg {
        @apply btn;
        height: 45px;
    }

    .btn-md {
        @apply btn;
        height: 40px;
    }

    .btn-sm {
        @apply btn;
        height: 32px;
    }

    .btn-primary {
        @apply bg-cyan-500 text-gray-900 font-medium;

        &:hover {
            @apply bg-cyan-350;
        }

        &[disabled] {
            @apply border border-gray-550/[.28] bg-white/[.02] text-gray-500;
        }
    }

    .btn-secondary {
        @apply bg-gray-200/[.08] text-gray-200 font-medium;

        &:hover {
            @apply bg-gray-200 text-gray-900;
        }

    }

    .btn-red {
        @apply bg-red-500 text-gray-900 font-medium;

        &:hover {
            @apply bg-red-400;
        }
    }

    .btn-gray {
        @apply bg-gray-200/[.08] p-3 rounded-lg leading-none font-semibold;

        &[disabled] {
            @apply border border-gray-200/[.28] bg-white/[.02] text-gray-500;
        }
    }

    .btn-tag {
        @apply rounded bg-gray-200/[.08] text-gray-200 font-medium;

        &:hover {
            @apply bg-cyan-500 text-gray-900;
        }

        &_active {
            @apply bg-cyan-500 text-gray-900;
        }

        &_disabled {
            @apply bg-gray-600 text-gray-400 hover:bg-gray-600 hover:text-gray-400 pointer-events-none;
        }
    }

    .btn-filters {
        @apply size-9 rounded-lg border border-cyan-800 text-gray-200 flex items-center justify-center shrink-0;
    }

    .btn-secondary-outlined {
        @apply bg-gray-800 text-gray-200 border border-gray-200 rounded-lg;

        &:hover {
            background-color: rgba(217, 217, 217, 0.08);
        }
    }

    .btn-green {
        @apply bg-green-500 text-gray-900 font-medium;

        &:hover {
            @apply bg-green-400;
        }
    }

    .btn-border-red {
        @apply bg-gray-800 border border-red-600;

        &:hover {
            @apply bg-gray-800 border border-red-600;
        }
    }

    .btn-border-green {
        @apply bg-gray-800 border border-green-500;

        &:hover {
            @apply bg-gray-800 border border-green-500;
        }
    }
}
</style>