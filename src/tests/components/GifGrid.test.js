import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import React from "react";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Debe de evaluar el componente <GifGrid/>", () => {
  const category = "Categoria";
  test("Debe de mostrar el componente correctamente", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wraper = shallow(<GifGrid category={category} />);
    expect(wraper).toMatchSnapshot();
  });
  test("Debe de mostrar items cuando se cargan imagenes setFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        url: "http://localhost/",
        title: "Cualquier Cosa",
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wraper = shallow(<GifGrid category={category} />);
    // expect(wraper).toMatchSnapshot();
    expect(wraper.find("p").exists()).toBe(false);
    expect(wraper.find("GifGridItem").length).toBe(gifs.length);
  });
});
