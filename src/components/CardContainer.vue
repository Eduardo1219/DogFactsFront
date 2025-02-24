<script setup lang="ts">
import CardFact from './CardFact.vue'
import { ref, onMounted } from 'vue'
import { getDogFacts, getDogFactsCount } from '../services/dogFactsService.ts'
import PaginationBar from './PaginationBar.vue'
import SearchBar from './SearchBar.vue'

const page = ref(1)
const totalPages = ref(5)
const take = ref(6);
const responseData = ref({});
const showErrorMessage = ref(false);
const errorMessage = ref("");
const filter = ref("");

onMounted(async () => {
  await getCountDogFactsAsync("");
  await getDogFactsAsync("");
});

const showErrorMessageUser = () => {
  showErrorMessage.value = true;
  errorMessage.value = result.error;
}

async function getDogFactsAsync(filter: string) {
  await getCountDogFactsAsync(filter);
  const result = await getDogFacts(filter, page.value, take.value);
  if (!result.success) {
    showErrorMessageUser();
    return;
  }
  showErrorMessage.value = false;
  responseData.value = result.data;
}

async function getCountDogFactsAsync(filter: string) {
  const result = await getDogFactsCount(filter);
  if (!result.success) {
    showErrorMessageUser();
    return;
  }
  const newTotalPages = calculatePages(result.data, take.value);
  totalPages.value = newTotalPages;
}

const handlePageChange = (newPage) => {
  page.value = newPage;

  getDogFactsAsync(filter.value);
};

const handleSearch = async (search) => {
  filter.value = search.value;
  await getDogFactsAsync(search.value);
}

function calculatePages(count: number, pageSize: number): number {
  const numberOfPages = Math.ceil(count / pageSize);
  return numberOfPages;
}

</script>

<template>
  <div class="search-tab">
    <SearchBar @doSearch="handleSearch" />
  </div>

  <div class="container" v-if="!showErrorMessage">
    <CardFact v-for="fact in responseData" :key="fact.id" :dogFact="fact.bodyAttribute" />
  </div>
  <div class="container-error" v-if="showErrorMessage">
    <p>Was not possible to get fact dogs!</p>
  </div>
  <PaginationBar :currentPage="page" :totalPages="totalPages" @page-change="handlePageChange" />
</template>
<style scoped>
.card {
  margin-top: 0;
  padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
}

.container {
  display: grid;
  grid-template-columns: auto auto;
  padding: 10px;
  justify-content: space-between;
}

.container-error {
  display: grid;
  grid-template-columns: auto auto;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
}

.container>div {
  
  padding: 10px;
  font-size: 30px;
  text-align: center;
}

.container>div>p {
  text-align: center;
  size: 10px;
  font-size: medium;
}
</style>