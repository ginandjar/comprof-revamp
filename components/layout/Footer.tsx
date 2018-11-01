import * as React from 'react';
import { Grid, Row, Col } from "react-bootstrap/lib";
import Link from 'next/link';


export default class Footer extends React.Component {
  render() {
    return (
      <footer className="lg-py4">
        <Grid>
          <Row>
            <Col md={6}>
              <div>
                <div>
                  <Link href="/">
                    <a>
                      <img src="https://fakeimg.pl/98x56/?text=Logo" alt="" />
                    </a>
                  </Link>
                </div>
                <p>
                  PT. YesBoss Group Indonesia <br />
                  Graha Tirtadi<br />
                  Jln. Pangeran Antasari 18A<br />
                  Jakarta 12410, Indonesia<br />
                  <Link href="/"><a>business@kata.ai</a></Link><br />
                  <Link href="/"><a>(021) 75917294</a></Link>
                </p>
              </div>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={4}>
                  <h6>Products</h6>
                  <p>
                    <Link href="#"><a>Kata Platform</a></Link><br />
                    <Link href="#"><a>Enterprise Solution</a></Link>
                  </p>
                </Col>
                <Col md={4}>
                  <h6>Company</h6>
                  <p>
                    <Link href="#"><a>Contact Us</a></Link><br />
                    <Link href="#"><a>Blog</a></Link>
                  </p>
                </Col>
                <Col md={4}>
                  <h6>Resources</h6>
                  <p>
                    <Link href="#"><a>Documentation</a></Link><br />
                    <Link href="#"><a>Case Studies</a></Link>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </footer>
    )
  }
}