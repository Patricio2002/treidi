<template>
  <header>

    <v-toolbar>
      <div class="cabecera">
        <img src="./images/coinIcon.png" alt="" width="30px">
        ¡Registrate para conseguir 1000 treidis!
      </div>

    </v-toolbar>
  </header>
  
  <div style="display: flex; justify-content: space-between; margin-left: 110px; margin-right: 110px; align-items: center;">
    <div style="display: flex;">
        <div><img src="./images/flechas.png" width="60px" alt=""></div>
        <div>
          <h1 style="font-size: 40px;">Treidi</h1>
        </div>
      </div>
    <div>
      <v-btn >Regístrate</v-btn>
      <v-btn id="botonPrincipal">Iniciar Sesion</v-btn>
    </div>
  </div>
  <main>
    <RouterView />
  </main>

  <footer> 
    <div class="texto">
      <div style="display: flex;">
        <div><img src="./images/flechas.png" width="100px" alt=""></div>
        <div>
          <h1 style="font-size: 60px;">Treidi</h1>
          <p>es la nueva plataforma para poder intercambiar y adquirir <br> productos entre particulares de manera fácil y rápida.</p>
        </div>
      </div>
      <div>
        <h3>Treidi</h3>
        <br><br>
        <p>¿Quienes somos?</p>
        <br><br>
        <p>Nuestra ilosofía</p>
      </div>
      <div>
        <h3>Legal</h3>
        <br><br>
        <p>Condiciones de uso</p>
        <br><br>
        <p>política de privacidad</p>
        <br><br>
        <p>Cookies</p>
      </div>
      <div>
        <h3>Soporte</h3>
        <br><br>
        <p>Preguntas frecuentes</p>
        <br><br>
        <p>Reglas de publicación</p>
        <br><br>
        <p>Consejos de seguridad</p>
      </div>
      <div>
        <h3>Descarga la App</h3>
        <br><br>
        <p>Apple Store</p>
        <br><br>
        <p>Google Play</p>
      </div>
    </div>
    <v-toolbar>  
      Copyright © 2020 Treidi App S.A.S de C.V.
    </v-toolbar>
  </footer>
</template>

<script setup>
  import { useRouter } from "vue-router";
  import { productsStore } from "@/stores/products";

  const router = useRouter()
  const store = productsStore()
</script>


<style scoped>
.cart-items {
  text-align: end;
  padding: 16px;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
}
</style>
