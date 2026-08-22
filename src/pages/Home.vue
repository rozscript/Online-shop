<template>

    <!-- Navigation -->
     <Navbar></Navbar>
    <!-- Hero Section -->
    <section class="hero-section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="hero-text">
                        <h1 class="display-4 fw-bold mb-3">Quality Products for Everyone</h1>
                        <p class="lead mb-4">Discover our curated collection of premium products at affordable prices. Free shipping on orders over $50!</p>
                        <div class="d-flex flex-wrap gap-2">
                            <a href="#products" class="btn btn-light btn-lg">Shop Now</a>
                            <a href="#" class="btn btn-outline-light btn-lg">Learn More</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 mt-4 mt-lg-0">
                    <div class="text-center">
                        <div class="p-4 bg-white rounded-circle d-inline-block shadow-lg" style="width: 280px; height: 280px;">
                            <i class="bi bi-gift-fill text-primary" style="font-size: 10rem;"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Categories -->
    <section class="py-5">
        <div class="container">
            <h2 class="section-title">Shop by Category</h2>
            <div class="text-center">
                <button class="category-btn"
                 v-bind:class="{active:selctedCategory==='all'}"
                 @click="selctedCategory = 'all'">All Products</button>
                <button v-for="cat in uniquecat" 
                key="cat"
                class="category-btn"
                v-bind:class="{active:selctedCategory===cat}"
                @click="selctedCategory=cat">{{ cat }}</button>
            </div>
        </div>
    </section>

    <!-- Products Section -->
    <section id="products" class="py-5 bg-light">
        <div class="container">
            <h2 class="section-title">Featured Products</h2>
            <div class="row g-4">
                <!-- Product Card -->
                <div class="col-12 col-sm-6 col-lg-3" v-for="product in filterData" :key="product.id">
                    <div class="card product-card">
                        <div class="position-relative overflow-hidden">
                            <img v-bind:src="product.image" class="product-img card-img-top" :alt="product.title">
                            <span class="badge bg-success position-absolute top-0 start-0 m-3">SALE</span>
                        </div>
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">
                                <router-link 
                                    :style="{color:isHovered===product.id?'var(--primary)':'inherit',textDecoration:'none'}"
                                    @mouseover="isHovered=product.id"
                                    @mouseleave="isHovered=null"
                                 v-bind:to="{name:'ProductDetail', params:{id: product.id}}">{{ product.title }}</router-link>
                            </h5>
                            <div class="rating mb-2">
                                <i v-for="(starClass, idx) in renderStars(product.rating.rate)" 
                                :key="idx"
                                :class="'bi ' + starClass"></i>   
                             
                                <span class="ms-1">({{ product.rating.count }})</span>
                            </div>
                            <p class="card-text">{{ truncat(product.description) }}</p>
                            <div class="mt-auto">
                                <div class="d-flex justify-content-between align-items-center flex-wrap gap-2">
                                    <div>
                                        <span class="price">${{ product.price }}</span>
                                    </div>
                                    <a href="#" class="btn btn-primary btn-sm">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center mt-5">
                <a href="#" class="btn btn-outline-primary btn-lg">View All Products</a>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="py-5">
        <div class="container">
            <div class="row text-center g-4">
                <div class="col-md-4">
                    <div class="p-4">
                        <div class="bg-primary bg-opacity-10 rounded-circle p-3 d-inline-block mb-3">
                            <i class="bi bi-truck fs-1 text-primary"></i>
                        </div>
                        <h4 class="fw-bold">Free Shipping</h4>
                        <p class="text-muted">On orders over $50. Fast delivery to your doorstep.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="p-4">
                        <div class="bg-primary bg-opacity-10 rounded-circle p-3 d-inline-block mb-3">
                            <i class="bi bi-arrow-repeat fs-1 text-primary"></i>
                        </div>
                        <h4 class="fw-bold">Easy Returns</h4>
                        <p class="text-muted">30-day return policy. No questions asked.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="p-4">
                        <div class="bg-primary bg-opacity-10 rounded-circle p-3 d-inline-block mb-3">
                            <i class="bi bi-shield-check fs-1 text-primary"></i>
                        </div>
                        <h4 class="fw-bold">Secure Payment</h4>
                        <p class="text-muted">100% secure checkout with multiple payment options.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

<Footer></Footer>

</template>


<script setup> 

