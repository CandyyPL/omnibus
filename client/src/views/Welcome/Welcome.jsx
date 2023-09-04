import mainSchoolBusImg from '@/assets/img/main_school_bus.png'
import Topbar from '@/components/Topbar/Topbar.jsx'
import './Welcome.scss'

const Welcome = () => {
  return (
    <div className='welcome-wrapper'>
      <Topbar />
      <div className='content'>
        <div className='bus-img'>
          <img src={mainSchoolBusImg} />
        </div>
        <div className='welcome-info'>
          <section className='about'>
            <h2>Czym jest OMNIBUS ?</h2>
            <div className='cards'>
              <div className='card st'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ducimus minus
                  voluptatem omnis iusto eum aperiam incidunt voluptate tempore iste sit adipisci
                  dolorem saepe, odio animi maxime, fugiat eos explicabo.
                </p>
              </div>
              <div className='card nd'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ducimus minus
                  voluptatem omnis iusto eum aperiam incidunt voluptate tempore iste sit adipisci
                  dolorem saepe, odio animi maxime, fugiat eos explicabo.
                </p>
              </div>
              <div className='card rd'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ducimus minus
                  voluptatem omnis iusto eum aperiam incidunt voluptate tempore iste sit adipisci
                  dolorem saepe, odio animi maxime, fugiat eos explicabo.
                </p>
              </div>
              <div className='card th'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ducimus minus
                  voluptatem omnis iusto eum aperiam incidunt voluptate tempore iste sit adipisci
                  dolorem saepe, odio animi maxime, fugiat eos explicabo.
                </p>
              </div>
            </div>
          </section>
        </div>
        <footer></footer>
      </div>
    </div>
  )
}

export default Welcome
