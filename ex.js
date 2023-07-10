const tiposDeSuscripcion = {
    free: "FREE",
    basic: "BASIC",
    premium: "PREMIUM",
    expert: "EXPERT"
};

const ejemploSuscripcion = 'free';

function conseguirTipoSuscripcion(suscripcion){
    if(tiposDeSuscripcion[suscripcion]){
        console.log(tiposDeSuscripcion[suscripcion]);
        return;
    }
    console.warn("No existe ese tipo de suscripcion");
}           

conseguirTipoSuscripcion(ejemploSuscripcion); 