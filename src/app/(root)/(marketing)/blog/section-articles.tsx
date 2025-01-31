import Image from "next/image";
import Link from "next/link";
import React from "react";

import { getAllArticles } from "@/lib/article";

export default async function SectionArticles() {
  const articles = await getAllArticles();

  return (
    <section className="mt-16 px-6 pb-24 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="">
          {articles.map((article, i) => (
            <Link
              key={i}
              href={`/blog/${article.slug}`}
              className="relative grid grid-cols-1 border-b border-b-gray-100 py-10 first:border-t first:border-t-gray-200 max-sm:gap-3 sm:grid-cols-3"
            >
              <div>
                <div className="text-sm/5 max-sm:text-gray-700 sm:font-medium">
                  {article.date}
                </div>
                <div className="mt-2.5 flex items-center gap-3">
                  <Image
                    src={article.author.avatar}
                    alt="Author avatar"
                    width={150}
                    height={150}
                    className="aspect-square size-6 rounded-full object-cover"
                  />
                  <div className="text-sm/5 text-gray-700">
                    {article.author.name}
                  </div>
                </div>
              </div>

              <div className="sm:col-span-2 sm:max-w-2xl">
                <h2 className="text-sm/5 font-medium">{article.title}</h2>
                <p className="mt-3 text-sm/6 text-gray-500">
                  {article.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
