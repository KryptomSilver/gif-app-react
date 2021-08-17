import React from "react";
const { shallow } = require("enzyme");
import GifExpertApp from "../GifExpertApp";

describe("Prubas en el componente <GifExpertApp/>", () => {
  test("Debe de mostrar el componente correctamente", () => {
    const wraper = shallow(<GifExpertApp />);
    expect(wraper).toMatchSnapshot();
  });
  test("Debe de mostrar la lista de categorias", () => {
    const categories = ["One Puch", "Dragon Ball"];
    const wraper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wraper).toMatchSnapshot();
    expect(wraper.find("GifGrid").length).toBe(categories.length);
  });
});
