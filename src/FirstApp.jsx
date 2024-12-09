//rafc
import PropTypes from "prop-types";

export const FirstApp = ({ title, subTitle, name }) => {
  return (
    <>
      <div data-testid="test-title">{title}</div>
      <h1>{subTitle}</h1>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

FirstApp.defaultProps = {
  title: "Hola soy un title",
  subTitle: "Hola soy un subTitle",
};
