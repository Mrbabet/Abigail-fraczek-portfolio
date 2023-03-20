import { useState } from "react";

const InformatorBtn = () => {
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
    <>
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

      <p className="click-items-description">{description}</p>
    </>
  );
};

export default InformatorBtn;
