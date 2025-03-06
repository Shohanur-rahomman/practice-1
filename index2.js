const phones = [
    { name: 'oppo', rem: '4bg',color: 'skyBlue',price:10},
    { name: 'iphone', rem: '6bg', color: 'black', price: 20 },
    { name: 'xiomi', rem: '8bg', color: 'blue', price: 10 },
    { name: 'samsung', rem: '10bg', color: 'red', price: 40 },
    { name: 'htc', rem: '4bg', color: 'black', price: 50 },
    { name: 'symphony', rem: '9bg', color: 'white', price: 10 }
]


const hightPricePhone = phones.reduce((max, current)=>{
    const result = (current.price > max.price) ? current : max;
    return result 
})


const selectedProduct = phones.filter(item=> item.color === 'black')
const selectedProduct2 = phones.filter(item=> item.color !== 'black')
const selectedProduct1 = phones.find(item=> item.color === 'black')
console.log(selectedProduct2);