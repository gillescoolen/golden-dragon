<template>
  <div>
    <button @click="generatePDF()">Download</button>
    <table id="menu" v-if="categories">
      <template v-for="category in categories">
        <th class="category" :key="category.name">{{ category.name }}</th>

        <template v-for="dish in category.dishes">
          <tr class="dish-row" :key="dish.id">
            <td class="dish">
              <div class="name">
                <span>
                  {{
                    `${dish.prefix}${dish.index}${dish.suffix}. ${dish.name}...`
                  }}
                </span>
                <span>{{ `€ ${dish.price.toFixed(2)}` }}</span>
              </div>
            </td>
          </tr>
          <tr v-if="dish.description" :key="dish.description">
            <td class="description">
              <i>{{ dish.description }}</i>
            </td>
          </tr>
        </template>
      </template>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Dish } from '@/types';
import api from '@/utils/api';

import autoTable from 'jspdf-autotable';
import jsPDF from 'jspdf';

@Component
export default class Dishes extends Vue {
  categories: Dish[] | null = null;

  generatePDF() {
    const doc = new jsPDF();
    autoTable(doc, { html: '#menu', useCss: true, theme: 'plain' });
    doc.save('menu.pdf');
  }

  private async fetchCategories() {
    const { data: categories } = await api.get('/api/categories');
    this.categories = categories;
  }
  async created() {
    await this.fetchCategories();
  }
}
</script>

<style lang="scss" scoped>
th {
  width: 50%;
  color: white;
  font-weight: 700;
  background-color: darkred;
}

.dish {
  display: flex;
  flex-direction: column;
  padding: 0 1rem;

  .name {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    span {
      min-width: 5rem;
      font-weight: 700;
    }
  }
}

.description {
  width: 50%;
  font-weight: 500;
  padding: 0 0 0 2rem;
}
</style>
