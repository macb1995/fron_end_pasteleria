<template>
    <div class="row mt-3">
      <div class="col-md-6 offset-md-3">
        <div class="card">
          <div class="card-header bg-dark text-white text-center">
            Registrar Pastel
          </div>
          <div class="card-body">
            <form v-on:submit="guardar">
              <div class="input-group mb-3">
                <span class="input-group-text">Nombre del Pastel:</span>
                <input type="text" v-model="nombre" id="nombre" required maxlength="50" class="form-control">
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text">Descripción:</span>
                <input type="text" v-model="descripcion" id="descripcion" required maxlength="50" class="form-control">
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text">Creado por:</span>
                <input type="text" v-model="creador" id="creador" required maxlength="50" class="form-control">
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text">Fecha de Creación:</span>
                <input type="date" v-model="f_creado" id="f_creado" class="form-control">
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
  import { mostrarAlerta, enviarSolicitud } from '../funciones'

  export default{
    data(){
      return{
        nombre:'',
        descripcion:'',
        creador:'',
        f_creado:'',
        f_vencimiento:'',
        url:'http://apibackend.test/api/v1/pastels',
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
        }else if(this.creador.trim()===''){
          mostrarAlerta('Ingrese un nombre','warning', 'nombre');
        }if(this.f_creado.trim()===''){
          mostrarAlerta('Ingrese la fecha de creación','warning', 'nombre');
        }if(this.f_vencimiento.trim()===''){
          mostrarAlerta('Ingrese la fecha de vencimiento','warning', 'nombre');
        }else{
          var parametros = {nombre:this.nombre.trim(), descripcion:this.descripcion.trim(),creador:this.creador.trim(),f_creado:this.f_creado.trim(),f_vencimiento:this.f_vencimiento.trim()}
          enviarSolicitud('POST',parametros,this.url,'Pastel registrado!!!')
        }
        this.cargando = true;
      },

    }
  }
</script>
