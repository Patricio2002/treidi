import { defineStore } from 'pinia';
import AWS from 'aws-sdk';

AWS.config.update({
  region: 'us-east-1',
  endpoint: 'https://localhost.localstack.cloud:4566',
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();
const tableName = 'TestProduct';

export const productsStore = defineStore('products', {
  state: () => ({
    products: [],
    cart: []
  }),

  actions: {
    fetchProductsFromDB() {
      //console.log("adsassads");
      const params = {
        TableName: tableName
      };

      dynamoDB.scan(params, (err, data) => {
        if (err) {
          console.error('Error fetching data from DynamoDB:', err);
        } else {
          this.products = data.Items;
          //console.log(data.items);
        }
      });
    },

    removeFromCart(id) {
      console.log('>>>>> ID', id); 
      this.cart = this.cart.filter((item) => item.id !== id);
    }
  }
});

//Tienda sin dynamodb
/*import { defineStore } from 'pinia'


export const productsStore = defineStore('products', {
  state: () => ({
    products: [],
      cart: []
  }),

  actions: {
    fetchProductsFromDB() {
      fetch('https://dummyjson.com/products')
          .then(res => res.json())
          .then(json => {
            this.products = json.products;
          })
    },



    removeFromCart(id) {
      console.log('>>>>> ID', id)
      this.cart = this.cart.filter((item) => item.id !== id)
    }
  }
})*/