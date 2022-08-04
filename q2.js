let num = 5521;
while (num > 9)
{
    let sum = 0;
    while(num)
    {
        let rem = num %10;
        sum += rem;
        num = Math.floor(num/10);   
    }
    num = sum;
}
console.log(num)