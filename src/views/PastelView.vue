<template>
  <div class="row mt-3">
    <div class="col-md-6 offset-md-3">
      <div class="card">
        <div class="card-header bg-dark text-white text-center">
          Detalle del Pastel
        </div>
        <div class="card-body">
          <div class="input-group mb-3">
            <router-link :to="{path:'/'}" class="btn btn-info">
              <i class="fa-solid fa-arrow-left">  Regresar a Lista</i>
            </router-link>
          </div>
            <div class="input-group mb-3">
              <span class="input-group-text">Nombre del Pastel:</span>
              <label type="text" v-text="nombre" id="nombre" required maxlength="50" class="form-control"></label>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">Descripción:</span>
              <label type="text" v-text="descripcion" id="descripcion" required maxlength="50" class="form-control"></label>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">Creado por:</span>
              <label type="text" v-text="creador" id="creador" required maxlength="50" class="form-control"></label>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">Fecha de Creación:</span>
              <label type="date" v-text="f_creado" id="f_creado" class="form-control"></label>
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
import { mostrarAlerta, enviarSolicitud } from '../funciones';
import { useRoute } from 'vue-router';
import axios from 'axios';

export default{
  data(){
    return{
      id:0,
      nombre:'',
      descripcion:'',
      creador:'',
      f_creado:'',
      f_vencimiento:'',
      url:'http://apibackend.test/api/v1/pastels',
      cargando:false
    }
  },
  mounted(){
    const route = useRoute();
    this.id = route.params.id;
    this.url += '/'+this.id;
    this.getPastel();
  },
  methods:{
    getPastel(){
      axios.get(this.url).then(
        res=>{
          this.nombre = res.data.data.nombre;
          this.descripcion = res.data.data.descripcion;
          this.creador = res.data.data.creador;
          this.f_creado = res.data.data.f_creado;
          this.f_vencimiento = res.data.data.f_vencimiento;
        }
      );
    },
    actualizar(){
      event.preventDefault();
      if(this.nombre.trim()===''){
        mostrarAlerta('Ingrese un nombre','warning', 'nombre');
      }else if(this.descripcion.trim()===''){
        mostrarAlerta('Ingrese la descripción','warning', 'nombre');
      }else if(this.creador.trim()===''){
        mostrarAlerta('Ingrese un nombre','warning', 'nombre');
      }if(this.f_creado.trim()===''){
        mostrarAlerta('Ingrese la fecha de creación','warning', 'nombre');
      }if(this.f_vencimiento.trim()===''){
        mostrarAlerta('Ingrese la fecha de vencimiento','warning', 'nombre');
      }else{
        var parametros = {nombre:this.nombre.trim(), descripcion:this.descripcion.trim(),creador:this.creador.trim(),f_creado:this.f_creado.trim(),f_vencimiento:this.f_vencimiento.trim()}
        enviarSolicitud('PUT',parametros,this.url,'Pastel actualizado!!!')
      }
      this.cargando = true;
    },

  }
}
</script>

  