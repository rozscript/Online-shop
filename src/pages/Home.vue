<template>

    <!-- Navigation -->
     <Navbar></Navbar>
    <!-- Hero Section -->
    <section class="hero-section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="hero-text">
                        <h1 class="display-4 fw-bold">Quality Products for Everyone</h1>
                        <p class="lead">Discover our curated collection of premium products at affordable prices. Free
                            shipping on orders over $50!</p>
                        <div class="d-grid d-md-flex gap-2">
                            <a href="#products" class="btn btn-light btn-lg">Shop Now</a>
                            <a href="#" class="btn btn-outline-light btn-lg">Learn More</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 mt-4 mt-lg-0">
                    <div class="text-center">
                        <div class="p-4 bg-white rounded-circle d-inline-block" style="width: 300px; height: 300px;">
                            <i class="bi bi-gift fs-1 text-primary" style="font-size: 12rem;"></i>
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
                 @click="selctedCategory = 'all'">All</button>
                <button v-for="cat in uniquecat" 
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
                <!-- Product 1 -->
                <div class="col-12 col-sm-6 col-lg-3" v-for="product in filterData">
                    <div class="card product-card">
                        <div class="position-relative">
                            <img v-bind:src="product.image" class="product-img card-img-top" alt="Wireless Headphones">
                            <span class="badge bg-success position-absolute top-0 start-0 m-2">SALE</span>
                        </div>
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title"><router-link 
                                :style="{color:isHovered===product.id?'blue':'black',textDecoration:'none'}"
                                @mouseover="isHovered=product.id"
                                @mouseleave="isHovered=null"
                                 v-bind:to="{name:'ProductDetail', params:{id: product.id}}">{{ product.title }}</router-link></h5>
                            <div class="rating mb-2">
                                <i v-for="(idx,val) in renderStars(product.rating.rate)" 
                                :key="idx"
                                v-bind:class="`bi ${idx} text-warning`"></i>    
                             
                                <span class="ms-1">({{ product.rating.count}})</span>
                            </div>
                            <p class="card-text">{{ truncat(product.description) }}</p>
                            <div class="mt-auto">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <span class="price">${{ product.price }}</span>

                                    </div>
                                    <a href="#" class="btn btn-primary">Add to Cart</a>
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
                        <h4>Free Shipping</h4>
                        <p>On orders over $50. Fast delivery to your doorstep.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="p-4">
                        <div class="bg-primary bg-opacity-10 rounded-circle p-3 d-inline-block mb-3">
                            <i class="bi bi-arrow-repeat fs-1 text-primary"></i>
                        </div>
                        <h4>Easy Returns</h4>
                        <p>30-day return policy. No questions asked.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="p-4">
                        <div class="bg-primary bg-opacity-10 rounded-circle p-3 d-inline-block mb-3">
                            <i class="bi bi-shield-check fs-1 text-primary"></i>
                        </div>
                        <h4>Secure Payment</h4>
                        <p>100% secure checkout with multiple payment options.</p>
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
        stars.push("bi-star-fill");
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
.card-link{
    text-decoration: none;
}
</style>