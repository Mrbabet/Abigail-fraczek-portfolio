import Avatar from "../../../assets/images/Photo.png";

const Contact = () => {
  return (
    <>
      <div className="designer__avatar-desktop">
        <img src={Avatar} alt="" />
      </div>
      <div className="designer">
        <div className="designer__avatar">
          <img src={Avatar} alt="" />
        </div>
        <div className="designer-text">
          <div className=" designer__name bold">Abigail Frączek</div>
          <p className="designer__description">
            Jestem projektantką graficzną, UI/UX designerką oraz ilustratorką.
            Swoje zdolności artystyczne rozwijam od dziecka, grafikę projektową
            poznaję od 10 lat. Chcę zgłębiać kierunki digital designu i uczyć
            się od lepszych. Lubię rysować portrety, lubię minimalizm i lubię
            dobrych ludzi.
          </p>
        </div>
      </div>
      <div className="links">
        <ul>
          <li className="email">abigailfraczek.kontakt@gmail.com</li>
        </ul>
        <ul className="social-media">
          <li>Instagram</li>
          <li>Behance</li>
          <li>LinkedIn</li>
          <li>Facebook</li>
          <li>UseMe</li>
        </ul>
      </div>
      <div className="flex-row">
        <div className="education">
          <div className="education__header bold">Wykształcenie</div>
          <p className="education__description">
            Magistra Sztuki na wydziale Grafiki Akademia Sztuk Pięknych im. W.
            Strzemińskiego w Łodzi
          </p>
          <p className="education__description">Kurs Digital Designer</p>
        </div>
        <div className="skills">
          <div className="skills__header bold">Umiejętności</div>

          <ul>
            <li>Logo</li>
            <li>Identyfikacja wizualna</li>
            <li>Typografia</li>
            <li>Grafika 2D</li>
            <li>Web Design</li>
            <li>UX/UI</li>
            <li>Ilustracja</li>
          </ul>
        </div>
        <div className="programs">
          <div className="programs__header bold">Programy</div>

          <ul>
            <li>Ilustrator</li>
            <li>Photoshop</li>
            <li>InDesign</li>
            <li>Figma</li>
            <li>Procreate</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contact;
