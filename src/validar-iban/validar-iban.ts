import { ibanInformation, validNumberIban } from "./validar-iban-helper";
import { __ERROR_IBAN, __VALID_IBAN, IbanInformation } from "./validar-iban-model";


const getIban = (): string => {
    const iban = document.getElementById("iban");
    if(iban && iban instanceof HTMLInputElement){
        return iban.value
    }else{
        return "error";
    }
};

const textSection = (value: string): HTMLDivElement =>{
    const section = document.createElement("div");
    section.textContent = value;
    section.setAttribute("id", "div-info");
    section.setAttribute("class", "div-info");
    return section;
};

const writeIbanInfo = () =>{
    const iban = getIban();
    const div = document.getElementById("iban-info");
    const divTemp = document.createElement("div");
    divTemp.setAttribute("id", "div-temp")
    if(div && div instanceof HTMLDivElement){
        div.appendChild(divTemp)
        if(validNumberIban(iban)){
            const ibanInfo: IbanInformation = ibanInformation(iban);
            divTemp.appendChild(textSection(__VALID_IBAN));
            divTemp.appendChild(textSection(`Banco: ${ibanInfo.bank}`));
            divTemp.appendChild(textSection(`Código Sucursal: ${ibanInfo.office}`));
            divTemp.appendChild(textSection(`Dígito de control: ${ibanInfo.controlNumber}`));
            divTemp.appendChild(textSection(`Número de cuenta: ${ibanInfo.account}`));
        }else{
            divTemp.appendChild(textSection(__ERROR_IBAN));
        }
    }
};

const deleteElement = () =>{
    const element = document.getElementById("div-temp");
    if(element && element instanceof HTMLDivElement){
        element.remove();
    }
}

const button = document.getElementById("button");
if(button && button instanceof HTMLButtonElement){
    button.addEventListener("click", () => {deleteElement(), writeIbanInfo()});
}