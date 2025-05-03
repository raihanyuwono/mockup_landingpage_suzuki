export function NumToStr(num: number) {
    let str = String(num);
    let res = "";
    while(str.length > 0){
        res = str.slice(-3) + res;
        if(str.length > 3) res = "." + res;
        str = str.slice(0, -3);
    }
    return res;
}
