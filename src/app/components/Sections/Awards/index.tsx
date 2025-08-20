"use client";

interface AwardItem {
  id: string;
  image: string;
  name: string;
  description: string;
  productHeader: string;
  productsByYear: ProductsByYear[];
}

interface ProductsByYear {
  year: string;
  products: ProductItem[];
}

interface ProductItem {
  image: string;
  name: string | null;
  alt: string;
  link: ButtonLinkElement;
}

import { ButtonLinkElement } from "@/types";
import Link from "next/link";
import React from "react";

function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

export const AwardList = ({ data }: { data: AwardItem[] }) => {
  return (
    <ul>
      {data.map(({ id, name }) => (
        <li key={id}>
          <a href={`#${id}`}>{name}</a>
        </li>
      ))}
    </ul>
  );
};

export const AwardList2 = ({ data }: { data: AwardItem[] }) => {
  return (
    <>
      {chunkArray(data, 3).map((row, rowIndex) => (
        <ul key={rowIndex} className="award_list">
          {row.map(({ id, name }) => (
            <li key={id}>
              <a href={`#${id}`}>{name}</a>
            </li>
          ))}
        </ul>
      ))}
    </>
  );
};

const AwardSection = ({ data }: { data: AwardItem }) => {
  return (
    <article id={data.id} className="award_wrap">
      <h2>
        <img src={data.image} alt={data.name} />
      </h2>
      <p dangerouslySetInnerHTML={{ __html: data.description }} />
      <h3>{data.productHeader}</h3>

      {data.productsByYear.map(({ year, products }) => (
        <div key={year} className="year">
          <h4>{year}</h4>
          {chunkArray(products, 4).map((row, rowIndex) => (
            <div key={rowIndex}>
              {row.map((product, index) => (
                <dl key={index}>
                  <dt>
                    <Link href={product.link.href || "/"}>
                      <img src={product.image} alt={product.alt} />
                    </Link>
                  </dt>
                  <dd>
                    <span className="washlet_area">{product.name}</span>
                  </dd>
                </dl>
              ))}
            </div>
          ))}
        </div>
      ))}
    </article>
  );
};

const Awards = ({ awards }: { awards: AwardItem[] }) => {
  return (
    <>
      <section className="block03 ttl award_wrap">
        <p className="text10">
          Products created under the TOTO design philosophy have won prestigious
          international design awards.
        </p>
        <h2 className="text11">Award Winning Products</h2>
        <p className="text10_m50">
          ※Sales areas differ for each product. Please refer to the website of
          each location for details.
        </p>
        <AwardList2 data={awards} />
      </section>

      <section className="block04">
        {awards.map((item) => (
          <AwardSection key={item.id} data={item} />
        ))}
        <p className="attention award_wrap">
          ・“WASHLET” and “WASHLET logo” are trademark or registered trademark
          of TOTO LTD.
          <br />
          ・Products marked with * at the end are discontinued products.
        </p>
      </section>
    </>
  );
};

export default Awards;
