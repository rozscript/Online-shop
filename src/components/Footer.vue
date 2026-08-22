<template>
    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-4 mb-3 mb-lg-0">
                    <h5 class="text-white mb-3">
                        <i class="bi bi-bag-heart-fill me-2"></i>ShopSimple
                    </h5>
                    <p class="mb-3">Quality products at affordable prices. We believe everyone deserves access to great products without breaking the bank.</p>
                    <div class="social-icons d-flex gap-2">
                        <a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
                        <a href="#" aria-label="Twitter"><i class="bi bi-twitter-x"></i></a>
                        <a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
                        <a href="#" aria-label="Pinterest"><i class="bi bi-pinterest"></i></a>
                    </div>
                </div>
                <div class="col-lg-2 col-md-4 mb-3 mb-md-0">
                    <h5 class="text-white mb-3">Shop</h5>
                    <ul class="list-unstyled">
                        <li><a href="#">All Products</a></li>
                        <li><a href="#">New Arrivals</a></li>
                        <li><a href="#">Best Sellers</a></li>
                        <li><a href="#">Sale Items</a></li>
                        <li><a href="#">Gift Cards</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-4 mb-3 mb-md-0">
                    <h5 class="text-white mb-3">Company</h5>
                    <ul class="list-unstyled">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Affiliates</a></li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-4">
                    <h5 class="text-white mb-3">Contact Us</h5>
                    <ul class="list-unstyled">
                        <li><i class="bi bi-geo-alt me-2"></i> 123 Commerce St, New York, NY</li>
                        <li><i class="bi bi-telephone me-2"></i> (123) 456-7890</li>
                        <li><i class="bi bi-envelope me-2"></i> support@shopsimple.com</li>
                    </ul>
                    <div class="mt-4">
                        <div v-if="showSuccess" class="alert alert-success mt-3" role="alert">
                            <i class="bi bi-check-circle-fill me-2"></i>
                            Thank you! Your {{email}} has been subscribed.
                        </div>
                        <h6 class="text-white mb-2">Subscribe to our newsletter</h6>
                        <div class="input-group">
                            <input type="email" class="form-control" v-model="email" placeholder="Enter your email">
                            <button class="btn btn-primary" @click="subscribeBtn" type="button">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="mt-5 mb-4 bg-light bg-opacity-25">
            <div class="text-center">
                <p class="mb-0 text-white-50">&copy; 2025 ShopSimple. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>
<script setup>
import { ref } from 'vue'
const email = ref(null)
const showSuccess = ref(false)
const subscribeBtn = async ()=>{
    console.log(email.value)
    showSuccess.value = true
    try {
        const serponse = await axios.post('https://fakestoreapi.com/products',
         { 'Content-Type': 'application/json' }, 
         JSON.stringify({ email: email.value.trim() }))
    }catch(error){
        console.log(error)
    }
}
</script>