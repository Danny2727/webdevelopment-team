const Engineer = require("../lib/Engineer")


test("should create an engineer object", () => {
    const eng = new Engineer()
    expect(eng).toBeInstanceOf(Engineer);
});

test("should accept name, id, and email, github parameters", () =>{
    const name = 'Meech';
    const id = 2;
    const email = "meech@gmail.com";
    const github = "Meech@2727"
    const eng = new Engineer(name, id, email, github);
    expect(eng.name).toBe('Meech');
    expect(eng.id).toBe(2);
    expect(eng.email).toBe('meech@gmail.com');
    expect(eng.github).toBe("Meech@2727")
})