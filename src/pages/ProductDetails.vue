
<template>
  <Navbar></Navbar>

  <div class="container py-5" v-if="product">
    <div class="row g-4">
      <!-- Product Image -->
      <div class="col-md-6 d-flex align-items-center justify-content-center">
        <div class="image-container p-3 bg-white rounded-4 shadow-sm">
          <img 
            :src="product.image" 
            :alt="product.title"
            class="product-image w-100"
            loading="lazy"
          >
        </div>
      </div>

      <!-- Product Information -->
      <div class="col-md-6">
        <div class="product-info bg-white p-4 p-md-5 rounded-4 shadow-sm h-100 d-flex flex-column">
          <div>
            <div class="mb-2">
              <span class="badge bg-light text-dark border">{{ product.category }}</span>
            </div>
            
            <h1 class="h2 fw-bold mb-3">{{ product.title }}</h1>
            
            <!-- Rating Section -->
            <div class="mb-4" v-if="product.rating">
              <div class="d-flex align-items-center">
                <div class="me-2">
                  <i 
                    v-for="star in fullStars" 
                    :key="'full-'+star" 
                    class="bi bi-star-fill text-warning"
                  ></i>
                  <i 
                    v-if="hasHalfStar" 
                    class="bi bi-star-half text-warning"
                  ></i>
                  <i 
                    v-for="star in emptyStars" 
                    :key="'empty-'+star" 
                    class="bi bi-star text-secondary"
                  ></i>
                </div>
                <span class="text-muted">({{ product.rating.count }} امتیاز)</span>
              </div>
            </div>
            
            <!-- Price Section -->
            <div class="mb-4">
              <div class="d-flex align-items-baseline">
                <span class="display-6 fw-bold text-danger me-2">{{ product.price.toLocaleString() }}</span>
                <span class="text-muted">تومان</span>
              </div>
              <div class="mt-1">
                <span class="badge bg-success">موجود در انبار</span>
              </div>
            </div>
            
            <!-- Quantity Selector -->
            <div class="mb-4">
              <label class="form-label fw-medium mb-2">تعداد:</label>
              <div class="quantity-selector d-flex align-items-center">
                <button 
                  @click="decreaseQuantity" 
                  class="btn btn-outline-secondary rounded-circle"
                  :disabled="quantity <= 0"
                >
                  <i class="bi bi-dash-lg"></i>
                </button>
                <div class="quantity-display mx-3 fs-4 fw-bold min-w-40 text-center">
                  {{ quantity }}
                </div>
                <button 
                  @click="increaseQuantity" 
                  class="btn btn-outline-secondary rounded-circle"
                  :disabled="quantity >= 10"
                >
                  <i class="bi bi-plus-lg"></i>
                </button>
              </div>
              <div class="text-muted mt-1 small">حداکثر تعداد قابل خرید: 10</div>
            </div>
            
            <!-- Action Buttons -->
            <div class="mt-auto pt-3">
              <button @click="shopingBasket" class="btn btn-primary btn-lg w-100 mb-2 py-3 fw-bold fs-5">
                <i class="bi bi-cart-plus ms-1"></i> افزودن به سبد خرید
              </button>
              <button class="btn btn-outline-secondary btn-lg w-100 py-3 fw-medium">
                <i class="bi bi-heart ms-1"></i> افزودن به علاقه‌مندی‌ها
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Full Description -->
    <div class="row mt-5">
      <div class="col-12">
        <div class="bg-white p-4 p-md-5 rounded-4 shadow-sm">
          <h2 class="h4 fw-bold mb-4 pb-2 border-bottom">توضیحات کامل محصول</h2>
          <p class="lead" style="line-height: 1.8;">
            {{ product.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="container py-5 text-center" v-else>
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">در حال بارگذاری...</span>
    </div>
    <p class="mt-3 text-muted">در حال بارگذاری اطلاعات محصول...</p>
  </div>
  <Footer></Footer>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import {provide} from 'vue';
const addToCartSuccess = ref(false);


const route = useRoute();
const product = ref(null);
const quantity = ref(1);

// Rating calculations
const fullStars = computed(() => 
product.value?.rating ? Math.floor(product.value.rating.rate) : 0
);

const hasHalfStar = computed(() => 
product.value?.rating ? (product.value.rating.rate % 1) >= 0.5 : false
);

const emptyStars = computed(() => 
5 - fullStars.value - (hasHalfStar.value ? 1 : 0)
);

// Quantity controls
const decreaseQuantity = () => {
  if (quantity.value > 1) quantity.value--;
};

const increaseQuantity = () => {
  if (quantity.value < 10) quantity.value++;
};

// Fetch product data
onMounted(async () => {
  try {
    // Fixed URL: removed space before ${route.params.id}
    const response = await axios.get(`https://fakestoreapi.com/products/${route.params.id}`);
    product.value = response.data;
    
    // Reset quantity when product changes
    quantity.value = 1;
  } catch (error) {
    console.error('Failed to fetch product:', error);
    // Optional: Show error message to user
  }
});
const shopingBasket = ()=>{
  if(increaseQuantity || decreaseQuantity){
    return quantity.value
  }
  return quantity.value
}
provide("shareShopping",  quantity)

const addToCart = () => {
  if (!product.value) return;
  cartStore.addItem({
    id: product.value.id,
    title: product.value.title,
    price: product.value.price,
    image: product.value.image,
    quantity: quantity.value,
    category: product.value.category
  });
    addToCartSuccess.value = true;
  setTimeout(() => {
    addToCartSuccess.value = false;
  }, 2000);
};
</script>
