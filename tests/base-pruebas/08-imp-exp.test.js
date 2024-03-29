import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("pruebas 08-imp-exp.js", () => {
  test("should getHeroeById debe retornar heroe por ID", () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("should getHeroeById debe retornar undefined si no existe", () => {
    const id = 100;
    const hero = getHeroeById(id);

    expect(hero).toBeFalsy();
    expect(hero).toBe(undefined);
  });

  //tarea
  test("should getHeroesByOwner retorna heroes de DC", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(3);
    expect(heroes).toEqual([
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ]);

    expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });

  test("should getHeroesByOwner retorna heroes de Marvel", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2);

    expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });
});
