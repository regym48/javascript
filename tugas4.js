var x = 160;
var y = 170;
var z = 180;

if (x<y)
{
    if (y<z)
    {
        console.log("Dengan tinggi badan",z,"cm. Z adalah yang tertinggi pertama")
        console.log("Dengan tinggi badan",y,"cm. Y adalah yang tertinggi kedua")
        console.log("Dengan tinggi badan",x,"cm. X adalah yang tertinggi ketiga")
    }
    else
    {
        console.log("Dengan tinggi badan",y,"cm. Y adalah yang tertinggi pertama")
        console.log("Dengan tinggi badan",z,"cm. Z adalah yang tertinggi kedua")
        console.log("Dengan tinggi badan",x,"cm. X adalah yang tertinggi ketiga")
    }
}
else if (x<z)
{
    console.log("Dengan tinggi badan",z,"cm. Z adalah yang tertinggi pertama")
    console.log("Dengan tinggi badan",x,"cm. X adalah yang tertinggi kedua")
    console.log("Dengan tinggi badan",y,"cm. Y adalah yang tertinggi ketiga")
}