<template>
  <div class="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 z-0">
      <NuxtImg
        :src="bgImage"
        :alt="bgImageAlt"
        class="w-full h-full object-cover opacity-50"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
      <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
        {{ title }}
      </h1>

      <!-- Subtitle slot (unwraps single <p> from MDC content) -->
      <div v-if="$slots.subtitle" class="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
        <slot name="subtitle" mdc-unwrap="p" />
      </div>

      <!-- Description slot -->
      <div v-if="$slots.description" class="text-gray-300 mb-10 max-w-2xl mx-auto space-y-4">
        <slot name="description" />
      </div>

      <!-- CTA buttons: consumers can provide custom links/content via slots -->
      <div v-if="$slots.primary || $slots.secondary" class="flex flex-col sm:flex-row gap-4 justify-center">
        <slot name="primary" />
        <slot name="secondary" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  /** Optional background image URL for the hero. */
  bgImage?: string
  /** Optional background image alt for the hero. */
  bgImageAlt?: string
}

const props = withDefaults(defineProps<Props>(), {
  bgImage: 'https://images.unsplash.com/photo-1497366216546-3753c834494d?q=80&w=2070'
})

const { title, bgImage } = toRefs(props)
</script>

<style scoped>
/* Additional custom styles can be added here */
</style>
