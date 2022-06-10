


let productos = [{
    id:'1',
    categoria:'Procesadores',
    marca:'AMD',
    nombre:'Ryzen 3 4100',
    precio:'15.400',
    stock:'50',
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_714038-MLA50212842640_062022-F.webp'
},
{
    id:'2',
    categoria:'Procesadores',
    marca:'INTEL',
    nombre:'Core i5 10400F 4.3GHz',
    precio:'19.310',
    stock:'10',
    image:'https://http2.mlstatic.com/D_NQ_NP_2X_693383-MLA44915039524_022021-F.webp'
},
{
    id:'3',
    categoria:'GPU',
    marca:'NVIDIA',
    nombre:'MSI GeForce RTX 3090',
    precio:'308.900',
    stock:'5',
    image:'https://http2.mlstatic.com/D_NQ_NP_2X_637985-MLA49012394421_022022-F.webp'
},
{
    id:'4',
    categoria:'GPU',
    marca:'AMD',
    nombre:'XFX Radeon RX 570',
    precio:'60.000',
    stock:'18',
    image:'https://http2.mlstatic.com/D_NQ_NP_724679-MLA32096328708_092019-O.webp'
},
{
    id:'5',
    categoria:'MONITORES',
    marca:'SAMSUNG',
    nombre:'Curvo F390',
    precio:'36.430',
    stock:'12',
    image:'https://http2.mlstatic.com/D_NQ_NP_657393-MLA32045104982_092019-O.webp'
}]

export const getFetch = () =>{
    
    
    return new Promise ((resolve, reject)=>{
      setTimeout(()=>{
          resolve(productos)}
          , 1000)
    })
}