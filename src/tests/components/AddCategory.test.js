import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";
import React from "react";

describe("Debe de evaluar el componente <AddCategory/>", () => {
  const setCategories = jest.fn();
  let wraper = shallow(<AddCategory setCategories={setCategories} />);
  beforeEach(() => {
    jest.clearAllMocks();
    wraper = shallow(<AddCategory setCategories={setCategories} />);
  });
  test("Debe de mostrar el componente correctamente ", () => {
    expect(wraper).toMatchSnapshot();
  });
  test("Debe de cambiar la caja de texto", () => {
    const input = wraper.find("input");
    const value = "Hola mundo";
    input.simulate("change", { target: { value } });
    expect(wraper.find("p").text().trim()).toBe(value);
  });
  test("no debe de postear al información onSubmit", () => {
    wraper.find("form").simulate("submit", {
      preventDefault() {},
    });
    expect(setCategories).not.toHaveBeenCalled();
  });
  test("Debe de llamar el setCategories y limpiar la caja de texto", () => {
    // 1 Simular el imputChange
    const input = wraper.find("input");
    const value = "Cambio";
    input.simulate("change", { target: { value } });
    expect(wraper.find("p").text().trim()).toBe(value);
    // 2 Simular el submit
    wraper.find("form").simulate("submit", {
      preventDefault() {},
    });
    // 3 setCategories se debe de haber llamado
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    // 4 El valor del input debe estar en ""
    expect(wraper.find("input").prop("value")).toBe("");
  });
});
