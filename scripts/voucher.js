let asdf=document.getElementById("voucher_list")
let details=JSON.parse(localStorage.getItem("user")) || [];
// console.log(details)

  let h3=document.getElementById("wallet_balance");
  h3.innerText=details.wallet || 0;
let api=" https://masai-vouchers-api.herokuapp.com/api/vouchers"
getdata()

async function getdata(){
    try {
        let res=await fetch(api);
        let data=await res.json()
        // console.log(data)
        // console.log(data[0].vouchers)
        append(data[0].vouchers)
    } catch (error) {
        console.log(error)
    }
}

function append(data){
    data.forEach(function(el){
        // console.log(4555555555555555555555555)

        let img=document.createElement("img");
        // console.lo
        img.src=el.image;
        let n=document.createElement("h3");
        n.innerText=el.name;
        let p=document.createElement("h3");
        p.innerText=el.price;

        let btn=document.createElement("button");
        btn.innerText="buy"
        btn.setAttribute("class","buy_voucher")

        // console.log(6)
btn.addEventListener("click",function(){
    let w=details.wallet;
    // console.log(w,p.innerHTML)
    if(+w>+p.innerHTML){
        let remains=+w-+p.innerHTML;
        let o=details;
        // console.log("after o")
        // console.log(o)

    o.wallet=remains;
    // console.log(o,2)
    h3.innerText=remains;
    localStorage.setItem("user",JSON.stringify(o));

    alert("Hurray! purchase successful")
    let arr=JSON.parse(localStorage.getItem("purchase")) || []

    arr.push(el)
    localStorage.setItem("purchase",JSON.stringify(arr))
    let pur=JSON.parse(localStorage.getItem("purchase"))
    // console.log(pur)
    }
    else{
        alert("Sorry! insufficient balance")
    }
})
        let div=document.createElement("div");
        div.setAttribute("class","voucher")

        div.append(img,n,p,btn);
asdf.append(div)

    })
}