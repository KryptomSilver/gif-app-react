import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";
import React from "react";

describe("Debe de evaluar el componente <GifGridItem/>", () => {
  const title = "titulo";
  const url = "http://localhost:/imagen.jpg";
  const wraper = shallow(<GifGridItem title={title} url={url} />);
  test("Debe de mostrar el componente correctamente ", () => {
    expect(wraper).toMatchSnapshot();
  });
  test("Debe de tener un párrafo con el tittle", () => {
    const p = wraper.find("p");
    expect(p.text().trim()).toBe(title);
  });
  test("Debe de tener una imagen con alt y src de PropTypes", () => {
    const img = wraper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });
  test("Debe tener la clase animate__fadeIn el div", () => {
    const div = wraper.find("div");
    const classfade = div.prop("className");

    expect(classfade.includes("animate__fadeIn")).toBe(true);
  });
});
