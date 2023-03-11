const Employee = require("../lib/Employee")


test("should create an employee object", () => {
    const emp = new Employee()
    expect(emp).toBeInstanceOf(Employee);
});

test("should accept name, id, and email parameters", () =>{
    const name = 'Meech';
    const id = 1;
    const email = "meech@gmail.com";
    const emp = new Employee(name, id, email);
    expect(emp.name).toBe('Meech');
    expect(emp.id).toBe(1);
    expect(emp.email).toBe('meech@gmail.com');
})




// describe("Employee", () => {
//     it("should can create an employee object", () => {
//         const emp = new Employee()
//         expect(emp).toBeInstanceOf(Employee);
//     }
// )});