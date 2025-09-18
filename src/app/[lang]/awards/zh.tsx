'use client';
import useScrollDirection, { ScrollUp } from '@/hook/useScrollDirection';

const Zh = () => {
  const scrollDirection = useScrollDirection();

  return (
    <>
      <div id='body_inner'>
        <div id='contents' className={`${scrollDirection === ScrollUp ? '' : 'scrollDown'}`}>
          {/* <div className="breadcrumb"><ul><li><a href="/index.htm">HOME</a></li><li>AWARD</li></ul></div> */}

          <section className={`pageTitle ${scrollDirection === ScrollUp ? '' : 'scrollDown'}`}>
            <div>
              <h1>
                <a href='#body_inner'>DESIGN</a>
              </h1>
              <ul>
                <li>
                  <a href='#iFDesign'>iF Design Award</a>
                </li>
                <li>
                  <a href='#Reddot'>Red Dot Design Award</a>
                </li>
                <li>
                  <a href='#Green'>Green Good Design Award</a>
                </li>
              </ul>
            </div>
          </section>

          <div className='mainimg_wrap'>
            {/* <section id="mainimg">
					<div className="video_bg">
						<video muted autoplay playsinline loop src="/award/video/mov2.mp4"></video>
						<p className="text00-2">TOTO DESIGN PHILOSOPHY</p>
					</div>
					<ul className="main_img">
						<li></li>
						<li></li>
						<li><img src="/award/img/slide_01.png" alt=""><span className="text00-2">AWARDS</span></li>
						<li></li>
						<li></li>
						<li><img src="/award/img/slide_03.png" alt=""><span className="text00-2">AWARDS</span></li>
						<li></li>
						<li></li>
						<li><img src="/award/img/slide_02.png" alt=""><span className="text00-2">AWARDS</span></li>
						<li></li>
						<li></li>
						<li><img src="/award/img/slide_04.png" alt=""><span className="text00-2">AWARDS</span></li>
					</ul>
				</section> */}
            <section id='fv'>
              {/* <h1>TOTO DESIGN PHILOSOPHY</h1> */}
              <div className='pc'>
                <video id='video_pc' playsInline muted autoPlay loop src='/assets/global/award/img/fv_pc.mp4'></video>
              </div>
              <div className='sp'>
                <video id='video_sp' playsInline muted autoPlay loop src='/assets/global/award/img/fv_sp.mp4'></video>
              </div>

              <ul className='kvslick_control play'>
                <li className='play'>
                  <button type='button' title='Play'>
                    <img src='/assets/global/global_common_2019/images/btn_play.png' alt='' />
                  </button>
                </li>
                <li className='pause'>
                  <button type='button' title='Pause'>
                    <img src='/assets/global/global_common_2019/images/btn_pause.png' alt='' />
                  </button>
                </li>
              </ul>
            </section>
          </div>

          <section id='mainarea'>
            {/* <section className="block01 ttl award_wrap" data-aos="fade-up" data-aos-duration="1000">

					<p className="text01">TOTO Design Philosophy</p>
					<p className="text02">Understated Presence</p>

					<p className="text03">Our wish is to provide,<br/>as an integral part of everyday life, enrichment to every person.<br/>Our goal is to design products <br/>with integrity and longevity, <br/>to which people form an attachment over time.</p>

					<p className="text04">Weaving together spaces that are beautiful and comfortable, <br/>and experiences that are pleasant.</p>

					<p className="text05">This is the TOTO design.</p>

				</section> */}

            {/* <section className="block02 ttl Elements_wrap" data-aos="fade-up" data-aos-duration="1000">
					<p className="text12">The three elements that bring the TOTO Design Philosophy to life.</p>


					<ul id="design_elements">

						<li className="dl1">
							<h4 className="text08">Gentle to people</h4>
							<ul id="Elements">
								<li>A part of everyday life</li>
								<li>Offers peace of mind</li>
								<li>Gentle to the human body</li>
							</ul>
						</li>

						<li className="dl2">
							<h4 className="text08">Comfortable</h4>
							<ul id="Elements">
								<li>Harmonizes with space</li>
								<li className="twoL">Pleasant interface<br className="pc-only">between people and objects</li>
								<li>Beautiful appliance</li>
							</ul>
						</li>

						<li className="dl3">
							<h4 className="text08">Sincere on Beauty</h4>
							<ul id="Elements">
								<li>Users find it pleasurable</li>
								<li>Retains beauty over time</li>
								<li>Creating a sustainable future</li>
							</ul>
						</li>

					</ul>
				</section> */}

            <section id='sec01' className='sec'>
              <h2 className='ttl01'>Understated Presence</h2>
              <p className='txt01'>
                Our wish is to provide,
                <br />
                as an integral part of everyday life, enrichment to every person.
                <br />
                Our goal is to design products
                <br />
                with integrity and longevity,
                <br />
                to which people form an attachment over time.
                <br />
                Weaving together spaces that are beautiful and comfortable,
                <br />
                and experiences that are pleasant.
                <br />
                <br />
                This is the TOTO design.
              </p>
              <ul className='photo01'>
                <li className=''>
                  <img src='/assets/global/award/img/img01.png' alt='' />
                </li>
                {/* <li className=" delay1"><img src="/award/img/img02.png" alt="" /></li> */}
                <li className=' delay1'>
                  <img src='/assets/global/award/img/img03.png' alt='' />
                </li>
                <li className=' delay2'>
                  <img src='/assets/global/award/img/img02.png' alt='' />
                </li>
              </ul>
              <p className='txt02'>
                Users play the leading role <br className='sp' />
                and design plays a supporting role.
                <br />
                This is our concept of <br className='sp' />
                “Understated Presence.”
              </p>
              <p className='txt03'>
                Design should not be so assertive that it interferes with the user&apos;s uniqueness of home and
                lifestyle.
                <br />
                The essence of “ Understated Presence ” is our concept of users in the leading role, <br />
                with design playing a supporting role. We are committed to designing products that can be used
                comfortably every day, in consideration of our users and their lifestyles.
              </p>
            </section>

            <section id='sec02' className='sec'>
              <h2 className='ttl01'>
                <span>Episodes that unravel Understated Presence</span>
              </h2>
              <div className='inner'>
                {/* <picture>
							<source srcSet="/award/img/dummy01_sp.png" media="(max-width: 768px)" type="image/png">
							<img src="/award/img/dummy01.png" alt="">
						</picture> */}
                <div className='fixed_box'>
                  <div className='img01'>
                    <img src='/assets/global/award/img/fixed_box01_img01.png' alt='' className='img01_image' />
                    <div className='img02'>
                      <picture>
                        <p className='title'>A beauty that resides in easy-to-use tools</p>
                        <p className='txt03 '>
                          Many excellent tools have supported <br className='sp' />
                          our lives since ancient times.
                          <br />
                          Those tools are easily used <br className='sp' />
                          without conscious thought <br />
                          and have an unobtrusive beauty <br className='sp' />
                          that becomes a part of daily life <br />
                          through the graceful form <br className='sp' />
                          of their use.
                          <br />
                          This is a concept <br className='sp' />
                          that we value and pursue <br className='sp' />
                          when designing our products.
                        </p>
                      </picture>
                    </div>
                  </div>
                  <div className='img03'>
                    <div className='pc'>
                      <div className='flex'>
                        <div>
                          <img src='/assets/global/award/img/fixed_box01_img03.png' alt='' className='' />
                          <div className='hover_text'>
                            <p>
                              Consider the rice bowl. Its base makes it easy to hold without burning your hand. It also
                              naturally makes the way you hold it beautiful.
                            </p>
                          </div>
                        </div>
                        <div>
                          <img src='/assets/global/award/img/fixed_box01_img04.png' alt='' className=' delay1' />
                          <div className='hover_text'>
                            <p>
                              This is a traditional iron kettle. The pattern on the surface increases the surface area
                              to improve heat retention, but it is also decorative and pleasing to the eye.
                            </p>
                          </div>
                        </div>
                        <div>
                          <img src='/assets/global/award/img/fixed_box01_img05.png' alt='' className=' delay2' />
                          <div className='hover_text sp_lh'>
                            <p>
                              A Japanese kitchen knife looks simple, but its form is necessary to enhance the
                              knife&apos;s sharpness and to best match certain ingredients and cooking styles.
                              <br />
                              The more you use it, the better it fits your hand, creating a feeling of attachment.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='sp'>
                      <div className='flex '>
                        <div>
                          <img src='/assets/global/award/img/fixed_box01_img03_sp.png' alt='' className='' />
                        </div>
                        <div>
                          <div className='hover_text'>
                            <p>
                              Consider the rice bowl. Its base makes it easy to hold without burning your hand. It also
                              naturally makes the way you hold it beautiful.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='flex flex-reverse '>
                        <div>
                          <img src='/assets/global/award/img/fixed_box01_img04_sp.png' alt='' className='' />
                        </div>
                        <div>
                          <div className='hover_text'>
                            <p>
                              This is a traditional iron kettle. The pattern on the surface increases the surface area
                              to improve heat retention, but it is also decorative and pleasing to the eye.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='flex '>
                        <div>
                          <img src='/assets/global/award/img/fixed_box01_img05_sp.png' alt='' className='' />
                        </div>
                        <div>
                          <div className='hover_text'>
                            <p>
                              A Japanese kitchen knife looks simple, but its form is necessary to enhance the
                              knife&apos;s sharpness and to best match certain ingredients and cooking styles. The more
                              you use it, the better it fits your hand, creating a feeling of attachment.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <p className="txt03  pc">
						日常的に何気なく使っている物に、<br className="sp" />使いやすさと美しさが<br/> 正しく融合していることが<br className="sp" />良いデザインであるという考え方。
						<br/> 使う人にストレスを与えず、<br className="sp" />動作を助けるための確かなデザインや<br className="sp" />製造技術が求められます。
					</p> */}
            </section>

            <section id='sec03' className='sec'>
              <div className='inner'>
                {/* <picture>
							<source srcSet="/award/img/dummy01_sp.png" media="(max-width: 768px)" type="image/png">
							<img src="/award/img/dummy01.png" alt="">
						</picture> */}
                <div className='fixed_box'>
                  <div className='img01'>
                    <img src='/assets/global/award/img/fixed_box02_img01.png' alt='' className='img02_image' />
                    <div className='img02'>
                      <p className='title'>
                        Designs that harmonize with
                        <br /> and complement your home
                      </p>
                      <p className='txt03 '>
                        Living spaces are decorated and <br className='sp' />
                        finished by the people who live there <br className='sp' />
                        according to their own tastes.
                        <br />
                        We want our products, <br className='sp' />
                        which constitute spaces
                        <br /> as a construction material, <br className='sp' />
                        to be designed to complement, <br className='sp' />
                        not hinder,
                        <br className='pc' /> the daily lives of <br className='sp' />
                        many kinds of people.
                      </p>
                    </div>
                  </div>
                  <div className='img03'>
                    <div className='pc'>
                      <div className='flex'>
                        <div>
                          <img
                            src='/assets/global/award/img/fixed_box02_img03.png'
                            alt="As construction materials, our products enhance unique lifestyles while harmonizing with the space surrounded by users' favorite furniture, accessories, plants, and other items."
                            className=''
                          />
                          <div className='hover_text'>
                            <p>
                              As construction materials, <br />
                              our products enhance <br />
                              unique lifestyles while <br />
                              harmonizing with the space <br />
                              surrounded by users&apos; favorite <br />
                              furniture, accessories, plants, <br />
                              and other items.
                            </p>
                          </div>
                        </div>
                        <div>
                          <img
                            src='/assets/global/award/img/fixed_box02_img04.png'
                            alt="We provide environments that facilitate and enhance our users' unique decorations and arrangements."
                            className=' delay1'
                          />
                          <div className='hover_text'>
                            <p>
                              We provide environments <br />
                              that facilitate and enhance <br />
                              our users&apos; unique decorations <br />
                              and arrangements.
                            </p>
                          </div>
                        </div>
                        <div>
                          <img
                            src='/assets/global/award/img/fixed_box02_img05.png'
                            alt='>Our designs allow the feeling that gently blends with a richness of time with seasonal decorations of flowers, plants, and trees.'
                            className=' delay2'
                          />
                          <div className='hover_text'>
                            <p>
                              Our designs allow the feeling <br />
                              that gently blends <br />
                              with a richness of time <br />
                              with seasonal decorations of <br />
                              flowers, plants, and trees.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='sp'>
                      <div className='flex '>
                        <div>
                          <img
                            src='/assets/global/award/img/fixed_box02_img03_sp.png'
                            alt="As construction materials, our products enhance unique lifestyles while harmonizing with the space surrounded by users' favorite furniture, accessories, plants, and other items."
                            className=''
                          />
                        </div>
                        <div>
                          <div className='hover_text'>
                            <p>
                              As construction materials, our products enhance unique lifestyles while harmonizing with
                              the space surrounded by users&apos; favorite furniture, accessories, plants, and other
                              items.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='flex flex-reverse '>
                        <div>
                          <img
                            src='/assets/global/award/img/fixed_box02_img04_sp.png'
                            alt="We provide environments that facilitate and enhance our users' unique decorations and arrangements."
                            className=''
                          />
                        </div>
                        <div>
                          <div className='hover_text'>
                            <p>
                              We provide environments that facilitate and enhance our users&apos; unique decorations and
                              arrangements.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='flex '>
                        <div>
                          <img
                            src='/assets/global/award/img/fixed_box02_img05_sp.png'
                            alt='Our designs allow the feeling that gently blends with a richness of time with seasonal decorations of flowers, plants, and trees.'
                            className=''
                          />
                        </div>
                        <div>
                          <div className='hover_text'>
                            <p>
                              Our designs allow the feeling that gently blends with a richness of time with seasonal
                              decorations of flowers, plants, and trees.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <p className="txt03  pc">
						四季折々の行事に合わせて住まいを飾り整え、<br className="sp" />家族やゲストの幸せを願う伝統的な習慣。<br/> 飾って空間を完成させるため、<br className="sp" />建築や建築素材のデザインは、
						<br/> 様々なしつらいと調和し、<br className="sp" />引き立てるシンプルさと上質さが求められます。
					</p> */}
            </section>

            <section id='sec04' className='sec'>
              <h2 className='ttl01 '>The three design elements</h2>
              <p className='txt03 '>The three design elements that realize “Understated Presence”</p>

              <ul className='design_list'>
                <li className=''>
                  <div className='accordion_ttl accordion01' tabIndex={0} role='button'>
                    Gentle to people<span className='icon'></span>
                  </div>
                  <div className='accordion_content'>
                    <h3 className='accordion_txt01'>
                      “A part of everyday life”
                      <br />
                      “Offers peace of mind”
                      <br />
                      “Gentle to the human body”
                    </h3>
                    <p className='accordion_txt02'>
                      Our designs allow unconscious use with comfortable movements and postures.
                      <br />
                      They are beautifully designed to provide comfortable daily experiences.
                    </p>
                    <div className='slide'>
                      <div>
                        <div>
                          <div>
                            <img src='/assets/global/award/img/slide01_1.png' alt='' />
                          </div>
                          <h4 className='accordion_txt03'>
                            NEOREST<sup>®</sup> NX
                          </h4>
                          <p className='accordion_txt04'>
                            Toilet seats directly touch the skin, so we design them to be easy to sit on and clean to
                            allow comfortable use every day.
                            <br />
                            The toilet seat has a curved form we have researched and developed to lead users to a
                            posture that facilitates toilet use.
                          </p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div>
                            <img src='/assets/global/award/img/slide01_2.png' alt='' />
                          </div>
                          <h4 className='accordion_txt03'>FLOTATION TUB</h4>
                          <p className='accordion_txt04'>
                            This is a new bathtub concept, one that allows relaxation of body and mind while being
                            immersed in a sense of floating. We have scientifically derived a relaxing form that
                            maintains posture and stabilizes the center of gravity in a lay-down bathing style, creating
                            a gentle design that envelops the user.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className=''>
                  <div className='accordion_ttl accordion02' tabIndex={0} role='button'>
                    Comfortable <span className='icon'></span>
                  </div>
                  <div className='accordion_content'>
                    <h3 className='accordion_txt01'>
                      “Harmonizes with space”
                      <br />
                      “Pleasant interface between people and objects”
                      <br />
                      “Beautiful appliance”
                    </h3>
                    <p className='accordion_txt02'>
                      We create spaces that blend by eliminating unnecessary elements and allowing room for residents to
                      create arrangements. Through design, we create forms that blend with architectural spaces, touch
                      the human body, and feel comfortable.
                    </p>
                    <div className='slide'>
                      <div>
                        <div>
                          <div>
                            <img src='/assets/global/award/img/slider02_1.jpg' alt='' />
                          </div>
                          <h4 className='accordion_txt03'>
                            NEOREST<sup>®</sup> LS
                          </h4>
                          <p className='accordion_txt04'>
                            While controlling the inflection of straight lines and curves, the design realizes both
                            harmony with the architectural space and a graceful character. The design subtly adds
                            accents and allows for interior coordination.
                          </p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div>
                            <img src='/assets/global/award/img/slide02_2.png' alt='' />
                          </div>
                          <h4 className='accordion_txt03'>Washbasin TA</h4>
                          <p className='accordion_txt04'>
                            The asymmetrical form is inspired by uneven and gently fluctuating shapes existing in the
                            natural world. It creates fortuitous accents that change their impression depending on the
                            angle from which they are viewed in everyday settings.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className=''>
                  <div className='accordion_ttl accordion03' tabIndex={0} role='button'>
                    Sincere on Beauty<span className='icon'></span>
                  </div>
                  <div className='accordion_content'>
                    <h3 className='accordion_txt01'>
                      “Users find it pleasurable”
                      <br />
                      “Retains beauty over time”
                      <br />
                      “Creating a sustainable future”
                    </h3>
                    <p className='accordion_txt02'>
                      Our designs retain their freshness even after years and do not stress users. <br />
                      We aim to create designs that many people will become attached to. <br />
                      We also emphasize maintainability and sustainability in our manufacturing.
                    </p>
                    <div className='slide'>
                      <div>
                        <div>
                          <div>
                            <img src='/assets/global/award/img/slide03_1.png' alt='' />
                          </div>
                          <h4 className='accordion_txt03'>
                            WASHLET<sup>®</sup>
                          </h4>
                          <p className='accordion_txt04'>
                            This product is used every day, so we designed it with minimal height differences and gaps
                            for easy cleaning with a quick wipe.
                          </p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div>
                            <img src='/assets/global/award/img/slide03_2.png' alt='' />
                          </div>
                          <h4 className='accordion_txt03'>Touchless faucet TLE26 series </h4>
                          <p className='accordion_txt04'>
                            We designed this faucet with a sensor hidden at its tip to allow intuitive use without
                            compromising its appearance. It has a self-powering function, and many comfort functions are
                            unobtrusively integrated in an extremely simple design.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </section>

            <section className='block03 ttl award_wrap'>
              <p className='text10'>
                Products created under the TOTO design philosophy have won prestigious international design awards.
              </p>
              <h2 className='text11'>Award Winning Products</h2>
              <p className='text10_m50'>
                ※Sales areas differ for each product. Please refer to the website of each location for details.
              </p>

              <ul>
                <li>
                  <a href='#iFDesign'>iF Design Award</a>
                </li>
                <li>
                  <a href='#Reddot'>Red Dot Design Award</a>
                </li>
                <li>
                  <a href='#Green'>Green Good Design Award</a>
                </li>
              </ul>
            </section>

            <section className='block04'>
              <article id='iFDesign' className='award_wrap'>
                <h2>
                  <img src='/assets/global/award/img/if_logo.png' alt='iF Design Award' />
                </h2>
                <p>
                  An internationally renowned design award since 1953.
                  <br />
                  It is held at iF International Forum Design GmbH in Hannover, Germany.
                  <br />
                  Products whose aesthetics, functionality, and innovativeness have been strictly examined
                  <br />
                  and recognized by design experts.
                </p>
                <h3>Award Winning Products</h3>

                <div className='year'>
                  <h4>2023</h4>
                  <div>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/202305/NEOREST_WX.png' alt='NEOREST WX' />
                      </dt>
                      <dd>
                        <span className='washlet_area'>
                          <span className='washlet'>NEOREST</span>
                          <span className='R_b'>
                            <sub>&reg;</sub>
                          </span>
                        </span>
                        WX
                        <div className='product_bottom'>
                          <div className='btn01'>
                            <button data-target='modal2' className='modal_open'>
                              Learn more
                            </button>
                          </div>
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>

                <div className='year'>
                  <h4>2022</h4>
                  <div>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/202205/NEOREST_LS.png' alt='NEOREST LS' />
                      </dt>
                      <dd>
                        <span className='washlet_area'>
                          <span className='washlet'>NEOREST</span>
                          <span className='R_b'>
                            <sub>&reg;</sub>
                          </span>
                        </span>
                        LS
                        <div className='product_bottom'>
                          <div className='btn01'>
                            <button data-target='modal3' className='modal_open'>
                              Learn more
                            </button>
                          </div>
                        </div>
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/202205/NEOREST_AS.png' alt='NEOREST AS' />
                      </dt>
                      <dd>
                        <span className='washlet_area'>
                          <span className='washlet'>NEOREST</span>
                          <span className='R_b'>
                            <sub>&reg;</sub>
                          </span>
                        </span>{' '}
                        AS
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img
                          src='/assets/global/award/img/202205/Overhead_Shower_ROUND.png'
                          alt='Z selection Overhead Shower ROUND'
                        />
                      </dt>
                      <dd>
                        Z selection
                        <br />
                        Overhead Shower ROUND
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img
                          src='/assets/global/award/img/202205/Overhead_Shower_SQUARE.png'
                          alt='Z selection Overhead Shower SQUARE'
                        />
                      </dt>
                      <dd>
                        Z selection
                        <br />
                        Overhead Shower SQUARE
                      </dd>
                    </dl>
                  </div>
                  <div>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/202205/Column_with_Shelf.png' alt='Column with Shelf' />
                      </dt>
                      <dd>
                        <p className='product_name'>
                          Z selection
                          <br />
                          Shower Column
                        </p>
                        <div className='product_bottom'>
                          <div className='btn01'>
                            <button data-target='modal12' className='modal_open'>
                              Learn more
                            </button>
                          </div>
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
                <div className='year'>
                  <h4>2021</h4>
                  <div>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/202105/WASHLET_G5.png' alt='WASHLET_G5/G5 Lite' />
                      </dt>
                      <dd>
                        <span className='washlet_area'>
                          <span className='washlet'>WASHLET</span>
                          <span className='R_b'>
                            <sub>&reg;</sub>
                          </span>
                        </span>
                        G5/G5 Lite
                      </dd>
                    </dl>

                    <dl>
                      <dt>
                        <img
                          src='/assets/global/award/img/202105/Wall_Hung_URINAL.png'
                          alt='Wall hung Urinal with Built-in Sensor'
                        />
                      </dt>
                      <dd>
                        Wall hung Urinal
                        <br />
                        with Built-in Sensor
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img
                          src='/assets/global/award/img/202105/Touchless_faucet_TLE27andTLE30_series.png'
                          alt='Touchless faucet TLE27/TLE30 series'
                        />
                      </dt>
                      <dd>
                        Touchless faucet
                        <br />
                        TLE27/TLE30 series
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img
                          src='/assets/global/award/img/202105/Touchless_faucet_TEL28_and_TLE31_series.png'
                          alt='Touchless faucet TLE28/TLE31 series'
                        />
                      </dt>
                      <dd>
                        Touchless faucet
                        <br />
                        TLE28/TLE31 series
                      </dd>
                    </dl>
                  </div>

                  <div>
                    <dl>
                      <dt>
                        <img
                          src='/assets/global/award/img/202105/WASHBASIN_CE_ROUND.png'
                          alt='Washbasin CE series ROUND'
                        />
                      </dt>
                      <dd>
                        Washbasin
                        <br />
                        CE series ROUND
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/202105/Bathtub_CE_ROUND.png' alt='Bathtub CE series ROUND' />
                      </dt>
                      <dd>
                        Bathtub
                        <br />
                        CE series ROUND
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img
                          src='/assets/global/award/img/202105/WASHBASIN_CE_SQUARE.png'
                          alt='Washbasin CE series SQUARE'
                        />
                      </dt>
                      <dd>
                        Washbasin
                        <br />
                        CE series SQUARE
                      </dd>
                    </dl>

                    <dl>
                      <dt>
                        <img
                          src='/assets/global/award/img/202105/Bathtub_CE_SQUARE.png'
                          alt='Bathtub CE series SQUARE'
                        />
                      </dt>
                      <dd>
                        Bathtub
                        <br />
                        CE series SQUARE
                      </dd>
                    </dl>
                  </div>
                </div>

                <div className='year'>
                  <h4>2020</h4>
                  <div>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/if_2020_01.png' alt='WASHLET W7' />
                      </dt>
                      <dd>
                        <span className='washlet_area'>
                          <span className='washlet'>WASHLET</span>
                          <span className='R_b'>
                            <sub>&reg;</sub>
                          </span>
                        </span>
                        W7
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/if_2020_02.png' alt='WASHLET W7' />
                      </dt>
                      <dd>
                        <span className='washlet_area'>
                          <span className='washlet'>WASHLET</span>
                          <span className='R_b'>
                            <sub>&reg;</sub>
                          </span>
                        </span>
                        W7
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/if_2020_03.png' alt='Wall hung Toilet SP WASHLET SX' />
                      </dt>
                      <dd>
                        Wall hung Toilet SP
                        <br />
                        <span className='washlet_area'>
                          <span className='washlet'>WASHLET</span>
                          <span className='R_b'>
                            <sub>&reg;</sub>
                          </span>
                        </span>
                        W5
                      </dd>
                    </dl>
                  </div>
                </div>

                <div className='year'>
                  <h4>2019</h4>
                  <div>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/if_2019_01.png' alt='NEOREST AH' />
                      </dt>
                      <dd>
                        <span className='washlet_area'>
                          <span className='washlet'>NEOREST</span>
                          <span className='R_b'>
                            <sub>&reg;</sub>
                          </span>
                        </span>{' '}
                        AH
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/if_2019_02.png' alt='NEOREST RH' />
                      </dt>
                      <dd>
                        <span className='washlet_area'>
                          <span className='washlet'>NEOREST</span>
                          <span className='R_b'>
                            <sub>&reg;</sub>
                          </span>
                        </span>{' '}
                        RH
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/if_2019_03.png' alt='Wall hung Toilet　RP<br/>WASHLET W5' />
                      </dt>
                      <dd>
                        Wall hung Toilet RP
                        <br />
                        <span className='washlet_area'>
                          <span className='washlet'>WASHLET</span>
                          <span className='R_b'>
                            <sub>&reg;</sub>
                          </span>
                        </span>
                        W5
                      </dd>
                    </dl>

                    <dl>
                      <dt>
                        <img
                          src='/assets/global/award/img/if_2019_04.png'
                          alt='Lavatory faucet (Single lever)　GM series'
                        />
                      </dt>
                      <dd>
                        Lavatory faucet (Single lever)
                        <br />
                        GM series
                      </dd>
                    </dl>
                  </div>
                </div>

                <div className='year'>
                  <h4>2018</h4>
                  <div>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/if_2018_01.png' alt='NEOREST NX' />
                      </dt>
                      <dd>
                        <span className='washlet_area'>
                          <span className='washlet'>NEOREST</span>
                          <span className='R_b'>
                            <sub>&reg;</sub>
                          </span>
                        </span>
                        NX
                        <div className='product_bottom'>
                          <div className='btn01'>
                            <button data-target='modal1' className='modal_open'>
                              Learn more
                            </button>
                          </div>
                        </div>
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img
                          src='/assets/global/award/img/if_2018_02.png'
                          alt='Lavatory faucet (Single lever) ZL series'
                        />
                      </dt>
                      <dd>
                        Lavatory faucet (Single lever)
                        <br />
                        ZL series
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/if_2018_03.png' alt='Washbasin W600/W500(Inset/Outset)' />
                      </dt>
                      <dd>
                        Washbasin W600/W500
                        <br />
                        (Inset/Outset)
                      </dd>
                    </dl>
                  </div>
                </div>

                <div className='year'>
                  <h4>2017</h4>
                  <div>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/if_gold_2017.png' alt='Washbasin TL' />
                      </dt>
                      <dd>
                        <p className='product_name'>Washbasin TL</p>
                        <div className='product_bottom'>
                          <div className='btn01'>
                            <button data-target='modal6' className='modal_open'>
                              Learn more
                            </button>
                          </div>
                        </div>
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/if_2017_01.png' alt='Washbasin TR' />
                      </dt>
                      <dd>Washbasin TR</dd>
                    </dl>
                  </div>
                </div>

                <div className='year'>
                  <h4>2016</h4>
                  <div>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/202105/Hand_Dryer.png' alt='Hand Dryer' />
                      </dt>
                      <dd>Hand Dryer</dd>
                    </dl>
                    <dl>
                      {' '}
                      <dt>
                        <img src='/assets/global/award/img/202305/NEOREST_DH.png' alt='NEOREST DH' />
                      </dt>
                      <dd>
                        <span className='washlet_area'>
                          <span className='washlet'>NEOREST</span>
                          <span className='R_b'>
                            <sub>&reg;</sub>
                          </span>
                        </span>{' '}
                        DH*
                      </dd>
                    </dl>
                  </div>
                </div>

                <div className='year'>
                  <h4>2015</h4>
                  <div>
                    <dl>
                      <dt>
                        <img
                          src='/assets/global/award/img/202105/NEOREST_AC_GE_LE2.png'
                          alt='NEOREST AC/GE/LEⅡ with Actilight'
                        />
                      </dt>
                      <dd style={{ whiteSpace: 'nowrap' }}>
                        <span className='washlet_area'>
                          <span className='washlet'>NEOREST</span>
                          <span className='R_b'>
                            <sub>&reg;</sub>
                          </span>{' '}
                          AC/GE/LE <span className='two'>Ⅱ</span>
                        </span>
                        <br />
                        with Actilight
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/202105/WASHILET_SG.png' alt='WASHILET SG' />
                      </dt>
                      <dd>
                        <span className='washlet_area'>
                          <span className='washlet'>WASHLET</span>
                          <span className='R_b'>
                            <sub>&reg;</sub>
                          </span>
                        </span>
                        SG
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/202105/One_piece_Toilet.png' alt='One piece Toilet' />
                      </dt>
                      <dd>One piece Toilet</dd>
                    </dl>
                  </div>
                </div>

                <div className='year'>
                  <h4>2014</h4>
                  <div>
                    <dl>
                      <dt>
                        <img
                          src='/assets/global/award/img/202105/NEOREST_GH.png'
                          alt='NEOREST GH/XH/750H (Gold/Silver)'
                        />
                      </dt>
                      <dd>
                        <span className='washlet_area'>
                          <span className='washlet'>NEOREST</span>
                          <span className='R_b'>
                            <sub>&reg;</sub>
                          </span>
                        </span>{' '}
                        GH/XH/750H
                        <br /> (Gold/Silver)
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img
                          src='/assets/global/award/img/202105/CI_Contemporary_faucets.png'
                          alt='CI Contemporary faucets'
                        />
                      </dt>
                      <dd>
                        CI Contemporary
                        <br />
                        faucets
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/202105/CI_series.png' alt='CI series' />
                      </dt>
                      <dd>CI series</dd>
                    </dl>
                  </div>
                </div>

                <div className='year pc-only'>
                  <h4>2009</h4>
                  <div>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/202105/Crystal_bowl_01.png' alt='Crystal bowl' />
                      </dt>
                      <dd>Crystal bowl</dd>
                    </dl>
                    <dl>
                      <dt>
                        <img
                          src='/assets/global/award/img/202105/Lavatory_faucet_RENESSE.png'
                          alt='Lavatory faucet RENESSE'
                        />
                      </dt>
                      <dd>
                        Lavatory faucet
                        <br />
                        RENESSE
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img
                          src='/assets/global/award/img/202105/Touchless_faucet.png'
                          alt='Touchless faucet（ECOPOWER type）'
                        />
                      </dt>
                      <dd>
                        Touchless faucet
                        <br />
                        （ECOPOWER type）
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/202105/Shower_bar_RENESSE.png' alt='Shower bar RENESSE' />
                      </dt>
                      <dd>
                        Shower bar
                        <br />
                        RENESSE*
                      </dd>
                    </dl>
                  </div>

                  <div>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/202305/NEOREST_AH_2009.png' alt='NEOREST AH' />
                      </dt>
                      <dd>
                        <span className='washlet_area'>
                          <span className='washlet'>NEOREST</span>
                          <span className='R_b'>
                            <sub>&reg;</sub>
                          </span>
                        </span>{' '}
                        AH*
                      </dd>
                    </dl>
                  </div>
                </div>
              </article>

              {/* <article id="iFDesign_gold" className="award_wrap">
						<h2><img src="/award/img/if_logo_gold.png" alt="iF Design Award" /></h2>
						<p>Awarded to especially exceptional products among iF awardees, with a less than 2% chance of winning.</p>
						<div className="year">
							<dl className="single">
								<dt><img src="/award/img/if_gold_2017.png" alt="Washbasin TL" /></dt>
								<dd>Washbasin TL
									<div className="product_bottom">
										<div className="btn01"><a data-target="modal6" className="modal_open">Learn more </a></div>
									</div>
								</dd>
							</dl>
						</div>
					</article> */}

              <article id='Reddot' className='award_wrap'>
                <h2>
                  <img src='/assets/global/award/img/rd_logo.png' alt='Reddot Design Award' />
                </h2>
                <p>
                  An internationally renowned design award since 1955.
                  <br />
                  Held at Design Zentrum Nordrhein Westfalen in Essen, Germany.
                  <br />
                  Products that have been strictly examined and recognized <br />
                  by design experts against standards of innovativeness, functionality, quality, and so forth.
                </p>
                <h3>Award Winning Products</h3>

                <div className='year'>
                  <h4>2023</h4>
                  <div>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/202305/THE_CRASSO.png' alt='THE CRASSO' />
                      </dt>
                      <dd>
                        <p className='product_name'>THE CRASSO</p>
                        <div className='product_bottom'>
                          <div className='btn01'>
                            <button data-target='modal13' className='modal_open'>
                              Learn more
                            </button>
                          </div>
                        </div>
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/202305/NEOREST_WX.png' alt='NEOREST WX' />
                      </dt>
                      <dd>
                        <span className='washlet_area'>
                          <span className='washlet'>NEOREST</span>
                          <span className='R_b'>
                            <sub>&reg;</sub>
                          </span>
                        </span>
                        WX
                        <div className='product_bottom'>
                          <div className='btn01'>
                            <button data-target='modal2' className='modal_open'>
                              Learn more
                            </button>
                          </div>
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>

                <div className='year'>
                  <h4>2022</h4>
                  <div>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/202205/NEOREST_LS.png' alt='NEOREST® LS' />
                      </dt>
                      <dd>
                        <span className='washlet_area'>
                          <span className='washlet'>NEOREST</span>
                          <span className='R_b'>
                            <sub>&reg;</sub>
                          </span>
                        </span>
                        LS
                        <div className='product_bottom'>
                          <div className='btn01'>
                            <button data-target='modal3' className='modal_open'>
                              Learn more
                            </button>
                          </div>
                        </div>
                      </dd>
                    </dl>

                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/202205/NEOREST_RS.png' alt='NEOREST® RS' />
                      </dt>
                      <dd>
                        <span className='washlet_area'>
                          <span className='washlet'>NEOREST</span>
                          <span className='R_b'>
                            <sub>&reg;</sub>
                          </span>
                        </span>{' '}
                        RS
                      </dd>
                    </dl>

                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/202205/Stick_controler.png' alt='Stick controler' />
                      </dt>
                      <dd>Stick controler</dd>
                    </dl>

                    {/* <dl>
											<dt className="mb0"><img src="/award/img/202205/ONLY_Technology.png" alt="ONLY Technology PVD matte black" /></dt>
											<dd className="caption_two">※Product Image</dd>
											<dd>ONLY Technology<br/>"PVD matte black"</dd>
										</dl> */}
                  </div>
                </div>

                <div className='year'>
                  <h4>2021</h4>

                  <div>
                    <dl>
                      <dt>
                        <img
                          src='/assets/global/award/img/202305/Touchless_faucet_TLE24_series.png'
                          alt='Touchless faucet TLE24 series'
                        />
                      </dt>
                      <dd>
                        <p className='product_name'>
                          Touchless faucet
                          <br />
                          TLE24 series
                        </p>
                        <div className='product_bottom'>
                          <div className='btn01'>
                            <button data-target='modal10' className='modal_open'>
                              Learn more
                            </button>
                          </div>
                        </div>
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img
                          src='/assets/global/award/img/202105/Touchless_faucet_GM_TLE22_series.png'
                          alt='Touchless faucet GM TLE22 series'
                        />
                      </dt>
                      <dd>
                        Touchless faucet GM
                        <br />
                        TLE22 series
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img
                          src='/assets/global/award/img/202105/Touchless_faucet_TLE23_series.png'
                          alt='Touchless faucet TLE23 series'
                        />
                      </dt>
                      <dd>
                        Touchless faucet
                        <br />
                        TLE23 series
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img
                          src='/assets/global/award/img/202105/Touchless_faucet_TLE25_series.png'
                          alt='Touchless faucet TLE25 series'
                        />
                      </dt>
                      <dd>
                        Touchless faucet
                        <br />
                        TLE25 series
                      </dd>
                    </dl>
                  </div>

                  <div>
                    <dl>
                      <dt>
                        <img
                          src='/assets/global/award/img/202105/Touchless_faucet_TLE26_series.png'
                          alt='Touchless faucet TLE26 series'
                        />
                      </dt>
                      <dd>
                        <p className='product_name'>
                          Touchless faucet
                          <br />
                          TLE26 series
                        </p>
                        <div className='product_bottom'>
                          <div className='btn01'>
                            <button data-target='modal11' className='modal_open'>
                              Learn more
                            </button>
                          </div>
                        </div>
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/202105/WASHLET_G5.png' alt='WASHLET_G5/G5 Lite' />
                      </dt>
                      <dd>
                        <span className='washlet_area'>
                          <span className='washlet'>WASHLET</span>
                          <span className='R_b'>
                            <sub>&reg;</sub>
                          </span>
                        </span>
                        G5/G5 Lite
                      </dd>
                    </dl>
                  </div>
                </div>

                <div className='year'>
                  <h4>2020</h4>
                  <div>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/rd_2020_01.png' alt='NEOREST DH' />
                      </dt>
                      <dd>
                        <span className='washlet_area'>
                          <span className='washlet'>NEOREST</span>
                          <span className='R_b'>
                            <sub>&reg;</sub>
                          </span>
                        </span>
                        DH
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/rd_2020_02.png' alt='WASHLET S7' />
                      </dt>
                      <dd>
                        <span className='washlet_area'>
                          <span className='washlet'>WASHLET</span>
                          <span className='R_b'>
                            <sub>&reg;</sub>
                          </span>
                        </span>
                        S7
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/rd_2020_03.png' alt='Washbasin TA' />
                      </dt>
                      <dd>
                        <p className='product_name'>Washbasin TA</p>
                        <div className='product_bottom'>
                          <div className='btn01'>
                            <button data-target='modal5' className='modal_open'>
                              Learn more
                            </button>
                          </div>
                        </div>
                      </dd>
                    </dl>

                    <dl>
                      <dt>
                        <img
                          src='/assets/global/award/img/rd_2020_04.png'
                          alt='Lavatory faucet (Single lever) GB series'
                        />
                      </dt>
                      <dd>
                        Lavatory faucet (Single lever)
                        <br />
                        GB series
                      </dd>
                    </dl>
                  </div>

                  <div>
                    <dl>
                      <dt>
                        <img
                          src='/assets/global/award/img/rd_2020_05.png'
                          alt='Lavatory faucet (Single lever) GF series'
                        />
                      </dt>
                      <dd>
                        Lavatory faucet (Single lever)
                        <br />
                        GF series
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/rd_2020_06.png' alt='FLOTATION TUB' />
                      </dt>
                      <dd>
                        <p className='product_name'>FLOTATION TUB</p>
                        <div className='product_bottom'>
                          <div className='btn01'>
                            <button data-target='modal4' className='modal_open'>
                              Learn more
                            </button>
                          </div>
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>

                <div className='year'>
                  <h4>2019</h4>
                  <div>
                    <dl>
                      <dt>
                        <img
                          src='/assets/global/award/img/rd_2019_01.png'
                          alt='Lavatory faucet (Single lever) ZA series'
                        />
                      </dt>
                      <dd>
                        <p className='product_name'>
                          Lavatory faucet (Single lever)
                          <br />
                          ZA series
                        </p>
                        <div className='product_bottom'>
                          <div className='btn01'>
                            <button data-target='modal7' className='modal_open'>
                              Learn more
                            </button>
                          </div>
                        </div>
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img
                          src='/assets/global/award/img/rd_2019_02.png'
                          alt='Lavatory faucet (Single lever) GE series'
                        />
                      </dt>
                      <dd>
                        Lavatory faucet (Single lever)
                        <br />
                        GE series
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img
                          src='/assets/global/award/img/rd_2019_03.png'
                          alt='Lavatory faucet (Single lever) GC series'
                        />
                      </dt>
                      <dd>
                        Lavatory faucet (Single lever)
                        <br />
                        GC series
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img
                          src='/assets/global/award/img/rd_2019_04.png'
                          alt='Lavatory faucet (Single lever) GM series'
                        />
                      </dt>
                      <dd>
                        Lavatory faucet (Single lever)
                        <br />
                        GM series
                      </dd>
                    </dl>
                  </div>
                </div>

                <div className='year'>
                  <h4>2018</h4>
                  <div>
                    <dl>
                      <dt>
                        <img
                          src='/assets/global/award/img/rd_2018_01.png'
                          alt='Lavatory faucet (Single lever) GA series'
                        />
                      </dt>
                      <dd>
                        Lavatory faucet (Single lever)
                        <br />
                        GA series
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img
                          src='/assets/global/award/img/rd_2018_02.png'
                          alt='Lavatory faucet (Single lever) GS series'
                        />
                      </dt>
                      <dd>
                        Lavatory faucet (Single lever)
                        <br />
                        GS series
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/rd_2018_03.png' alt='NEOREST NX' />
                      </dt>
                      <dd>
                        <span className='washlet_area'>
                          <span className='washlet'>NEOREST</span>
                          <span className='R_b'>
                            <sub>&reg;</sub>
                          </span>
                        </span>
                        NX
                        <div className='product_bottom'>
                          <div className='btn01'>
                            <button data-target='modal1' className='modal_open'>
                              Learn more
                            </button>
                          </div>
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>

                <div className='year'>
                  <h4>2017</h4>
                  <div>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/rd_bob.png' alt='Lavatory faucet (Single lever) GO serie' />
                      </dt>
                      <dd>
                        Lavatory faucet (Single)
                        <br />
                        GO series
                        <div className='product_bottom'>
                          <div className='btn01'>
                            <button data-target='modal8' className='modal_open'>
                              Learn more
                            </button>
                          </div>
                        </div>
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img
                          src='/assets/global/award/img/rd_2017_01.png'
                          alt='Lavatory faucet (Single lever) GR series'
                        />
                      </dt>
                      <dd>
                        Lavatory faucet (Single lever)
                        <br />
                        GR series
                      </dd>
                    </dl>
                  </div>
                </div>

                <div className='year'>
                  <h4>2016</h4>
                  <div>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/202305/NEOREST_DH.png' alt='NEOREST DH' />
                      </dt>
                      <dd>
                        <span className='washlet_area'>
                          <span className='washlet'>NEOREST</span>
                          <span className='R_b'>
                            <sub>&reg;</sub>
                          </span>
                        </span>{' '}
                        DH*
                      </dd>
                    </dl>
                  </div>
                </div>

                <div className='year'>
                  <h4>2015</h4>
                  <div>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/202105/NEOREST_RH.png' alt='NEOREST RH' />
                      </dt>
                      <dd>
                        <span className='washlet_area'>
                          <span className='washlet'>NEOREST</span>
                          <span className='R_b'>
                            <sub>&reg;</sub>
                          </span>
                        </span>{' '}
                        RH
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/202105/Washbasin_NEOREST.png' alt='Washbasin NEOREST' />
                      </dt>
                      <dd>Washbasin W746/W596</dd>
                    </dl>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/202105/CI_Lavatory_dresser.png' alt='CI Lavatory dresser' />
                      </dt>
                      <dd>CI Lavatory dresser</dd>
                    </dl>
                  </div>
                </div>

                <div className='year'>
                  <h4>2014</h4>
                  <div>
                    <dl>
                      <dt>
                        <img
                          src='/assets/global/award/img/202105/CI_Contemporary_faucets.png'
                          alt='CI Contemporary faucets'
                        />
                      </dt>
                      <dd>
                        CI Contemporary
                        <br />
                        faucets
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/202105/Overhead_shower.png' alt='Overhead shower' />
                      </dt>
                      <dd>Overhead shower</dd>
                    </dl>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/202105/CII_Classic_faucets.png' alt='CII Classic faucets' />
                      </dt>
                      <dd>CII Classic faucets</dd>
                    </dl>
                    <dl>
                      {' '}
                      <dt>
                        <img src='/assets/global/award/img/202305/Hand_Shower.png' alt='Hand Shower' />
                      </dt>
                      <dd>Hand Shower*</dd>
                    </dl>
                  </div>
                </div>

                <div className='year'>
                  <h4>2013</h4>

                  <div>
                    <dl>
                      <dt>
                        <img
                          src='/assets/global/award/img/202105/WASHLET_Apricot.png'
                          alt='WASHLET® Apricot （D-shape）'
                        />
                      </dt>
                      <dd>
                        <span className='washlet_area'>
                          <span className='washlet'>WASHLET</span>
                          <span className='R_b'>
                            <sub>&reg;</sub>
                          </span>
                        </span>
                        Apricot
                        <br />
                        （D-shape）
                      </dd>
                    </dl>
                  </div>
                </div>

                <div className='year'>
                  <h4>2011</h4>

                  <div>
                    <dl>
                      <dt>
                        <img
                          src='/assets/global/award/img/202105/Lavatory_faucet_NYMPHEAS.png'
                          alt='Lavatory faucet NYMPHEAS'
                        />
                      </dt>
                      <dd>
                        Lavatory faucet
                        <br />
                        NYMPHEAS*
                      </dd>
                    </dl>
                  </div>
                </div>

                <div className='year'>
                  <h4>2010</h4>

                  <div>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/202305/Luminist_Bath.png' alt='Luminist Bath' />
                      </dt>
                      <dd>Luminist Bath*</dd>
                    </dl>
                  </div>
                </div>

                <div className='year'>
                  <h4>2009</h4>

                  <div>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/202105/Crystal_bowl02.png' alt='Crystal bowl' />
                      </dt>
                      <dd>Crystal bowl*</dd>
                    </dl>

                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/Luminist_lavatory.png' alt='Luminist lavatory' />
                      </dt>
                      <dd>Luminist lavatory*</dd>
                    </dl>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/202305/NEOREST_AH_2009.png' alt='NEOREST AH' />
                      </dt>
                      <dd>
                        <span className='washlet_area'>
                          <span className='washlet'>NEOREST</span>
                          <span className='R_b'>
                            <sub>&reg;</sub>
                          </span>
                        </span>{' '}
                        AH*
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/202305/NEOREST_LE.png' alt='NEOREST LE' />
                      </dt>
                      <dd>
                        <span className='washlet_area'>
                          <span className='washlet'>NEOREST</span>
                          <span className='R_b'>
                            <sub>&reg;</sub>
                          </span>
                        </span>{' '}
                        LE*
                      </dd>
                    </dl>
                  </div>
                </div>
              </article>

              {/* <article id="Reddot_bob" className="award_wrap">
						<h2><img src="/award/img/rd_logo_bob_2023.png" alt="Reddot Design Award 2023"></h2>
						<p>Awarded to especially exceptional products among Red Dot awardees, with a less than 2% chance of winning.</p>


						<div className="year">
							<dl className="single">
								<dt><img src="/award/img/202305/THE_CRASSO.png" alt="THE CRASSO"></dt>
								<dd>THE CRASSO
									<div className="product_bottom">
										<div className="btn01"><a data-target="modal13" className="modal_open">Learn more </a></div>
									</div>
								</dd>
							</dl>
						</div>

						<p className="text13">---- Award products ----<br/>
							Countertop・Square slide sink・Faucet (back of above image)・Touchless “EWATER+” generator (front of above image)</p>

					</article> */}

              {/* <article id="Reddot_bob" className="award_wrap">
						<h2><img src="/award/img/rd_logo_bob_2021.png" alt="Reddot Design Award 2021"></h2>
						<div className="year">
							<dl className="single">
								<dt><img src="/award/img/202105/Touchless_faucet_TLE24_series.png" alt="Touchless faucet TLE24 series"></dt>
								<dd>Touchless faucet<br/>TLE24 series
									<div className="product_bottom">
										<div className="btn01"><a data-target="modal10" className="modal_open">Learn more </a></div>
									</div>
								</dd>
							</dl>
						</div>


					</article> */}

              {/* <article id="Reddot_bob" className="award_wrap">
						<h2><img src="/award/img/rd_logo_bob.png" alt="Reddot Design Award 2017"></h2>

						<div className="year">
							<dl className="single">
								<dt><img src="/award/img/rd_bob.png" alt="Lavatory faucet (Single lever) GO serie"></dt>
								<dd>Lavatory faucet (Single)<br/>GO series</dd>
							</dl>
						</div>


					</article> */}

              <article id='Green' className='award_wrap'>
                <h2>
                  <img src='/assets/global/award/img/gg_logo.png' alt='Green Good Design Award' />
                </h2>
                <p>
                  An internationally renowned sustainable design award since 2009.
                  <br />
                  Hosted by the Chicago Athenaeum Museum Architecture and Design in United States,
                  <br />
                  and the European Centre for Architecture Art Design and Urban Studies in Ireland.
                  <br />
                  Product that has been strictly examined and approved by experts for sustainable
                  <br />
                  performance such as CO<sub style={{ fontSize: '0.7em', verticalAlign: 'baseline' }}>2</sub> reduction
                  and energy saving.
                </p>
                <h3>Award Winning Technology for sustainability</h3>

                <div className='year green-area'>
                  <h4>2023</h4>
                  <div>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/202305/greengood_2023_01.png' alt='NEOREST NX' />
                      </dt>
                      <dd>
                        <span className='washlet_area'>
                          <span className='washlet'>NEOREST</span>
                          <span className='R_b'>
                            <sub>&reg;</sub>
                          </span>
                        </span>
                        NX
                        <div className='product_bottom'>
                          <div className='btn01'>
                            <button data-target='modal1' className='modal_open'>
                              Learn more
                            </button>
                          </div>
                        </div>
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/202305/NEOREST_WX.png' alt='NEOREST WX' />
                      </dt>
                      <dd>
                        <span className='washlet_area'>
                          <span className='washlet'>NEOREST</span>
                          <span className='R_b'>
                            <sub>&reg;</sub>
                          </span>
                        </span>
                        WX
                        <div className='product_bottom'>
                          <div className='btn01'>
                            <button data-target='modal2' className='modal_open'>
                              Learn more
                            </button>
                          </div>
                        </div>
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/202305/greengood_2023_02.png' alt='NEOREST LS' />
                      </dt>
                      <dd>
                        <span className='washlet_area'>
                          <span className='washlet'>NEOREST</span>
                          <span className='R_b'>
                            <sub>&reg;</sub>
                          </span>
                        </span>
                        LS
                        <div className='product_bottom'>
                          <div className='btn01'>
                            <button data-target='modal3' className='modal_open'>
                              Learn more
                            </button>
                          </div>
                        </div>
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/202305/greengood_2023_03.png' alt='NEOREST AS' />
                      </dt>
                      <dd>
                        <span className='washlet_area'>
                          <span className='washlet'>NEOREST</span>
                          <span className='R_b'>
                            <sub>&reg;</sub>
                          </span>
                        </span>{' '}
                        AS
                      </dd>
                    </dl>
                  </div>
                  <div>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/202305/greengood_2023_04.png' alt='NEOREST RS' />
                      </dt>
                      <dd>
                        <span className='washlet_area'>
                          <span className='washlet'>NEOREST</span>
                          <span className='R_b'>
                            <sub>&reg;</sub>
                          </span>
                        </span>{' '}
                        RS
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img src='/assets/global/award/img/202305/greengood_2023_05.png' alt='WASHLET G5/G5 Lite' />
                      </dt>
                      <dd>
                        <span className='washlet_area'>
                          <span className='washlet'>WASHLET</span>
                          <span className='R_b'>
                            <sub>&reg;</sub>
                          </span>
                        </span>
                        G5/G5 Lite
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img
                          src='/assets/global/award/img/202305/greengood_2023_06.png'
                          alt='HAND DRYER（Suction type）'
                        />
                      </dt>
                      <dd>
                        HAND DRYER
                        <br />
                        （Suction type）
                      </dd>
                    </dl>
                  </div>
                </div>

                <div className='flex'>
                  <div className='year mr-5em'>
                    <h4>2021</h4>
                    <div>
                      <dl>
                        <dt>
                          <img
                            src='/assets/global/award/img/202105/Touchless_faucet_TLE25_series02.png'
                            alt='Touchless faucets'
                          />
                        </dt>
                        <dd className='caption_one'>※Product Image</dd>
                        <dd>Touchless faucets</dd>
                      </dl>
                    </div>
                  </div>
                  <div className='year mr-5em'>
                    <h4>2020</h4>
                    <div>
                      <dl>
                        <dt>
                          <img
                            src='/assets/global/award/img/gg_2020_01.png'
                            alt='Wall hung Urinal with Built-in Sensor'
                          />
                        </dt>
                        <dd className='caption_one'>　</dd>

                        <dd>
                          Wall hung Urinal
                          <br />
                          with Built-in Sensor
                        </dd>
                      </dl>
                    </div>
                  </div>
                  <div className='year mr-5em'>
                    <h4>2018</h4>
                    <div>
                      <dl>
                        <dt>
                          <img src='/assets/global/award/img/gg_2018_01.png' alt='WASHLET Equipped with EWATER+' />
                        </dt>
                        <dd className='caption_one'>※Product Image</dd>
                        <dd>
                          <span className='washlet_area'>
                            <span className='washlet'>WASHLET</span>
                            <span className='R_b'>
                              <sub>&reg;</sub>
                            </span>
                          </span>{' '}
                          Equipped
                          <br />
                          <p className='twol'>with EWATER+</p>
                        </dd>
                      </dl>
                    </div>
                  </div>
                  <div className='year'>
                    <h4>2016</h4>
                    <div>
                      <dl>
                        <dt>
                          <img
                            src='/assets/global/award/img/202105/Water_Saving_Toilets.png'
                            alt='Water Saving Toilets'
                          />
                        </dt>
                        <dd className='caption_one'>※Product Image</dd>
                        <dd>Water Saving Toilets</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </article>

              <p className='attention award_wrap'>
                ・“WASHLET” and “WASHLET logo” are trademark or registered trademark of TOTO LTD.
                <br />
                ・Products marked with * at the end are discontinued products.
              </p>
            </section>
          </section>

          {/* <div className="pager"><ul id="pager"></ul></div> */}
        </div>

        <div id='modal1' className='modal_box'>
          <div className='modal_contents' tabIndex={0} role='button'>
            <h3 className='modal_ttl01'>
              NEOREST<sup>®</sup> NX
            </h3>
            <ul className='record_list'>
              <li>
                <img src='/assets/global/award/img/if2018.png' alt='iF design award 2018' />
              </li>
              <li>
                <img src='/assets/global/award/img/reddot2018.png' alt='reddot winner 2018' />
              </li>
              <li>
                <img src='/assets/global/award/img/ggda2023.jpg' alt='Good Design Award 2023' />
              </li>
            </ul>
            <p className='modal_txt_ttl'>
              A graceful form that makes the most of the beauty inherent in ceramics.
              <br />
              This design is the result of ceramics technologies we have cultivated over many years.
            </p>
            <div className='slide'>
              <div>
                <img src='/assets/global/award/img/1-NEORESTNX_1.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/1-NEORESTNX_2.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/1-NEORESTNX_3.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/1-NEORESTNX_4.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/1-NEORESTNX_5.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/1-NEORESTNX_6.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/1-NEORESTNX_7.jpg' alt='X' />
              </div>
            </div>

            <p className='modal_txt03'>
              Released in 2017, the 100th anniversary of TOTO&apos;s founding, this is our top-of-the-line integrated
              toilet. We developed it to become the original integrated toilet with a view to “the future that lies
              beyond.” We have combined caramic craftmanship with technologies that provide the ultimate in cleanliness
              to pursue a previously unseen design, one that only TOTO can create.
              <br />
              <br />
              Our image was that of the white porcelain pots and vessels people have used since ancient times. We deeply
              pursued the beauty inherent to ceramics. Utilizing the natural beauty that only pottery can offer, we
              expressed an organic, graceful form. It is difficult to accurately reproduce ideal curves and curved
              surfaces with ceramic materials, which tend to deform during the firing process. The final design was the
              result of precise design expertise based on the intuition and experience of our skilled engineers.
              <br />
              <br />
              We also considered aesthetics, comfort, and ease of cleaning, and we aimed for a noiseless design with
              simplicity down to the smallest detail. The rear of the ceramic is raised, and internal parts are enclosed
              in ceramic. This allowed us to reduce the exposure of plastic parts, creating a style unique to this
              product. We also selected CMF (colors, materials, and finishes) for each part, such as metal parts in the
              lid hinges, with a focus on how beautiful we can make the ceramic look.
              <br />
              <br />
              The form when the lid is open is also stress-free for the user. In particular, the one piece toilet seat
              has no seams between the toilet seat and the rearward space, and the ergonomically designed seat surface
              aids excretion, eliminates unnecessary unevenness, and dramatically improve cleanability, while still
              providing a comfortable, spacious seat. NEOREST NX design brings together the best of TOTO technologies to
              provide our customers with the ultimate in relaxation. This is TOTO&apos;s flagship toilet bowl, which we
              consider as our heritage model.
            </p>
          </div>

          <span className='modal_close' tabIndex={0} role='button'></span>
        </div>

        <div id='modal2' className='modal_box'>
          <div className='modal_contents' tabIndex={0} role='button'>
            <h3 className='modal_ttl01'>
              NEOREST<sup>®</sup> WX
            </h3>
            <ul className='record_list'>
              <li>
                <img src='/assets/global/award/img/if2023.png' alt='iF design award 2023' />
              </li>
              <li>
                <img src='/assets/global/award/img/reddot2023.png' alt='reddot winner 2023' />
              </li>
              <li>
                <img src='/assets/global/award/img/ggda2023.jpg' alt='Good Design Award 2023' />
              </li>
            </ul>
            <p className='modal_txt_ttl'>
              A form that gently welcomes you. We aimed for a design that expresses senses of healing and security.
            </p>
            <div className='slide'>
              <div>
                <img src='/assets/global/award/img/2-NEORESTWX_1.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/2-NEORESTWX_2.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/2-NEORESTWX_3.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/2-NEORESTWX_4.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/2-NEORESTWX_5.jpg' alt='' />
              </div>
            </div>

            <p className='modal_txt03'>
              Our top-of-the-line model for wall-hung integrated toilets, developed for the overseas market. This is
              NEOREST WX.
              <br />
              <br />
              We finished it to provide a minimalist impression while incorporating a number of comfort functions based
              on our cutting-edge technologies.
              <br />
              <br />
              Our modeling concept was “Welcoming Geometries.” We took a design approach that gently welcomes.
              <br />
              <br />
              Wall-hung toilets are built-in equipment, so they must have an affinity with the architectural space. We
              therefore design their horizontal and vertical lines in the same manner as for architecture to realize an
              easy blend with walls and floors. The realization of NEOREST WX is thus based on geometry. We retain
              straightness in areas along the wall, but to create a softer impression for users, the overall form is
              that of a generously curved surface. We also worked hard to achieve a clean form by eliminating unevenness
              and gaps between parts and omitting complex modeling elements.
              <br />
              <br />
              In many bathrooms overseas, bathtubs washbasins, and toilets are located in the same room. Therefore,
              considering that the toilet bowl will be viewed from various angles, we added a three-dimensional rounded
              shape with the aim of creating a form like a piece of artwork floating off the wall when viewed from the
              side or at an angle. We mounted a nightlight beneath the toilet bowl to create a floating effect. This
              light fades in and out with a design for comfortable timing and brightness. These innovations create a
              light and soft impression.
              <br />
              <br />
              Another focus was beauty of form when the lid is open. We aimed for a very clean impression by eliminating
              unevenness and height differences to the extent possible. The cover that hides functional parts behind the
              toilet seat is designed so that the complex hinges area is always hidden. In addition to its beautiful
              appearance, the toilet seat section, which directly touches the skin, is delicately curved to provide
              users with a comfortable sitting experiences.
            </p>
          </div>

          <span className='modal_close' tabIndex={0} role='button'></span>
        </div>

        <div id='modal3' className='modal_box'>
          <div className='modal_contents' tabIndex={0} role='button'>
            <h3 className='modal_ttl01'>
              NEOREST<sup>®</sup> LS
            </h3>
            <ul className='record_list'>
              <li>
                <img src='/assets/global/award/img/if2022.png' alt='iF design award 2022' />
              </li>
              <li>
                <img src='/assets/global/award/img/reddot2022.png' alt='reddot winner 2022' />
              </li>
              <li>
                <img src='/assets/global/award/img/ggda2023.jpg' alt='Good Design Award 2023' />
              </li>
            </ul>
            <p className='modal_txt_ttl'>
              While controlling the inflection of straight lines and curves, the design realizes both harmony{' '}
              <br className='pc' />
              with the architectural space and a graceful character. <br className='pc' />
              The design subtly adds accents and allows for interior coordination.
            </p>
            {/* <!-- <p className="modal_txt02">　</p> --> */}
            <div className='slide'>
              <div>
                <img src='/assets/global/award/img/3-NEORESTLS_1.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/3-NEORESTLS_2.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/3-NEORESTLS_3.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/3-NEORESTLS_4.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/3-NEORESTLS_5.jpg' alt='' />
              </div>
            </div>

            <p className='modal_txt03'>
              NEOREST, TOTO&apos;s product brand for our integrated toilets, has always aimed to provide technological
              innovations and new designs, taking on the challenge of creating ideal living and comfortable spaces for
              our customers. NEOREST LS has inherited that spirit while evolving to meet the needs of the times.
              <br />
              <br />
              As increasingly many customers are looking for cleanliness in their bathroom, along with spacious comfort
              and individuality, our design team considered the concept of “Elegance and Luxury” for NEOREST LS design.
              <br />
              <br />
              We first focused on controlling inflections between sharp and gentler, softer lines. We designed the
              overall form to be extremely simple, presenting a clean appearance when included in an architectural
              space. For example, the straight lines on the back and sides allow the toilet to perfectly blend with
              walls. Meanwhile, to create the unique look, the sides are softly curved, creating an important line that
              characterizes the graceful character of NEOREST LS.
              <br />
              <br />
              Another feature is metallic accents that are exquisitely plump and taut. The form is such that metallic
              textures are calculated to sparkle with changes in the user&apos;s point of view and movements of the
              automatically opening and closing toilet lid. The design allows users to add subtle accents to the space
              according to their own sensibilities, like when choosing necklaces, earrings, or other accessories. The
              colors and textures of metallic accents can furthermore be coordinated with the paper holder, remote
              controller, and faucet fixtures in the washstand and bathroom. This allows the creation of harmonious
              spaces while enjoying interior coordination.
              <br />
              <br />A touch of luxury and individuality. The simplicity and subtle accents of a water fixture that will
              be used for a long time and never grow tiresome. This exquisite balance is the special quality of NEOREST
              LS.
            </p>
          </div>

          <span className='modal_close' tabIndex={0} role='button'></span>
        </div>

        <div id='modal4' className='modal_box'>
          <div className='modal_contents' tabIndex={0} role='button'>
            <h3 className='modal_ttl01'>FLOTATION TUB</h3>
            <ul className='record_list'>
              <li>
                <img src='/assets/global/award/img/reddot2020.png' alt='reddot winner 2020' />
              </li>
            </ul>
            <p className='modal_txt_ttl'>
              A sophisticated approach from both design and biomechatronics. This is a new concept for a bathtub form
              that scientifically produces relaxation of the body and mind from a stable bathing posture.
            </p>
            <div className='slide'>
              <div>
                <img src='/assets/global/award/img/4-Flotatation-tab_1.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/4-Flotatation-tab_2.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/4-Flotatation-tab_3.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/4-Flotatation-tab_4.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/4-Flotatation-tab_5.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/4-Flotatation-tab_6.jpg' alt='' />
              </div>
            </div>

            <p className='modal_txt03'>
              FLOTATION TUB is a bathtub that incorporates TOTO&apos;s proposed original bathing concept, called
              &quot;Shin yoku&quot; (the “reclining bath”). We developed this bathtub based on our original technologies
              for quantifying and analyzing relationships between vital data such as bathing posture, body temperature,
              and the physical sensations of comfort and relaxation. We are proud of our biomechatronics researchers,
              whose ideas have led to the creation of bathtubs that provide a relaxing bathing experience for both the
              body and the mind.
              <br />
              <br />
              Our designers and researchers go through trial-and-error processes to validate the form. We test reclining
              angles, water buoyancy, and various body shapes in a tank filled with warm water to find the optimum
              solution for a form that stabilizes the body even when it is relaxed during bathing. The result is a body
              posture very similar to that of astronauts in outer space. We later gave this bathtub form the technical
              name &quot;ZERO DIMENSION&quot; for its ability to induce a meditative state in the body and mind while
              the user is enveloped in a floating sensation.
              <br />
              <br />
              Our design requirements resulted from meticulous research. Our designers&apos; skill is shown in how these
              requirements were integrated into a beautiful design. Since bathtubs are used in the vulnerable state of
              nakedness, we sought to create a form that is comfortable to look at and to use, using the smoothest
              possible interior surfaces where they contact the skin. By smoothly connecting uneven surfaces, such as
              places to put your hands or feet, we have created a gentle design that is functional but also envelops the
              user. <br />
              <br />
              Our “HYDROHANDS” uses a powerful water flow that does not contain air to give the sensation of being
              rubbed by a massager&apos;s hands, and the headrest can be repositioned to accommodate a variety of body
              types from all over the world. These bathtubs offers the ultimate in relaxation, with careful attention
              paid to the bathing posture.
              <br />
              <br />
              The science and design of comfort is one of TOTO&apos;s specialties.
            </p>
          </div>

          <span className='modal_close' tabIndex={0} role='button'></span>
        </div>

        <div id='modal5' className='modal_box'>
          <div className='modal_contents' tabIndex={0} role='button'>
            <p className='modal_txt01'>　</p>
            <h3 className='modal_ttl01'>Washbasin TA</h3>
            <ul className='record_list'>
              <li>
                <img src='/assets/global/award/img/reddot2020.png' alt='reddot winner 2020' />
              </li>
            </ul>
            <p className='modal_txt_ttl'>
              Our goal is to create a form for comfortable relaxation. The asymmetries and fluctuations in nature create
              different expressions depending on the viewing angle, creating peaceful accents in daily life.
            </p>
            {/* <!-- <p className="modal_txt02">　</p> --> */}
            <div className='slide'>
              <div>
                <img src='/assets/global/award/img/5-TAseries_1.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/5-TAseries_2.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/5-TAseries_3.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/5-TAseries_4.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/5-TAseries_5.jpg' alt='' />
              </div>
            </div>

            <p className='modal_txt03'>
              The formative concept for washbasin TA (vessel-type) is “a form for a little more comfortable relaxation.”
              In recent years, increasingly many customers have come to feel that bathroom need to be not only efficient
              places for grooming, but also a beautiful and comfortable interior space. After surveying these needs, we
              arrived at the value of “forgetting busy days and living a relaxed, comfortable life.” We often use plants
              and natural stones in our interiors, we love old handicrafts such as woven baskets and carved wooden
              tools, and we think about the existence of nature and humans. Washbasin TA aims to express such peaceful
              moments through generous design.
              <br />
              <br />
              The most distinctive feature is an asymmetry of form, which gives a sense of gentle fluctuations inspired
              by the uneven structures that exist in the natural world. By daring to break from balance, we expressed
              the unique designs and comforts found in handcrafted works. Our impression of this form changes depending
              on the angle of view, creating various accents among everyday scenes.
              <br />
              <br />
              Our pursuit of such a relaxing atmosphere is reflected in the details. For example, the hole that prevents
              basin water from overflowing has an oval shape with no straight lines, expressing a sense of calmness. The
              overflow hole is placed at the sink&apos;s front so it is not easily visible during use, creating a less
              stressful impression. ZA series of faucets, developed at the same time, are formed based on the same
              concept, and were particularly designed to match washbasin TA. These light, soft contours create a relaxed
              expression in the space.
              <br />
              <br />
              Despite the new form, you easily become accustomed to it. It makes you feel at ease. That is the design we
              aimed for.
            </p>
          </div>

          <span className='modal_close' tabIndex={0} role='button'></span>
        </div>

        <div id='modal6' className='modal_box'>
          <div className='modal_contents' tabIndex={0} role='button'>
            <p className='modal_txt01'>　</p>
            <h3 className='modal_ttl01'>Washbasin TL</h3>
            <ul className='record_list'>
              <li>
                <img src='/assets/global/award/img/if2017gold.png' alt='iF design award gold 2017' />
              </li>
            </ul>
            <p className='modal_txt_ttl'>
              The shape is inspired by the primitive forms that water creates. <br className='pc' />
              We realized a design that, while expressed as freely curving lines, can receive water well.
            </p>
            {/* <!-- <p className="modal_txt02">　</p> --> */}
            <div className='slide'>
              <div>
                <img src='/assets/global/award/img/6-TLseries_1.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/6-TLseries_2.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/6-TLseries_3.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/6-TLseries_4.jpg' alt='' />
              </div>
            </div>

            <p className='modal_txt03'>
              The basin features a soft oval form that looks as if it has been naturally polished by water. Inspired by
              the primitive forms of stones that have been polished, chipped, and shaped by flowing water over a long
              period of time, like those found in clear streams, waves on the shore, and dripping water, washbasin TL is
              a washbasin series that uses free-form curves to express the essence of water receptacles.
              <br />
              <br />
              To express the delicate impression of the basin, the ceramic used is TOTO&apos;s original thin-walled base
              material, which allows a rim that is only 4 mm thick at its thinnest point, creating a more spacious
              opening than in conventional wash basins. The basin&apos;s 600mm wide, smoothly curved surface and rise
              are designed to securely hold water. We determined the bowl form through a series of operational
              verifications, with the aim of making even washing movements look more beautiful.
              <br />
              <br />
              This washbasin is included in TOTO&apos;s top-of-the-line NEOREST COLLECTIONS product line, and it has a
              high design affinity with our toilet bowls, bathtubs, and other items, including NEOREST NX and FLOTATION
              TUB, being designed with total spatial coordination in mind. It provides the point of contact between
              people and water a sense of presence. The entire series proposes the comfort of being close to and
              surrounded by water.
            </p>
          </div>

          <span className='modal_close' tabIndex={0} role='button'></span>
        </div>

        <div id='modal7' className='modal_box'>
          <div className='modal_contents' tabIndex={0} role='button'>
            <p className='modal_txt01'>Lavatory faucet (Single lever)</p>
            <h3 className='modal_ttl01'>ZA series</h3>
            <ul className='record_list'>
              <li>
                <img src='/assets/global/award/img/reddot2019.png' alt='reddot award 2019 winner' />
              </li>
            </ul>
            <p className='modal_txt_ttl'>
              The asymmetrical handle design is based on the concept of the fluctuating and uneven shapes{' '}
              <br className='pc' />
              created by nature. We utilized a stainless-steel material to achieve an extremely thin form.
            </p>
            {/* <!-- <p className="modal_txt02">　</p> --> */}
            <div className='slide'>
              <div>
                <img src='/assets/global/award/img/7-ZAWaterfaucet_1.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/7-ZAWaterfaucet_2.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/7-ZAWaterfaucet_3.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/7-ZAWaterfaucet_4.jpg' alt='' />
              </div>
            </div>
            <p className='modal_txt03'>
              ZA series is designed under the theme of “Asymmetrical.” The concept of this design is based on the
              asymmetry and fluctuations found in the natural world. It incorporates the primitive comfort one feels
              when touching natural objects. Our goal is to create a form that provides comfortable relaxation.
              <br />
              <br />
              We boldly made the upper handle shape asymmetrical to produce a unique visual feature. We focused on
              creating a form that always looks beautiful, no matter what position the handle is in. It is designed such
              that when your fingers touch the handle, you get a gentle, calm impression, like touching a pebble that
              has been naturally polished at the bottom of a river.
              <br />
              <br />
              To achieve this design, we took pains to design an ultra-thin spout and handle. The internal design
              achieves a minimum thickness that maintains sufficient strength and performance despite the thinness of
              the parts. We also used advanced TOTO-original stainless steel processing technologies to realize this
              design.
              <br />
              <br />
              At around the same time, we designed our washbasin TA (vessel-type) with a similar organic form to match
              styles when combined with ZA series. Their lightness and soft contours create a relaxed look in the space.
              The design makes users feel relaxed and at ease. We invite you to touch and experience them for yourself.
            </p>
          </div>

          <span className='modal_close' tabIndex={0} role='button'></span>
        </div>

        <div id='modal8' className='modal_box'>
          <div className='modal_contents' tabIndex={0} role='button'>
            <p className='modal_txt01'>Lavatory faucet (Single)</p>
            <h3 className='modal_ttl01'>GO series</h3>
            <ul className='record_list'>
              <li>
                <img
                  src='/assets/global/award/img/reddot2017bestofthebest.png'
                  alt='reddot award 2017 best of the best'
                />
              </li>
            </ul>
            <p className='modal_txt_ttl'>
              The organic design takes the free beauty of plants as a motif. <br className='pc' />
              The handle&apos;s curve fits comfortably in the hand, demonstrates our commitment to ease of use.
            </p>
            {/* <!-- <p className="modal_txt02">　</p> --> */}
            <div className='slide'>
              <div>
                <img src='/assets/global/award/img/8-GOseries_1.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/8-GOseries_2.jpg' alt='' />
              </div>
            </div>

            <p className='modal_txt03'>
              GO series takes its name from the initials of the words “gorgeous” and “organic.” As that name suggests,
              this faucet expresses beauty through its organic form.
              <br />
              <br />
              The motif is that of a well-watered, freely growing plant. The design maintains a good balance between
              bends, curved surfaces, and sharp edges. The body and handle are designed as a single unit with no height
              differences, and the faucet top is slightly tapered to create a sleek, sophisticated appearance. The soft,
              gentle form of the handle also makes it easy to grip. The smoothness of the handle&apos;s backside
              resulted from our pursuit of a curve that feels comfortable in the hand when using the faucet, allowing
              easy use for everyone from adults to children.
              <br />
              <br />
              The valve part, called COMFORT GLIDE, is a TOTO-original development focused on a high-quality tactile
              feeling that realizes always-smooth, comfortable operations. This valve has the performance to precisely
              control flow rates in the low-flow range, which has been a weakness of conventional single lever faucets.
              This realizes optimal water volume adjustments according to the daily usage, thereby reducing water
              wastage. TOTO faucet fittings thus deliver sustainable designs without compromising user experience.
            </p>
          </div>

          <span className='modal_close' tabIndex={0} role='button'></span>
        </div>

        <div id='modal10' className='modal_box'>
          <div className='modal_contents' tabIndex={0} role='button'>
            <p className='modal_txt01'>Touchless faucet</p>
            <h3 className='modal_ttl01'>TLE24 series</h3>
            <ul className='record_list'>
              <li>
                <img
                  src='/assets/global/award/img/reddot2021bestofthebest.png'
                  alt='reddot winner 2021 best of the best'
                />
              </li>
            </ul>
            <p className='modal_txt_ttl'>
              This design comprises generous arcs and taut curved surfaces. <br className='pc' />
              It adds elegance and dignity to public restroom spaces.
            </p>
            <div className='slide'>
              <div>
                <img src='/assets/global/award/img/11-TLE24_1.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/11-TLE24_2.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/11-TLE24_3.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/11-TLE24_4.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/11-TLE24_5.jpg' alt='' />
              </div>
            </div>

            <p className='modal_txt03'>
              These are touchless faucets that dispense water when the user extends a hand. These faucets, designed for
              use in public spaces, are increasingly in demand around the world due to their hygienic touchless
              operation and water saving features that dispense water only when its necessary. In response to this
              growing demand, we offer a wide range of automatic faucets with a variety of design tastes to match
              interiors.
              <br />
              <br />
              TLE24 series features a design composed of a taut curved surface along a long arc. This gently changing
              curved surface create subtle shadows and an elegant impression. The arched water discharge angle that
              produces the exterior tone is precisely calculated to ensure that water is discharged at the optimum
              position when users naturally extend their hands. To hide the sensor unit characteristic of automatic
              faucets, the sensor component is built into the faucet&apos;s tip, so it does not detract from the
              exterior design. Because there are no unnecessary external parts, cleaning is easy.
              <br />
              <br />
              The faucet also has a small, built-in impeller that rotates with the water flow during use to generate and
              store electricity. This allows the faucet to generate its own power to operate sensors and electric valves
              without electricity.
              <br />
              <br />
              In addition, our SOFT FLOW design discharges water in seven clear water columns, combining a delicate
              beauty with water conservation. This design reduces the burden on the global environment while maintaining
              a beautiful water flow and the comfort of water hitting the hand.
            </p>
          </div>

          <span className='modal_close' tabIndex={0} role='button'></span>
        </div>

        <div id='modal11' className='modal_box'>
          <div className='modal_contents' tabIndex={0} role='button'>
            <p className='modal_txt01'>Touchless faucet</p>
            <h3 className='modal_ttl01'>TLE26 series</h3>
            <ul className='record_list'>
              <li>
                <img src='/assets/global/award/img/reddot2021.png' alt='reddot winner 2021' />
              </li>
            </ul>
            <p className='modal_txt_ttl'>
              The simple cylindrical form is intuitively designed for long-term comfortable use. The design for an
              optimal water discharge position, the faucet-tip sensor, and other subtle features add to the abundant
              comfort.
            </p>
            {/* <!-- <p className="modal_txt02">　</p> --> */}
            <div className='slide'>
              <div>
                <img src='/assets/global/award/img/11-TLE26_1.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/11-TLE26_2.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/11-TLE26_3.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/11-TLE26_4.jpg' alt='' />
              </div>
            </div>

            <p className='modal_txt03'>
              Touchless faucets that run water just by holding out one&apos;s hand. Because they are used in public
              spaces around the world, these faucets require a simplicity of design that allows any user to use them
              comfortably and without hesitation. Even the design of TLE26 series, which looks basic and mundane,
              exemplifies our utmost efforts to eliminate user stress.
              <br />
              <br />
              For example, the cylindrical arch and the water discharge angle are precisely calculated to ensure that
              when users naturally extend their hands, the water discharge hits the optimum position. We also situated
              the sensor component at the faucet tip so that the sensor unit that is characteristic of touchless faucets
              is hidden and does not detract from the exterior design. The design is beautiful and easy to clean because
              there are no unnecessary external parts.
              <br />
              <br />
              The faucet also has a small built-in impeller that rotates with the water flow during use to generate and
              store electricity. This allows the faucet to generate its own power to operate sensors and electric valves
              without electricity. In addition, by increasing the amount of air contained in the water discharge, a
              sense of a generous amount of water can be provided while still reducing water consumption.
              <br />
              <br />
              The simplicity of a waste-free, stripped-down design belies a rich sense of comfort. Users are encouraged
              to use faucets comfortably and without thought, and TOTO has considered the difficulties involved in
              achieving this. TOTO Design Philosophy is for “Understated Presence.” It is our aesthetic to provide what
              is important in a casual manner.
            </p>
          </div>

          <span className='modal_close' tabIndex={0} role='button'></span>
        </div>

        <div id='modal12' className='modal_box'>
          <div className='modal_contents' tabIndex={0} role='button'>
            <h3 className='modal_ttl01'>Z selection Shower Column</h3>
            <ul className='record_list'>
              <li>
                <img src='/assets/global/award/img/if2022.png' alt='iF design award 2022' />
              </li>
            </ul>
            <p className='modal_txt_ttl'>
              An integrated unit for showering with a rich and comfortable bathing experience <br className='pc' />
              and convenient bathing accessory storage. <br className='pc' />
              We offer a design that is easy to use and beautifully tidy, even when used without thought.
            </p>
            {/* <!-- <p className="modal_txt02">　</p> --> */}
            <div className='slide'>
              <div>
                <img src='/assets/global/award/img/12-Gserectionshoer_1.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/12-Gserectionshoer_2.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/12-Gserectionshoer_3.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/12-Gserectionshoer_4.jpg' alt='' />
              </div>
            </div>

            <p className='modal_txt03'>
              This shower column beautifully stores bathing accessories while providing a rich and comfortable shower.
              The shower provides two water delivery modes: COMFORT WAVE, which saves water while still providing a
              rich, comfortable shower, and WARM SPA, which efficiently warms and relaxes the body. It provides a
              pleasant, satisfying experience even in a short period of time. The thin, sharp overhead shower is
              designed with a nozzle that provides a visually rich bathing experience, making the flow of water appear
              beautiful.
              <br />
              <br />
              The shelf is designed for ease of use while showering. The front control panel has push buttons for
              switching water discharge modes, allowing one-touch operation. The flow and temperature adjustment handles
              have a metal surface finish for a high-quality design and are easily operated even with wet hands. In
              addition, the shelves are designed to not only beautifully accommodate bottles and body brushes, but also
              provide good drainage and easy access to the shower hose and hand shower. Moments while showering with
              closed eyes. Moments when putting down a sponge while washing your body. We always aim for beautiful
              designs that solve problems by considering each user action and imagining the small inconveniences that
              can occur in various usage scenarios. Paying close attention to details like this is the most
              time-consuming task for bathroom designers.
            </p>
          </div>

          <span className='modal_close' tabIndex={0} role='button'></span>
        </div>

        <div id='modal13' className='modal_box'>
          <div className='modal_contents' tabIndex={0} role='button'>
            <h3 className='modal_ttl01'>THE CRASSO Prefabricateed kitchen</h3>
            <ul className='record_list'>
              <li>
                <img
                  src='/assets/global/award/img/reddot2023bestofthebest.png'
                  alt='reddot winner 2023 best of the best'
                />
              </li>
            </ul>
            <p className='modal_txt_ttl'>
              We create “noiseless designs” that harmonize with the space. Crystal Counter controls light and shadow to
              create expressions for a kitchen of light created by TOTO&apos;s original technologies.
            </p>

            <div className='slide'>
              <div>
                <img src='/assets/global/award/img/13-THECRASSO_1.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/13-THECRASSO_2.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/13-THECRASSO_3.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/13-THECRASSO_4.jpg' alt='' />
              </div>
              <div>
                <img src='/assets/global/award/img/13-THECRASSO_5.jpg' alt='' />
              </div>
            </div>

            <p className='modal_txt03'>
              As a component of a living space, a kitchen must beautifully harmonize with that space while at the same
              time demonstrating its functionality. That is what is required in kitchen design. When designing THE
              CRASSO, we focused on two aspects: a noiseless design and enjoyable materials.
              <br />
              <br />
              A noiseless design is one where there are no disturbances, allowing it to blend into the space. For
              example, a kitchen should blend in as a simple box with no extraneous unevenness or gaps. To that end, we
              adopted horizontal and vertical notes that blend well with the architecture, thoroughly eliminating
              unnecessary elements. This is a rule we impose for the forms of all TOTO kitchen components, including our
              cabinets, countertops, sinks, and faucets.
              <br />
              <br />
              An example is our multifunctional Kitchen Faucet LF. Even such items with multiple functions are designed
              to be unobtrusive in the space. The simple form, the small sensor unit, the design with no screws on the
              back visible from the living room. We are particular about unobtrusive details so that the product will
              look its best in the home. This is the aesthetic of TOTO designers.
              <br />
              <br />
              The other aspect is “enjoyable materials,” which refers to our variety of design components meeting the
              various preferences of our customers. In particular, “Crystal Counter,” a transparent counter material
              developed with our original technology, softly diffuses light and suppresses shadows. It brightens the
              kitchen, makes food look delicious, and beautifully reflects faucets and cutlery.
              <br />
              <br />
              We also achieve this by layering delicate expression techniques in the details, such as pattern designs,
              the balance of polishing and beveling angles on edges, and coloring technique for light diffusion.
              <br />
              <br />
              Combining various designs and creating new expressions is our value.
            </p>
          </div>
          <span className='modal_close' tabIndex={0} role='button'></span>
        </div>
      </div>

      <div className='modal_bg'></div>
    </>
  );
};

export default Zh;
