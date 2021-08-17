export function inspect(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = (function (...args) {
        console.log(`--- metodo ${propertyKey}`);
        console.log(`--- parametros ${JSON.stringify(args)}`);
        const retorno = metodoOriginal.apply(this, args);
        console.log(`--- parametros ${JSON.stringify(retorno)}`);
        return retorno;
    });
    return descriptor;
}
