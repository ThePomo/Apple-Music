import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const ExploreMore: React.FC = () => {
  const exploreOptions = [
    "Esplora per genere",
    "Decenni",
    "Worldwide",
    "Classifiche",
    "Audio spaziale",
    "Video musicali",
    "Nuovi artisti",
    "Hit del passato",
    "Consigliati per te",
  ];

  return (
    <section>
      <Container fluid className="newsContainer m-0 text-white">
        <h2 className="fs-4 mt-4 custom-heading">Altro da esplorare</h2>
      </Container>
      <Container>
        <Row>
          <Col xs={12} md={4} className="text-danger">
            {exploreOptions.slice(0, 3).map((category, index) => (
              <div
                key={`col1-${index}`}
                className="d-flex align-items-center bg-custom rounded-3 mt-3 p-2"
                style={{ height: "100px" }}
              >
                <p className="m-0">{category}</p>{" "}
                <i className="bi bi-chevron-right fs-6 ms-auto"></i>{" "}
              </div>
            ))}
          </Col>
          <Col xs={12} md={4} className="text-danger">
            {exploreOptions.slice(3, 6).map((category, index) => (
              <div
                key={`col2-${index}`}
                className="d-flex align-items-center bg-custom rounded-3 mt-3 p-2"
                style={{ height: "100px" }}
              >
                <p className="m-0">{category}</p>
                <i className="bi bi-chevron-right fs-6 ms-auto"></i>
              </div>
            ))}
          </Col>
          <Col xs={12} md={4} className="text-danger">
            {exploreOptions.slice(6, 9).map((category, index) => (
              <div
                key={`col3-${index}`}
                className="d-flex align-items-center bg-custom rounded-3 mt-3 p-2"
                style={{ height: "100px" }}
              >
                <p className="m-0">{category}</p>
                <i className="bi bi-chevron-right fs-6 ms-auto"></i>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ExploreMore;
