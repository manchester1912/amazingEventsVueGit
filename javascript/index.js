const linkAmazing = "https://aulamindhub.github.io/amazing-api/events.json"

const { createApp } = Vue


const newPage = createApp({

  data() {
    return {
      currentDate: {},
      arrayEvents: [],
      arrayEventsBK: [],
      categories: [],
      textoBuscar:"",
      categoriasSeleccionadas: []
    }
  },

  created() {
this.traerData(linkAmazing)
  },

  methods: {
    traerData(url) {
      fetch(url).then(respuesta => respuesta.json())
        .then(data => {
          this.currentDate = data.currentDate
          this.arrayEvents = data.events
          this.arrayEventsBK = data.events
          this.categories = Array.from(new Set( this.arrayEvents.map(event=> event.category)))
          console.log(this.arrayEvents)
          console.log(this.currentDate)
        })


        
    }

  },
  computed: {
    superFiltro(){
    let filtroTexto = this.arrayEventsBK.filter(event => event.name.toLowerCase().includes(this.textoBuscar.toLowerCase()))

    if (this.categoriasSeleccionadas.length > 0) {
      this.arrayEvents = filtroTexto.filter(event => 
        this.categoriasSeleccionadas.includes(event.category))
      
    }else{this.arrayEvents = filtroTexto}
        
    }
  }

}).mount("#containerVue")
