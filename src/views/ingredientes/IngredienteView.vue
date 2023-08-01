<template>
  <div class="row mt-3">
    <div class="col-md-6 offset-md-3">
      <div class="card">
        <div class="card-header bg-dark text-white text-center">
          Detalle del Ingrediente
        </div>
        <div class="card-body">
          <div class="input-group mb-3">
            <router-link :to="{path:'/listI'}" class="btn btn-info">
              <i class="fa-solid fa-arrow-left">  Regresar a Lista</i>
            </router-link>
          </div>
            <div class="input-group mb-3">
              <span class="input-group-text">Nombre del Ingrediente:</span>
              <label type="text" v-text="nombre" id="nombre" required maxlength="50" class="form-control"></label>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">Descripción:</span>
              <label type="text" v-text="descripcion" id="descripcion" required maxlength="50" class="form-control"></label>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">Fecha de Ingreso:</span>
              <label type="date" v-text="f_ingreso" id="f_ingreso" class="form-control"></label>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">Fecha de Vencimiento:</span>
              <label type="date" v-text="f_vencimiento" id="f_vencimiento" class="form-control"></label>
            </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
import { mostrarAlerta, enviarSolicitud } from '/laragon/www/cakefactory2/src/funcionesIng'
import { useRoute } from 'vue-router';
import axios from 'axios';

export default{
  data(){
    return{
      id:0,
      nombre:'',
      descripcion:'',
      f_ingreso:'',
      f_vencimiento:'',
      url:'http://apibackend.test/api/v1/ingredientes',
      cargando:false
    }
  },
  mounted(){
    const route = useRoute();
    this.id = route.params.id;
    this.url += '/'+this.id;
    this.getIngrediente();
  },
  methods:{
    getIngrediente(){
      axios.get(this.url).then(
        res=>{
          this.nombre = res.data.data.nombre;
          this.descripcion = res.data.data.descripcion;
          this.f_ingreso = res.data.data.f_ingreso;
          this.f_vencimiento = res.data.data.f_vencimiento;
        }
      );
    }
  }
}
</script>
