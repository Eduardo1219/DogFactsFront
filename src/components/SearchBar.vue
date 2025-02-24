<template>
    <div class="search-tab">
        <input type="text" v-model="searchTerm" placeholder="Search..." class="search-input" @input="handleSearch" />
    </div>
</template>
<script setup lang="ts">
import { defineEmits, ref } from 'vue';
import debounce from "lodash/debounce"

const searchTerm = ref("")

const emit = defineEmits(['doSearch']);

const handleSearch = debounce(() => {
  emit('doSearch', searchTerm);
  console.log("searchsaaas")
}, 1000)

</script>
<style scoped>
.search-tab {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 25px;
  padding: 8px 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
}

.search-input {
  width: 100%;
  padding: 10px;
  border: 0px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;
}

.search-button {
  background: none;
  color: #555;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: 10px;
  font-size: 20px;
  transition: color 0.3s ease;
}
</style>
