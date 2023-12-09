<template>
  <header>

    <v-toolbar>
      <div class="cabecera">
        <img src="./images/coinIcon.png" alt="" width="30px">
        ¡Registrate para conseguir 1000 treidis!
      </div>

    </v-toolbar>
    
  </header>

  
  <main>
    <RouterView />
  </main>
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
