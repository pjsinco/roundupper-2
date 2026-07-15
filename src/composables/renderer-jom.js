import { useAoaGeneralRenders } from '@/composables/styles-base-aoa-general';

export function useRendererForJom() {
  const { paragraph, heading, link, image, list } = useAoaGeneralRenders();

  const renderer = {
    paragraph,
    heading,
    link,
    list,
    image,
  };

  return { renderer };
}
