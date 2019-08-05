import React from "react"
import { Card } from "react-bootstrap"
import DuraUSA from "../images/df.com.png"
import DuraCanada from "../images/df.ca.png"
import ArgUSA from "../images/arg.com.png"
import ArgCanada from "../images/arg.ca.png"
import OptiCanada from "../images/opti.ca.png"
import OptiUSA from "../images/opti.com.png"
import ABCMovies from "../images/ABCMovielogo.png"
import Layout from "../components/Layout"

import "bootstrap/dist/css/bootstrap.css"
import "../css/portfolio-style.css"

const Portfolio = () => {
  return (
    <Layout>
      <Card bg="light" className="text-center text-dark">
        <Card.Body>
          <h1 className="text-dark">
            <b>Projects Developed by Me</b>
          </h1>
        </Card.Body>
      </Card>

      <div className="container">
        <div className="row">
          <div className="card-deck">
            <div className="card">
              <img
                rounded
                className="card-img rounded-top"
                src={ABCMovies}
                alt="Card img cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text text-justify">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div className="card">
              <img
                rounded
                className="card-img rounded-top"
                src={ABCMovies}
                alt="Card img cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text text-justify">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div className="card">
              <img
                rounded
                className="card-img rounded-top"
                src={ABCMovies}
                alt="Card img cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text text-justify">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="card-deck">
            <div className="card">
              <img
                rounded
                className="card-img rounded-top"
                src={ABCMovies}
                alt="Card img cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text text-justify">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div className="card">
              <img
                rounded
                className="card-img rounded-top"
                src={ABCMovies}
                alt="Card img cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text text-justify">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div className="card">
              <img
                rounded
                className="card-img rounded-top"
                src={ABCMovies}
                alt="Card img cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text text-justify">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Card bg="light" className="text-center">
          <Card.Body>
            <h1 className="text-dark">
              <b>Projects Managed by Me</b>
            </h1>
          </Card.Body>
        </Card>

        <div className="container">
          <div className="row">
            <div className="card-deck">
              <div className="card">
                <img
                  rounded
                  className="card-img rounded-top"
                  src={DuraCanada}
                  alt="Card img cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Durafastlabel.ca</h5>
                  <p className="card-text text-justify">
                    DuraFast specializes in serving the "do-it-yourself" label
                    printing market both for industrial and product label
                    printing. Recognizing the advanced capabilities of modern
                    high speed and high resolutions color label printers, we
                    realized that traditional label stock doesn't always measure
                    up.
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="https://www.durafastlabel.ca"
                    className="stretched-link"
                    target="_blank"
                  >
                    <em>Go to Durafastlabel.ca</em>
                  </a>
                </div>
              </div>
              <div className="card">
                <img
                  rounded
                  className="card-img rounded-top"
                  src={ArgCanada}
                  alt="Card img cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Argonstore.ca</h5>
                  <p className="card-text text-justify">
                    At our one-stop store, you will find high-performance label
                    printing solutions that can contribute to your item packing,
                    increase productivity, and save you both time and money.We
                    are ready to supply you with top-notch commercial and
                    industrial label printers in Canada and beyond.
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="https://www.argonstore.ca"
                    className="stretched-link"
                    target="_blank"
                  >
                    <em>Go to Argonstore.ca</em>
                  </a>
                </div>
              </div>
              <div className="card">
                <img
                  rounded
                  className="card-img rounded-top"
                  src={OptiCanada}
                  alt="Card img cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Optimedialabs.ca</h5>
                  <p className="card-text text-justify">
                    Optimedia Labs opens the door to a myriad of new
                    opportunities for business owners, manufacturers, and
                    retailers. We know how to highlight your brand identity and
                    erect a commercial bridge between customers and your
                    company. At our store, you have a chance to buy colour label
                    printers from manufacturers that have already made names for
                    themselves in the industry.
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="https://www.optimedialabs.ca"
                    className="stretched-link"
                    target="_blank"
                  >
                    <em>Go to Optimedialabs.ca</em>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="card-deck">
              <div className="card">
                <img
                  rounded
                  className="card-img rounded-top"
                  src={DuraUSA}
                  alt="Card img cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Durafastlabel.com</h5>
                  <p className="card-text text-justify">
                    DuraFast Label Company was established in 2012, as a
                    division of Sector Nine Distribution Limited. Recognizing
                    the advanced capabilities of modern high speed and high
                    resolution color label printers, we realized that
                    traditional label stock doesn't always measure up. Cheap
                    labels often smudge, fade, or deteriorate over time.
                    DuraFast labels are designed specifically for these
                    printers, ensuring that your color label printer's output is
                    placed on a worthy durable, colorfast label.
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="https://www.durafastlabel.com"
                    className="stretched-link"
                    target="_blank"
                  >
                    <em>Go to Durafastlabel.com</em>
                  </a>
                </div>
              </div>
              <div className="card">
                <img
                  rounded
                  className="card-img rounded-top"
                  src={ArgUSA}
                  alt="Card img cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Argonstore.com</h5>
                  <p className="card-text text-justify">
                    Argon Technology products help save your business time and
                    money by ensuring the integrity of the client booting
                    process, day in and day out. As the installed base of
                    networked PCs continues to grow, network booting solutions
                    are essential to maintaining the integrity of corporate
                    information infrastructures. Network booting is also an
                    increasingly important element of any total desktop
                    management solution.
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="https://www.argonstore.com"
                    className="stretched-link"
                    target="_blank"
                  >
                    <em>Go to Argonstore.com</em>
                  </a>
                </div>
              </div>
              <div className="card">
                <img
                  rounded
                  className="card-img rounded-top"
                  src={OptiUSA}
                  alt="Card img cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Optimedialabs.com</h5>
                  <p className="card-text text-justify">
                    Optimedia Labs is a leading retailer of Primera color label
                    printers and Bravo-series CD DVD printers and disc
                    publishers in North America. We also supply a large range of
                    printable tags, inks cartridges and blank labels. The
                    Primera LX400 and LX900 color label printers are one of the
                    most popular label printers when printing your own
                    restaurant table top menus, food labels (wine labels, tea
                    labels, coffee labels, candle labels, candy labels), name
                    badges and price tags.
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="https://www.optimedialabs.com"
                    className="stretched-link"
                    target="_blank"
                  >
                    <em>Go to Optimedialabs.com</em>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Portfolio
