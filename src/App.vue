<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-success">
    <div class="container-fluid">
      <h3 class="navbar-brand" href="#">
        <router-link class="nav-link" to="/listM">PASTELES CAKEFACTORY</router-link>
      </h3>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              PASTELES
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><router-link class="dropdown-item" to="/">Lista de Pasteles</router-link></li>
              <li><router-link class="dropdown-item" to="/createE">Registrar uno nuevo</router-link></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              INGREDIENTES
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><router-link class="dropdown-item" to="/listI">Lista de Ingredientes</router-link></li>
              <li><router-link class="dropdown-item" to="/createI">Registrar uno nuevo</router-link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container-fluid">
    <router-view/>
  </div>
</template>
