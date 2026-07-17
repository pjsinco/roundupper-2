import { useJomRenders } from '@/composables/styles-base-jom';

export function useRendererForJom() {
  const { paragraph, heading, link, image, list } = useJomRenders();

  const renderer = {
    paragraph,
    heading,
    link,
    list,
    image,
  };

  return { renderer };
}
