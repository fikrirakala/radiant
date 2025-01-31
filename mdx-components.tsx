import type { MDXComponents } from "mdx/types";

import {
  ArticleContainer,
  ArticleImage,
  Blockquote,
  Code,
  CustomLink,
  H1,
  H2,
  H3,
  Hr,
  Li,
  Ol,
  P,
  Strong,
  Ul,
} from "@/components/mdx";

const customComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  strong: Strong,
  ul: Ul,
  li: Li,
  ol: Ol,
  a: CustomLink,
  ArticleContainer: ArticleContainer,
  ArticleImage: ArticleImage,
  hr: Hr,
  code: Code,
  blockquote: Blockquote,
};

export function useMDXComponents(components: MDXComponents) {
  return {
    ...customComponents,
    ...components,
  };
}
