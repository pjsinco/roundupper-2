import Constants from '@/constants/affiliate-news';
import { useAffiliateNewsRenders } from '@/composables/styles-base-affiliate-news';

export function getRenderer(opts = { forToc: false }) {
  const { paragraph, heading, link, list, image } = useAffiliateNewsRenders(opts);

  const renderer = {
    paragraph,
    heading,
    link,
    list,
    image,
  };

  return renderer;
}
