import data from '../data.js'
import Team from '../components/Team'
import { Row, Col } from 'react-bootstrap'

const { team } = data;

function HomeScreen() {
  return (
    <div>
      <Row>
        <Col>
          <h1>Multi-mission Aerial Ground-based Navigation Unmanned System</h1>
        </Col>
      </Row>

      <h2 className='mt-5 mb-3'>About Us</h2>
      <Row>
        <Col>
          <p>
            At Magnus Technologies Inc., we are a collective of passionate researchers, engineers, and scientists united by a common goal: to leverage locally developed technologies for the betterment of our community and nation. Within the professional, scientific, and technical landscape, our focus is dual-fold: we specialize in the development and integration of unmanned systems tailored to the unique needs of our clientele, while also providing exclusive solutions for our esteemed partners.
          </p>
          <p>
            In the realm of unmanned systems, our expertise is unparalleled. We pride ourselves on delivering advanced solutions across a spectrum of industries where such systems are indispensable. Whether it is precision agriculture, infrastructure inspection, or environmental monitoring, our unmanned system technologies empower organizations to achieve their objectives with unprecedented efficiency and accuracy.
          </p>
          <p>
            Moreover, our commitment extends beyond mere product delivery. Through collaborative partnerships with organizations spanning diverse sectors, we strive to share our innovative technologies, thereby augmenting the value of their offerings and providing them with a distinct competitive advantage within their respective markets. We firmly believe that by fostering synergistic relationships, we can collectively drive progress and innovation on a broader scale.
          </p>
        </Col>
       </Row>
       
      <h2 className='mt-5 mb-3'>Team Magnus</h2>
      <Row>
        {team.map((team) => ( 
            <Col key={team._id} sm={12} md={6} lg={4} xl={3}>
                <Team team={team} />
            </Col>
        ))}
      </Row>
    </div>
  )
}

export default HomeScreen
