<template> <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 mb-4 mb-lg-0">
                    <h5 class="text-white mb-4">ShopSimple</h5>
                    <p>Quality products at affordable prices. We believe everyone deserves access to great products
                        without breaking the bank.</p>
                    <div class="social-icons">
                        <a href="#" class="text-white me-3"><i class="bi bi-facebook"></i></a>
                        <a href="#" class="text-white me-3"><i class="bi bi-twitter"></i></a>
                        <a href="#" class="text-white me-3"><i class="bi bi-instagram"></i></a>
                        <a href="#" class="text-white"><i class="bi bi-pinterest"></i></a>
                    </div>
                </div>
                <div class="col-lg-2 col-md-4 mb-4 mb-md-0">
                    <h5 class="text-white mb-4">Shop</h5>
                    <ul class="list-unstyled">
                        <li class="mb-2"><a href="#">All Products</a></li>
                        <li class="mb-2"><a href="#">New Arrivals</a></li>
                        <li class="mb-2"><a href="#">Best Sellers</a></li>
                        <li class="mb-2"><a href="#">Sale Items</a></li>
                        <li><a href="#">Gift Cards</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-4 mb-4 mb-md-0">
                    <h5 class="text-white mb-4">Company</h5>
                    <ul class="list-unstyled">
                        <li class="mb-2"><a href="#">About Us</a></li>
                        <li class="mb-2"><a href="#">Careers</a></li>
                        <li class="mb-2"><a href="#">Press</a></li>
                        <li class="mb-2"><a href="#">Blog</a></li>
                        <li><a href="#">Affiliates</a></li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-4">
                    <h5 class="text-white mb-4">Contact Us</h5>
                    <ul class="list-unstyled">
                        <li class="mb-2"><i class="bi bi-geo-alt me-2"></i> 123 Commerce St, New York, NY</li>
                        <li class="mb-2"><i class="bi bi-telephone me-2"></i> (123) 456-7890</li>
                        <li class="mb-2"><i class="bi bi-envelope me-2"></i> support@shopsimple.com</li>
                    </ul>
                    <div class="mt-4">
                        <div v-if="showSuccess" class="alert alert-success mt-4" role="alert">
                            <i class="bi bi-check-circle-fill me-2"></i>
                            Thank you! Your {{email}} has been sent subscribed.
                        </div>
                        <h6 class="text-white">Subscribe to our newsletter</h6>
                        <div class="input-group">
                            <input type="email" class="form-control" v-model="email" placeholder="Your email">
                            <button class="btn btn-primary" @click="subscribeBtn" type="button">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="mt-5 mb-4 bg-light bg-opacity-25">
            <div class="text-center">
                <p class="mb-0">© 2025 ShopSimple. All rights reserved.</p>
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