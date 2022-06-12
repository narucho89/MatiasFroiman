


let productos = [{
    id:'1',
    categoria:'Procesadores',
    marca:'AMD',
    nombre:'Ryzen 3 4100',
    precio:'15.400',
    stock:'50',
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_714038-MLA50212842640_062022-F.webp',
    description: 'Tiene 4 núcleos y 8 flujos de datos y fabricado por la tecnología 7 nm,la frecuencia máxima es de 4000 MHz, con el miltiplicador desbloqueado.'
},
{
    id:'2',
    categoria:'Procesadores',
    marca:'INTEL',
    nombre:'Core i5 10400F 4.3GHz',
    precio:'19.310',
    stock:'10',
    image:'https://http2.mlstatic.com/D_NQ_NP_2X_693383-MLA44915039524_022021-F.webp',
    description: 'Tiene 6 núcleos y 12 flujos de datos y fabricado por tecnología 14 nm, la frecuencia máxima es de 4300 MHz, con el miltiplicador bloqueado.'
},
{
    id:'3',
    categoria:'GPU',
    marca:'NVIDIA',
    nombre:'MSI GeForce RTX 3090',
    precio:'308.900',
    stock:'5',
    image:'https://http2.mlstatic.com/D_NQ_NP_2X_637985-MLA49012394421_022022-F.webp',
    description: 'La última iteración de la serie GAMING emblemática de MSI una vez más ofrece alto desempeño, bajo ruido y una estética que los gamers han llegado a reconocer y confiar. Ahora tú también puedes disfrutar de tus juegos favoritos con una tarjeta gráfica poderosa que se mantiene fría y silenciosa. Justo como te gusta.'
},
{
    id:'4',
    categoria:'GPU',
    marca:'AMD',
    nombre:'XFX Radeon RX 570',
    precio:'60.000',
    stock:'18',
    image:'https://http2.mlstatic.com/D_NQ_NP_724679-MLA32096328708_092019-O.webp',
    description: 'Hace unos días que AMD ha lanzado al Mercado las tarjetas gráficas RX 500 Series, unas tarjetas gráficas que llegan para reemplazar a las RX 400 Series.'
},
{
    id:'5',
    categoria:'MONITORES',
    marca:'SAMSUNG',
    nombre:'Curvo F390',
    precio:'36.430',
    stock:'12',
    image:'https://http2.mlstatic.com/D_NQ_NP_657393-MLA32045104982_092019-O.webp',
    description: 'Su curvatura 1800R (radio de curvatura de 1800 mm) te ofrece un mayor campo de visión, mejorando la percepción de profundidad y haciendo que te te sientas parte de tu juego, película o serie favorita.'
}]

export const getFetch = () =>{
    
    
    return new Promise ((resolve, reject)=>{
      setTimeout(()=>{
          resolve(productos)}
          , 1000)
    })
}