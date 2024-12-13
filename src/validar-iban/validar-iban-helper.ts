import {__BANK_LIST, IbanInformation, pattern} from "./validar-iban-model";
import {validateIBAN, ValidateIBANResult} from "ibantools";

export const validNumberIban = (value: string): boolean => {
    return pattern.test(value);
};

const validateIban = (value: string): ValidateIBANResult =>{
    return validateIBAN(value); 
};

console.log(validateIban("ES6621000418401234567891"));

export const ibanInformation = (value: string): IbanInformation =>{
    const info = pattern.exec(value);
    const information: IbanInformation = {bank: "0",  office: "0", controlNumber: "0", account: "0"};
    if (info){
        const {bank, office, controlNumber, account} = info.groups as any; 
        information.bank = getBankName(bank);
        information.office = office;
        information.controlNumber = controlNumber;
        information.account = account;
    }
    return information;
};

export const getBankName = (bank: string): string =>{
    const regex = new RegExp(".*"+bank+".*", "g");
    const bankName = __BANK_LIST.match(regex);
    let name = "";
    if(bankName){
        name = bankName[0].replace(/^...../g, "");
    }
    return name;
};



