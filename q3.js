function Addition(a,b)
{
    return a + b;
}
console.log(Addition(2,3))

const CurryingAddition = (a) => (b) =>  a+b;
console.log(CurryingAddition(2)(3));