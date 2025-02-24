<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import FeatherIcon from 'vue-feather';
const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  }
});

const emit = defineEmits(['page-change']);

const handlePrevious = () => {
  if (props.currentPage > 1) {
    emit('page-change', props.currentPage - 1);
  }
};

const handleNext = () => {
  if (props.currentPage < props.totalPages) {
    emit('page-change', props.currentPage + 1);
  }
};
</script>

<template>
  <div class="pagination">
    <div class="flex items-center space-x-2">
      <button :disabled="currentPage === 1" @click="handlePrevious" >
        <FeatherIcon type="arrow-left" size="10" stroke="black" />
      </button>
      <span class="text-sm font-medium page-text">
        Page {{ currentPage }} of {{ totalPages }}
      </span>
      <button :disabled="currentPage === totalPages" @click="handleNext" >
        <FeatherIcon type="arrow-right" size="10" stroke="black" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}
button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  margin: 4px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
}
.page-text {
  margin-right: 2px;
}
button:hover,
button.active {
  background-color: #f0f0f0;
  border-color: #bbb;
}

button.active {
  background-color: #007bff;
  border-color: #007bff;
  color: #fff;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>