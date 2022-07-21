import imagen1 from "../assets/placeholder.jpg"

const productsData = [
    {id: '1', title:'Balanceado de Pollo', description:'Bolsa de 3 kilos de alimento canino balanceado sabor pollo avalado por especialistas', stock:2, price: 250, pictureUrl:imagen1 },
    {id: '2', title:'Balanceado de Carne', description:'Bolsa de 3 kilos de alimento canino balanceado sabor carne avalado por especialistas', stock:2, price: 260, pictureUrl:imagen1 },
    {id: '3', title:'Sobrecito de Atun', description:'Sobrecito de 150 gramos de alimento para gatos humedo sabor atun', stock:3, price: 150, pictureUrl:imagen1 },
    {id: '4', title:'Sobrecito de Salmon',  description:'Sobrecito de 150 gramos de alimento para gatos humedo sabor salmon', stock:3,price: 200, pictureUrl:imagen1 },
    {id: '5', title:'Pelota Grande Arcoiris', description:'Pelota plastica flexible y resistente para perros de colores multiples', stock:5, price: 180, pictureUrl:imagen1 },
    {id: '6', title:'Platillo de Comida', description:'Platillo ceramico para alimento de mascotas tamaño mediano y color blanco crudo', stock:2, price: 220, pictureUrl:imagen1 },
]

export const promProductos = new Promise ((resolve, reject) =>{
    setTimeout(()=>{
        resolve(productsData)
    }, 2000)
})

export const getItem = (id) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(productsData.find(obj => {return obj.id == id;}))
        }, 2000)
    })
}