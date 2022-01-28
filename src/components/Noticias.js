import React from "react"
import imagenes from "../assets/imagenes";
import '../css/style_Noticias.css'

 const Noticias =()=>{
    return (
        <div className="container">
            <br/><br/><br/>
            <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
            <div class="card">
                <img src={imagenes.noticia1} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">La mirada de las mil palabras</h5>
                    <p>Afirma un dicho popular que la cara es el espejo del alma. La mirada de una persona puede ayudarnos a conocer cómo es. 
                        Pues bien, vamos a pedirte que mires esta fotografía durante unos segundos y nos digas qué te transmite la mirada de Marcos<br/>
                    <a  data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Más Información
                    </a>
                    </p>
                    <div class="collapse" id="collapseExample1">
                    <div class="card card-body">
                    Sensible, tranquilo, sincero, generoso, amable, cariñoso, leal, positivo, bondadoso, 
                    solidario, responsable, buen amigo. Seguramente podríamos utilizar hasta mil adjetivos, 
                    pero una mirada, esta mirada, vale más que mil palabras. Son estos ojos los que leyeron la 
                    historia que publicamos de Babhú, el pequeño al que, casi con toda seguridad, un cazador 
                    utilizó, disparó y abandonó malherido. Milagrosamente logró sobrevivir, pero perdió una de 
                    sus patitas. Marcos es especialmente empático con los pequeños de movilidad especial, 
                    puesto que hace cuatro años adoptó a Runa, una perrita con un problema en una de sus 
                    patas traseras. Esa vivencia le hizo comprender que son perros completamente iguales al resto, con la misma alegría y ganas de vivir intensamente. Conocer el caso de 
                    Babhú le tocó el corazón, vislumbrando que Runa y Babhú podrían formar una familia increíble. 
                    Es el más feliz de los finales a una historia cuyo comienzo fue injustamente doloroso.
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                <img src={imagenes.noticia2} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">5 de enero de 2022: ¡Un día para recordar!</h5>
                    <p>Para todas las personas que convivimos con animales, hoy es un día importante; será recordado como el día en 
                        el que los animales dejaron de ser jurídicamente considerados como “cosas”, para ser reconocidos como “seres sintientes”. <br/>
                    <a  data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Más Información
                    </a>
                    </p>
                    <div class="collapse" id="collapseExample2">
                    <div class="card card-body">
                    Este reconocimiento afectará a la vida de los pequeños de forma muy positiva en diversos ámbitos y aspectos, que comentaremos en profundidad en una publicación específica. Hoy, desde El Refugio, 
                    queremos agradecer de corazón a todo el equipo humano que ha luchado por conseguir este logro, y felicitarles por tener la sensibilidad, el compromiso, y la perseverancia necesaria para hacerlo posible.
                    Disfrutemos de este hermoso regalo adelantado que los Reyes han dejado a nuestros pequeños en sus camitas.
                    ¡¡Abrazos, salud, y muuucha Vida!!
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                <img src={imagenes.noticia3} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">Cuando la suerte duerme junto a ti.</h5>
                    <p>Todos los perrillos tienen gran capacidad para comunicarse con la mirada, pero de vez en cuando aparece uno que te sobrecoge por la sensación de ser una persona metida dentro de un disfraz de perro quien te mira. 
                        ¿Te ha pasado alguna vez? A nosotros nos acaba de ocurrir con el precioso Babhú.<br/>
                    <a  data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Más Información
                    </a>
                    </p>
                    <div class="collapse" id="collapseExample3">
                    <div class="card card-body">
                    A este pequeño, con tan solo 10 meses de edad, le ha tocado vivir situaciones verdaderamente lamentables, que jamás deberían producirse. En cualquier caso, 
                    su historia debería ser escuchada por todos los amantes de la caza; cuando su actividad es criticada y denostada, entre otras cosas, por el maltrato que algunos cazadores infligen a los perros que utilizan, 
                    muchos lo niegan aseverando que “los cazadores quieren muchísimo a sus perros”, pero historias como la que relatamos hoy indican que algunos tienen una extraña forma de querer.
                    Babhú es un perrito de una raza habitualmente utilizada para cazar. Todos los indicios apuntan a que así fue lo que le ocurrió: una mañana como otra cualquiera, el cazador 
                    al que pertenecía lo subió al coche, cargó su escopeta, y se echaron al monte. Babhú debió salir corriendo tras alguna presa (que es para lo que lo adiestraron), y el cazador disparó, descargando el plomo sobre el pequeño perro. 
                    El tiro causó un importante destrozo en su patita delantera derecha. Al comprobar el lamentable estado en el que el desgraciado hecho había dejado a su perro, el cazador, se dio media vuelta, echó la escopeta al coche, y se fue por donde vino, dejando a Babhú abandonado y 
                    gravemente herido en el lugar en el que cayó abatido.
                    A pesar de haber tenido un inicio de vida tan terrible y desgraciado, Babhú debe saber que la suerte se quedó a dormir junto a él, porque una persona pudo rescatarlo con vida en la inmensidad de los invernaderos de plástico de Adra, en Almería. Como podrás ver en el vídeo 
                    que hay al final de este texto, el equipo veterinario de El Refugio hizo todo lo posible para salvar su patita, pero los daños eran muy graves y finalmente no quedó más remedio que amputarla
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                <img src={imagenes.noticia4} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">Lotería de Navidad y calendario 2022</h5>
                    <p>Llegadas estas fechas, si hay algo que absolutamente todos podamos desear, es que estas Navidades las cosas vuelvan a ser como han sido 
                        toda la vida. Parece que este año, después de todo lo que hemos pasado, recuperar las viejas tradiciones se ha convertido en algo imprescindible.<br/>
                    <a  data-bs-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Más Información
                    </a>
                    </p>
                    <div class="collapse" id="collapseExample4">
                    <div class="card card-body">
                    En El Refugio, por supuesto, también; por eso queremos contarte, con más ilusión que nunca, que ya están disponibles nuestra lotería solidaria de Navidad, y nuestro calendario 
                    solidario 2022 (al que hemos dado el título de “2022, El Año en el que Triunfó el Amor”).
                    Amor y agradecimiento es lo que derrochan todos nuestros pequeñajos. Muchos de los perretes y gatitos que pudimos rescatar del abandono y el maltrato durante 2021, han sido ya adoptados y 
                    disfrutan de una vida sana, segura, y feliz. Otros siguen con nosotros, a la espera de que vayan apareciendo las personas con las que iniciarán una nueva vida, plagada de aventuras cotidianas y amor inagotable. El calendario 2022 está protagonizado 
                    por 13 adorables compañeros, que llegaron a nuestras vidas durante el año que acabará en breve. A continuación, os lo mostramos completo para que veáis lo preciosísimo que nos ha quedado, y todo el cariño que contiene.
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <br /><br /><br />
        </div>
    )
};


export default Noticias;