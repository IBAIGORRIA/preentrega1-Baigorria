import data from "../data/productos.json";


export const dataAsk = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve (data);
        },500)
})
}

export const getProductById =(prdId) => {
return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve (data.find(prod => prod.id === prdId));
        },1000)
})

}