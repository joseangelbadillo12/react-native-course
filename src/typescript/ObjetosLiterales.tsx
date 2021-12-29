
interface Persona {
    nombreCompleto : string ;
    edad : number;
    direccion : {
        pais : string;
        casaNo : number;
    }
}


interface Direccion {
    pais : string;
    casaNo : number;
}


export const ObjetosLiterales = () => {

    const persona : Persona = {
        nombreCompleto: 'José Angel',
        edad : 22,
        direccion: {
            pais : 'México',
            casaNo : 424
        }

    } 



    return (
        <>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                { JSON.stringify( persona, null, 2) }
                </pre>  
            </code>
        </>
        )
}
