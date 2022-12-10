import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import stars from "../images/home/stars.png";
import brownMMA from "../images/home/brown-mma-mockup.png";
import cinapse from "../images/home/cinapse-mockup.png";
import plantStudio from "../images/home/plant-gen-mockup.png";
import storyboard from "../images/home/storyboard-mockup.png";
import "./Homepage.css";
import ProjectCard from "./blog/ProjectCard";

function Homepage() {
  const ProjectGrid = () => (
    <Container>
      <Row xs={1} md={2} lg={2} sm={1} xl={2} className="my-3">
        <Col className="">
          <ProjectCard
            imgSrc={brownMMA}
            projectName="BrownMMA"
            urlName="brown-mma"
          ></ProjectCard>
        </Col>
        <Col className="">
          <ProjectCard
            imgSrc={cinapse}
            projectName="Cinapse"
            urlName="cinapse"
          ></ProjectCard>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={2} sm={1}>
        <Col className="">
          <ProjectCard
            imgSrc={plantStudio}
            projectName="Plant Studio"
            urlName="plant-studio"
          ></ProjectCard>
        </Col>
        <Col className="">
          <ProjectCard
            imgSrc={storyboard}
            projectName="Storyboard"
            urlName="storyboard"
          ></ProjectCard>
        </Col>
      </Row>
    </Container>
  );

  return (
    <div>
      <div
        className="home-slide m-0 p-0"
        style={{ backgroundImage: `url(${stars})` }}
      >
        <Row
          className="align-items-center justify-content-center"
          style={{ height: "100%" }}
        >
          <Col>
            <Container>
              <h1 className="huge-text">
                <b>Hello, I'm Cozy Cat</b>
              </h1>
              <p style={{ fontSize: "48px", color: "white" }}>
                Computer science student at Brown University
              </p>
            </Container>
          </Col>
        </Row>
      </div>
      <Container fluid="md">
        <Row className="align-items-md-center mt-4">
          <Col>
            <hr></hr>
          </Col>
          <Col md="auto">
            <div style={{ fontSize: "36px" }}>
              <b>My Projects</b>
            </div>
          </Col>
          <Col>
            <hr></hr>
          </Col>
        </Row>
      </Container>
      <ProjectGrid />
    </div>
  );
}

export default Homepage;
