import { useEffect } from "react";

const MiApi = ({setAmiibos}) => {
    useEffect (()=> {
        const obtenerApi = async () => {
            try {
                const response = await fetch("https://amiiboapi.com/api/amiibo");
                if (!response.ok) {
                    throw new Error('No se pudo obtener la informacion de la API');
                }
                const data = await response.json()
                const amiibosLimited = data.amiibo.splice(0, 60);
                setAmiibos(amiibosLimited)
                console.log(amiibosLimited)
            } catch (error) {
                console.error('Erorr al obtener la API', error.message);
            }
        };

        obtenerApi();
    }, [setAmiibos]);

    return null;

    }

export default MiApi