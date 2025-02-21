/* eslint-disable */
import Link from 'next/link';

const En = () => {
  return (
    <div className='drawer drawer--top' id='page'>
      <nav className='m-box-headnav' data-headfix=''>
        <div className='headnav-area'>
          <div className='headnav-inner'>
            <div className='headnav-menu'>
              <div className='menu-back'>
                <Link href='/en/gb-faucet' className='is-back' data-pj-ac=''></Link>
              </div>
              <div className='menu-burger' data-menu-open=''>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <ul className='menu-list' data-menu-all=''>
                <li>
                  <span className='menu-hasdrop' data-menu-btn='01'>
                    <span className='menu-item'>FAUCET</span>
                  </span>
                  <div className='menu-drop' data-menu-area='01'>
                    <div className='drop-area'>
                      <h2 className='drop-ttl no-link'>FAUCET</h2>
                      <div className='drop-menu'>
                        <ul>
                          <li>
                            <Link href='/en/gb-faucet#faucet-z-series'>Z series</Link>
                          </li>
                          <li>
                            <Link href='/en/gb-faucet#faucet-g-series'>G series</Link>
                          </li>
                          <li>
                            <Link href='/en/gb-faucet#faucet-l-series'>L series</Link>
                          </li>
                        </ul>
                      </div>
                      <div className='drop-close' data-menu-close='01'></div>
                    </div>
                  </div>
                </li>
                <li>
                  <span className='menu-hasdrop' data-menu-btn='02'>
                    <span className='menu-item'>SHOWER</span>
                  </span>
                  <div className='menu-drop' data-menu-area='02'>
                    <div className='drop-area'>
                      <h2 className='drop-ttl no-link'>SHOWER</h2>
                      <div className='drop-menu'>
                        <ul>
                          <li>
                            <Link href='/en/gb-faucet#shower-z-selection'>Z Selection</Link>
                          </li>
                          <li>
                            <Link href='/en/gb-faucet#shower-g-selection'>G Selection</Link>
                          </li>
                        </ul>
                      </div>
                      <div className='drop-close' data-menu-close='02'></div>
                    </div>
                  </div>
                </li>
                <li className='last'>
                  <span className='menu-hasdrop' data-menu-btn='03'>
                    <span className='menu-item'>SHOWCASE</span>
                  </span>
                  <div className='menu-drop' data-menu-area='03'>
                    <div className='drop-area'>
                      <h2 className='drop-ttl no-link'>SHOWCASE</h2>
                      <div className='drop-menu'>
                        <ul>
                          <li>
                            <Link href='/en/gb-faucet/showcase/space01/'>SPACE01</Link>
                          </li>
                          <li>
                            <Link href='/en/gb-faucet/showcase/space02/'>SPACE02</Link>
                          </li>
                          <li>
                            <Link href='/en/gb-faucet/showcase/space03/'>SPACE03</Link>
                          </li>
                          <li>
                            <Link href='/en/gb-faucet/showcase/space04/'>SPACE04</Link>
                          </li>
                          <li>
                            <Link href='/en/gb-faucet/showcase/space05/'>SPACE05</Link>
                          </li>
                          <li>
                            <Link href='/en/gb-faucet/showcase/space06/'>SPACE06</Link>
                          </li>
                        </ul>
                      </div>
                      <div className='drop-close' data-menu-close='03'></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className='page'>
        <div className='showcase-area'>
          <div className='area-thumb'>
            <div className='thumb-area'>
              <div className='thumb-slide' data-slide-scthumb='1'>
                <div className='slide-item'>
                  <Link href='/en/gb-faucet/showcase/space01/'>
                    <img src='/assets/global/faucet/showcase/images/showcase_01_thumb.jpg' alt='' />
                  </Link>
                </div>
                <div className='slide-item'>
                  <Link href='/en/gb-faucet/showcase/space02/'>
                    <img src='/assets/global/faucet/showcase/images/showcase_02_thumb.jpg' alt='' />
                  </Link>
                </div>
                <div className='slide-item is-current'>
                  <Link href='/en/gb-faucet/showcase/space03/'>
                    <img src='/assets/global/faucet/showcase/images/showcase_03_thumb.jpg' alt='' />
                  </Link>
                </div>
                <div className='slide-item'>
                  <Link href='/en/gb-faucet/showcase/space04/'>
                    <img src='/assets/global/faucet/showcase/images/showcase_04_thumb.jpg' alt='' />
                  </Link>
                </div>
                <div className='slide-item'>
                  <Link href='/en/gb-faucet/showcase/space05/'>
                    <img src='/assets/global/faucet/showcase/images/showcase_05_thumb.jpg' alt='' />
                  </Link>
                </div>
                <div className='slide-item'>
                  <Link href='/en/gb-faucet/showcase/space06/'>
                    <img src='/assets/global/faucet/showcase/images/showcase_06_thumb.jpg' alt='' />
                  </Link>
                </div>
              </div>
            </div>
            <div className='area-close' data-slide-thumbclose>
              close
            </div>
          </div>
          <div className='area-main'>
            <div className='main-slide' data-slide-scmain>
              <div className='slide-item'>
                <img src='/assets/global/faucet/showcase/images/showcase_03-main.jpg' />
              </div>
              <div className='slide-item'>
                <img src='/assets/global/faucet/showcase/images/showcase_03-02.jpg' />
              </div>
              <div className='slide-item'>
                <img src='/assets/global/faucet/showcase/images/showcase_03-03.jpg' />
              </div>
              <div className='slide-item'>
                <img src='/assets/global/faucet/showcase/images/showcase_03-04.jpg' />
              </div>
            </div>
            <div className='main-ttl'>SPACE03</div>
          </div>

          <div className='area-product'>
            <h2>
              <a href='#product'>PRODUCTS IN THIS ROOM</a>
            </h2>
            <ul id='product' className='product-list'>
              <li>
                <span className='no-link'>
                  <span className='list-cat'>TOILET</span>
                  <img src='/assets/global/faucet/showcase/images/space03_01.jpg' />
                  <span className='list-name'>WASHLET+</span>
                </span>
              </li>
              <li>
                <span className='no-link'>
                  <span className='list-cat'>FAUCET</span>
                  <img src='/assets/global/faucet/showcase/images/space03_02.jpg' />
                  <span className='list-name'>FAUCET</span>
                </span>
              </li>
              <li>
                <span className='no-link'>
                  <span className='list-cat'>BATH</span>
                  <img src='/assets/global/faucet/showcase/images/space03_03.jpg' />
                  <span className='list-name'>FLOTATION TUB</span>
                </span>
              </li>
              <li>
                <span className='no-link'>
                  <span className='list-cat'>SHOWER</span>
                  <img src='/assets/global/faucet/showcase/images/space03_04.jpg' />
                  <span className='list-name'>BATH FAUCET</span>
                </span>
              </li>
              <li>
                <span className='no-link'>
                  <span className='list-cat'>ACCESSORY</span>
                  <img src='/assets/global/faucet/showcase/images/space03_05.jpg' />
                  <span className='list-name'>PAPER HOLDER</span>
                </span>
              </li>
              <li>
                <span className='no-link'>
                  <span className='list-cat'>ACCESSORY</span>
                  <img src='/assets/global/faucet/showcase/images/space03_06.jpg' />
                  <span className='list-name'>TOWEL BAR</span>
                </span>
              </li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default En;
