// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // ✅ Now resolves to ./router/index.js

// Create cart state (simplified example - use Pinia in production)
import { reactive, provide } from 'vue';

const cartStore = reactive({
  items: JSON.parse(localStorage.getItem('cart')) || [],
  addItem(item) {
    const existing = this.items.find(i => i.id === item.id);
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      this.items.push({ ...item });
    }
    localStorage.setItem('cart', JSON.stringify(this.items));
  },
  get totalCount() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }
});
console.log(cartStore)
// Provide globally (accessible to ALL components including Navbar)


const app = createApp(App)
app.use(router)
app.provide("cartStore",cartStore)
app.mount('#app')
