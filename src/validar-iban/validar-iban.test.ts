import {getBankName, validNumberIban} from "./validar-iban-helper";

describe("validNumberIban", () => {
    test.each([
        ["ES21 1465 0100 72 2030876293", true],
        ["21 1465 0100 72 2030876293", false],
        ["ES2114650100722030876293", true],
        ["ES21.1465.0100.72.2030876293", false],
        ["ES21-1465-0100-72-2030876293", true],
        ["ES21 1465 0100 72 20308763", false],
        ["ES21 1465 0100 AA 2030876293", false],
        ["ES2176293", false],
        ["ES21C1465C0100C72C2030876293", false],
        ["PT2114650100722030876293", true],
    ])(
        "Debería de devolver para el IBAN %s el valor %s",
        (valor: string, expected: boolean) =>{
            expect(validNumberIban(valor)).toBe(expected);
        }
    );
});

describe("getBankName", () => {
    it("Debería de devolver Caixabank", () =>{
        //Arrange
        const bank = "2100";

        //Act
        const result = getBankName(bank);

        //Asert
        const name = "Caixabank"
        expect(result).toEqual(name);
    });

    it("Debería de devolver Deutsche Bank SAE", () =>{
        //Arrange
        const bank = "0019";

        //Act
        const result = getBankName(bank);

        //Asert
        const name = "Deutsche Bank SAE"
        expect(result).toEqual(name);
    });
});