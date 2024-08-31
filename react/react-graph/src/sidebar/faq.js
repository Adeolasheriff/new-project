import React from 'react'
import Header from '../layout/header'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Faq() {
  return (
    <div className='' style={{ background: '#e1f5fe' }}>
      <Header />
      <div className='container'>
        <h3 className='text-center text-secondary'>Frequently Asked questions </h3>
        <div className="row row-gap-5">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="bg-white p-2">
              <h5>Basics Questions</h5>
              <div className='mt-4'>
                <h4 className='text-primary'>1. Nisi ut ut exercitationem voluptatem esse sunt rerum?</h4>
                <p className='text-secondary'>Saepe perspiciatis ea. Incidunt blanditiis enim mollitia qui voluptates. Id rem null
                  a tenetur nihil in unde rerum. Quae consequatur placeat qui cumque earum eius omnis quos</p>
              </div>
            </div>
            <div className="bg-white p-2">
              <div className='mt-4'>
                <h4 className='text-primary'>2. Reiciendis dolores repudiandae?</h4>
                <p className='text-secondary'>Id ipsam non ut. Placeat doloremque deserunt quia tenetur inventore laboriosam dolores t
                  otam odio. Aperiam incidunt et. Totam ut quos sunt atque modi molestiae dolorem.
                </p>
              </div>
            </div>
            <div className="bg-white p-2">
              <div className='mt-4'>
                <h4 className='text-primary'>3. Qui qui reprehenderit ut est illo numquam voluptatem?</h4>
                <p className='text-secondary'> Enim inventore in consequuntur ipsam voluptatem consequatur beatae.
                  Nostrum consequuntur voluptates et blanditiis.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="bg-white p-2">
              <h4>Deserunt ut unde corporis</h4>

              <div>
                <Accordion defaultExpanded className='text-secondary '>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>EProvident beatae eveniet placeat est aperiam repellat adipisci?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className='text-info'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className='mt-5 text-secondary'>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Typography>Minus aliquam modi id reprehenderit ni</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className='text-info'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion className='mt-5 text-secondary'>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    <Typography>Minus aliquam modi id reprehenderit ni</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className='text-info'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion className='mt-5 text-secondary'>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    <Typography>Laboriosam asperiores eum?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className='text-info'>
                      Aut necessitatibus maxime quis dolor et. Nihil laboriosam molestiae qui molestias placeat
                      corrupti non quo accusamus. Nemo qui quis harum enim sed. Aliquam molestias pariatur delectus v
                      oluptas quidem qui rerum id quisquam. Perspiciatis voluptatem voluptatem eos. Vel aut minus labore at rerum eos
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>

            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="bg-white">
              <h4 className='text-secondary text-center'>Laborum dolorem quam porro</h4>
              <div>
                <Accordion className=' text-secondary'>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    <Typography>Laboriosam asperiores eum?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className='text-info'>
                      Ut quasi odit odio totam accusamus vero eius. Nostrum asperiores voluptatem
                      eos nulla ab dolores est asperiores iure. Quo est quis praesentium aut ma
                      iores. Corrupti sed aut expedita fugit vero
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion className='mt-5 text-secondary'>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    <Typography>Laboriosam asperiores eum?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className='text-info'>
                      Ut quasi odit odio totam accusamus vero eius. Nostrum asperiores voluptatem
                      eos nulla ab dolores est asperiores iure. Quo est quis praesentium aut ma
                      iores. Corrupti sed aut expedita fugit vero
                    </Typography>
                  </AccordionDetails>

                </Accordion>

                <Accordion className='mt-5 text-secondary'>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    <Typography>Omnis fugiat quis repellendus?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className='text-info'>
                      Ut quasi odit odio totam accusamus vero eius. Nostrum asperiores voluptatem
                      eos nulla a minus quia impedit est quas deserunt possimus quas. Officia vitae sit voluptatem nostrum a.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion className='mt-5 text-secondary'>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    <Typography>Laboriosam asperiores eum?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className='text-info'>
                      Numquam ut reiciendis aliquid. Quia veritatis quasi ipsam sed quo ut eligendi et non.
                      Doloremque sed voluptatem at in voluptas aliquid dolorum.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="bg-white">
              <h4 className='text-secondary text-center'>Dolore occaecati ducimus quam</h4>
              <div>
                <Accordion className=' text-secondary'>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    <Typography>Laboriosam asperiores eum?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className='text-info'>
                      Ut quasi odit odio totam accusamus vero eius. Nostrum asperiores voluptatem
                      eos nulla ab dolores est asperiores iure. Quo est quis praesentium aut ma
                      iores. Corrupti sed aut expedita fugit vero
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion className='mt-5 text-secondary'>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    <Typography>Laboriosam asperiores eum?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className='text-info'>
                      Ut quasi odit odio totam accusamus vero eius. Nostrum asperiores voluptatem
                      eos nulla ab dolores est asperiores iure. Quo est quis praesentium aut ma
                      iores. Corrupti sed aut expedita fugit vero
                    </Typography>
                  </AccordionDetails>

                </Accordion>

                <Accordion className='mt-5 text-secondary'>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    <Typography>Dolore occaecati ducimus quam</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className='text-info'>
                      Ut quasi odit odio totam accusamus vero eius. Nostrum asperiores voluptatem
                      eos nulla a minus quia impedit est quas deserunt possimus quas. Officia vitae sit voluptatem nostrum a.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion className='mt-5 text-secondary'>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    <Typography>Laboriosam asperiores eum?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className='text-info'>
                      Numquam ut reiciendis aliquid. Quia veritatis quasi ipsam sed quo ut eligendi et non.
                      Doloremque sed voluptatem at in voluptas aliquid dolorum.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
     
          </div>
        </div>
      </div>
      <hr  className='bg-danger'/>
      <h4 style={{fontStyle:"italic",textAlign:"center"}}>Adeola Sheriff Adewale</h4>
    </div>
  )
}



