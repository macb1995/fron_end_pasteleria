<template>
  <div class="row mt-3">
    <div class="col-md-6 offset-md-3">
      <div class="card">
        <div class="card-header bg-dark text-white text-center">
          Registrar Ingrediente
        </div>
        <div class="card-body">
          <form v-on:submit="guardar">
            <div class="input-group mb-3">
              <span class="input-group-text">Nombre del Ingrediente:</span>
              <input type="text" v-model="nombre" id="nombre" required maxlength="50" class="form-control">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">Descripción:</span>
              <input type="text" v-model="descripcion" id="descripcion" required maxlength="50" class="form-control">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">Fecha de Ingreso:</span>
              <input type="date" v-model="f_ingreso" id="f_ingreso" class="form-control">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">Fecha de Vencimiento:</span>
              <input type="date" v-model="f_vencimiento" id="f_vencimiento" class="form-control">
            </div>
            <div class="d-grid col-6 mx-auto mb-3">
              <button class="btn btn-success"><i class="fa-solid fa-floppy-disk"></i> Registrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
import { mostrarAlerta, enviarSolicitud } from '/laragon/www/cakefactory2/src/funcionesIng'

export default{
  data(){
    return{
      nombre:'',
      descripcion:'',
      f_ingreso:'',
      f_vencimiento:'',
      url:'http://apibackend.test/api/v1/ingredientes',
      cargando:false
    }
  },
  methods:{
    guardar(){
        event.preventDefault();
        if(this.nombre.trim()===''){
          mostrarAlerta('Ingrese un nombre','warning', 'nombre');
        }else if(this.descripcion.trim()===''){
          mostrarAlerta('Ingrese la descripción','warning', 'nombre');
        }if(this.f_ingreso.trim()===''){
          mostrarAlerta('Registre fecha de ingreso','warning', 'nombre');
        }else if(this.f_vencimiento.trim()===''){
          mostrarAlerta('Ingrese la fecha de vencimiento','warning', 'nombre');
        }else{
          var parametros = {nombre:this.nombre.trim(), descripcion:this.descripcion.trim(),f_ingreso:this.f_ingreso.trim(),f_vencimiento:this.f_vencimiento.trim()}
          enviarSolicitud('POST',parametros,this.url,'Ingrediente actualizado!!!')
        }
        this.cargando = true;
      },
  }
}
</script>
