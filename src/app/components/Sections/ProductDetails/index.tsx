'use client'
import styles from './ProductDetails.module.scss';
import dynamic from 'next/dynamic';
import {
  ModuleData,
  SectionTitle,
  ButtonLinkElement,
  ButtonVariation,
  ButtonColor,
  ButtonAction,
  ButtonIconPosition,
  ButtonShape,
  ButtonElement,
} from '@/types';
import Image from 'next/image';
import { TechnologyListItem, TechnologyItemData } from '../TechnologyList/TechnologyGroup';
import { IconList } from '@/types/icons';
import { useEffect, useState } from 'react';
import { ProductCard } from '../ProductList';
import { Lightbox } from "yet-another-react-lightbox";
import Download from "yet-another-react-lightbox/plugins/download";
import "yet-another-react-lightbox/styles.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import productData from '../../../../../public/api/en/product-data.json';

const ShareButton = dynamic(() => import('@@/ShareButton'), { ssr: false });
const Button = dynamic(() => import('@@/Button'), { ssr: false });


interface Product extends SectionTitle {
  id: string;
  series: string;
  category: string[];
  subCategory: string[];
  description: string;
  images: string[];
  gallery: string[];
  features: string[];
  specs: Specs;
  awardImages: Awards[];
  technologies: TechnologyItemData[];
  downloads: DownloadItem[];
  productName: string;
  relatedProduct: ProductItem[];
  videos: VideoItem[];
}

interface Awards {
  name: string;
  year: string;
  src: string;
  link: ButtonLinkElement;
}

interface Specs {
  size: string;
  flushingSystem: string;
  waterConsumption: string;
  trapType: string;
  waterPressure: string;
  powerRating: string;
  materials: string[];
  colour: ColourItem[];
}

interface ProductItem {
  id: string;
  category: string[];
  subCategory: string[] | null;
  thumb: string;
  link: ButtonLinkElement;
  name: string | null;
  series: string;
}

interface ColourItem {
  name: string | null;
  image: string;
}

interface VideoItem {
  title: string;
  video: string;
}

interface DownloadItem {
  name: string;
  url: string;
  downloadUrl:string;
}

const button = {
  "label": "Learn More",
  "variant": "contain",
  "color": "primary",
  "icon": null,
  "link": {
    "type": "routeLink",
    "href": "/en/technology"
  }
}

const DownloadsCard = (data: { src: DownloadItem, onClick: (() => void)}) => {
  const { src, onClick } = data;
  const learnMoreCta: ButtonElement<IconList> = {
    label: 'Download',
    variant: ButtonVariation.contain,
    color: ButtonColor.primary,
    shape: ButtonShape.square,
    icon: {
      name: 'download',
      position: ButtonIconPosition.left,
    },
    "link": {
      "type": "modal",
      "href": src.url
    },
  };

  const { formattedName, formattedExt } = formatFileInfo(src.url);

  return (
    <div className={styles.downloadsCard}>
      <div className={styles.text}>
        <div className={styles.name}>
          <b>{src.name.replace(/-/g, ' ')}</b>
        </div>
        <div className={styles.format}>
          {formattedExt}
        </div>
      </div>
      <div className={styles.icon} onClick={onClick}>
        <Button content={learnMoreCta}  />
      </div>
    </div>
  );
}

const formatFileInfo = (filePath: string) => {
  const parts = filePath.split('/');
  const fileNameWithExt = parts[parts.length - 1];
  const [name, ext] = fileNameWithExt.split('.');

  const formattedName = name.replace(/_/g, ' ').toUpperCase();
  const formattedExt = ext.toUpperCase();

  return { formattedName, formattedExt };
};

