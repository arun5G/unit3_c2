
class making{
    constructor(n,e,a,am){
        this.name=n;
        this.email=e;
        this.address=a;
        this.wallet=am;
    }
}


function main(){
    localStorage.removeItem("user")
    event.preventDefault()
    let name=document.getElementById("name").value;
        let email=document.getElementById("email").value;
    let address=document.getElementById("address").value;
    let amount=document.getElementById("amount").value;
let t=new making(name,email,address,amount)
    console.log(t)

    localStorage.setItem("user",JSON.stringify(t))
    window.location.reload()
}
// let det=JSON.parse(localStorage.getItem("user")) || [];
// console.log(details,666666666666)
