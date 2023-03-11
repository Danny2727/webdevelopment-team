const Manager = require("../lib/Manager")


test("should create an manager object", () => {
    const mng = new Manager()
    expect(mng).toBeInstanceOf(Manager);
});

test("should accept name, id, and email, office parameters", () =>{
    const name = 'Meech';
    const id = 3;
    const email = "meech@gmail.com";
    const office = 4;
    const mng = new Manager (name, id, email, office);
    expect(mng.name).toBe('Meech');
    expect(mng.id).toBe(3);
    expect(mng.email).toBe('meech@gmail.com');
    expect(mng.office).toBe(4)
})