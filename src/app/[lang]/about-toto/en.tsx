const En = () => {
  return (
    <div id='corporatePage' className='page corporate'>
      <main className='corporate__main'>
        <div className='corporate__kv'>
          <div className='corporate__kv__img'>
            <picture>
              <source
                srcSet='/assets/global/about-toto/images/kv_img@2x.png 2x, /assets/global/about-toto/images/kv_img.png'
                media='(min-width: 769px)'
              />
              <source
                srcSet='/assets/global/about-toto/images/sp/kv_img@2x.png 2x, /assets/global/about-toto/images/sp/kv_img.png'
                media='(max-width: 768px)'
              />
              <img src='/assets/global/about-toto/images/s.gif' alt='' />
            </picture>
          </div>
          <div className='totoVM'>
            <a href='https://jp.toto.com/pages/knowledge/visit/museum/en/vr/' target='_blank'>
              <img src='/assets/global/about-toto/images/toto-vm.png' alt='TOTO Virtual Museum' />
            </a>
          </div>
          <h1 className='corporate__kv__ttl'>ABOUT TOTO GROUP</h1>
        </div>

        <div className='corporate__body'>
          <section className='corporate__section'>
            <div className='corporate__section__ttl'>
              <h2 className='corporate__section__ttl__txt'>Corporate Profile</h2>
              <time className='corporate__section__ttl__time'>(as of March 31, 2024)</time>
            </div>

            <div className='corporate__detail'>
              <dl className='corporate__detail__block'>
                <dt className='corporate__detail__block__ttl'>Company Name</dt>
                <dd className='corporate__detail__block__txt'>TOTO LTD.</dd>
              </dl>

              <dl className='corporate__detail__block'>
                <dt className='corporate__detail__block__ttl'>Establishment</dt>
                <dd className='corporate__detail__block__txt'>May 15, 1917</dd>
              </dl>

              <dl className='corporate__detail__block'>
                <dt className='corporate__detail__block__ttl'>Capital</dt>
                <dd className='corporate__detail__block__txt'>¥35,579 million</dd>
              </dl>

              <dl className='corporate__detail__block'>
                <dt className='corporate__detail__block__ttl'>
                  Main Businesses
                  <span className='corporate__detail__block__ttl__note'>
                    *Product availability will depend on the regional market
                  </span>
                </dt>
                <dd className='corporate__detail__block__txt'>
                  &lt;Residential equipment&gt;
                  <br />
                  Sanitary ware (toilet basins, urinals, sinks, washbasins, etc.),
                  <br />
                  System toilets,
                  <br />
                  Toilet seats (e.g., Washlet),
                  <br />
                  Plumbing accessories, etc.
                  <br />
                  Bathtub,
                  <br />
                  Unit bathrooms,
                  <br />
                  Fittings (various faucets, drain fittings, etc.)
                  <br />
                  Modular kitchens, bathroom vanity units,
                  <br />
                  Marbright artificial marble counters,
                  <br />
                  Bathroom ventilation, heating and drying systems,
                  <br />
                  Welfare equipment,
                  <br />
                  Green Building Materials (tiles, ceramic slabs, etc.) etc.
                  <br />
                  <br />
                  &lt;New business domain products&gt;
                  <br />
                  Ceramics (Advanced Ceramics, etc.)
                </dd>
              </dl>

              <dl className='corporate__detail__block'>
                <dt className='corporate__detail__block__ttl'>Representative Directors</dt>
                <dd className='corporate__detail__block__txt'>
                  Representative Director, Chairman of the Board
                  <br />
                  Noriaki Kiyota
                  <br />
                  President, Representative Director
                  <br />
                  Shinya Tamura
                </dd>
              </dl>

              <dl className='corporate__detail__block'>
                <dt className='corporate__detail__block__ttl'>Number of consolidated employees</dt>
                <dd className='corporate__detail__block__txt'>
                  Consolidated: 35,027
                  <br />
                  (as of March 31, 2024)
                </dd>
              </dl>

              <dl className='corporate__detail__block'>
                <dt className='corporate__detail__block__ttl'>Headquarters</dt>
                <dd className='corporate__detail__block__txt'>
                  1-1, Nakashima 2-chome, Kokurakita-ku, Kitakyushu, Fukuoka, 802-8601 Japan
                </dd>
              </dl>
            </div>
          </section>

          <section className='corporate__section'>
            <h2 className='corporate__section__ttl'>Overseas Group Companies</h2>
            <div className='corporate__group'>
              <div className='corporate__group__block'>
                <dl className='corporate__group__item'>
                  <dt className='corporate__group__item__ttl'>Asia</dt>
                  <dd className='corporate__group__item__txt js-toggle'>
                    <div className='js-toggle__target'>
                      <div className='corporate__group__item__txt__inner js-toggle__target__inner'>
                        TOTO (CHINA) CO., LTD.
                        <br />
                        TOTO (BEIJING) CO., LTD.
                        <br />
                        NANJING TOTO CO., LTD.
                        <br />
                        TOTO DALIAN CO., LTD.
                        <br />
                        TOTO (SHANGHAI) CO., LTD.
                        <br />
                        TOTO EASTCHINA CO., LTD.
                        <br />
                        TOTO (FUJIAN) CO., LTD.
                        <br />
                        TOTO (GUANGZHOU) CO., LTD.
                        <br />
                        TOTO (LIAONING) CO., LTD.
                        <br />
                        TOTO (H.K.) LTD.
                        <br />
                        VORETO (XIAMEN) PLUMBING TECHNOLOGY CO., LTD.
                        <br />
                        (Affiliate Company)
                        <br />
                        TAIWAN TOTO CO., LTD.
                        <br />
                        TOTO Asia Oceania Pte. Ltd.
                        <br />
                        TOTO VIETNAM CO., LTD.
                        <br />
                        TOTO (THAILAND) CO., LTD.
                        <br />
                        TOTO INDIA INDUSTRIES PVT. LTD.
                        <br />
                        TOTO MALAYSIA SDN. BHD.
                        <br />
                        TOTO KOREA LTD.
                        <br />
                        PT. SURYA TOTO INDONESIA Tbk. (Affiliate Company)
                      </div>
                    </div>
                    {/* <div className='js-toggle__btn onlySp'>
                      <a href='' className='js-toggle__btn__link'></a>
                    </div> */}
                  </dd>
                </dl>
              </div>

              <div className='corporate__group__block'>
                <dl className='corporate__group__item'>
                  <dt className='corporate__group__item__ttl'>America</dt>
                  <dd className='corporate__group__item__txt'>
                    TOTO AMERICAS HOLDINGS, INC. <br />
                    TOTO U.S.A., Inc.
                    <br />
                    TOTO MEXICO, S.A. DE C.V.
                  </dd>
                </dl>

                <dl className='corporate__group__item'>
                  <dt className='corporate__group__item__ttl'>Europe</dt>
                  <dd className='corporate__group__item__txt'>TOTO Europe GmbH</dd>
                </dl>
              </div>
            </div>
          </section>

          <section className='corporate__section'>
            <h2 className='corporate__section__ttl'>Group Shared Philosophy</h2>

            <div className='corporate__spirit'>
              <div className='corporate__spirit__block corporate__spirit__block--block1'>
                <div className='corporate__spirit__block__inner1'>
                  <h3 className='corporate__spirit__block__ttl'>Company Mottos</h3>
                  <p className='corporate__spirit__block__txt'>
                    The Company Mottos represent the thoughts of the founder to be passed down through the generations.
                  </p>
                </div>

                <div className='corporate__spirit__block__img corporate__spirit__block__img--img1'>
                  <picture>
                    <source
                      srcSet='/assets/global/about-toto/images/img1@2x.png 2x, /assets/global/about-toto/images/img1.png'
                      media='(min-width: 769px)'
                    />
                    <source
                      srcSet='/assets/global/about-toto/images/sp/img1@2x.png 2x, /assets/global/about-toto/images/sp/img1.png'
                      media='(max-width: 768px)'
                    />
                    <img
                      src='/assets/global/about-toto/images/s.gif'
                      alt='Take pride in your work,and strive to do your best.Quality and Uniformity.Service and Trust.Cooperation and Prosprerity.'
                    />
                  </picture>
                </div>
              </div>

              <div className='corporate__spirit__block'>
                <h3 className='corporate__spirit__block__ttl'>TOTO Group Corporate Philosophy</h3>
                <p className='corporate__spirit__block__txt'>
                  Based on the ideology conveyed in our corporate motto, we express to all stakeholders the purpose of
                  our corporate existence, our business domains, and our aspirations.
                </p>

                <div className='corporate__spirit__block__img corporate__spirit__block__img--img2'>
                  <picture>
                    <source
                      srcSet='/assets/global/about-toto/images/img2_bg@2x.png 2x, /assets/global/about-toto/images/img2_bg.png'
                      media='(min-width: 769px)'
                    />
                    <source
                      srcSet='/assets/global/about-toto/images/sp/img2_bg@2x.png 2x, /assets/global/about-toto/images/sp/img2_bg.png'
                      media='(max-width: 768px)'
                    />
                    <img src='/assets/global/about-toto/images/s.gif' alt='' />
                  </picture>
                  <picture>
                    <source srcSet='/assets/global/about-toto/images/img2.svg' media='(min-width: 769px)' />
                    <source srcSet='/assets/global/about-toto/images/sp/img2.svg' media='(max-width: 768px)' />
                    <img
                      src='/assets/global/about-toto/images/s.gif'
                      alt='The TOTO Group strives to be a great company trusted by people all around the world, and contributing to the betterment of society. To achieve our Corporate Philosophy, TOTO will:●Pursue customer satisfaction by exceeding expectations with our products and services. ●Create an enriched and more comfortable lifestyle and culture built on our plumbing products. ●Provide high-quality products and services through ongoing research and development. ●Protect the global environment by conserving finite natural resources and energy. ●Create an employee friendly work environment that respects the individuality of each employee.'
                    />
                  </picture>
                </div>
              </div>

              <div className='corporate__spirit__block'>
                <h3 className='corporate__spirit__block__ttl'>Charter of TOTO Group Corporate Behavior</h3>
                <p className='corporate__spirit__block__txt'>
                  The TOTO Group wants to be an entity that constantly assumes a leading role in the realization of a
                  sustainable society by creating added value, which is useful for society, and employment, as well as
                  by autonomous and responsible actions through fair and free competition. To realize that, all people
                  working for the TOTO Group strive to play an active role with a strong sense of duty based on the
                  concepts indicated in the corporate motto and philosophy, and to fulfill their social
                  responsibilities.
                  <br />
                  The Charter of TOTO Group Corporate Behavior stipulates the basic stance of behavior of all people
                  working for TOTO Group to realize all stakeholders&rsquo; satisfaction.
                </p>

                <div className='corporate__spirit__block__img corporate__spirit__block__img--img3'>
                  <img src='/assets/global/about-toto/images/img3.svg' alt='Stakeholder Satisfaction' />
                </div>

                <div className='corporate__spirit__block__note js-toggle'>
                  <div className='js-toggle__target'>
                    <div className='corporate__spirit__block__note__inner js-toggle__target__inner'>
                      <ol className='corporate__spirit__block__note__list'>
                        <li className='corporate__spirit__block__note__list__item'>
                          The TOTO Group shall pursue customer satisfaction and provide products and services that are
                          environmentally friendly, safe, and easy to use through innovation to realize sustainable
                          economic growth and solve social issues.
                          <ul>
                            <li>
                              By promoting innovation, the TOTO Group shall aim to realize a future society where
                              comfortable lives and solutions to social issues are achieved at the same time.
                            </li>
                            <li>
                              By making use of the various data, the TOTO Group shall create new value, such as
                              innovative products and services, and contribute to the solution to social issues.
                            </li>
                          </ul>
                        </li>
                        <li className='corporate__spirit__block__note__list__item'>
                          The TOTO Group shall develop sensible business activities in transparent, fair ways, and
                          responsible procurement, and sustain sound normal relationships with political organizations
                          and governmental administrations.
                          <ul>
                            <li>
                              In its business activities, the TOTO Group shall observe the related laws and regulations,
                              as well as international norms and their spirit, and carry out fair and transparent
                              trading and responsible procurement and competition.
                            </li>
                            <li>
                              The TOTO Group shall never provide business entertainment, gifts or monetary compensation
                              for acquisitions, seek profits unfairly or offer preferential treatment.
                            </li>
                          </ul>
                        </li>
                        <li className='corporate__spirit__block__note__list__item'>
                          The TOTO Group shall facilitate communications with society; disclose corporate information
                          proactively, effectively, and fairly; and have constructive dialogs with a variety of
                          stakeholders to improve corporate value.
                          <ul>
                            <li>
                              The TOTO Group shall protect personal information and customer information with sufficient
                              care, and control that information appropriately.
                            </li>
                            <li>
                              The TOTO Group shall disclose all appropriate and meaningful information to its
                              stakeholders in a timely manner.
                            </li>
                            <li>
                              The TOTO Group shall communicate interactively with society through public relations
                              initiatives.
                            </li>
                            <li>
                              The TOTO Group shall communicate with its shareholders through investor relations
                              activities.
                            </li>
                            <li>
                              The TOTO Group shall provide comprehensive education for employees and establish and
                              strengthen its organizational structure to prevent insider trading.
                            </li>
                          </ul>
                        </li>
                        <li className='corporate__spirit__block__note__list__item'>
                          The TOTO Group shall respect the human rights of every person in all countries and regions in
                          its business activities and contribute to their development.
                          <ul>
                            <li>
                              The TOTO Group shall understand and respect human rights that are recognized globally
                              (internationally) and prevent negative influences on such human rights that are directly
                              linked to our products and services.
                            </li>
                            <li>
                              The TOTO Group shall officially announce the policy of executing its responsibility to
                              respect human rights in its business activities.
                            </li>
                            <li>
                              As a member of the international society, the TOTO Group shall respect international norms
                              of human rights and shall not be involved in any forced labor nor child labor.
                            </li>
                          </ul>
                        </li>
                        <li className='corporate__spirit__block__note__list__item'>
                          The TOTO Group shall improve customer satisfaction through appropriate information provision
                          on products and services and honest communication.
                          <ul>
                            <li>
                              The TOTO Group shall gain customer satisfaction and trust by providing products with
                              universal design and environmentally friendly products and services.
                            </li>
                            <li>
                              The TOTO Group shall act and make decisions in ways that put customer satisfaction first.
                            </li>
                            <li>
                              All TOTO Group employees shall pay careful attention to and take great pride in their
                              personal conduct and deportment, such as their attitude toward customers, telephone
                              manners, daily greetings and personal appearance.
                            </li>
                          </ul>
                        </li>
                        <li className='corporate__spirit__block__note__list__item'>
                          The TOTO Group shall improve the ability of all people working for TOTO, and realize a
                          workstyle where diversity and individuality are respected in a pleasant working environment
                          where importance is placed on health and safety.
                          <ul>
                            <li>
                              The TOTO Group shall strive to create a company that takes pride and joy in a job well
                              done, and foster its employees’ abilities and creativity while respecting their
                              individuality and autonomy.
                            </li>
                            <li>
                              The TOTO Group shall create an environment that develops the abilities of all of its
                              employees to the fullest extent through fair treatment, without regard to nationality,
                              gender, or disability.
                            </li>
                            <li>
                              The TOTO Group shall create a comfortable working environment that promotes the physical
                              and mental health of its employees through daily health and safety programs.
                            </li>
                            <li>
                              The TOTO Group shall strive to develop proper relationships with all employees of its
                              Group through sincere discussions and consultations.
                            </li>
                          </ul>
                        </li>
                        <li className='corporate__spirit__block__note__list__item'>
                          The TOTO Group shall build awareness of global environment issues as common issues of all
                          humankind and aggressively tackle these issues from a global point of view as essential for
                          the existence and activities of the company.
                          <ul>
                            <li>
                              The TOTO Group shall work on the establishment of a decarbonized society on a global level
                              from a long-term perspective.
                            </li>
                            <li>
                              The TOTO Group shall contribute to the effective utilization of limited water resources
                              and engage in the formation of a sustainable society by conserving resources and energy,
                              and sustainable use.
                            </li>
                            <li>
                              The TOTO Group shall take action to reduce environmental loads and risks in all processes
                              of its business activities.
                            </li>
                            <li>
                              The TOTO Group shall undertake the conservation of biodiversity and sustainable
                              development.
                            </li>
                          </ul>
                        </li>
                        <li className='corporate__spirit__block__note__list__item'>
                          As a good corporate citizen, the TOTO Group shall constructively participate in and contribute
                          to the development of communities and society overall.
                          <ul>
                            <li>
                              As a good corporate citizen, the TOTO Group shall proactively contribute to society by
                              working with all of its stakeholders, including customers, and local community members.
                            </li>
                          </ul>
                        </li>
                        <li className='corporate__spirit__block__note__list__item'>
                          The TOTO Group shall be prepared for actions of antisocial powers, terrorist attacks, and
                          cyberattacks, as well as natural disasters, and thoroughly implement organizational crisis
                          management.
                          <ul>
                            <li>
                              The TOTO Group shall resolutely oppose antisocial powers that pose threats to civil life
                              and corporate activities, and sever relationships with them.
                            </li>
                            <li>
                              The TOTO Group shall always be prepared for terrorist attacks, cyberattacks, and natural
                              disasters and thoroughly implement organizational actions and training.
                            </li>
                          </ul>
                        </li>
                        <li className='corporate__spirit__block__note__list__item'>
                          TOTO&rsquo;s top management shall build effective governance and, as their role, thoroughly
                          enforce corporate ethics not only within the TOTO Group but also across supply chains and with
                          business partners.
                          <br />
                          When a situation that conflicts with this charter and may lose the trust of society arises,
                          TOTO&rsquo;s top management shall exercise leadership to strive to resolve it.
                          <ul>
                            <li>
                              In the event of issues arising in conflict with this charter, TOTO&rsquo;s top management
                              shall make clear both inside and outside the TOTO Group its intention to address the issue
                              on its own, investigate the cause, formulate a solution, and prevent recurrence.
                            </li>
                            <li>
                              TOTO&rsquo;s top management shall swiftly and precisely disclose all pertinent information
                              to the appropriate social entities to fulfill accountability requirements, clarify
                              authority and responsibilities, and take appropriate measures to prevent any recurrence of
                              issues.
                            </li>
                            <li>
                              When a situation that conflicts with this charter arises, TOTO&rsquo;s top management
                              shall clarify both within the Group and toward the outside their intention to exercise
                              leadership in striving to resolve such conflicts and shall exercise responsibility in
                              trying to find the cause and prevent a recurrence.
                            </li>
                          </ul>
                        </li>
                      </ol>
                    </div>
                  </div>
                  {/* <div className='js-toggle__btn onlySp'>
                    <a href='' className='js-toggle__btn__link'></a>
                  </div> */}
                </div>
              </div>
            </div>
          </section>

          <section className='corporate__section'>
            <h2 className='corporate__section__ttl'>
              Business Activity <span className='onlyPc'>Vision</span>
            </h2>

            <div className='corporate__vision'>
              <div className='corporate__vision__block'>
                <h3 className='corporate__vision__block__ttl'>Vision</h3>

                <div className='corporate__vision__block__img corporate__vision__block__img--img1'>
                  <picture>
                    <source srcSet='/assets/global/about-toto/images/vision_txt.svg' media='(min-width: 769px)' />
                    <source srcSet='/assets/global/about-toto/images/sp/vision_txt.svg' media='(max-width: 768px)' />
                    <img
                      src='/assets/global/about-toto/images/s.gif'
                      alt='Toward a Dynamic, Vibrant, and Excellent TOTO'
                    />
                  </picture>
                </div>
              </div>

              <div className='corporate__vision__block'>
                <h3 className='corporate__vision__block__ttl'>Mission</h3>
                <p className='corporate__vision__block__txt'>
                  This term expresses the intention of the most important matters to be implemented in the medium and
                  long term for the sustainable growth of the TOTO Group.
                </p>

                <div className='corporate__vision__block__img corporate__vision__block__img--img2'>
                  <picture>
                    <source
                      srcSet='/assets/global/about-toto/images/mission_img@2x.png 2x, /assets/global/about-toto/images/mission_img.png'
                      media='(min-width: 769px)'
                    />
                    <source
                      srcSet='/assets/global/about-toto/images/sp/mission_img@2x.png 2x, /assets/global/about-toto/images/sp/mission_img.png'
                      media='(max-width: 768px)'
                    />
                    <img
                      src='/assets/global/about-toto/images/s.gif'
                      alt='TOTO`s Mission.Provide Cleanliness and Comfort for Life.Respect the Environment.Build Relationships that Enrich Life.'
                    />
                  </picture>
                </div>
              </div>
            </div>

            <div className='corporate__vision__plan'>
              <h3 className='corporate__vision__plan__ttl'>Mid- or Long-Term Management Plan</h3>
              <div className='corporate__vision__plan__btn'>
                <a href='/download/TOTO_WILL2030_2_en.pdf' className='corporate__vision__plan__btn__link' target='_blank'>
                  <div className='corporate__vision__plan__btn__link__inner'>
                    TOTO WILL2030 STAGE 2
                  </div>
                </a>
                <a href='/download/TOTO_WILL2030_en.pdf' className='corporate__vision__plan__btn__link' target='_blank'>
                  <div className='corporate__vision__plan__btn__link__inner'>
                    Shared Value Creation Strategy TOTO WILL2030 STAGE 1
                  </div>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default En;
