import showcase from "../css/Showcase.module.css";

const Index = () => {
  return (
    <section id={showcase.showcase} className="valign-wrapper">
      <div className="container">
        <div className="showcase-content">
          <h4 className={showcase.showcase.h1}>
            Download the poem collection,
            <br />
            <span className="big">"The Man in Me"</span>
          </h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            enim, quia ullam at quaerat iure.
          </p>
          <div className="ctas">
            <a className="waves-effect waves-light btn">Download</a>
            <a href="#" className="waves-effect waves-light btn">
              About Book
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
