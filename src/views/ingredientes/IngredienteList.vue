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
              <th>FECHA DE INGRESO</th>
              <th>VENCIMIENTO</th>
              <th>ACCIONES PARA LOS REGISTROS</th>
            </tr>
           </thead>
            <tbody class="table-group-divider" id="contenido">
              <tr v-if="this.cargando">
                <td colspan="6"><h3>Cargando...</h3></td>
              </tr>
              <tr v-else v-for="ing, in this.ingredientes" :key="ing.id">
                <td v-text="ing.id"></td>
                <td v-text="ing.nombre"></td>
                <td v-text="ing.descripcion"></td>
                <td v-text="ing.f_ingreso"></td>
                <td v-text="ing.f_vencimiento"></td>
                <td>
                  <router-link :to="{path:'viewI/'+ing.id}" class="btn btn-info">
                    <i class="fa-solid fa-eye"></i>
                  </router-link>
                  &nbsp;
                  <router-link :to="{path:'editI/'+ing.id}" class="btn btn-warning">
                    <i class="fa-solid fa-edit"></i>
                  </router-link>
                  &nbsp;
                  <button class="btn btn-danger" v-on:click="eliminar(ing.id,ing.nombre)">
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
  import { confirmar } from '/laragon/www/cakefactory2/src/funcionesIng';

  export default{
    data(){
      return{
        ingredientes:null,
        cargando:false
        }
    },
    mounted(){
      this.getIngredientes();
    },
    methods:{
      getIngredientes(){
        this.cargando = true;
          axios.get('http://apibackend.test/api/v1/ingredientes').then(
           res =>{
            this.ingredientes = res.data;
            this.cargando = false;
          }
        );
      },
      eliminar(id,nombre){
        confirmar('http://apibackend.test/api/v1/ingredientes/',id,'Eliminar Registro', 'Realmente desea eliminar el registro de '+nombre+'?')
      }
    }
   }
</script>
  