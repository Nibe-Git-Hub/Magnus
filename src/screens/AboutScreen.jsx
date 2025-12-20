import { Row, Col } from 'react-bootstrap';

function AboutScreen() {
  return (
    <div>
      <Row>
        <Col>
          <h1 className='mt-5 mb-5'>About the Company</h1>
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
    </div>
  )
}

export default AboutScreen
