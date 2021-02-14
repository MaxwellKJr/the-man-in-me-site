import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import showcase from "../css/Showcase.module.css";

const Index = () => {
  return (
    <section id={showcase.showcase} className="valign-wrapper center-align">
      <Head>
        <title>
          Download "The Man in Me". A Poem Collection by Maxwell Kapezi Jr.
        </title>
      </Head>

      <div className="container">
        <div className="showcase-content">
          <h4>
            Download the poem collection,
            <br />
            <span className="big">"The Man in Me"</span>
          </h4>
          <p>
            <em>
              "With each change, I changed, too. My thoughts, personality, how I
              saw right and wrong. Words can kill."
            </em>{" "}
            <br /> ~ Skull Face, Metal Gear Solid V: The Phantom Pain
          </p>
          <div className="ctas">
            <a
              href="https://www.datafilehost.com/d/d9671037"
              className="waves-effect waves-dark btn btn-large amber lighten-2 black-text"
            >
              Download PDF <FontAwesomeIcon icon={faDownload} />
            </a>
            <Link href="/about-book">
              <a className="waves-effect waves-dark btn btn-large amber lighten-2 black-text b-text">
                About Book <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Index;
