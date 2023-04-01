import "./mrdStyles.scss";
import breadcrumbDescriptions from "../../components/Breadcrumb/data";

const MRD = () => {
  return (
    <div className="mobile-realizacja-component">
      {breadcrumbDescriptions.flatMap((el) =>
        el.baczekWebsite.map((el) => {
          return (
            <>
              <div className="mobile-realizacja-component__title">
                {el.title}
              </div>
              <div className="mobile-realizacja-component__description">
                {el.description}
              </div>
            </>
          );
        })
      )}
    </div>
  );
};

export default MRD;
