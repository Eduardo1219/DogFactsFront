<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  dogFact: {
    type: String
  }
});

</script>

<template>
  <div>
    <div class="text-box">
      {{ dogFact }}
    </div>
  </div>
</template>
<style scoped>
.text-box {
  width: 300px;
  height: 120px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  background: linear-gradient(135deg, #f0f8ff, #e0f2fe);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  line-height: 1.6;
  text-align: left;
  font-size: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.text-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}
</style>