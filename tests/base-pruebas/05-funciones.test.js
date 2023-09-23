import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getuser debe rrtornar objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "Mugiwaras",
    };
    const user = getUser();

    expect(testUser).toStrictEqual(user);
  });

  test("getUsuarioActivo debe retornar un objeto", () => {
    const name = "Héctor";
    const testUser = {
      uid: "ABC567",
      username: name,
    };
    const user = getUsuarioActivo(name);

    expect(testUser).toStrictEqual(user);
  });
});
