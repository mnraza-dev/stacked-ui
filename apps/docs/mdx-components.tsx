import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // allow raw HTML like <div> in MDX
    div: (props) => <div {...props} />,
  };
}
