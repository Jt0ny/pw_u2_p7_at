
const frases = [{frase:'El que no arriesga no gana', autor:'Robert Kiyosaki'},
    {frase:'Frase 2', autor:'Anthony Tipan'},
    {frase:'De tal palo tal astilla', autor:'Luis X'},
    {frase:'Texto de prueba', autor:'Federico'},
    {frase:'El que no arriesga no gana 2', autor:'Tatiana'},
    {frase:'Antes que me muera quiero ser millonario', autor:'Yolanda'},
    
]
const app = Vue.createApp({
 
   methods: {
      agregarFrase() {
         console.log(this.frase)
         console.log(this.autor)
         const nuevaFrase = {
            frase: this.frase,
            autor: this.autor
         }
         // El unshift se utiliza para agregar un elemento al inicio de un arreglo
         this.listafrases.unshift(nuevaFrase)
      },
      agregarFraseFinal() {
         console.log(this.frase)
         console.log(this.autor)
         const nuevaFrase = {
            frase: this.frase,
            autor: this.autor
         }
         // El push se utiliza para agregar un elemento al final de un arreglo
         this.listafrases.push(nuevaFrase)
      },
      eventoKeyPress({charCode, cancelable, key, keyCode, target}) {
 
         if(key === 'Enter'){
            console.log('Evento');
           // console.log(event);
            console.log(charCode);
            console.log(cancelable);
            console.log(key);
            console.log(keyCode);
            console.log(target.baseURI);
            this.agregarFraseFinal();
         }
      },
 
      eventoKeyPressModificador() {
         console.log('Presiono enter');
         console.log('Evento keypress');
         this.agregarFraseFinal();
     }
   },
 
 
   data() {
      return {
         listafrases: frases,
         frase: null,
         //autor: 'sin autor'
         autor: null
      }
   }
})
 
app.mount('#myApp')