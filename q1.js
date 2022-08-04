let obj = {"name" : "rockey", "age" : 12, "work":"developer"}
let ParentArray = [];
let i = 0;
for(let i = 0; i < (Object.keys(obj).length % 2 !== 0 ? Object.keys(obj).length-1 : Object.keys(obj).length);i++)
{
    ParentArray.push([Object.keys(obj)[i], obj[Object.keys(obj)[i]]])
}
console.log(ParentArray);