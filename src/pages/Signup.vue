<template>
    <Navbar></Navbar>
    <div class="d-flex justify-content-center align-items-center min-vh-100 w-100">
    

        <!-- Contact Form -->
        <div class="col-md-8 col-lg-6">
            <!--  Alert Form -->
            <div v-if="showSuccess" class="alert alert-success mt-4" role="alert">
                <i class="bi bi-check-circle-fill me-2"></i>
                Thank you! Your message has been sent successfully. We’ll get back to you soon.
            </div>
            <div class="card border-0 shadow-sm">
                <div class="card-body p-4 p-md-5">
                    <h3 class="fw-bold mb-4">Send us a Message</h3>
                    <form @submit.prevent="handleSubmit">
                        <div class="row g-3">
                            <div class="col-12">
                                <label for="email" class="form-label">Email Address</label>
                                <input type="email" class="form-control" id="email" v-model="form.email" required />
                            </div>

                            <div class="col-12">
                                <label for="password" class="form-label">Password</label>
                                <input class="form-control" id="password" v-model="form.password" required />
                            </div>
                        </div>

                        <div class="form-check my-3">
                            <input class="form-check-input" type="checkbox" id="newsletter" v-model="form.subscribe" />
                            <label class="form-check-label" for="newsletter">
                                Subscribe to our newsletter for updates and promotions.
                            </label>
                        </div>

                        <button type="submit" class="btn btn-primary btn-lg w-100 mt-2" :disabled="isSubmitting">
                            <span v-if="isSubmitting">
                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                Sending...
                            </span>
                            <span v-else>Send Message</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { ref } from 'vue';
// Form state
const form = ref({
    email: '',
    subscribe: false
});

const isSubmitting = ref(false);
const showSuccess = ref(false);
const mapLoadError = ref(false);

const handleSubmit = async () => {
    isSubmitting.value = true;
    showSuccess.value = false;

    try {
        // 🚀 Simulate API call (replace with real axios/fetch)
        await new Promise(resolve => setTimeout(resolve, 1200));

        // ✅ Success
        console.log('Form submitted:', form.value);
        showSuccess.value = true;

        // Reset form
        form.value = {
            email: '',
            subscribe: false
        };
    } catch (error) {
        alert('❌ Failed to send message. Please try again.');
        console.error(error);
    } finally {
        isSubmitting.value = false;
    }
};

const handleMapError = () => {
    mapLoadError.value = true;
};
</script>