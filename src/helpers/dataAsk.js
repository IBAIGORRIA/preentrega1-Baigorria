import data from "../data/productos.json";

export const dataAsk = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve (data);
        },500)
})
}