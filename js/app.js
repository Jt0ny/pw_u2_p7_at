console.log(Vue);

const app = Vue.createApp({
   /* template: `//BACKTIPS
    <h1>Hola Mundo</h1>
    <p>Con Vue.JS</p>
    <P> {{1+2}}</P>
    <P>{{[1,2,3,4,5,6,7]}}</P>
    <P>{{ {nombre:'Anthony',apellido:'Tipan'} }}</P>
    <P>{{true?'Activo':'Inactivo'}}</P>
    <P>1===1</P>
    <P>{{1===1}}</P>
    `*/

    //Options API
    methods: {//Declarar metodos
        cambiarMensaje(){
            this.mensaje = 'Actualizado';
            this.edad = 50;
        }

    },
    data(){//Destinada a crear propiedades que son el nexo entre el index.html y el app.js(propiedades reactivas )
        return{
            mensaje: 'Hola Mundo Pweb',
            edad: 23
        }
    }

})

app.mount('#myApp')