import { findImg, findImgRaw } from "./extraer-img-helper";

const getHtml = ():string =>{
    const html = document.getElementById("code-html");
    if(html && html instanceof HTMLTextAreaElement){
        return html.value;
    }else{
        return "error";
    }
};

const textSection = (value: string): HTMLDivElement =>{
    const section = document.createElement("div");
    section.textContent = value;
    section.setAttribute("id", "div-img");
    section.setAttribute("class", "div-img");
    return section;
};

const writeImg = () =>{
    const html = getHtml();
    const div = document.getElementById("img-list");
    const info = document.createElement("div");
    info.setAttribute("id", "div-info");
    if(div && div instanceof HTMLDivElement){
        div.appendChild(info);
        if(html.length!==0){
            const imgs = findImg(findImgRaw(html));
            imgs.forEach((img) => {
                info.appendChild(textSection(img));
            })
        }else{
            info.appendChild(textSection("Introduce codigo HTML"));
        }
    }
};

const deleteElement = () =>{
    const element = document.getElementById("div-info");
    if(element && element instanceof HTMLDivElement){
        element.remove();
    }
};

const button = document.getElementById("button");
if(button && button instanceof HTMLButtonElement){
    button.addEventListener("click", () => {deleteElement(), writeImg()});
}