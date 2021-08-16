import { getGifs } from "../../helpers/getGifs";
describe("Debe de evaluar getGifs Fetch", () => {
  test("Debería de obetener 10 elementos", async () => {
    const gifs = await getGifs("Goku");
    expect(gifs.length).toBe(10);
  });
  test('Debería de obtener 0 elementos', async() => {
    const gifs = await getGifs("")
    expect(gifs.length).toBe(0);
  })
  
});
