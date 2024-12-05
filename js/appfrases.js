const frases = [{frase:'El que no arriesga no gana', autor:'Robert Kiyosaki'},
    {frase:'Frase 2', autor:'Anthony Tipan'},
    {frase:'De tal palo tal astilla', autor:'Luis X'},
    {frase:'Texto de prueba', autor:'Federico'},
    {frase:'El que no arriesga no gana 2', autor:'Tatiana'},
    {frase:'Antes que me muera quiero ser millonario', autor:'Yolanda'},
    
]

const app = Vue.createApp({
    methods: {
       

    },
    data(){  
        return{
            listaFrases: frases
        }
    }

})

app.mount('#myApp')