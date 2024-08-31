import Header from '../layout/header'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Groups3Icon from '@mui/icons-material/Groups3';
import Budgetchart from '../charts/budgetchart';
import Reportchart from '../charts/reportchart';
import Saleschart from '../charts/saleschart';
import Reportdatatable from '../datatable/reportdatatable';
import Sellingtable from '../datatable/sellingtable';

export default function Dashboard() {
  return (
    <div style={{ background: '#e1f5fe' }}>
      <Header />
      <div className='container' style={{ marginBottom: '2rem' }}>
        <h3 className='mb-5 ' style={{ color: "#01579b" }}>Dashboard</h3>
        <div className='row mt-3 row-gap-4'>
          <div className="col-lg-9 col-sm-12 col-md-12">
            <div className="row row-gap-4">
              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className='bg-white p-3' style={{ width: '98%' }}>
                  <div className='d-flex gap-4'>
                    <h5 className='fs-5' style={{ color: "#01579b" }}>Sales</h5>
                    <span className='text-tertiary fs-5'>Today</span>
                  </div>
                  <div className='d-flex gap-3 mt-3'>
                    <div className='text-primary p-3' style={{ borderRadius: "50%", background: "#e1f5fe" }}>
                      <ShoppingCartIcon className='mt-3' />
                    </div>

                    <div>
                      <h4 className='fs-2' style={{ color: "#01579b" }}>145</h4>
                      <span className='text-success'>12% <b className='text-dark'>Increase</b></span>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className='bg-white p-3' style={{ width: '100%' }}>
                  <div className='d-flex gap-4'>
                    <h5 className='fs-5' style={{ color: "#01579b" }}>Revenue</h5>
                    <span className='text-tertiary fs-5'>This months</span>
                  </div>
                  <div className='d-flex gap-3 mt-3'>
                    <div className='p-3' style={{ borderRadius: "50%", background: "#b9f6ca", color: "#00e676" }}>
                      <AttachMoneyIcon className='mt-3' />
                    </div>

                    <div>
                      <h4 className='text-primary'>$3,265</h4>
                      <span className='text-success'>8% <b className='text-dark'>Increase</b></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className='bg-white p-3' style={{ width: '92%' }}>
                  <div className='d-flex gap-4'>
                    <h5 className='fs-5' style={{ color: "#01579b" }}>Customers</h5>
                    <span className='text-tertiary fs-5'>This year</span>
                  </div>
                  <div className='d-flex gap-3 mt-3'>
                    <div className='p-3' style={{ borderRadius: "50%", background: "#ffcc80", color: "#ff6f00" }}>
                      <Groups3Icon className='mt-3' />
                    </div>

                    <div>
                      <h4 className='text-primary'>1244</h4>
                      <span className='text-danger'>12% <b className='text-dark'>Decrease</b></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-5 bg-white'>
              <Saleschart />
            </div>

            <div className='mt-5'>
              <h4>Recent sales</h4>
              <Reportdatatable />
            </div>

            <div className='mt-5'>
              <h4>Top selling today</h4>
              <Sellingtable />
            </div>

          </div>


          <div className="col-lg-3 col-sm-12 col-md-12 bg-white">
            <h5 className='text-primary'>Recent Activity /  <b style={{ color: "#ff6f00" }}>Today</b></h5>
            <div style={{ marginLeft: "20px" }}>
              <div className='d-flex gap-3 mt-4'>
                <h6>32 mins</h6>
                <h6>Quia quae rerum explicabo officiis beatae</h6>
              </div>

              <div className='d-flex gap-3 mt-4'>
                <h6>56 mins</h6>
                <h6>Quia quae rerum explicabo officiis beatae</h6>
              </div>

              <div className='d-flex gap-3 mt-4'>
                <h6>2 hours</h6>
                <h6>Voluptates corrupti molestias voluptatem</h6>
              </div>
              <div className='d-flex gap-3 mt-4'>
                <h6>1 day</h6>
                <h6>mpore autem saepe occaecatire</h6>
              </div>
              <div className='d-flex gap-3 mt-4'>
                <h6>2 days</h6>
                <h6>Dicta dolorem harum nulla eius. Ut quidem
                </h6>
              </div>
              <div className='d-flex gap-3 mt-4'>
                <h6>5 weeks</h6>
                <h6>QDicta dolorem harum nulla eius. Ut quidem
                </h6>
              </div>
            </div>
            <div className='mt-5'>
              <h5 className='text-primary'>Budget Reports / <b className='text-success fs-6'>This months</b></h5>
              <div className='mt-5'>
                <Reportchart />
              </div>

              <div className='mt-5 mb-5'>
                <h6>Website Traffic Today</h6>
                <Budgetchart />

              </div>

              <div>
                <h6 className='text-primary mt-5'>News & Updates / <b className='text-succes'>Today</b></h6>
                <div className='d-flex gap-4 mb-5'>
                  <img src="images/news-1.JPG" alt="new" width={'40%'} height={'30%'} />
                  <div>
                    <h6 className='text-primary'>Nihil blanditiis at in nihil autem</h6>
                    <h6 className='text-secondary'>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum</h6>
                  </div>
                </div>

                <div className='d-flex gap-4 mb-5'>
                  <img src="images/news-2.JPG" alt="new" width={'40%'} height={'30%'} />
                  <div>
                    <h6 className='text-primary'>Nihil blanditiis at in nihem</h6>
                    <h6 className='text-secondary'>Quidem autem et impedit</h6>
                  </div>
                </div>

                <div className='d-flex gap-4 mb-5'>
                  <img src="images/news-3.JPG" alt="new" width={'40%'} height={'30%'} />
                  <div>
                    <h6 className='text-primary'>Id quia et et ut maxime similique occaecati ut</h6>
                    <h6 className='text-secondary'>SFugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam et t</h6>
                  </div>
                </div>

                <div className='d-flex gap-4 mb-5'>
                  <img src="images/news-4.JPG" alt="new" width={'40%'} height={'30%'} />
                  <div>
                    <h6 className='text-primary'>Laborum corporis quo dara net para</h6>
                    <h6 className='text-secondary'> Qui enim quia optio. Eligendi aut asperiores enim repellendusvel rerum cuder</h6>
                  </div>
                </div>

                <div className='d-flex gap-4 mt-5'>
                  <img src="images/news-5.JPG" alt="new" width={'40%'} height={'30%'} />
                  <div>
                    <h6 className='text-primary'>Et dolores corrupti quae illo quod do</h6>
                    <h6 className='text-secondary'>Sdit ut eveniet modi reicicupiditate libero beatae dignissimos eius...harum</h6>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <hr className='text-success' />
          <h3 style={{ fontStyle: "italic", textAlign: "center", color: "#ff6f00" }}>Adeola Sheriff Adewale</h3>
        </div>
      </div>

    </div>
  )
}
