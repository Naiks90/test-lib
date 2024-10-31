<template>
  <div class="container" ref="loaderContainer" :style="{ width: size + 'px', height: size + 'px' }">
      <div class="loader">
          <div 
              v-for="n in 10" 
              :key="n" 
              class="loader__item" 
              :class="`loader__item-${n}`" 
              :style="{ 
                  transform: `translate(-50%, -50%) rotate(${(360 / 10) * (n - 1)}deg)`, 
                  left: `calc(50% + ${radius}px * cos(${(360 / 10) * (n - 1)}deg))`, 
                  top: `calc(50% + ${radius}px * sin(${(360 / 10) * (n - 1)}deg))`, 
                  width: `${width}px` 
              }">
          </div>
      </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
const props = defineProps({
  radius: {
      type: Number,
      default: 40
  },
  width: {
      type: Number,
      default: 28
  },
  size: {
      type: Number,
      default: 110
  },
  colorStart: {
      type: String,
      default: '#ddd'
  },
  colorEnd: {
      type: String,
      default: '#333'
  }
});

const loaderContainer = ref(null);

onMounted(() => {
  loaderContainer.value.style.setProperty('--color-start', props.colorStart);
  loaderContainer.value.style.setProperty('--color-end', props.colorEnd);
});
watch(props, ()=>{
  loaderContainer.value.style.setProperty('--color-start', props.colorStart);
  loaderContainer.value.style.setProperty('--color-end', props.colorEnd);
})
</script>

<style lang="scss" scoped>
$items: 10;
$itemWidth: 28;
$itemHeight: 3;
$radius: 40;
$velocity: 1.5;
$colorStart: var(--color-start);
$colorEnd: var(--color-end);

$pi: 3.14159265359;
$_precision: 10;

@function pow($base, $exp) {
    $value: $base;

    @if $exp >1 {
        @for $i from 2 through $exp {
            $value: $value * $base;
        }
    }

    @if $exp < 1 {
        @for $i from 0 through -$exp {
            $value: $value / $base;
        }
    }

    @return $value;
}

@function fact($num) {
    $fact: 1;

    @if $num >0 {
        @for $i from 1 through $num {
            $fact: $fact * $i;
        }
    }

    @return $fact;
}

@function _to_unitless_rad($angle) {
    @if unit($angle)=="deg" {
        $angle: calc($angle / 180deg * $pi);
    }

    @if unit($angle)=="rad" {
        $angle: $angle / 1rad;
    }

    @return $angle;
}

@function sin($angle) {
    $a: _to_unitless_rad($angle);
    $sin: $a;

    @for $n from 1 through $_precision {
        $sin: calc($sin + (pow(-1, $n) / fact(2 * $n + 1)) * pow($a, (2 * $n + 1)));
    }

    @return $sin;
}

@function cos($angle) {
    $a: _to_unitless_rad($angle);
    $cos: 1;

    @for $n from 1 through $_precision {
        $cos: calc($cos + (pow(-1, $n) / fact(2*$n)) * pow($a, 2*$n));
    }

    @return $cos;
}


.container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 110px;
    height: 110px;
    top: 50%;
    left: 50%;
    flex-shrink: 0;
}

.loader {
    position: relative;

    &__item {
        position: absolute;
        width: $itemWidth + px;
        height: $itemHeight + px;
        background: transparent;
        border-radius: calc($itemHeight / 2) + px;
    }

    @for $i from 1 through $items {
        &__item-#{$i} {
            $deg: calc(360deg / $items) * $i;
            $offsetX: (
                cos(calc(360deg / $items * $i)) * $radius) - calc($itemWidth / 2
            );
        $offsetY: (
            sin(calc(360deg / $items * $i)) * $radius) - calc($itemHeight / 2
        );
    transform: translate($offsetX + px, $offsetY + px) rotate($deg);
    animation: blink #{calc(1 / $velocity)}s linear #{calc($i * (1 / $velocity) / $items)}s infinite;
}
}
}

@keyframes blink {
    0% {
        background: $colorStart;
    }

    100% {
        background: $colorEnd;
    }
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        background: rotate(360deg);
    }
}
</style>