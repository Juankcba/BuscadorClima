import React,{useState} from 'react';

const Formulario = () => {

    //state del formualario
    const [busqueda, guardarBusqueda]= useState({
        ciudad:'',
        pais:''
    });
    const [error,guardarError] = useState(false);
    //extraer ciudad y pais
    const{ciudad,pais} = busqueda;

    //funcion que coloca los elementos en el state
    const handleChange = e => {
        //actualizar el state 
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }
    //cuando el usuario da submit al form
    const handleSubmit = e => {
        e.preventDefault();

        //validar
        if(ciudad.trim() === '' || pais.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);
        //pasarlo al componente principal
    }
    return ( 
        <form
            onSubmit={handleSubmit}
        >
            {error ? <p className="red darken-4 error"> Todos los campos son obligatorios</p> 
            : null}
            <div className="input-field cold s12">
                <input 
                    type="text" 
                    name="ciudad"
                    value={ciudad}
                    id="ciudad"
                    onChange={handleChange}
                />
                <label htmlfor="ciudad">Ciudad:</label>
            </div>
            <div className="input-field cold s12">
                <select 
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione un país --</option>                    
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlfor="pais">Pais:</label>
            </div>
            <div className="input-field cold s12">
                <input  
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                    />
            </div>

        </form>
     );
}
 
export default Formulario;