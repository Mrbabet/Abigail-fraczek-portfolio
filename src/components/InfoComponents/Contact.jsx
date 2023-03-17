const Contact = () => {
  return (
    <div className="info-components">
      <div className="designer">
        <div className="designer__name">Abigail Frączek</div>
        <p className="designer__description">
          Jestem projektantką graficzną, junior UI/UX designerką oraz
          ilustratorką. Swoje zdolności artystyczne rozwijam od dziecka, grafikę
          projektową poznaję od 10 lat. Chcę zgłębiać kierunki digital designu i
          uczyć się od lepszych. Lubię rysować portrety, lubię minimalizm i
          lubię dobrych ludzi.
        </p>
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
      <div className="education">
        <div className="education__header">Wykształcenie</div>
        <p className="education__description">
          Magistra Sztuki na wydziale Grafiki Akademia Sztuk Pięknych im. W.
          Strzemińskiego w Łodzi
        </p>
        <p className="education__description">Kurs Digital Designer</p>
      </div>
      <div className="skills">
        Umiejętności
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
        Programy
        <ul>
          <li>Ilustrator</li>
          <li>Photoshop</li>
          <li>InDesign</li>
          <li>Figma</li>
          <li>Procreate</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
