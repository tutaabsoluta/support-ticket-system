import { sumar } from "./presentation/server";


console.log('From server.ts');

const valor = sumar(1,2);
console.log(valor);

( async () => {
    main()
})()

function main() {
    
}