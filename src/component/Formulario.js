import React from 'react';
import styles from './Formulario.module.css';
// import useSelect from '../hooks/useSelect';
import useSelect from '../hooks/useSelect';

const Formulario = ({guardarCategoria}) => {

    const OPCIONES = [
        {value : 'general', label:'General'},
        {value : 'business', label:'Negocios'},
        {value : 'entertainment', label:'Entretenimiento'},
        {value : 'health', label:'Saludo'},
        {value : 'science', label:'Ciencia'},
        {value : 'sports', label:'Deportes'},
        {value : 'tecnology', label:'Tecnología'},
    ]

    //Utilizar custom Hook 
    const [ categoria, SelectNoticias ] = useSelect('general', OPCIONES);

    //Submit al form, pasar categoria a app.js
    const buscarNoticias = e => {
        e.preventDefault();

        guardarCategoria(categoria);
    }
    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>

                    <SelectNoticias />

                    <div className="input-field col s12">
                        <input
                        type="submit"
                        className={`${styles.btn_block} btn-large amber darken-2`}
                        value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Formulario;