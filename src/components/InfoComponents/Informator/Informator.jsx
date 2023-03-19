import "./informatorStyles.scss";
import { useState } from "react";

const Informator = () => {
  const informatorDescriptions = [
    {
      title: "Wiedza",
      description:
        "Projektant graficzny posiada wiedzę z zakresu estetyki, optyki, kompozycji, teorii barw, typografii i druku, a także psychologii, marketingu oraz aktualnych trendów.",
    },
    {
      title: "Doświadczenie",
      description:
        "Doświadczony designer to dziesiątki tysięcy godzin spędzonych na treningu swojego fachu oraz wiele przebytych współprac. Dzięki temu wiesz, że nie popełnisz błędu, ponieważ Twój grafik ma je już za sobą. Zadba on też o komunikację i czujnie przeprowadzi Cię przez proces współpracy, aby obie strony wyniosły z niej jak najwięcej korzyści.",
    },
    {
      title: "Umiejętności",
      description:
        "Doświadczony grafik panuje nad kompozycją programów, które dopełniają swoje funkcje i pozwalają stworzyć funkcjonalny produkt. Jest też biegły w wykreślaniu swoich pomysłów i wdrażaniu ich w życie z należytą starannością.",
    },
    {
      title: "Styl",
      description:
        "Każdy designer z czasem wypracowuje własną estetykę i styl. Im więcej lat poświęci na swoją twórczość, tym bieglej posługuje się własnym językiem, którym przemawia do wybranej grupy klientów.",
    },
    {
      title: "Kreatywność",
      description:
        "Doświadczony grafik wie co w trawie piszczy. Obserwuje rynek i trendy, wie co już było i przewiduje co będzie, a jego zawodową ambicją jest stworzenie czegoś nowego. Kreatywność to niepowtarzalność, świeżość, i wyróżniający się na rynku produkt.",
    },
    {
      title: "Jakość",
      description:
        "Doświadczony projektant nie przystaje na pierwszą propozycję, lecz sprawdza wszystkie możliwe rozwiązania, i wybiera najlepsze.",
    },
    {
      title: "Reaserch",
      description:
        "Reaserch obejmuje analizę konkurencji oraz stworzenie moodboardu. To ważny etap pozwalający zyskać perspektywę rynkową, stworzyć szereg możliwości i przedstawić klientowi różne kierunki wizualne.",
    },
    {
      title: "Strategia",
      description:
        "Na podstawie reaserchu powstaje strategia brandingowa, czyli określona wizja marki oraz zbiór działań marketingowych, mających na celu wcielić tę wizję w życie i stworzyć skuteczny produkt.",
    },
    {
      title: "Konsultacje",
      description:
        "Konsultacje to przede wszystkim czas, który należy poświęcić m.in. na tworzenie prezentacji wizualnie wspierających dyskusję, na wypracowywanie wspólnej koncepcji oraz na zlecone przez klienta poprawki.",
    },
    {
      title: "Przygotowanie plików",
      description:
        "Ostatni etap prac to zapis każdego z powstałych materiałów w 3-5 formatach oraz w 2 paletach barw, a także opracowanie Księgi Znaku lub Księgi Identyfikacji Wizualnej. Pliki powinny być łatwe w samodzielnej obsłudze i używalne w każdej sytuacji.",
    },
    {
      title: "Licencje",
      description:
        "Narzędzia pracy projektanta graficznego w większości wymagają płatnej licencji.",
    },
    {
      title: "Programy graficzne",
      description: "Niektóre z programów graficznych wymagają pełnego zakupu.",
    },
    {
      title: "Kursy zawodowe",
      description:
        "Branża kreatywna to ogrom specjalizacji, a rozwój techniki rodzi kolejne trendy i możliwości, dlatego projektant graficzny stale poszerza swoje horyzonty, aby oferować aktualne usługi o wysokiej jakości.",
    },
    {
      title: "Sprzęt",
      description:
        "Programy graficzne wymagają profesjonalnego sprzętu o wysokiej mocy, który wspiera jakość i poziom skomplikowania projektów.",
    },
    {
      title: "Opłaty firmowe",
      description:
        "Współprace napędzają biznes, a biznes napędza koszty. Freelancer posiadający własną działalność samodzielnie pokrywa jej opłaty.",
    },
  ];
  const [description, setDescription] = useState(
    "Projektant graficzny posiada wiedzę z zakresu estetyki, optyki, kompozycji, teorii barw, typografii i druku, a także psychologii, marketingu oraz aktualnych trendów."
  );

  return (
    <div className="informator-components">
      <div className="click-items">
        <div className="click-items__title">Za co płacisz?</div>
        <div className="click-items-btns">
          {informatorDescriptions.map((description) => (
            <button
              type="button"
              key={description.title}
              className="click-item-btn"
              onClick={() => {
                setDescription(description.description);
              }}
            >
              {description.title}
            </button>
          ))}
        </div>
        <div className="click-items-description">
          <p>{description}</p>
        </div>
      </div>

      <div className="informator">
        <div className="informator__title">
          Logo - dlaczego to ważny element w budowaniu marki?
        </div>
        <p className="informator__description">
          Logo jest wizualną reprezentacją Ciebie i Twojego biznesu. Jest to
          jeden z elementów budujących tożsamość marki. Logo to znak
          rozpoznawczy firmy i powinien być unikalny, lecz łatwo zapamiętywalny
          oraz na tyle prosty, by można go odczytać w przelocie. Znaki graficzne
          odczytujemy intuicyjnie, dlatego ważne jest, aby zawrzeć w logo ideę
          marki i przekazać ją w formie, kolorze i odpowiednio dobranym foncie.
          Dobrze zaprojektowane logo zwizualizuje Twoją markę i zakomunikuje jej
          wartości, nada firmie swoistego charakteru, wyróżni Cię spośród
          konkurencji i zapadnie w pamięć potencjalnym klientom.
        </p>
      </div>
      <div className="informator">
        <div className="informator__title">
          Spójna identyfikacja wizualna - dlaczego warto w nią zainwestować?
        </div>
        <p className="informator__description">
          Identyfikacja wizualna to inaczej wizualna tożsamość marki. Tożsamość
          wizualną buduje szereg działań projektowych, tj. styl, kompozycja,
          paleta barw i typografia. Te działania to tzw. Visual Key (klucz
          wizualny), i opisuje go Księga Identyfikacji Wizualnej, która pełni
          rolę instrukcji obsługi zaprojektowanych rozwiązań. Visual Key
          powinien oddawać charakter branży, komunikować wartości marki oraz jej
          ideę, powinien też trafiać do zdefiniowanej grupy odbiorców. Materiały
          wizualne odbieramy wrażeniowo, dlatego odpowiednie decyzje projektowe
          pozwalają zakodować w identyfikacji przesłanie, które wywoła pożądane
          emocje u Twoich konsumentów. Dlatego identyfikacja wizualna to
          ucieleśnienie obranej strategii marketingowej. Głównym zadaniem
          identyfikacji wizualnej jest wywoływanie natychmiastowego skojarzenia
          z Twoją marką. Jeśli identyfikacja jest spójna, to w głowach
          konsumentów działa jak kotwica informacji. W ten sposób marka zyskuje
          własny charakter i określony wizerunek. Należy zadbać o to, aby
          konsumenci obcowali z nim jak najczęściej, a pomoże w tym logo oraz
          materiały promocyjne, tj. druki firmowe, ulotki i plakaty, opakowania
          produktów, ubiory pracowników oraz grafiki na social-media czy strona
          www. Podmioty nieposiadające klucza wizualnego - stosujące mix
          stylistyczny - wywołują u odbiorców dysonans poznawczy,
          uniemożliwiający zdefiniowanie charakteru, i są postrzegane jako
          nijakie, trudne w odbiorze i nie warte uwagi. Natomiast konsekwentne
          stosowanie Visual Key na wszelkich polach promocji marki przekłada się
          na wzrost jej rozpoznawalności, a tym samym pozycji rynkowej.
          Identyfikacja wizualna to sposób na dotarcie do świadomości klientów i
          budowanie z nimi relacji. Tak jak opracowanie strategii marketingowej,
          tak i stworzenie identyfikacji wizualnej stanowi inwestycję w
          przyszłość Twojej firmy.
        </p>
        <p className="other-info">
          *Jeśli nie posiadasz strategii dla swojej firmy, pomogę Ci ją
          opracować poprzez zadanie odpowiednich pytań w ankiecie poprzedzającej
          współpracę.
        </p>
      </div>
      <div className="informator">
        <div className="informator__title">
          Strona www - jakie niesie korzyści?
        </div>
        <p className="informator__description">
          Witryna internetowa to ukłon w stronę klienta w procesie zaspokajania
          jego potrzeb konsumenckich. Dla Ciebie to dostęp do tysięcy
          potencjalnych klientów oraz możliwość dotarcia do nich bez ograniczeń
          terytorialnych czy lokalnych. Jak wykorzystać potencjał tego medium?
          Aby zaczerpnąć pełnię korzyści z posiadania własnej strony www należy
          uświadomić sobię jej główne założenie. Głównym celem strony jest
          dotarcie do docelowej grupy konsumentów i odpowiedź na jej potrzeby.
          Należy także założyć, że potencjalny klient nie ma czasu na gruntowne
          zapoznanie się z witryną, a wszelkie czynności chce wykonać sprawnie i
          bezproblemowo. Dlatego skuteczna strona to dobre pozycjonowanie,
          przejrzysty i intuicyjny design oraz możliwość "rozwiązania problemu"
          klienta, którym zazwyczaj jest szybkie uzyskanie informacji na dany
          temat lub sprawne wykonanie czynności, np. złożenie zamówienia. Na
          takiej stronie klient pozostanie chętniej niż na stronach
          konkurencyjnych, a jeśli wizytę w witrynie oceni jako owocną i
          komfortową, z pewnością wróci po więcej. Strona internetowa to także
          Twoja cyfrowa wizytówka. W dobie cyfryzacji sieć stała się obszernym
          medium kreacji wizerunkowej i stanowi najłatwiej dostępne i
          najczęściej wybierane źródło informacji. Z pomocą odpowiedniego
          kontentu tekstowego oraz wizualnego pozwala na kształtowanie narracji
          o Twojej firmie, co czyni ją silnym elementem identyfikacji wizualnej.
        </p>
      </div>
    </div>
  );
};

export default Informator;
