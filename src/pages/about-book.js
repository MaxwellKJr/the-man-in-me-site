import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import showcase from "../css/Showcase.module.css";

const AboutBook = () => {
  return (
    <section id={showcase.showcase} className="valign-wrapper left-align">
      <Head>
        <title>About the Ebook | The Man in Me</title>
      </Head>

      <div className="container">
        <div className="about-content">
          <div className="row">
            <div className="col s12 m4 ebook-cover"></div>
            <div className="col s12 m8 ebook-description">
              <h4>About Ebook</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur voluptas voluptate minima!
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Facilis ducimus tempore ipsa inventore aliquam eligendi?
              </p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className="ctas">
            <Link href="/">
              <a className="waves-effect waves-dark btn btn-large amber lighten-2 black-text b-text">
                <FontAwesomeIcon icon={faArrowLeft} /> About Book
              </a>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default AboutBook;
