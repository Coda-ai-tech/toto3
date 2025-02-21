/* eslint-disable */

const Zh = () => {
  return (
    <div id='body_inner'>
      <div className='page'>
        <div className='scroll_icn floating_btn'></div>
        <section className='inspiration wrapper'>
          <div className='inspiration_head'>
            <h2 className='index_title'>INSPIRATION</h2>
            <button className='menu_btn' tabIndex={0}>
              TYPE
            </button>
            <div className='open_menu'>
              <button className='close_btn' tabIndex={0}></button>
              <div className='sort_menu_ttl'>TYPE</div>
              <ul>
                <li className='active'>
                  <a href='javascript:void(0)' data-cate='0'>
                    All
                  </a>
                </li>
                <li>
                  <a href='javascript:void(0)' data-cate='1'>
                    All suite
                  </a>
                </li>
                <li>
                  <a href='javascript:void(0)' data-cate='2'>
                    Boutique
                  </a>
                </li>
                <li>
                  <a href='javascript:void(0)' data-cate='3'>
                    Resort
                  </a>
                </li>
                <li>
                  <a href='javascript:void(0)' data-cate='4'>
                    Urban
                  </a>
                </li>
                <li>
                  <a href='javascript:void(0)' data-cate='5'>
                    Suburban
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <ul className='grid'></ul>
        </section>
        <div className='totop'>
          <a href='#body_inner'>
            PAGE
            <br />
            TOP
          </a>
        </div>
      </div>
    </div>
  );
};

export default Zh;
