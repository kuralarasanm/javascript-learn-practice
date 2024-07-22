let brand=document.getElementsByClassName('brand')
let price=document.getElementsByClassName('price')
let ratings=document.getElementsByClassName('ratings')
let image=document.getElementsByClassName('image')


let url='https://dummyjson.com/products'

let api=async()=>{
    let response=await fetch(url)
    let data=await response.json()
    let products=data.products


    // products.map((i)=>{
    //     // console.log(i);

    //     return brand.textContent=i.brand
    // })
    for(let i=0;i<products.length;i++){
        brand[i].textContent=products[i].brand
        ratings[i].textContent=products[i].rating
        image[i].src=products[i].thumbnail
        
        let money=products[i].price
        let money2=money*75.
        let discount=products[i].discountPercentage
        let discount2=(money2/100)*discount

        money2-=discount2
        price[i].textContent=Math.floor(money2)+"rs"
    }
    
}
api()