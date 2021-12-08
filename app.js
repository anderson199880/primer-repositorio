class Book {

    #title
    
constructor(title, author, price, stock, id ){
    this.#title = title
    this.author = author
    this.price = price
    this.stock = stock
    this.id =id
}

GetInfo(){
let info = `Titulo: ${this.title},
Autor: ${this.author}, 
Precio: ${this.price},
Stock: ${this.stock},
Id: ${this.id} 
               `


console.log(info)
}

}


const book1 = new Book("Caballos desbocados","Yukio M",250.00,100,1);
const book2 = new Book("Aleatorio","Atro autor",350.00,50,2);


book1.GetInfo()

book2.GetInfo()

