import { useState, useEffect } from "react";

const Filtro = ({amiibos, setAmiibos}) => {
    const [filtro, setFiltro] = useState('')
    const [categoria, setCategoria] = useState('nombre')

    useEffect(() => {
        setAmiibos(filtrarAmiibos());
    }, [filtro, categoria, amiibos]);

    const handleEvent = (e) => {
        setFiltro(e.target.value);
    }

    const ordenar = (category) => {
        const amiibosOrdenados = [...amiibos].sort((a, b) => {
            if (a[category] < b[category]) {
                return -1
            }
            if (a[category] > b[category]) {
                return 1
            }
            return 0
        });

        setAmiibos(amiibosOrdenados);
    };

    const filtrarAmiibos = () => {
        if (filtro === '') {
            return amiibos;
         } else {
                return amiibos.filter((amiibo) => {
                    return amiibo.name && amiibo.name.toLowerCase().includes(filtro.toLowerCase())
                });
            }
        };
        return (
            <div>
                <input type="text"
                placeholder="Buscar en nombre, tipo o serie"
                value={filtro}
                onChange={handleEvent}/>
                <select value={categoria}
                onChange={(e) => setCategoria(e.target.value)}>
                    <option value="nombre">Nombre</option>
                    <option value="type">Tipo</option>
                    <option value="amiiboSeries">Serie de Amiibo</option>
                </select>
                <button onClick={()=> ordenar(categoria)}>Ordenar por {categoria}</button>
            </div>
        )
    }
export default Filtro