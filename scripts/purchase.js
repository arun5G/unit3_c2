let details=JSON.parse(localStorage.getItem("user")) || [];
let h3=document.getElementById("wallet_balance");
h3.innerText=details.wallet || 0;
let det=JSON.parse(localStorage.getItem("purchase")) || [];

console.log(det)
det.forEach(function(el){
    // console.log(4555555555555555555555555)

    let img=document.createElement("img");
    // console.lo
    img.src=el.image;
    let n=document.createElement("h3");
    n.innerText=el.name;
    let p=document.createElement("h3");
    p.innerText=el.price;

    let div=document.createElement("div");
    div.append(img,n,p)
   let d=document.getElementById("purchased_vouchers")
d.append(div)

})
