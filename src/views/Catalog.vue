<template>
  <div class="texto">
    <div class="cuadro" id="cuadro1">
      <div id="titulos">
        <h1 style="color: #1D3347;">Intercambia tus</h1>
        <h1 style="color: #028090;">Libros y más...</h1>
      </div>
      <p>Treidi es la nueva plataforma para poder intercambiar y adquirir productos entre particulares de manera fácil y rápida.</p>
      <br><br>
      <v-btn id="botonPrincipal">Comenzar</v-btn>
    </div>
    <div class="cuadro" id="cuadro2">
      <img src="../images/shop.png" alt="" width="100%">
    </div>
  </div>
  <div class="products-list">
    <h1>Top categorías</h1>
    <div>
      <v-btn id="botonPrincipal">TODOS</v-btn>
      <v-btn>LIBROS</v-btn>
      <v-btn>ELECTRÓNICOS</v-btn>
      <v-btn>CÓMPUTO</v-btn>
      <v-btn>VIDEOJUEGOS</v-btn>
      <v-btn>HOGAR</v-btn>
    </div>
    
    <v-row no-gutters>
      <v-col
          v-for="product in store.products"
          :key="product.id"
          cols="12"
          sm="3"
          @click="goToProductPage(product.id)"
      >
        <product-item
            :product-data="product"
            @item-clicked="goToProductPage"
        />
      </v-col>
    </v-row>

    </div>
   
</template>

<script>
  import { defineComponent } from "vue";
  import ProductItem from "@/components/ProductItem.vue";
  export default defineComponent({
    name: 'CatalogView',
    components: {
      ProductItem
    }
  })
</script>

<script setup>
  import { onMounted, ref } from "vue";
  import { productsStore } from "@/stores/products";
  import { useRouter } from "vue-router";

  const store = productsStore()
  const router = useRouter()

  const search = ref('')

  const goToProductPage = (id) => {
    router.push({ name: 'ProductView', params: { id } })
  }


  onMounted(async () => {
    await store.fetchProductsFromDB()
  })
</script>

<style scoped>

</style>