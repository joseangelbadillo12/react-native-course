//import { TiposBasicos } from "./typescript/TiposBasicos";

import { Contador } from "./Components/Contador";
import { ContadorConHook } from "./Components/ContadorConHook";
import { Funciones } from "./typescript/Funciones";
//import { ObjetosLiterales } from "./typescript/ObjetosLiterales";

const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introduccion a TS React</h1>
      <hr></hr>
      {/*<TiposBasicos></TiposBasicos>*/}
      {/*<ObjetosLiterales/>*/}
      {/* <Funciones/> */}
      {/* <Contador/> */}
      <ContadorConHook/>
    </div>
  )
}
export default App;