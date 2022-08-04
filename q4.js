function result(resArray)
{
    let res = "";
    for(let i of resArray)
    {
        res += i;
    }
    return res;
}
// let str1 = "kiran";
// let str2 = "narik";
// Two Strings are Anagram to each other


let str1 = "kiran";
let str2 = "pavan";

let str1Array = str1.trim().split("").sort();
let str2Array = str2.trim().split("").sort();

let flag = "Two Strings are not Anagram to each other"
if(result(str1Array) == result(str2Array)){
    flag = "Two Strings are Anagram to each other"; 
}
console.log(flag);