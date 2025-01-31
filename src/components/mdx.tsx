import Image, { ImageProps } from "next/image";
import Link from "next/link";
import React from "react";

import { Article } from "@/lib/article";

export default function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

// function CustomHeading(props: any) {
//   const slug = slugify(props.children);
//   return React.createElement(
//     `h${props.level}`,
//     {
//       id: slug,
//       className: cn(
//         "scroll-mt-36 md:scroll-mt-24 inline-flex",
//         props.className
//       ),
//     },
//     [
//       React.createElement("a", {
//         href: `#${slug}`,
//         key: `link-${slug}`,
//         className: "anchor-link",
//       }),
//     ],
//     props.children
//   );
// }

export const H1 = ({ children }: React.HTMLProps<HTMLHeadingElement>) => (
  <h1 className="text-3xl font-bold normal-case tracking-tight text-gray-950 sm:text-4xl">
    {children}
  </h1>
);

export const H2 = ({ children }: React.HTMLProps<HTMLHeadingElement>) => (
  <h2 className="mb-4 text-2xl font-semibold normal-case tracking-tight text-gray-950">
    {children}
  </h2>
);

export const H3 = ({ children }: React.HTMLProps<HTMLHeadingElement>) => (
  <h3 className="mb-10 mt-12 text-xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0">
    {children}
  </h3>
);

export const P = (props: React.HTMLProps<HTMLParagraphElement>) => (
  <p {...props} className="my-10 text-base/8 first:mt-0 last:mb-0" />
);

export const Ul = (props: React.HTMLAttributes<HTMLUListElement>) => (
  <ul className="list-disc pl-4 text-base/8 marker:text-gray-400" {...props} />
);

export const Li = (props: React.HTMLAttributes<HTMLLIElement>) => (
  <li className="my-2 pl-2 has-[br]:mb-8" {...props} />
);

export const Ol = (props: React.HTMLAttributes<HTMLOListElement>) => (
  <ol
    className="list-decimal pl-4 text-base/8 marker:text-gray-400"
    {...props}
  />
);

export const Hr = (props: React.HTMLAttributes<HTMLHRElement>) => (
  <hr className="my-8 border-t border-gray-200" {...props} />
);

export const Strong = (props: React.HTMLAttributes<HTMLSpanElement>) => (
  <strong className="font-semibold text-gray-950" {...props} />
);

export const Blockquote = (props: React.HTMLAttributes<HTMLQuoteElement>) => (
  <blockquote
    className="my-10 border-l-2 border-l-gray-300 pl-6 text-base/8 text-gray-950 first:mt-0 last:mb-0"
    {...props}
  />
);

export const Code = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => (
  <>
    <span aria-hidden="true">`</span>
    <code className="text-[15px]/8 font-semibold text-gray-950" {...props}>
      {children}
    </code>
    <span aria-hidden="true">`</span>
  </>
);

export function CustomLink(props: any) {
  const href = props.href;
  const style =
    "font-medium text-gray-950 underline decoration-gray-400 underline-offset-4 hover:decoration-gray-600";
  if (href.startsWith("/")) {
    return (
      <Link className={style} href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} className={style} />;
  }

  return (
    <a className={style} target="_blank" rel="noopener noreferrer" {...props} />
  );
}

export const ArticleImage = ({
  alt,
  width = 1200,
  height = 675,
  src,
  ...props
}: ImageProps) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    className="aspect-3/2 mb-10 w-full rounded-2xl object-cover shadow-xl"
    {...props}
  />
);

export const ArticleContainer = ({
  article,
  children,
}: {
  article: Article;
  children: any;
}) => (
  <div>
    <h2 className="data-dark:text-gray-400 mt-16 font-mono text-xs/5 font-semibold uppercase tracking-widest text-gray-500">
      {article.date}
    </h2>
    <h1 className="mt-2 text-pretty text-4xl font-medium tracking-tighter text-gray-950 sm:text-6xl">
      {article.title}
    </h1>
    <div className="mt-16 grid grid-cols-1 gap-8 pb-24 lg:grid-cols-[15rem_1fr] xl:grid-cols-[15rem_1fr_15rem]">
      <div className="flex flex-wrap items-center gap-8 max-lg:justify-between lg:flex-col lg:items-start">
        <div className="flex items-center gap-3">
          <Image
            src={article.author.avatar}
            alt={article.author.name}
            width={150}
            height={150}
            className="aspect-square size-6 rounded-full object-cover"
          />
          <div className="text-sm/5 text-gray-700">{article.author.name}</div>
        </div>
      </div>
      <div className="text-gray-700">
        <div className="max-w-2xl xl:mx-auto">{children}</div>
      </div>
    </div>
  </div>
);
