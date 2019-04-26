Vue.component("super-componente", {
  props: ["res"],
  data: function () {
    return {
      // likes: 300,
    };
  },
  methods: {
    // addLike: function () {
    //   debugger
    //   this.likes++;
    // }
  },
  template: `<table class="table table-responsive">
  <thead>
      <tr>
          <th style="width: 10%"></th>
          <th style="width: 30%"></th>
          <th style="width: 20%"></th>
          <th style="width: 20%">Total a pagar</th>
          <th style="width: 20%">{{ res }}</th>
          <th style="width: 20%"></th>
      </tr>
  </thead>
</table>`
});

Vue.component("v-select", VueSelect.VueSelect);
var app = new Vue({
  el: "#app",
  data: {
    titulo: "Factura de venta",
    productos: [
      { id: 1, nombre: "tornillo", cantidad: "10", precio: "200", subtotal: "2000" },
      { id: 2, nombre: "arandela", cantidad: "20", precio: "50", subtotal: "1000" },
      { id: 3, nombre: "bombillo", cantidad: "5", precio: "500", subtotal: "2500" }
    ],
    HTMLcontent: null,
    precio:0,
    nombre:"",
    cantidad:0,
    cont:4,
    resul:0,
    resultado:"",
    cont2:0
    
  },
  // mounted(){
  //   // invocar los métodos
  //   this.totalPagar();
  //  },
   created(){
    // invocar los métodos
    this.totalPagar();
   },
  methods: {
    eliminarProducto(data){
      let me =this;
      let producto_id = data.id;
      if (confirm('¿Seguro que deseas borrar este producto?')) {
          me.productos.splice(producto_id-1,1);
      }
      this.totalPagar();
    },
    agregarProducto: function () {
      this.nombre
      this.productos.push({ id: this.cont, nombre: this.nombre, cantidad: this.cantidad, precio: this.precio, subtotal: this.cantidad*this.precio });
      this.cont = this.cont + 1;
      this.totalPagar();
    },
    totalPagar(){
      if(this.productos.length < 4 && this.cont2 === 0){
        for(var i=0;i<this.productos.length; i++){
          this.resul += parseInt(this.productos[i].subtotal);
           }
        this.resultado = this.resul.toString();
        this.cont2 = this.cont2 + 1;
        this.resultado
      }if(this.productos.length >= 4 && this.cont2 >= 1){
        for(var i=3;i<this.productos.length; i++){
             this.resul += parseInt(this.productos[i].subtotal);
           }
        this.resultado = this.resul.toString();
        this.resultado;   
      }
    }
    
  }
});