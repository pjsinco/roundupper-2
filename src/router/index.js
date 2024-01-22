import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import TheDO from '../pages/TheDO.vue';
import Affiliates from '../pages/Affiliates.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/the-do',
      name: 'The DO',
      component: () => import('../pages/TheDO.vue'),
      redirect: '/the-do/date',
      children: [
        {
          path: 'top-story',
          name: 'Top Story',
          component: () => import('../components/the-do/TopStory.vue'),
        },
        {
          path: 'feature',
          name: 'Feature',
          component: () => import('../components/the-do/Feature.vue'),
        },
        {
          path: 'date',
          name: 'Date',
          component: () => import('../components/the-do/Date.vue'),
        },
      ],
    },
    {
      path: '/affiliates',
      name: 'Affiliates',
      component: Affiliates,
      redirect: '/affiliates/news-item',
      children: [
        {
          path: 'news-item',
          name: 'News Item',
          component: () => import('../components/affiliates/NewsItem.vue'),
        },
      ],
    },
  ],
});

export default router;