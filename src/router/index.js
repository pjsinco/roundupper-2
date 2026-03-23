import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import TheDO from '../pages/TheDO.vue';
import AffiliateNews from '../pages/AffiliateNews.vue';
import AoaGeneral from '../pages/AoaGeneral.vue';
import Newsletter from '../pages/Newsletter.vue';

const navigateToDefault = function (basePath, defaultPath) {
  return (to, _from) => {
    if (to.path === basePath) {
      return {
        name: defaultPath,
      };
    }
  };
};

const thedoRedirect = navigateToDefault('/the-do', 'Date');

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
      beforeEnter: navigateToDefault('/the-do', 'Date'),
      children: [
        //        {
        //          path: 'top-story',
        //          name: 'Top story',
        //          component: () => import('../components/the-do/TopStory.vue'),
        //        },
        //        {
        //          path: 'feature',
        //          name: 'Feature',
        //          component: () => import('../components/the-do/Feature.vue'),
        //        },
        {
          path: 'date',
          name: 'Date',
          component: () => import('../components/the-do/Date.vue'),
          meta: {
            nickname: 'Date',
          },
        },
      ],
    },
    {
      path: '/affiliate-news',
      name: 'Affiliate News',
      component: AffiliateNews,
      beforeEnter: navigateToDefault('/affiliate-news', 'News item'),
      children: [
        {
          path: 'news-item',
          name: 'News item',
          component: () => import('../components/affiliates/NewsItem.vue'),
          meta: {
            nickname: 'News item',
          },
        },
        {
          path: 'news-item-with-image',
          name: 'News item with image',
          component: () =>
            import('../components/affiliates/NewsItemWithImage.vue'),
          meta: {
            nickname: 'News item with image',
          },
        },
        {
          path: 'section-head',
          name: 'Section head',
          component: () => import('../components/affiliates/SectionHead.vue'),
          meta: {
            nickname: 'Section head',
          },
        },
        {
          path: 'toc',
          name: 'Affiliates TOC',
          component: () => import('../components/affiliates/Toc.vue'),
          meta: {
            nickname: 'TOC',
          },
        },
      ],
    },
    {
      path: '/aoa-general',
      name: 'AOA General',
      component: AoaGeneral,
      beforeEnter: navigateToDefault('/aoa-general', 'Text'),
      children: [
        {
          path: 'text',
          name: 'Text',
          component: () => import('../components/aoa-general/Text.vue'),
          meta: {
            nickname: 'Text',
          },
        },
        {
          path: 'button',
          name: 'Button',
          component: () => import('../components/aoa-general/Button.vue'),
          meta: {
            nickname: 'Button',
          },
        },
        {
          path: 'header',
          name: 'Header',
          component: () => import('../components/aoa-general/Header.vue'),
          meta: {
            nickname: 'Header',
          },
        },
        {
          path: 'image-list',
          name: 'ImageList',
          component: () => import('../components/aoa-general/ImageList.vue'),
          meta: {
            nickname: 'Image list',
          },
        },
        {
          path: 'image-block',
          name: 'Image block',
          component: () => import('../components/aoa-general/ImageBlock.vue'),
          meta: {
            nickname: 'Image block',
          },
        },
        {
          path: 'two-up-signature',
          name: 'Two-up signature',
          component: () =>
            import('../components/aoa-general/TwoUpSignature.vue'),
          meta: {
            nickname: 'Two-up signature',
          },
        },
        // {
        //   path: 'icon-list-sm',
        //   name: 'Icon List - Small',
        //   component: () => import('../components/aoa-general/IconListSm.vue'),
        //   meta: {
        //     nickname: 'Icon List Small',
        //   },
        // },
        //{
        //path: 'spacer',
        //name: 'Spacer',
        //component: () => import('../components/aoa-general/Spacer.vue'),
        //},
      ],
    },
    {
      path: '/newsletter',
      name: 'Newsletter',
      component: Newsletter,
      beforeEnter: navigateToDefault('/newsletter', 'Newsletter item'),
      children: [
        {
          path: 'news-item',
          name: 'Newsletter item',
          component: () => import('../components/newsletter/NewsItem.vue'),
          meta: {
            nickname: 'News item',
          },
        },
        {
          path: 'toc',
          name: 'TOC',
          component: () => import('../components/newsletter/Toc.vue'),
          meta: {
            nickname: 'TOC',
          },
        },
        {
          path: 'header',
          name: 'Newsletter header',
          component: () => import('../components/aoa-general/Header.vue'),
          meta: {
            nickname: 'Header',
          },
        },
        {
          path: 'highlight',
          name: 'Newsletter highlight',
          component: () => import('../components/newsletter/Highlight.vue'),
          meta: {
            nickname: 'Highlight',
          },
        },
        //{
        //  path: 'button',
        //  name: 'Button',
        //  component: () => import('../components/aoa-general/Button.vue'),
        //},
      ],
    },
  ],
});

export default router;
