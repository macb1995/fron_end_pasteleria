<template>
  <div class="row">
    <div class="col-lg-8 offset-lg-2">
      <div class="table-responsive">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>NOMBRE</th>
              <th>DESCRIPCIÓN</th>
              <th>CREADOR</th>
              <th>FECHA DE CREACIÓN</th>
              <th>VENCIMIENTO</th>
              <th>ACCIONES A REALIZAR EN REGISTROS</th>
            </tr>
          </thead>
          <tbody class="table-group-divider" id="contenido">
            <tr v-if="this.cargando">
              <td colspan="6"><h3>Cargando...</h3></td>
            </tr>
            <tr v-else v-for="est, in this.pastels" :key="est.id">
              <td v-text="est.id"></td>
              <td v-text="est.nombre"></td>
              <td v-text="est.descripcion"></td>
              <td v-text="est.creador"></td>
              <td v-text="est.f_creado"></td>
              <td v-text="est.f_vencimiento"></td>
              <td>
                <router-link :to="{path:'viewE/'+est.id}" class="btn btn-info">
                  <i class="fa-solid fa-eye"></i>
                </router-link>
                &nbsp;
                <router-link :to="{path:'editE/'+est.id}" class="btn btn-warning">
                  <i class="fa-solid fa-edit"></i>
                </router-link>
                &nbsp;
                <button class="btn btn-danger" v-on:click="eliminar(est.id,est.nombre)">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import { confirmar } from '../funciones'

  export default{
    data(){
      return{
        pastels:null,
        cargando:false
      }
    },
    mounted(){
      this.getPastels();
    },
    methods:{
      getPastels(){
        this.cargando = true;
        axios.get('http://apibackend.test/api/v1/pastels').then(
          res =>{
            this.pastels = res.data;
            this.cargando = false;
          }
        );
      },
      eliminar(id,nombre){
        confirmar('http://apibackend.test/api/v1/pastels/',id,'Eliminar registro','Realmente desea eliminar el registro'+nombre+'?');
        this.cargando=false;
      }
    }
  }
</script>