import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
import { computed, ref } from 'vue';
import { onMounted } from 'vue';
const isHovered = ref(null);
const uniquecat =ref([]);
const products = ref([]);
const selctedCategory=ref("all")
onMounted(async () => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        products.value = response.data
        uniquecat.value=([...new Set(products.value.map(product=>product.category))])
        
    }
    catch (error) {
        console.log(error)
    }
}
) 
const renderStars = (rate) =>{
    const full = Math.floor(rate);
    const hasHalf=rate%1 >=0.5;

    const empty = 5 - full - (hasHalf ? 1: 0);
     
    const stars = [];
    for(let i = 0; i< full;i++){
        stars.push("bi-star-fill");
    }
    if(hasHalf){
        stars.push("bi-star-half");
    }
    for(let i =0; i <empty;i++){
        stars.push("bi-star");
    }
    return stars;
}
const truncat = (text)=> {
 if (text.length > 20 ) {
     return text.slice(0,50)+"..."
 }else{
    return text
 }
}

 const filterData= computed(() => {
    if (selctedCategory.value==='all'){
        console.log(products.value)
        return products.value
    }
    return products.value.filter(data => data.category==selctedCategory.value)
 })
 
</script>

<style scoped>
/* Hero Section */
.hero-section {
    background: linear-gradient(135deg, var(--primary) 0%, #1a56db 100%);
    color: white;
    padding: 100px 0;
    position: relative;
    overflow: hidden;
}

.hero-section::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 80%;
    height: 200%;
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(-15deg);
    animation: float 6s ease-in-out infinite;
}

@keyframes float {
    0%, 100% { transform: rotate(-15deg) translateY(0); }
    50% { transform: rotate(-15deg) translateY(-20px); }
}

.hero-text h1 {
    animation: fadeInUp 0.8s ease-out;
}

.hero-text p {
    animation: fadeInUp 0.8s ease-out 0.2s both;
}

.hero-text .btn {
    animation: fadeInUp 0.8s ease-out 0.4s both;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Categories Section */
.section-title {
    text-align: center;
    font-weight: 700;
    margin-bottom: 3rem;
    position: relative;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: var(--primary);
    border-radius: 2px;
}

.category-btn {
    background: white;
    border: 2px solid #e5e7eb;
    padding: 10px 24px;
    margin: 5px;
    border-radius: 50px;
    font-weight: 600;
    color: #6b7280;
    cursor: pointer;
    transition: all 0.3s ease;
}

.category-btn:hover {
    border-color: var(--primary);
    color: var(--primary);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(29, 78, 216, 0.15);
}

.category-btn.active {
    background: var(--primary);
    border-color: var(--primary);
    color: white;
    box-shadow: 0 4px 12px rgba(29, 78, 216, 0.3);
}

/* Product Cards */
.product-card {
    border: none;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
    transition: all 0.3s ease;
    height: 100%;
    background: white;
}

.product-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.product-img {
    height: 220px;
    object-fit: contain;
    padding: 20px;
    transition: transform 0.3s ease;
    background: #f9fafb;
}

.product-card:hover .product-img {
    transform: scale(1.05);
}

.card-title a {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    min-height: 2.8rem;
}

.rating {
    color: #fbbf24;
    font-size: 0.9rem;
}

.price {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--primary);
}

.btn-primary {
    background: var(--primary);
    border-color: var(--primary);
    padding: 8px 20px;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.3s ease;
}

.btn-primary:hover {
    background: #1a56db;
    border-color: #1a56db;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(29, 78, 216, 0.3);
}

.btn-outline-primary {
    border: 2px solid var(--primary);
    color: var(--primary);
    font-weight: 600;
    padding: 12px 32px;
    border-radius: 10px;
    transition: all 0.3s ease;
}

.btn-outline-primary:hover {
    background: var(--primary);
    border-color: var(--primary);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(29, 78, 216, 0.3);
}

/* Features Section */
.bg-primary.bg-opacity-10 {
    background: rgba(29, 78, 216, 0.1) !important;
    transition: all 0.3s ease;
}

.col-md-4:hover .bg-primary.bg-opacity-10 {
    background: rgba(29, 78, 216, 0.15) !important;
    transform: scale(1.05);
}

.col-md-4:hover i {
    transform: scale(1.1);
}

.col-md-4 h4 {
    font-weight: 700;
    margin-top: 1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
    .hero-section {
        padding: 60px 0;
        text-align: center;
    }
    
    .hero-section .d-flex {
        justify-content: center;
    }
    
    .section-title {
        font-size: 1.5rem;
    }
    
    .category-btn {
        padding: 8px 16px;
        font-size: 0.9rem;
        margin: 3px;
    }
    
    .product-img {
        height: 180px;
    }
}

/* Smooth Scrolling */
html {
    scroll-behavior: smooth;
}

/* Card Link Styles */
.card-link {
    text-decoration: none;
}
</style>