<template>
  <div>
    <div v-for="item in news" :key="item.id">
      <h3>
        {{ item.content }}
      </h3>
      <br />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { News } from '@/types';
import api from '@/utils/api';

@Component
export default class Menu extends Vue {
  news: News[] = [];

  private async fetchNews() {
    const { data: news } = await api.get('/api/news');
    this.news = news;
  }
  async created() {
    await this.fetchNews();
  }
}
</script>
