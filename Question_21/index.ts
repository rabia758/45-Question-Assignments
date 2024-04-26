interface item{
    name: string
    price: Number
}
// create two opjects
const book: item={
name:'englishbook'
price: 400
}
const fruit:item={
    name:'apple'
    price: 100
}
console.log(`book name: ${book.name},bookprice: ${book.price}`);
console.log(`fruit name: ${fruit.name},fruit price: ${fruit.price}`);