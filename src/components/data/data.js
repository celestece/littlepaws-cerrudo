import imagen1 from "../assets/placeholder.jpg"

const productsData = [
    {id: '1', title:'Balanceado de Pollo', description:'', price: 250, pictureUrl:imagen1 },
    {id: '2', title:'Balanceado de Carne', description:'', price: 260, pictureUrl:imagen1 },
    {id: '3', title:'Sobrecito de Atun', description:'', price: 150, pictureUrl:imagen1 },
    {id: '4', title:'Sobrecito de Salmon',  description:'',price: 200, pictureUrl:imagen1 },
    {id: '5', title:'Pelota Arcoiris', description:'', price: 180, pictureUrl:imagen1 },
    {id: '6', title:'Platillo de Comida', description:'', price: 220, pictureUrl:imagen1 },
]

export const promProductos = new Promise ((resolve, reject) =>{
    setTimeout(()=>{
        resolve(productsData)
    }, 2000)
})