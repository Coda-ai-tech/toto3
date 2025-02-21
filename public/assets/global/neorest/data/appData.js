const appData = () => ({
  // Change the item(s) below to modify the burger menu or the text of the footer item(s).//
  menu: {
    labels: {
      top: 'CONTENTS TOP',
      global: 'NEOREST TOP',
      movie: 'MOVIE',
      designConcept: 'Design Concept',
      designStory: 'Design Story',
      primeFunction: 'Prime Function',
      interiorPlanning: 'Interior Planning',
      globalReference: 'NEOREST Global Reference',
      collections: 'Collections',
      flotationtub: 'FLOTATION TUB',
      washbasin: 'AUTO FAUCET WASHBASIN',
      specialMessage: '30th Message',
      specialHistory: 'History',
    },
    globalLink: 'https://www.toto.com/en/neorest/',
    //グローバルリファレンス外部URL（コメントアウトで内部リンク）
    //globalReferenceLink: 'https://www.toto.com/jp/neorest/',
    //snsList: {
      //title: 'SNS',
      //links: [
       //{ label: 'Instagram', href: '#' },
        //{ label: 'YouTube', href: '#' },
        //{ label: 'Facebook', href: '#' },
      //],
   //},
  },

  footer: {
    labels: {
      termsOfUse: 'Terms of use',
    },
  },

  //Change the item(s) below to modify the text of the common items or the setting of the link(s) on the each page.//
  //---------------------------------------------------------------//
  //Use “titleRuby” if necessary as the main title is fixed.
  //Change the item(s) below to modify the setting of the movie link in “PrimeFunction”. These items are common among the four products.
  //---------------------------------------------------------------//

  pageCommon: {
    designConcept: {
      //titleRuby: 'dummy',
      detailTitle: 'Design Detail',
    },
    designStory: {
      //titleRuby: 'dummy',
      thinkTitle: 'Imaginations\nand design',
      detailTitle: 'Detail',
      developTitle: 'Development\n　　　Background',
    },
    primeFunction: {
      //titleRuby: 'dummy',
      sectionTitles: ['CLEAN\nTECHNOLOGY', 'CLEANSING\nTECHNOLOGY', 'COMFORT\nTECHNOLOGY'],
      functions: {
        eWaterBowl: {
          label: 'EWATER+ for BOWL',
          movieSrc: 'https://players.brightcove.net/4631489730001/rk0k6hBD_default/index.html?videoId=6258709552001&autoplay=muted',
          // desc: 'トイレの菌を抑制する。',
        },
        eWaterWand: {
          label: 'EWATER+ for WAND',
          movieSrc: 'https://players.brightcove.net/4631489730001/rk0k6hBD_default/index.html?videoId=6008630997001&autoplay=muted',
          // desc: 'ノズルの菌を抑制する。',
        },
        eWaterUnder: {
          label: 'EWATER+ for UNDER SEAT',
          movieSrc: 'https://players.brightcove.net/4631489730001/rk0k6hBD_default/index.html?videoId=6303786113001&autoplay=muted',
          // desc: '',
        },
        cefiontect: {
          label: 'CEFIONTECT',
          movieSrc: 'https://players.brightcove.net/4631489730001/rk0k6hBD_default/index.html?videoId=6008621059001&autoplay=muted',
          // desc: '汚れを滑らせる。',
        },
        premist: {
          label: 'PREMIST',
          movieSrc: 'https://players.brightcove.net/4631489730001/rk0k6hBD_default/index.html?videoId=5848731343001&autoplay=muted',
          // desc: '汚れを浮かせる。',
        },
        tornadoFlush: {
          label: 'TORNADO FLUSH',
          movieSrc: 'https://players.brightcove.net/4631489730001/rk0k6hBD_default/index.html?videoId=6008625007001&autoplay=muted',
          // desc: '汚物をきれいに流しきる。',
        },
        rimless: {
          label: 'RIMLESS',
          movieSrc: 'https://players.brightcove.net/4631489730001/rk0k6hBD_default/index.html?videoId=6258707251001&autoplay=muted',
          // desc: 'トイレ掃除は“さっとひとふき”で、お掃除ラクラク。',
        },
        wonderWave: {
          label: 'AIR-IN WONDER-WAVE',
          movieSrc: 'https://players.brightcove.net/4631489730001/rk0k6hBD_default/index.html?videoId=5848727854001&autoplay=muted',
          // desc: 'しっかり、たっぷり、洗える。その上いつでも温かく。',
        },
        autoOpenClose: {
          label: 'AUTO OPEN/CLOSE LID',
          movieSrc: 'https://players.brightcove.net/4631489730001/rk0k6hBD_default/index.html?videoId=5848727855001&autoplay=muted',
          // desc: '便器に近づくと自動で便ふたが開き、離れると閉まる。誰にでも使いやすい。',
        },
        heatedSeat: {
          label: 'HEATED SEAT',
          movieSrc: 'https://players.brightcove.net/4631489730001/rk0k6hBD_default/index.html?videoId=5848728984001&autoplay=muted',
          // desc: '使用するときだけ暖めて、使わない時は節電。もちろんいつでも快適な状態をお約束。',
        },
        deodorizer: {
          label: 'DEODORIZER',
          movieSrc: 'https://players.brightcove.net/4631489730001/rk0k6hBD_default/index.html?videoId=5848730329001&autoplay=muted',
          // desc: '高い効果を持つ消臭機能が使用中と使用直後にトイレボウルの内側で自動的に作動。イヤなニオイを残さず快適空間に。',
        },
        autoFlush: {
          label: 'AUTO FLUSH',
          movieSrc: 'https://players.brightcove.net/4631489730001/rk0k6hBD_default/index.html?videoId=5848728981001&autoplay=muted',
          // desc: 'ボタンやハンドルに触れることなく、使用後に自動洗浄。もちろん誰かの流し忘れを心配する必要はありません。',
        },
        warmAir: {
          label: 'WARM AIR DRYING',
          movieSrc: 'https://players.brightcove.net/4631489730001/rk0k6hBD_default/index.html?videoId=5848729848001&autoplay=muted',
          // desc: '',
        },
        softLight: {
          label: 'SOFT LIGHT',
          movieSrc: 'https://players.brightcove.net/4631489730001/rk0k6hBD_default/index.html?videoId=5848728985001&autoplay=muted',
          // desc: '近づくとやさしい光が点灯。夜間にトイレ照明のまぶしさを感じる必要はありません。',
        },
      },
      banner: {
        title: 'All function',
        href: 'https://www.toto.com/en/cleanovation/clean-synergy.htm',
        img: 'img/function-banner.jpg',
        alt: 'CLEAN SYNERGY Technology & Design',
      },
    },
    interiorPlanning: {
      //titleRuby: 'dummy',
    },
    collections: {
      videoLabel: 'WATCH VIDEO',
    },
    collectionsIndex: {
      movieLabelTop: 'Life Anew',
      movieLabelBottom: 'Movie strat',
      detailLabel: 'Detailed products',
      flotationtubLabel: `FLOTATION\nTUB`,
      washbasinLabel: `AUTO FAUCET\nWASHBASIN`,
    },
    // collectionsConcept: {
    //   titleLead: `Exquisite craftsmanship<br class="view-sp" />produces the elegance<br class="view-pc" />of<br class="view-sp" />organic artisan sculpture and<br class="view-sp" />advanced technologies<br class="view-pc" />offer<br class="view-sp" />the highest hygienic standards.<br />The pinnacle of integrated<br class="view-sp" />toilet design.`,
    //   detailTitle: `Every moment of every day,\nenjoy the cleanliness and\ncomforts of Life Anew.`,
    //   detailLead: `最先端のテクノロジーが、常に清潔な状態を保ち、レストルーム空間をいつも居心地のよい快適な場所へ。`,
    //   detailImgTitle: `Cycle of Cleanliness and Comfort`,
    //   cleanTitle: `CLEAN SYNERGY`,
    //   cleanLead: `Your toilet reappears clean anew every time.`,
    //   washletTitle: `WASHLET<span class="_tm">TM</span> TECHNOLOGIES`,
    //   washletLead: `Hygienic washing with WASHLET does what wiping with toilet paper\ncan't : leave you feeling clean and comfortable.`,
    //   hospitalityTitle: `おもてなし機能`,
    //   hospitalityLead: `「ウォシュレット」のたくさんのおもてなし機能で、あなたの毎日を清潔で快適に。`,
    //   hospitalityMovieSrc: 'https://players.brightcove.net/4631489730001/rk0k6hBD_default/index.html?videoId=5348595569001&autoplay=muted',
    // },
  },

  // The setting of texts and links on each page//
  pages: {
    top: {
      statementHtml: `Visionary technology.
Exquisitely designed for
comfort and well-being.

Born of science and our belief
in everyday wellness to
rejuvenate body and mind.

NEOREST<sub>®</sub>.
The only one.
A new form of pure luxury brought to life.`,
      buttonLabel: 'ENTER',
      skipLabel: 'DIRECTLY TO CONTENTS',
    },

    // The setting of HOME (3D museum)
    home: {
      // Change the item(s) below to modify the link(s) of the main movie.
      movieTitle: 'INTRODUCTION MOVIE',
      movieSrc: 'https://players.brightcove.net/4631489730001/rk0k6hBD_default/index.html?videoId=6303773901001&autoplay=play',
      collectionsTitle: 'COLLECTIONS',
      collectionsLead: ``,

      //Change the item(s) below to modify the text of the round-shaped link buttons on the “TOP” page.//
      buttonLabels: {
        designConcept: 'Design\nConcept',
        designStory: 'Design\nStory',
        primeFunction: 'Prime\nFunction',
        interiorPlanning: 'Interior\nPlanning',
        globalReference: 'NEOREST\nGlobal\nReference',
        collections: 'Collections',
      },
    },

    //Change the item(s) below to modify the text of “DesignConcept”, “DesignHistory” and “InteriorPlanning” of the each product.//
    nx: {
      titleLead: `The elegant curvaceous silhouette enhances\nthe beauty of the ceramic texture.\nExquisite from every angle,\nthe design exudes a presence like no other.`,
      movieSrc: 'https://players.brightcove.net/4631489730001/rk0k6hBD_default/index.html?videoId=6303784982001&autoplay=play',
    },
    'nx-story': {
      thinkText: `The development of NEOREST NX began with the aim of designing the next-generation toilet in looking 100 years into the future as TOTO celebrates its 100th-year anniversary. “What is appropriate for a restroom where people relax is something that offers comfort and meets people’s emotional needs.” The designer, Yuji Yoshioka, aimed to create something that in itself had presence as an attractive product, and not just as one element of the space inside the restroom.`,
      detailTexts: [
        `“Ceramics change shape during firing. That’s what makes it different from resins and metals that are easy to form into straight shapes. I thought a rounded shape taking advantage of this property would be most natural for bringing out its softness and elegance, like an antique porcelain jar.” It was based on this concept that NX was designed in pursuit of optimizing the natural beauty of the ceramic material.`,
        `Knowhow was gathered from a variety of divisions, but there was one obstacle that Yoshioka wanted to clear at all cost as the model gradually began to take shape. It was to change the appearance of the bowl itself, so that it wouldn’t look like a conventional toilet the moment the lid was opened, regardless of how beautiful it appeared with the lid closed. This model embodies the meticulous attention paid to detail, with an ideal, beautiful and integrated design even with the lid open, achieved by eliminating gaps and seams around the hinges.`,
      ],
      developText: `NEOREST NX was made by making full use of advanced ceramics technology and knowhow to ensure consistency in their shape, as well as analytical technology and CT data to predict the amount by which they will deform during firing.The unrivaled design of NEOREST NX is like a work of art created through the fusion of a unique design concept with developmental technology.`,
    },
    'nx-planning': {
      itemTitles: ['Zero reset', 'Blissful moment', 'Blissful moment', 'Exclusively yours', 'Exclusively yours', 'Exclusively yours'],
    },
    wx: {
      titleLead: `A gentle shape that provides users\nwith comfort and a sense of security.\nThe universal beauty of the WX harmonizes\nwith refined interiors.
`,
      movieSrc: 'https://players.brightcove.net/4631489730001/rk0k6hBD_default/index.html?videoId=6325286824112&autoplay=play',
    },
    'wx-story': {
      thinkText: `TOTO spent over three years conducting interviews, primarily in Europe, as it designed the shape of the WX, which resonates with the sensibilities of sophisticated spaces, providing relaxation and peace of mind. It harmonizes with the exquisite aesthetic tastes of owners who understand true innate value. We sought to create a form that welcomed users, both in body and in spirit, and the fruit of our efforts was a sense of solidity that users would want to feel themselves.`,
      detailTexts: [
        `To create this sense of solidity that users would want to feel, our designers took the uniquely soft, beautiful lines of ceramic to their limits. They smoothed away every inorganic element to produce a true feeling of uniformity.`,
        `The unique floating feel of the WX, which feels like it is floating out of the wall, was produced by the rounded lines of the bottom of the bowl and by using gentle curvature at the rear of the bowl, hiding the lines where the toilet touches the wall. This light, floating feel, created with painstaking attention to detail, is part of the essence of the WX, which creates a serene space infused with a feeling of security.`,
        `When the lid is opened, the toilet has a flat, fresh sense of cohesion. Its beauty is a hallmark of TOTO, which emphasizes clean, sophisticated designs. We sought to create a shape whose essential and functional beauty would relax both mind and body.`,
      ],
      detailImageLabel: {
        newSubstrate: '　',
        convSubstrate: '　',
        convToilet: '　',
        neorestToilet: '　',
      },
      developText: `WASHLET mechanism is built into the interior of the WX ceramic bowl. Precise manufacturing minimizes the gap between the lid and the bowl, producing a unified, beautiful finish without unevenness, no matter which angle the toilet is seen from.The WX is the culmination of TOTO's technical strengths, carefully designed with an organic form that eliminates any sort of mechanical feel and ensures a gentle aesthetic.`,
    },
    'wx-planning': {
      itemTitles: ['Invitation to extraordinary', 'Invitation to extraordinary', 'Invitation to extraordinary', 'Invitation to extraordinary'],
    },
    ls: {
      titleLead:`This model has a smooth curved shape with\nmodulations accentuated by the vividness of\ncombining different materials. It has a gorgeous\ndesign offering elegance and gracefulness.`,
      movieSrc: 'https://players.brightcove.net/4631489730001/rk0k6hBD_default/index.html?videoId=6303786473001&autoplay=play',
      detail2Title: 'Variation',
      detail2TextNickel: 'An expression of refined elegance : Nickel',
      detail2TextBlack: 'An impression of contemporary sophistication : Black',
    },
    'ls-story': {
      thinkText: `NEOREST LS is newly added to NEOREST Series, this time. It is a revolutionary model developed in search of the meaning behind NEOREST brand throughout its history, and with the aim of offering customers unprecedented value. We strived in pursuit of “creating hotel-like comfortable spaces” and “elegance,” while making use of high-quality materials that would allow the toilet to blend into its surroundings.`,
      thinkText2: `The designer reflects on the concept behind LS saying, “The toilet is something we see every day. So, it has to have a design that’s appealing not only at first sight, but for many years after that too. A design may be appealing today, but it may lose its appeal by the following day. I confronted this issue and strived to make careful adjustments to the design.”`,
      detailTexts: [
        `Particular attention was paid to the elegant curved shape that would allow the toilet to blend into its surroundings, in order to realize a design that would appear beautiful from any angle at any time. As the designer says, “The straight lines giving it a sense of stability are combined with a smooth curved shape to gently envelope the user’s body.”`,
        `This design embodies the meticulous attention paid to the designer’s intention to offer comfort and relaxation at all times.Furthermore, the metallic color between the lid and bowl of NEOREST LS creates a design accent. The designer says, “Covering the entire product with color will make it monotonous. I also wanted to eliminate gaps and seams as much as possible. So, it was a unique experience realizing that I could make clever use of this part to accentuate its beauty.”`,
       `He goes on to say, “I wanted it to harmonize with other materials used in the surrounding space, and blend in, while making the design gorgeous like an accessory.” This testifies to the designer’s pursuit of balance between the toilet’s functionality and surrounding space, from the perspective of users with a strong sense of aesthetics. The designer also strived for perfection in the overall design of restrooms, including coordinated remote controls, faucets and showers.`,
      ],
      developText: `The cleanliness and beauty of a fully skirted ceramic apron, combined with the low and gentle curved design, were not technologically easy to achieve. It involved the making of fundamental changes to molding techniques, and took four years to complete after repeated adjustments to ensure the installing of necessary functions within the limited space available…. Many challenges had to be overcome in creating NEOREST LS in pursuit of elegance.`,
    },
    'ls-planning': {
      itemTitles: [
        'Graceful harmony',
        'Graceful harmony',
        'Graceful harmony',
        'Black gorgeousness',
        'Black gorgeousness',
      ],
    },
    as: {
      titleLead: `Straight lines create a seamless and sharp form.\nThe delicate beauty created\nby the clean lines gives this model\na hygienic and exquisite appearance.`,
      movieSrc: 'https://players.brightcove.net/4631489730001/rk0k6hBD_default/index.html?videoId=6303786842001&autoplay=play',
    },
    'as-story': {
      thinkText: `The story of the designing of NEOREST AS stretches back to 2006. This single image testifies to the clean and smart design that TOTO was aiming for at the time. It is an image of NEOREST A, the predecessor to NEOREST AS. With a simple and elegant design, this picture drawn 16 years ago was always at the back of the minds of the designer and design engineer, becoming the basis for the development of NEOREST AS, which began in 2015.`,
      thinkNote: `*TOTO established a new field in “design engineering” with the aim of fusing designing with technologies at an advanced level. Product designers specialize in overall production, while design engineers oversee digital modeling and design application to enhance the design quality of products.`,
      detailTexts: [
        `“What we aimed for was the ultimate noiseless design. But this can’t be described in a single sentence.” The designer involved in designing NEOREST AS over many years strived for perfection in ways that were almost beyond description.`,
        `The meticulousness and perfection in every single line and gap incorporated into the model by the designer, was reflected in the modeling carried out by the design engineer. A member of the developmental staff claims, “Lines we wanted to be straight ended up curving over and over again. We made no compromises, and each time this happened, the team came together in solidarity to look for countermeasures.”`,
        `They spent several years coming up with the clean and smooth design of TOTO’s flagship model, which underwent countless changes and adjustments. The designer breaks out into a smile saying, “We finally achieved the quality we were aiming for.” The result was an unprecedented level of perfection in the clean lines and seamless integration of the ceramic bowl with the controls.`,
      ],
      detailImage1Label: 'Conventional type',
      detailImage2Label: 'New type',
      developText: `Despite prioritizing design, they succeeded in downsizing the controls by 25 % in accordance with TOTO’s policy of not sacrificing operability or functionality. The ultimate noiseless design, at the pinnacle of technology and beauty, took 16 years to complete.`,
    },
    'as-planning': {
      itemTitles: ['Relaxing calm moments', 'Relaxing calm moments', 'Relaxing calm moments'],
    },
    rs: {
      titleLead: `This model has an integrated,\nelegant curvaceous silhouette.\nThe softly rounded form leaves a warm\nand gentle impression.`,
      movieSrc: 'https://players.brightcove.net/4631489730001/rk0k6hBD_default/index.html?videoId=6303786866001&autoplay=play',
    },
    'rs-story': {
      thinkText: `NEOREST RS realizes a noiseless design that is simple and gentle, with a charming and softly rounded form. Exuding a unique sense of softness, it was developed by the designer and design engineer based on the concept of offering “a space where the entire family, young and old, can relax. A brightly lit space designed to evoke images of a forest with rays of light filtering through the trees.”`,
      thinkNote: `*TOTO established a new field in “design engineering” with the aim of fusing designing with technologies at an advanced level. Product designers specialize in overall production, while design engineers oversee digital modeling and design application to enhance the design quality of products.`,
      detailTexts: [
        `The designer paid particular attention to its “softly rounded form.” But what are the parameters of a rounded form that people find pleasing? There are no simple answers to this question. But based on the designer’s mental image, the design engineer studied a variety of products with rounded shapes in our daily lives, and carried out meticulous and repeated digital modeling.`,
        `They claim, “We strived in pursuit of a rounded form that was just right for NEOREST by paying attention to the slightest changes in the curves, and taking into account the lighting inside the restroom, as well as the way light from the window reflected off its surface.”`,
      ],
      etailImage1Sup: 'Sudden change in curvature toward edges',
      detailImage1Label: 'Somewhat angular impression',
      detailImage2Sup: 'Gradual change in curvature',
      detailImage2Label: 'Soft impression',
      developText: `“The smooth form with clean lines result in an integrated appearance and highlight the elegant curves of the lid.” As with NEOREST AS, this testifies to the passion for craftsmanship of the design team and development staff who collaborated on its design.`,
    },
    'rs-planning': {
      itemTitles: ['Peaceful cocoon', 'Peaceful cocoon', 'Peaceful cocoon'],
    },


 //The setting of Global reference//
    //---------------------------------------------------------------//
    // “linkItems” is addable. 
    //The first “linkItems” is for the layout of the first row. This setting is fixed. 
    //As for the items below the second row, add 2 items as a set for one row
    //(1 item can be added although the image is to be displayed on the left half).
    //The aspect ratio of the images are fixed respectively.
    //The designated aspect ratio of the images are recommended.
    //---------------------------------------------------------------//

    reference: {
      //titleRuby: 'dummy',
      linkItems: [
        {
          'name': 'HOSHINO RESORTS KASUKE TIANTAI',
          'href': 'https://www.toto.com/project/hoshino_resorts_kasuke_tiantai.htm',
          'img': 'img/reference/image01.jpg',
          'imgSp': 'img/reference/image01-sp.jpg'
        },
        {
          'name': 'SHANGRI-LA QIANTAN, SHANGHAI',
          'href': 'https://www.toto.com/project/shangri-la_qiantan.htm',
          'img': 'img/reference/image02.jpg',
          'imgSp': 'img/reference/image02-sp.jpg'
        },
        {
          'name': 'FOUR SEASONS HOTEL LONDON AT PARK LANE',
          'href': 'https://www.toto.com/project/four-seasons-london.htm',
          'img': 'img/reference/image03.jpg',
          'imgSp': 'img/reference/image03-sp.jpg'
        },
        {
          'name': 'W MELBOURNE',
          'href': 'https://www.toto.com/project/w-melbourne.htm',
          'img': 'img/reference/image04.jpg',
          'imgSp': 'img/reference/image04-sp.jpg'
        },
        {
          'name': 'Park Hyatt Paris-Vendome Hotel',
          'href': 'https://www.toto.com/project/pdf/reference59.pdf',
          'img': 'img/reference/image05.jpg',
          'imgSp': 'img/reference/image05-sp.jpg'
        },
        {
          'name': 'May Fair Hotel,London',
          'href': 'https://www.toto.com/project/pdf/reference57.pdf',
          'img': 'img/reference/image06.jpg',
          'imgSp': 'img/reference/image06-sp.jpg'
        },
        {
          'name': 'Hotel Connaught,London',
          'href': 'https://www.toto.com/project/pdf/reference56.pdf',
          'img': 'img/reference/image07.jpg',
          'imgSp': 'img/reference/image07-sp.jpg'
        },
        {
          'name': 'Mandarin Oriental,Munich',
          'href': 'https://www.toto.com/project/pdf/reference55.pdf',
          'img': 'img/reference/image08.jpg',
          'imgSp': 'img/reference/image08-sp.jpg'
        },
        {
          'name': 'The Okura Prestage Taipei',
          'href': 'https://www.toto.com/project/pdf/reference47.pdf',
          'img': 'img/reference/image09.jpg',
          'imgSp': 'img/reference/image09-sp.jpg'
        },
        {
          'name': 'Le Meridien Taioei',
          'href': 'https://www.toto.com/project/pdf/reference46.pdf',
          'img': 'img/reference/image10.jpg',
          'imgSp': 'img/reference/image10-sp.jpg'
        },
        {
          'name': 'Waldrf Astoria Shanghai On The Bund',
          'href': 'https://www.toto.com/project/pdf/reference41.pdf',
          'img': 'img/reference/image11.jpg',
          'imgSp': 'img/reference/image11-sp.jpg'
        },
        {
          'name': 'Banyan Tree Changqing Beibei',
          'href': 'https://www.toto.com/project/pdf/reference40.pdf',
          'img': 'img/reference/image12.jpg',
          'imgSp': 'img/reference/image12-sp.jpg'
        },
        {
          'name': 'Conrad Beijing',
          'href': 'https://www.toto.com/project/pdf/reference31.pdf',
          'img': 'img/reference/image13.jpg',
          'imgSp': 'img/reference/image13-sp.jpg'
        },
        {
          'name': 'The Westin Changqing Liberation Square',
          'href': 'https://www.toto.com/project/pdf/reference30.pdf',
          'img': 'img/reference/image14.jpg',
          'imgSp': 'img/reference/image14-sp.jpg'
        },
        {
          'name': 'Waldorf Astoria Beijing',
          'href': 'https://www.toto.com/project/pdf/reference29.pdf',
          'img': 'img/reference/image15.jpg',
          'imgSp': 'img/reference/image15-sp.jpg'
        },
        {
          'name': 'Banyan Tree Shanghai On The Bund',
          'href': 'https://www.toto.com/project/pdf/reference28.pdf',
          'img': 'img/reference/image16.jpg',
          'imgSp': 'img/reference/image16-sp.jpg'
        },
        {
          'name': 'Park Hyatt Sanya Sunny Bay Resort',
          'href': 'https://www.toto.com/project/pdf/reference27.pdf',
          'img': 'img/reference/image17.jpg',
          'imgSp': 'img/reference/image17-sp.jpg'
        },
        {
          'name': 'Rosewood Hotel,London',
          'href': 'https://www.toto.com/project/pdf/reference21.pdf',
          'img': 'img/reference/image18.jpg',
          'imgSp': 'img/reference/image18-sp.jpg'
        },
        {
          'name': 'Schloss Elmau',
          'href': 'https://www.toto.com/project/pdf/reference20.pdf',
          'img': 'img/reference/image19.jpg',
          'imgSp': 'img/reference/image19-sp.jpg'
        },
        {
          'name': 'Lotte Hotel Hanoi',
          'href': 'https://www.toto.com/project/pdf/reference19.pdf',
          'img': 'img/reference/image20.jpg',
          'imgSp': 'img/reference/image20-sp.jpg'
        },
        {
          'name': 'Hotel 7132,Vals Switzerland',
          'href': 'https://www.toto.com/project/pdf/reference15.pdf',
          'img': 'img/reference/image21.jpg',
          'imgSp': 'img/reference/image21-sp.jpg'
        },
        {
          'name': 'The St Regis Chengdu',
          'href': 'https://www.toto.com/project/pdf/reference10.pdf',
          'img': 'img/reference/image22.jpg',
          'imgSp': 'img/reference/image22-sp.jpg'
        },
        {
          'name': 'The Ritz-Carlton,Chengdu',
          'href': 'https://www.toto.com/project/pdf/reference9.pdf',
          'img': 'img/reference/image23.jpg',
          'imgSp': 'img/reference/image23-sp.jpg'
        },
        {
          'name': 'Four Seasons Hotel Guangzhou',
          'href': 'https://www.toto.com/project/pdf/reference2.pdf',
          'img': 'img/reference/image24.jpg',
          'imgSp': 'img/reference/image24-sp.jpg'
        }
      ],
      bottomButton: {
        label: 'ALL Global Reference',
        href: 'https://www.toto.com/project/',
      },
    },
    'collections-nx': {
      titleLead: `To create a culture of comfortable, healthy living.\nSince our founding, we have continuously pursued innovations\nthat offer greater wellness and comfort to daily life.\nHonoring the trust that our customers and society place in us,\nTOTO remains dedicated to delivering products\nthat offer inclusive functionality and respect for the environment.\nWe embrace these values every day to create a future\nthat surpasses all expectations.`,
      movieSrc: 'https://players.brightcove.net/4631489730001/rk0k6hBD_default/index.html?videoId=5348595569001&autoplay=play',
      movieLead: `Exquisite craftsmanship produces the elegance
of organic artisan sculpture and advanced technologies
offer the highest hygienic standards.
The pinnacle of integrated toilet design.`,
    },
    'collections-nx-concept': {},
    'collections-wx': {
      titleLead: `Tranquility, relaxation, and peace of mind.\nThe WX was developed to provide\nthe comfort we all seek in our daily lives.\nForget about the hustle and bustle, \nand allow yourself to unwind, physically and mentally.\nThe WX creates a welcoming space that makes it possible.`,
      movieSrc: 'https://players.brightcove.net/4631489730001/rk0k6hBD_default/index.html?videoId=5348595569001&autoplay=play',
      movieLead: `Exquisite craftsmanship produces the elegance
of organic artisan sculpture and advanced technologies
offer the highest hygienic standards.
The pinnacle of integrated toilet design.`,
    },
    'collections-flotationtub': {
      movieSrc: 'https://players.brightcove.net/4631489730001/rk0k6hBD_default/index.html?videoId=5613471178001&autoplay=muted',
      zeroTitle: 'ZERO DIMENSION',
      zeroLead: `Afloat, calm,\nimmersed in the meditative moment of relaxation.`,
      zeroContents: {
        title: `The posture of an astronaut resting in space`,
        text: `ZERO DIMENSION bathing brings freedom from gravity, releasing stress on joints and encouraging ultimate relaxation.`,
        compare: {
          title: `Bathing position comparison`,
          zero: {
            title: `ZERO DIMENSION`,
            text: `The posture of an astronaut resting in space ZERO DIMENSION bathing brings freedom from gravity, releasing stress on joints and encouraging ultimate relaxation.`,
          },
          conv: {
            title: `CONVENTIONAL`,
            text: `In a conventional bathtub, the low water height and a rounded low back make complete relaxation difficult to attain. The shoulder and neck area do not receive warmth from soaking and the bathing position can feel tight and cramped.`,
          },
        },
        brain: {
          title: `The brain in a state of tranquility`,
          text: `Research has shown that the ZERO DIMENSION bathing posture reduces activity in the part of the brain that houses the language function. This is the reason Zero Dimension bathing feels calming and relaxing.`,
          imgDesc: `Graphic Image`,
        },
      },
      hydroTitle: 'HYDROHANDS',
      hydroLead: `Deeply stimulating water massage gives the feeling of real hands kneading tired muscles.`,
      hydroContents: {
        text: `HYDROHANDS is a dynamic water massage that flows randomly around targeted muscles to release tension. This powerful, constantly-moving stream gives the stimulating sensation of a masseuse's hands at work. Free of air bubbles and noise, HYDROHANDS encourages a deep sense of relaxation.`,
        jacuzzi: {
          title: `Different from a jet bath`,
          text: `HYDROHANDS propels powerful water currents without air bubbles, delivering a firmer "touch" to the body. The water flow is soundless.`,
        },
        effective: {
          title: `HYDROHANDS is especially effective in a Flotation Tub`,
          text: `In the Zero Dimension bathing position where body and mind are drawn toward to a meditative state, the stimulating water massage encourages even deeper relaxation.`,
          imgDesc1: `HYDROHANDS targets low back muscles that commonly fatigue from daily activity.`,
          imgDesc2: `HYDROHANDS will also provide a stimulating foot massage.`,
        },
        featureTitle: `Exclusive features make every bath a luxurious occasion.`,
        featureItems: [
          {
            title: `NECK BATH`,
            text: `With variable pillow positions ensuring stability, people of all body shapes can enjoy warm bathing above the shoulders to the neck.`,
          },
          {
            title: `AIR-JET`,
            text: `Fluctuating streams of air bubbles rise from below and envelop the body with a soothing sensation.`,
          },
          {
            title: `LED LIGHTING`,
            text: `In the outer perimeter of the tub's base, LED LIGHTING supplies a dream-like ambience.`,
          },
          {
            title: `CONTROLLER`,
            text: `The electrostatic CONTROLLER is operated by the slightest touch.`,
          },
          {
            title: `GALALATO MATERIAL`,
            text: `Offering outstanding durability, the tub is made of GALALATO artificial marble and constructed using TOTO's innovative sandwich configuration.`,
          },
        ],
      },
      banner: {
        href: 'https://www.toto.com/jp/recline_comfort/',
        button: `DETAIL`,
        alt: 'RECLINE COMFORT',
      },
    },
    'collections-washbasin': {
      movieSrc: 'https://players.brightcove.net/4631489730001/rk0k6hBD_default/index.html?videoId=5613472304001&autoplay=muted',
      flowTitle: 'SOFT FLOW',
      flowLead: `From the graceful design comes a touch of water most gentle.`,
      flowContents: {
        text: `The precisely balanced streams of water from SOFT FLOW faucets touch the skin gently, causing almost no spatter as you wash your hands. The feeling is soft, lustrous and enriching. Sensor-operation eliminates the need for levers or buttons to touch.`,
        items: [
          {
            title: `More than clean, beautiful`,
            text: `SOFT FLOW's translucent streams of water are exquisitely beautiful to the eye.`,
          },
          {
            title: `Splash-free handwashing`,
            text: `Even as the water completely envelops the palms, there is little to no splatter of droplets.`,
          },
          {
            title: `Hands-free operation`,
            text: `SOFT FLOW has sensors both for opening and closing the spout and for switching between hot and cold water. Simply waving the hand over the sensor operates it.`,
          },
        ],
      },
      ceramTitle: 'LINEARCERAM',
      ceramLead: `Exquisitely thin is the next dimension of beauty.`,
      ceramContents: {
        text: `LINEARCERAM's thin design harmonizes with any space.Although eye-catchingly thin, it is also extremely strong. Sophisticated and inviting to use, LINEARCERAM is a new paradigm in bathroom aesthetics.`,
        imdDesc: `To create a vessel of such exquisite thinness, TOTO developed an advanced form of proprietary ceramic.`,
        compareText: `Along the thinnest part of the ridge, LINEARCERAM is approximately half the depth of a conventional basin. At the same time, the material has almost twice the tensile strength.`,
        cefiontect: {
          title: `CEFIONTECT clean`,
          text: `LINEARCERAM features TOTO's proprietary technology for preventing the adhesion of dirt and ensuring easy cleaning. CEFIONTECT has superior durability for long-term use.`,
        },
      },
    },

    special: {
      menu: {
        labels: {
          history: 'History',
          message: 'Message'
        }
      }
    },
    'special-history': {
      originTitle: 'NEOREST\nOrigin',
      originSubTitle: '“NEW REST”',
      originText: 'NEOREST is changing the conventional wisdom of restrooms though its creation of new restroom spaces and uses. It is constantly evolving, taking people to the next stage.',
      evolvingTitle: 'NEOREST\nEvolving',
      evolvingText: 'Through the years, NEOREST has led the way in turning restrooms into spaces, experiences, and parts of our lifestyles essential for our everyday well-being.',
      historyTitle: 'History',
      historyMore: 'Show more',
      historyItems: [
        {
          year: '1993',
          events: ['Launch of NEOREST EX'],
          img: 'img/special/history/image1.jpg',
          imgSp: 'img/special/history/image1-sp.jpg',
          popupHtml: `<h1>Launch of NEOREST EX</h1>
<p>The sequential valve flush system changed the tank style of toilets, dramatically reducing full flush water consumption by 40%, to just 8 L.</p>
<p>It revolutionized toilet design, freeing up restroom spatial design.</p>`,
          popupImg: ['img/special/history/image1.jpg'],
          popupImgSp: ['img/special/history/image1.jpg'],
        },
        {
          year: '2002~03',
          events: ['Launch of New NEOREST EX', 'Launch of NEOREST SD'],
          img: 'img/special/history/image2.jpg',
          imgSp: 'img/special/history/image2-sp.jpg',
          popupHtml: `<h1>Launch of New NEOREST EX</h1>
<p>A rimless design that eliminated the inner rim of the toilet bowl, TORNADO FLUSH, and CEFIONTECT  produced a cleaner toilet bowl. The Wonderwave Cleansing technology also helped conserve water.</p>
<h1>Launch of NEOREST SD</h1>
<p>All of the functions of the EX series in a compact size. Creating spacious comfort even in smaller restroom spaces.</p>
<p>The compact size and easier cleaning of NEOREST SD series expanded the market for toilets with built-in WASHLET.  Restrooms rapidly became more comfortable, pleasant places.</p>`,
          popupImg: ['img/special/history/image2_1-modal.jpg', 'img/special/history/image2_2-modal.jpg'],
          popupImgSp: ['img/special/history/image2_1-modal-sp.jpg', 'img/special/history/image2_2-modal-sp.jpg'],
        },
        {
          year: '2006',
          events: ['Launch of NEOREST A'],
          img: 'img/special/history/image3.jpg',
          imgSp: 'img/special/history/image3-sp.jpg',
          popupHtml: `<h1>Launch of NEOREST A</h1>
<p>With NEOREST A's "full cover" design, the toilet lid completely encloses the toilet seat for a simple, sharp look. The toilet's functional components were integrated into the toilet's lines, producing an even cleaner toilet through the use of rimless WASHLET with no rim underside. NEOREST A maintained the flush performance of conventional 8 L models while using just 6 L of water to flush.</p>
<p>NEOREST's distinctive clean design led a dramatic evolution in restrooms, making them even cleaner and more refined spaces.</p>`,
          popupImg: ['img/special/history/image3-modal.jpg'],
          popupImgSp: ['img/special/history/image3-modal-sp.jpg'],
        },
        {
          year: '2007~09',
          events: ['Launch of NEOREST AH', 'Launch of NEOREST RH', 'Hybrid Ecology System'],
          img: 'img/special/history/image4.jpg',
          imgSp: 'img/special/history/image4-sp.jpg',
          popupHtml: `<h1>Launch of NEOREST AH ・ NEOREST RH<br>Hybrid Ecology System</h1>
<p>* AH= Simple design characterized by straight lines<br>
* RH= Gentle design achieved through the use of soft curves<br>
The Hybrid Ecology System conserves water with its 4.8 L full flush and 3.8 L eco-flush  capabilities can be used in locations with low water pressure, such as condominiums.<br>
<p>These new models achieve harmony between environmental performance and spaciousness. </p>`,

          popupImg: ['img/special/history/image4_1-modal.jpg', 'img/special/history/image4_2-modal.jpg'],
          popupImgSp: ['img/special/history/image4_1-modal-sp.jpg', 'img/special/history/image4_2-modal-sp.jpg'],
        },
        {
          year: '2011~13',
          events: ['EWATER+', 'ACTILIGHT'],
          img: 'img/special/history/image5.jpg',
          imgSp: 'img/special/history/image5-sp.jpg',
          popupHtml: `<h1>EWATER+</h1>
<p>Electrolyzing water produces a sterilizing agent (hypochlorous acid) that is used to keep the wand and toilet bowl hygienic. </p>
<h1>ACTILIGHT</h1>
<p>ACTILIGHT creates a newly developed photocatalytic layer on the surface of the toilet bowl, making it highly resistant to chemicals and damage. The photocatalyst breaks down organic substances  on the surface of the toilet bowl, helping prevent dirt. Its hydrophilic nature also keeps waste from adhering to the bowl.</p>
<p>ACTILIGHT leverages the full power of water to create a wonderful, like-new feel every time a toilet is used.</p>`,
          popupImg: ['img/special/history/image5-modal.jpg'],
          popupImgSp: ['img/special/history/image5-modal-sp.jpg'],
        },
        {
          year: '2017',
          events: ['Launch of NEOREST NX'],
          img: 'img/special/history/image6.jpg',
          imgSp: 'img/special/history/image6-sp.jpg',
          popupHtml: `<h1>Launch of NEOREST NX</h1>
<p>TOTO has leveraged the sanitary ware technologies it has developed over the company's century-long history to develop a new toilet design that envelops its WASHLET components. This flagship model is truly integrated, seamlessly and expertly fusing design and functionality in a toilet where the bowl and WASHLET are one. NEOREST NX provides finest hygiene and comfort functions, from newly developed functions to tried-and-true  mainstays.</p>
<p>With its integrated shape, like a work of art, and its refined hospitality, it turns restrooms into spaces that people are fond of and will want to use for years to come.</p>`,
          popupImg: ['img/special/history/image6-modal.jpg'],
          popupImgSp: ['img/special/history/image6-modal-sp.jpg'],
        },
        {
          year: '2022~23',
          events: ['Completely New Lineup of NEOREST Models'],
          img: 'img/special/history/image7.jpg',
          imgSp: 'img/special/history/image7-sp.jpg',
          popupHtml: `<h1>Completely New Lineup of NEOREST Models</h1>
<p>NEOREST series has been continuously evolving as it seeks to fuse design and technology. The lineup has now been expanded with the addition of NEOREST WX and NEOREST LS. At the same time, all of the other models in the lineup have also been updated, highlighting the distinctiveness and hallmarks of each line of products.<br>
* NX = A unique design, evocative of a work of art, that exudes a presence like no other <br>
* WX = The pinnacle of wall-mounted designs, with soft lines that impart a sense of sophisticated relaxation and peace<br>
* LS = A harmony of different materials that offers elegance and gracefulness <br>
* AS = A sharp, clean form produced by the beauty of straight lines <br>
* RS = The warmth and elegance created by a gently curvaceous silhouette</p>
<p>In addition to the EWATER+ for BOWL and EWATER+ for WAND of previous models, TOTO has also introduced its newest cleaning technology, EWATER+ for UNDER SEAT, to keep the underside of the toilet seat clean for longer.</p>`,
          popupImg: ['img/special/history/image7_1-modal.jpg', 'img/special/history/image7_2-modal.jpg'],
          popupImgSp: ['img/special/history/image7_1-modal-sp.jpg', 'img/special/history/image7_2-modal-sp.jpg'],
        }
      ],
      messageButton: 'for NEOREST',
      domeLink: 'Return to PRODUCT SELECT',
    },

    'special-message': {
      titleLead: 'NEOREST series was born in Japan in April 1993.\nIts goal is to create a whole NEW ("NEO") RESTROOM ("REST") experience. Our starting point was the fundamental biological function of relieving oneself, common to all people, and we set out to provide users with physical comfort, relaxation, and peace of mind. \nOver the past 30 years, NEOREST has become beloved around the world. It will continue to evolve, changing the face of the restroom as a toilet pioneer.  ',
      thinkTitle: 'The Meaning of 30th Anniversary Logo',
      thinkText: 'The design of our 30th anniversary logo symbolizes the comfort and satisfaction provided by NEOREST, which has led to its adoption worldwide.\nNEOREST is a proud pioneer of the restroom world, and led by its strong sense of mission, it is continuing to grow, providing comfort and beauty in restrooms around the world.',
      historyButton: 'Story of NEOREST',
      domeLink: 'Return to PRODUCT SELECT',
      messageTitle: 'for NEOREST',
      messageItems: [
        {
          company: 'Cheng Chung Design (HK) Ltd.',
          name: 'Joy\nCheng',
          position: '創始人&董事長\nFounder & Chairman',
          nameFull: '鄭忠-Joy Cheng',
          companyFull: '香港鄭中設計事務所有限公司\nCheng Chung Design (HK) Ltd.\nHong Kong',
          message: `恭喜TOTO NEOREST 30周年，智能衛浴專家，期待榮獲更多業內殊榮。
Congratulations on the 30th anniversary of TOTO NEOREST, the smart bathroom experts. We wish the company more honors in the industry.`,
          img: 'img/special/message/image1.jpg',
          imgSp: 'img/special/message/image1-sp.jpg',
        },
        {
          company: 'YANG & ASSOCIATES\nGROUP ',
          name: 'Fiona\nFu',
          position: '集团物料中心 营运副总监，家禾新型材料公司 副总经理。\nGroup Material Center Operations Deputy General Manager\nNew material company vice general manager',
          nameFull: '傅芳-Fiona Fu',
          companyFull: '杨邦胜设计集团\nYANG & ASSOCIATES GROUP\nShenzhen',
          message: `恭喜　TOTO NEOREST30周年，希望NEOREST　的自動沖洗、自動開合及自動除臭功能得到更多人喜爱，荣获更多行业设计大奖。
Congratulations to TOTO NEOREST on its 30th anniversary. We hope that NEOREST's auto flush, auto open/close and auto deodorize functions will be loved by more people and win more industry design awards.`,
          img: 'img/special/message/image2.jpg',
          imgSp: 'img/special/message/image2-sp.jpg',
        },
        {
          company: 'Squire & Partners',
          name: 'Tim\nGledstone',
          position: 'Partner',
          nameFull: 'Tim Gledstone',
          companyFull: 'Squire & Partners\nLondon',
          message: `Happy 30th birthday to the Neorest!
I first encountered TOTO toilets upon visiting Japan for the first time thirty years ago, whilst my wife – who is Japanese – has experienced TOTO throughout her life. I had no idea that a simple toilet could bring advanced pleasure to a daily task: from the warm toilet seat, the bidet washlet to birdsongs and waterfalls, TOTO transforms a daily task into a daily pleasure.
It was therefore essential to select the Neorest for every bathroom – not just the guest toilet – when designing our home in Wimbledon, London. 
Installing TOTO throughout our home has created a non-hierarchical bathroom experience for guests, whilst offering best-in-class Japanese design in a domestic setting. TOTO brings a touch of the Japanese bath and spa lifestyle to the UK, which we – alongside our three children and guests – appreciate experiencing daily. 
The Neorest is a celebration of an intimate moment combined with maximum comfort, function and hygiene. As an architect, I love how its clean white lines work so effortlessly in a bathroom environment alongside other classic designs and makers. 
When designing my home, I wanted to ensure that the Japanese-style bathrooms were generously sized in order to ensure functional practicality. The sleek elegance of TOTO works harmoniously and elegantly within these dimensions, whilst bringing a touch of day to day like in Japan to our UK lives!`,
          img: 'img/special/message/image3.jpg',
          imgSp: 'img/special/message/image3-sp.jpg',
        },
        {
          company: 'CHENG SHENG\nINTERIOR DESIGN WORK',
          name: 'Andrew\nLi',
          position: '設計總監\nDesign Director',
          nameFull: '李兆亨-Andrew Li',
          companyFull: '成晟室內裝修設計\nCHENG SHENG INTERIOR DESGIN WORK\nKaohsiung',
          message: `恭喜Neorest 30周年生日快樂。
Neorest不論設計、品質都相當優秀，是我長年愛用的品牌！
期待Neorest繼續帶給我們更多驚喜！
Happy 30th Birthday Neorest!
I've always loved Neorest for years, both its design and quality.
I look forward to more surprises from Neorest!`,
          img: 'img/special/message/image4.jpg',
          imgSp: 'img/special/message/image4-sp.jpg',
        },
        {
          company: 'Della Group',
          name: 'Jimmy\nMistry',
          position: 'Chairman and Managing Director',
          nameFull: 'Jimmy Mistry',
          companyFull: 'Della Group\nMumbai',
          message: `Heartiest Congratulations to TOTO Family on 30th Anniversary of NEOREST, it is great product and I completely resonate with it. I like the customized user modes and sustainability functions in NEOREST. I would like to see future NEOREST with in-built water softener and rechargeable battery!`,
          img: 'img/special/message/image5.jpg',
          imgSp: 'img/special/message/image5-sp.jpg',
        },
        {
          company: 'Bombay City Eye Institute\n& Research Centre',
          name: 'Kulin\nKothari',
          position: 'Founder',
          nameFull: 'Kulin Kothari',
          companyFull: 'Bombay City Eye Institute & Research Centre\nMumbai',
          message: `Excited to hear about 30th Anniversary of  NEOREST!\nI congratulate globally present TOTO Family and hope that NEOREST always be the No. 1 smart toilet! I like NEOREST due to its hygiene and comfort features. In future, I would like to see unique NEOREST designs suitable for specially abled and plus size people!`,
          img: 'img/special/message/image6.jpg',
          imgSp: 'img/special/message/image6-sp.jpg',
        },
        {
          company: 'JW Marriott Singapore',
          name: 'Chris\nPek',
          position: 'Director of Business Travel',
          nameFull: 'Chris Pek',
          companyFull: 'JW Marriott Singapore\nSingapore',
          message: 'Congratulations on 30th Anniversary for TOTO Neorest!\nNeorest LE definitely matches our SUITE Room in JW Marriott Singapore.\nIts Automatic Functions create WOW feedback and always makes our customers happy.',
          img: 'img/special/message/image7.jpg',
          imgSp: 'img/special/message/image7-sp.jpg',
        },
        {
          company: 'Yabu Pusehlberg',
          name: 'Helen\nYabu',
          position: 'Design Resource',
          nameFull: 'Helen Yabu',
          companyFull: 'Yabu Pusehlberg\nToronto',
          message: 'Congratulations on 30 years of Neorest. The Neorest is a wonderful toilet, Its sleek minimal design eliminates the need to have a visible tank and is easier to clean. The sanitary features such as automatic open & closing, and EWater are a plus. In addition, it has a quiet powerful flush and a variety of features. I highly recommend Neorest.',
          img: 'img/special/message/image8.jpg',
          imgSp: 'img/special/message/image8-sp.jpg',
        }
      ]
    },

    //Change the item(s) below to modify the text of the terms of use of the website.//
    'terms-of-use': {
      title: 'Terms of use',
      sectionList: [
        {
          title: `Recommended system requirements`,
          html: `<dl>
  <dt>Windows users: Windows 10 or above</dt>
  <dd>Latest versions of Microsoft Edge / Google Chrome / Mozilla Firefox</dd>
  <dt>Mac users</dt>
  <dd>Latest version of Safari/ Google Chrome</dd>
  <dt>Smart phone users</dt>
  <dd>Latest version of iOS Safari / Android Google Chrome</dd>
</dl>
<p class="note">The speed at which content on this site is displayed on screen will depend on your PC specifications.<br />
Note that insufficient CPU or memory may not allow smooth operation.</p>
<dl>
  <dt>Recommended screen size</dt>
  <dd>1024 × 768 pixels or over</dd>
</dl>`,
        },
        {
          title: `About JavaScript`,
          html: `<p>JavaScript has been used in all the pages on this website.<br />
The disabling of JavaScript in your browser may result in confusing presentation or loss of some functions on your screen.<br />
You are asked to enable JavaScript in your browser settings before looking at the website.</p>`,
        },
      ],
    },
  },
})
