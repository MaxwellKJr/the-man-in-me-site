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
        <meta name="og:title" content="The Man in Me📕" />
        <meta
          property="og:description"
          content="Download 'The Man in Me'. A Poetry Collection by Maxwell Kapezi Jr."
        />
        <meta
          property="og:image"
          content="https://www.udrop.com/file/9925/screenshot.png"
        />
        <meta property="og:url" content="https://themaninme.vercel.app" />
        <meta
          name="twitter:title"
          content="Download 'The Man in Me' by Maxwell Kapezi, Jr. "
        />
        <meta
          name="twitter:description"
          content="'The Man in Me' is a collection of narrative poems about a woman who checks herself into a mental hospital. We slowly learn about her life, poem by poem."
        />
        <meta
          name="twitter:image"
          content="https://www.udrop.com/file/4Xsh/coverart.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <title>
          Download "The Man in Me". A Poetry Collection by Maxwell Kapezi Jr.
        </title>
      </Head>

      <div className="container">
        <div className="showcase-content">
          <h4>
            <span className="flow-text">Download the poetry collection,</span>
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
              target="_blank"
              rel="noopener noreferrer"
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
