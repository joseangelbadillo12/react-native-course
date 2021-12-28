
export const TiposBasicos = () => {

    const nombre : string = "José Angel";
    const edad : number = 22;
    const estaActivo : boolean = true;

    const poderes : string[] = []//'Velocidad', 'Volar', 'Respirar en el agua' 


    return (
        <>
         <h3>Tipos Básicos</h3>   
         { nombre }, { edad }, { (estaActivo) ? 'activo' : 'no activo'}  
         <br />
         { poderes.join(', ') }
        </>
    )
}
