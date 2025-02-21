const Zh = () => {
  return (
    <div className='page'>
      <section className='uq_cleanovation'>
        <div className='kv'>
          <div className='kv--mv kv_cl'>
            <div className='kv--logo cl'>
              <img
                src='/assets/global/cleanovation/images/cleanovation_logo.svg'
                alt='TOTO CLEANOVATION.Clean gives peace of mind.Clean makes life beautiful.Clean feels refreshing.Clean is caring for people and the planet.Clean brings wellness to everyday life.TOTO innovation brings a new world of clean to life,  enriching every moment of every day.'
              />
            </div>
          </div>
        </div>
      </section>
      <section className='section products txtalign-c movie-section'>
        <header className='section__header innerEl-tight'>
          <h2 className='section__title'>CONCEPT MOVIE</h2>
        </header>
        <div className='movie__inner'>
          <a id='mov01' href='6236562316001' className='mainv-play no-barba no-transcript' data-modal-open>
            <img
              srcSet='/assets/global/cleanovation/images/mv_mov@2x.jpg 2x'
              src='/assets/global/cleanovation/images/mv_mov.jpg'
              alt=''
            />
          </a>
        </div>
      </section>

      {/* <!--
    <div className="movie" id="mv_movie">
        <div className="movie__inner">
            <a href="6236562316001" className="mainv-play no-barba" data-modal-open>
                <img srcSet="./assets/images/mv_mov@2x.jpg 2x" src="./assets/images/mv_mov.jpg" alt="">
            </a>
        </div>
    </div>
--> */}

      <div className='uq_cleanovation--link' id='link'>
        <div className='uq_cleanovation--link__inner'>
          <ul>
            <li>
              <a href='/en/cleanovation/washlet' className='js-scroll is-wachlet'>
                <picture className='kv--mv__image'>
                  <source media='(max-width: 750px)' srcSet='/assets/global/cleanovation/images/washilet--sp.png' />
                  <img
                    srcSet='/assets/global/cleanovation/images/washilet@2x.png 2x'
                    src='/assets/global/cleanovation/images/washilet.png'
                    alt="Let's Wash with TOTO WASHLET"
                  />
                </picture>
              </a>
            </li>
            <li>
              <a href='/en/cleanovation/clean-synergy' className='js-scroll'>
                <picture className='kv--mv__image'>
                  <source
                    media='(max-width: 750px)'
                    srcSet='/assets/global/cleanovation/images/clean_synergy--sp.png'
                  />
                  <img
                    srcSet='/assets/global/cleanovation/images/clean_synergy@2x.png 2x'
                    src='/assets/global/cleanovation/images/clean_synergy.png'
                    alt='CLEAN SYNERGY Technology & Design'
                  />
                </picture>
              </a>
            </li>
            <li>
              <a href='/en/cleanovation/touchless' className='js-scroll'>
                <picture className='kv--mv__image'>
                  <source media='(max-width: 750px)' srcSet='/assets/global/cleanovation/images/touchless--sp.png' />
                  <img
                    srcSet='/assets/global/cleanovation/images/touchless_link@2x.png 2x'
                    src='/assets/global/cleanovation/images/touchless_link.png'
                    alt='The security of TOUCHLESS'
                  />
                </picture>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Zh;
