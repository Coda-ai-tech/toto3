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

const ShareButton = dynamic(() => import('@@/ShareButton'), { ssr: false });
const Button = dynamic(() => import('@@/Button'), { ssr: false });


interface Product extends SectionTitle {
  id: string;
  category: string[];
  subCategory: string[];
  description: string;
  images: string[];
  features: string[];
  specs: Specs;
  awardImages: Awards[];
  technologies: TechnologyItemData[];
  downloads: string[];
  productName: string;
}

interface Awards {
  name: string;
  year: string;
  src: string;
}

interface Specs {
  size: string;
  flushingSystem: string;
  waterConsumption: string;
  trapType: string;
  waterPressure: string;
  powerRating: string;
  materials: string[];
  colour: string;
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

const DownloadsCard = (data: { src: string }) => {
  const { src } = data;
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
      "type": "routeLink",
      "href": src
    },
  };

  const { formattedName, formattedExt } = formatFileInfo(src);

  return (
    <div className={styles.downloadsCard}>
      <div className={styles.text}>
        <div className={styles.name}>
          <b>{formattedName}</b>
        </div>
        <div className={styles.format}>
          {formattedExt}
        </div>
      </div>
      <div className={styles.icon}>
        <Button content={learnMoreCta} />
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
  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);

    updateHash();

    window.addEventListener('hashchange', updateHash);

    return () => window.removeEventListener('hashchange', updateHash);
  })

  const {
    content: { id, category, subCategory, description, images, features, specs, awardImages, technologies, downloads, productName }
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
          <Image src={images[0]} width={500} height={200} alt={`${id}`} draggable={false} />
        </div>
        <div className={styles.innerText}>
          <div className={styles.productTextHeadings}>
            {id}
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

                                  {Object.entries(item).map(([key, values], index) => {
                                    if (Array.isArray(values) && values.length > 0) {
                                      let colorChipFolder : string = key.toLowerCase();
                                      if (key.toLowerCase() === 'for fillings' || key.toLowerCase() === 'for fittings' || key.toLowerCase() === 'forfillings' || key.toLowerCase() === 'forfittings') {
                                        colorChipFolder = 'for_fittings';
                                      } else if (key.toLowerCase() === 'forbathtub') {
                                        colorChipFolder = 'for_bathtub';
                                      }
                                      return values.map((value, index) => (
                                        <div key={index} className={styles.colorRow}>
                                          <div className={styles.colorChip}>
                                            <Image 
                                            src={`/assets/img/content/products/color_chips/${colorChipFolder}/${value.replace(/#/g, '').replace(/_/g, ' ').replace(/ (.*)?/, '_$1')}.png`}
                                            width={32}
                                            height={32}
                                            alt=""
                                            draggable={false}/>
                                            </div>
                                          <div key={'inner-' + index} className={styles.innerValue}>{value}</div>
                                        </div>
                                      ));
                                    }
                                    return null; // Skip empty arrays
                                  })}

                                </div>
                              ))}
                            </td>
                          </tr>
                        );
                      }
                      return (
                        <tr key={key}>
                          <td className={styles.specName}><b>{key}</b></td>
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
                        <td className={styles.specName}><b>{key}</b></td>
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
                  const name = imageLink.name.trim().toLowerCase();
                  if (name === 'if design' || name === 'if-design' || name === 'if_design') {
                    return (
                      <div key={'image-' + index} className={styles.imageWrapper}>
                        <Image
                          src="/assets/img/content/products/awards/design_award.png"
                          alt="IF Design Award"
                          draggable={false}
                          fill
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                    )
                  } else if (name === 'if gold' || name === 'if-gold' || name === 'if_gold') {
                    return (
                      <div key={'image-' + index} className={styles.imageWrapper}>
                        <Image
                          src="/assets/img/content/products/awards/gold_award.png"
                          alt="IF Gold Award 2017"
                          draggable={false}
                          fill
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                    )
                  } else if (name === 'green good' || name === 'green-good' || name === 'green_good') {
                    return (
                      <div key={'image-' + index} className={styles.imageWrapper2}>
                        <Image
                          src="/assets/img/content/products/awards/good_design.png"
                          alt="Good Design"
                          draggable={false}
                          width={56}
                          height={56}
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                    )
                  } else if (name === 'reddot') {
                    return (
                      <div key={'image-' + index} className={styles.imageWrapper2}>
                        <Image
                          src="/assets/img/content/products/awards/reddot_winner.png"
                          alt="Reddot Winner"
                          draggable={false}
                          width={70}
                          height={56}
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                    )
                  } else if (name === 'reddot best' || name === 'reddot-best' || name === 'reddot_best') {
                    return (
                      <div key={'image-' + index} className={styles.imageWrapper2}>
                        <Image
                          src="/assets/img/content/products/awards/reddot_winner.png"
                          alt="Reddot Winner"
                          draggable={false}
                          width={70}
                          height={56}
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                    )
                  } else if (name === 'reddot 2017' || name === 'reddot-2017' || name === 'reddot_2017') {
                    return (
                      <div key={'image-' + index} className={styles.imageWrapper}>
                        <Image
                          src="/assets/img/content/products/awards/reddot_2017.png"
                          alt="Reddot Award 2017"
                          draggable={false}
                          fill
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                    )
                  }

                }

                  // (
                  //   <div key={'image-' + index} className={styles.imageWrapper}>
                  //     <Image
                  //       src={imageLink.src}
                  //       alt="Award Image"
                  //       draggable={false}
                  //       fill
                  //       style={{ objectFit: 'contain' }}
                  //     />
                  //   </div>
                  // )

                )}
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
      {/* <div id="downloads">
        <div className={styles.downloadContainer}>
          <div className={styles.subHeadings}>
            DOWNLOADS
          </div>
          <div className={styles.downloads}>
            {downloads.map((download, index) => (
              <DownloadsCard key={'download-' + index} src={download} />
            ))}
          </div>
        </div>
      </div> */}
    </section>
  )
}

export default ProductDetails;