<template>
  <div>
    <NuxtRouteAnnouncer />
    <Hero />
    <Test title="Test title">
        <template #subtitle>
          <p>Test subtitle</p>
        </template>
        <template #description>
          <p>Test description</p>
          <p>Test description</p>
        </template>
    </Test>
  </div>
</template>

<script setup>
import Test from './components/Test.vue';

// Auto-import components from components directory
</script>
