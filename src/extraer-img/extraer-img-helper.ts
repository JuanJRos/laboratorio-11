import { patternRaw, pattern } from "./extraer-img-model";

export const findImgRaw = (value: string): string[] =>{
    const listImgPattern = value.match(patternRaw);
    if(listImgPattern){
        return listImgPattern;
    }else{
        return [];
    }
};

export const findImg = (value: string[]): string[] =>{
    const urls: string[] = [];
    value.forEach((val) => { 
        const img = pattern.exec(val)
        if(img){
            const {url} = img.groups as any;
            urls.push(url);
        }
    });
    return urls;
};
