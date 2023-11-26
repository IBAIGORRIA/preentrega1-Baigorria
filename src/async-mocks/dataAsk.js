import data from "../data/productos.json";


export const dataAsk = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve (data);
        },500)
})
}

export function getProductById (prodId){
return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve (data.find(prod => prod.id === prodId));
        },1000)
})

}