const ProductDetails = ({ order, data }: ModuleData<Product, null>) => {
  const [hash, setHash] = useState('');
  const [imageSrc, setImageSrc] = useState<string| null>();
  const [dlSrc, setDlSrc] = useState<string| null>();
  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);

    updateHash();

    window.addEventListener('hashchange', updateHash);

    return () => window.removeEventListener('hashchange', updateHash);
  })

  const {
    content: { id, category, subCategory, description, images, features, specs, awardImages, technologies, downloads, productName, relatedProduct, series, videos, gallery }
  } = data;
  return (
    <section className={`${styles.productDetails}`}>
      <div className={styles.headings}>
        <div className={styles.topRow}>
          <div className={styles.leftColumn}>
            <div className={styles.productId}>
              <b>{id}</b>
            </div>
            <div className={styles.tabs}>
              <a href="#specification" className={hash === '#specification' ? styles.activeTab : ''}>
                SPECIFICATION
              </a>
              {awardImages.length > 0 && (
                <a href="#awards" className={hash === '#awards' ? styles.activeTab : ''}>
                  AWARDS
                </a>
              )}
              {technologies.length > 0 && (
                <a href="#technologies" className={hash === '#technologies' ? styles.activeTab : ''}>
                  TECHNOLOGIES
                </a>
              )}
              <a href="#downloads" className={hash === '#downloads' ? styles.activeTab : ''}>
                DOWNLOADS
              </a>
            </div>
          </div>
          <div className={styles.share}>
            <div className={styles.shareLabel}>Share</div>
            <ShareButton />
          </div>
        </div>
      </div>
      <div className={styles.productText}>
        <div className={styles.image}>
            {gallery && gallery.length > 0 ? (
                <div className={styles.galleryWrapper}>
                <ImageGallery
                  items={gallery.map((img) => ({
                    original: img,
                    thumbnail: img,
                  }))}
                  showPlayButton={false}
                  showFullscreenButton={false}    
                />
                </div>
            ) : (
              <Image
                src={images[0]}
                width={500}
                height={200}
                alt={`${id}`}
                draggable={false}
              />
            )}
        </div>
        <div className={styles.innerText}>
          <div className={styles.productTextHeadings}>
            {id}
          </div>
          <div className={styles.productSeries}>
            {series}
          </div>
          <div className={styles.shortdescription}>
            {description}
          </div>
          <ul className={styles.features}>
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <div id="specification">
            <div className={styles.subHeadings}>
              SPECIFICATION
              <hr className={styles.lineBreak} />
            </div>
            <div className={styles.specsTitle}>
              {id}
            </div>
            <table className={styles.specTable}>
              <tbody>
                {Object.entries(specs).map(([key, value]) => {
                  if (value !== null && value !== "") {
                    if (Array.isArray(value)) {
                      const filteredValues = value.filter(item => item !== null);
                      if (filteredValues.length === 0) {
                        return null;
                      }
                      if (key === 'Colour') {
                        return (
                          <tr key={key}>
                            <td className={styles.specName}><b>{key}</b></td>
                            <td className={styles.specValue}>
                              {filteredValues.map((item, index) => (
                                <div className={styles.colorValues} key={index}>
                                    <div
                                      key={index}
                                      className={styles.colorRow}
                                    >
                                      <div className={styles.colorChip}>
                                        <Image
                                          src={`${item.image}`}
                                          width={32}
                                          height={32}
                                          alt=""
                                          draggable={false}
                                        />
                                      </div>
                                      <div
                                        key={"inner-" + index}
                                        className={styles.innerValue}
                                      >
                                        {item.name}
                                      </div>
                                    </div>                                
                                </div>
                              ))}
                            </td>
                          </tr>
                        );
                      }
                      return (
                        <tr key={key}>
                          <td className={styles.specName}><b>{key.replace(/(?!^)([A-Z])/g, ' $1')}</b></td>
                          <td className={styles.specValue}>
                            {filteredValues.map((data, index) => (
                              <div key={index} className={styles.material}>{data}</div>
                            ))}
                          </td>
                        </tr>
                      );
                    }
                    return (
                      <tr key={key}>
                        <td className={styles.specName}><b>{key.replace(/(?!^)([A-Z])/g, ' $1')}</b></td>
                        <td className={styles.specValue}>{value}</td>
                      </tr>
                    );
                  }
                  return null;
                })}
              </tbody>
            </table>
          </div>
          {
            (awardImages.length > 0) &&
            <div id="awards">
              <div className={styles.subHeadings}>
                AWARDS
                <hr className={styles.lineBreak} />
              </div>
              <div className={styles.awardImages}>
                {awardImages.map((imageLink, index) => {
                  // const name = imageLink.name.trim().toLowerCase();
                  // if (name === 'if design' || name === 'if-design' || name === 'if_design') {
                  //   return (
                  //     <div key={'image-' + index} className={styles.imageWrapper}>
                  //       <Image
                  //         src="/assets/img/content/products/awards/design_award.png"
                  //         alt="IF Design Award"
                  //         draggable={false}
                  //         fill
                  //         style={{ objectFit: 'contain' }}
                  //       />
                  //     </div>
                  //   )
                  // } else if (name === 'if gold' || name === 'if-gold' || name === 'if_gold') {
                  //   return (
                  //     <div key={'image-' + index} className={styles.imageWrapper}>
                  //       <Image
                  //         src="/assets/img/content/products/awards/gold_award.png"
                  //         alt="IF Gold Award 2017"
                  //         draggable={false}
                  //         fill
                  //         style={{ objectFit: 'contain' }}
                  //       />
                  //     </div>
                  //   )
                  // } else if (name === 'green good' || name === 'green-good' || name === 'green_good') {
                  //   return (
                  //     <div key={'image-' + index} className={styles.imageWrapper2}>
                  //       <Image
                  //         src="/assets/img/content/products/awards/good_design.png"
                  //         alt="Good Design"
                  //         draggable={false}
                  //         width={56}
                  //         height={56}
                  //         style={{ objectFit: 'contain' }}
                  //       />
                  //     </div>
                  //   )
                  // } else if (name === 'reddot') {
                  //   return (
                  //     <div key={'image-' + index} className={styles.imageWrapper2}>
                  //       <Image
                  //         src="/assets/img/content/products/awards/reddot_winner.png"
                  //         alt="Reddot Winner"
                  //         draggable={false}
                  //         width={70}
                  //         height={56}
                  //         style={{ objectFit: 'contain' }}
                  //       />
                  //     </div>
                  //   )
                  // } else if (name === 'reddot best' || name === 'reddot-best' || name === 'reddot_best') {
                  //   return (
                  //     <div key={'image-' + index} className={styles.imageWrapper2}>
                  //       <Image
                  //         src="/assets/img/content/products/awards/reddot_winner.png"
                  //         alt="Reddot Winner"
                  //         draggable={false}
                  //         width={70}
                  //         height={56}
                  //         style={{ objectFit: 'contain' }}
                  //       />
                  //     </div>
                  //   )
                  // } else if (name === 'reddot 2017' || name === 'reddot-2017' || name === 'reddot_2017') {
                  //   return (
                  //     <div key={'image-' + index} className={styles.imageWrapper}>
                  //       <Image
                  //         src="/assets/img/content/products/awards/reddot_2017.png"
                  //         alt="Reddot Award 2017"
                  //         draggable={false}
                  //         fill
                  //         style={{ objectFit: 'contain' }}
                  //       />
                  //     </div>
                  //   )
                  // }
                return (
                  <div key={"image-" + index} className={styles.imageWrapper}>
                      <a href={imageLink.link.href || '/'}>
                      <Image
                        src={imageLink.src}
                        alt={imageLink.name}
                        draggable={false}
                        fill
                        style={{ objectFit: "contain" }}
                      />
                      </a>      
                  </div>         
                  );
                })}
              </div>
            </div>
          }
        </div>
      </div>
      {
        (technologies.length > 0) &&
        <div id="technologies">
          <div className={styles.technologyContainer}>
            <div className={styles.subHeadings}>
              TECHNOLOGIES
            </div>
            <div className={styles.technologies}>
              {technologies.map((technology) => (
                <TechnologyListItem key={technology.title} data={technology} />
              ))}
            </div>
            <div className={`${styles.actions}`}>
              <Button content={button} />
            </div>
          </div>
        </div>
      }
      <div id="downloads">
        <div className={styles.downloadContainer}>
          <div className={styles.subHeadings}>
            DOWNLOADS
          </div>
          <div className={styles.downloads}>
            {downloads.map((download, index) => (
              console.log("ss", download),
              
              <DownloadsCard key={'download-' + index} src={download} onClick={()=>{setImageSrc(download.url);setDlSrc(download.downloadUrl);}}/>
            ))}
          </div>
        </div>
      </div>
      {videos &&
        videos.map((video) => (
          <div className={`${styles.youtubeWrap}`}>
            <div className={`${styles.inner}`}>
              <iframe
                src={video.video}
                title={video.title}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      {relatedProduct && relatedProduct.length > 0 && (
        <div id="relatedProducts">
          <div className={styles.relatedProductContainer}>
            <div className={styles.subHeadings}>
              RELATED PRODUCTS
            </div>
            <div className={styles.products}>
              {relatedProduct.map((product, index) => {
                // const foundProduct = productData.data.find((current) => current.id.replaceAll(/[#+/]/g, "-").replaceAll(" ", "") === product.id.replaceAll(/[#+/]/g, "-").replaceAll(" ", ""));
                // if (!foundProduct)
                //   return;

                return (
                  <ProductCard key={`relatedProduct-${product.id}`}
                    data={product} />
                )
              })}
            </div>
          </div>
        </div>
      )}
      {imageSrc && dlSrc && (
        <Lightbox
          open={true}
          close={() =>{ setImageSrc(null);setDlSrc(null);}}
          slides={[{ src: imageSrc, download: { url: dlSrc, filename: 'drawing.png' } }]}
          plugins={[Download]}
          carousel={{ finite: true }}
          styles={{ root: { zIndex: 9999999 } }}
          render={{ buttonPrev: () => null, buttonNext: () => null }}
        />
      )}
       </section>
  );
};

export default ProductDetails;