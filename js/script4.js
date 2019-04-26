Vue.component("super-componente", {
  props: ["nombre"],
  data: function () {
    return {
      likes: 300
    };
  },
  methods: {
    addLike: function () {
      this.likes++;
    }
  },
  template: `<tbody>
  <tr>
      <td>1</td>
      <td>mouse</td>
      <td>5</td>
      <td>50</td>
      <td>250</td>
      <td><button>Eliminar</button></td>
  </tr>
  <tr>
      <td>1</td>
      <td>mouse</td>
      <td>5</td>
      <td>50</td>
      <td>250</td>
      <td><button>Eliminar</button></td>
  </tr>
</tbody>`
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
    cont:4
  },
  methods: {
    eliminarProducto(data){//Esta nos abrirá un alert de javascript y si aceptamos borrará la tarea que hemos elegido
      let me =this;
      let producto_id = data.id;
      if (confirm('¿Seguro que deseas borrar este producto?')) {
          me.productos.splice(producto_id-1,1);
      }
    },
    agregarProducto: function () {
      this.nombre
      this.productos.push({ id: this.cont, nombre: this.nombre, cantidad: this.cantidad, precio: this.precio, subtotal: this.cantidad*this.precio });
      this.cont = this.cont + 1;
      debugger
    },
    // addFactura: function () {
    //   this.HTMLcontent = `<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    //   <div class="modal-dialog" role="document">
    //     <div class="modal-content">
    //       <div class="modal-header">
    //         <h5 class="modal-title" id="exampleModalLabel">Nuevo producto</h5>
    //         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    //           <span aria-hidden="true">&times;</span>
    //         </button>
    //       </div>
    //       <div class="modal-body">
    //         <form>
    //           <div class="form-group">
    //             <label for="recipient-name" class="col-form-label">Nombre:</label>
    //             <input type="text" class="form-control" id="recipient-name">
    //           </div>
    //           <div class="form-group">
    //             <label for="recipient-name" class="col-form-label">Cantidad:</label>
    //             <input type="text" class="form-control" id="recipient-name">
    //           </div>
    //           <div class="form-group">
    //             <label for="recipient-name" class="col-form-label">Precio:</label>
    //             <input type="text" class="form-control" id="recipient-name">
    //           </div>
    //         </form>
    //       </div>
    //       <div class="modal-footer">
    //         <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
    //         <button type="button" class="btn btn-success" v-on:click="agregarProducto()">Agregar producto</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>`;
    // }
  }
});