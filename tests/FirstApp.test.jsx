import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp.jsx";

describe("Pruebas en FirstApp", () => {
  // test("Debe de hacer match con el snapshot", () => {
  //   const title = "Hola soy un title";
  //   const { container } = render(<FirstApp title={title} />);

  //   expect(container).toMatchSnapshot();
  // });

  test("Debe mostrar titulo en H1", () => {
    const title = "Hola soy un title";
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );

    expect(getByText(title)).toBeTruthy();

    // const h1 = container.querySelector("h1");
    // expect(h1.innerHTML).toBe(title);
    expect(getByTestId("test-title").innerHTML).toContain(title);
  });
});
