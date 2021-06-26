import { Fragment } from "react";
import { FaClock } from "react-icons/fa";
import { Tarjeta } from "./components/tarjeta";

const TarjetasOptions = [
    {
        title: 'Web Design - PT Cinta Sekali',
        duracion: '2 Days left',
        icon: FaClock,
        usuario: 'Pedro Perez'
    },
    {
        title: 'Web Design - PT Cinta Sekali',
        duracion: '2 Days left',
        icon: FaClock,
        usuario: 'Martha Shores'
    },
    {
        title: 'Web Design - PT Cinta Sekali',
        duracion: '2 Days left',
        icon: FaClock,
        usuario: 'Juan Pablo II'
    },

];


export const Home = () => (
<Fragment>
    
        {TarjetasOptions.map((item, i) => (
            <Tarjeta key={i} {...item} />
        ))}
   

</Fragment>
)
