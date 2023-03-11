const Intern = require("../lib/Intern")


test("should create an intern object", () => {
    const int = new Intern()
    expect(int).toBeInstanceOf(Intern);
});

test("should accept name, id, and email, school parameters", () =>{
    const name = 'Meech';
    const id = 4;
    const email = "meech@gmail.com";
    const school = "UCF";
    const int = new Intern (name, id, email, school);
    expect(int.name).toBe('Meech');
    expect(int.id).toBe(4);
    expect(int.email).toBe('meech@gmail.com');
    expect(int.school).toBe("UCF")
})