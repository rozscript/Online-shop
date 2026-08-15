<template>
  <div>
    <Navbar></Navbar>;
 
    <!-- Hero Section -->
    <section class="hero-section text-white py-5">
      <div class="container text-center">
        <h1 class="display-4 fw-bold">Contact Us</h1>
        <p class="lead">We'd love to hear from you. Reach out with any questions or feedback.</p>
      </div>
    </section>

    <!-- Contact Info + Map Placeholder -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="row g-5">
          <!-- Contact Info -->
          <div class="col-lg-5">
            <h2 class="fw-bold mb-4">Get in Touch</h2>
            <p class="text-muted mb-4">
              Have a question? Fill out the form, or use the information below to contact our support team.
            </p>

            <ul class="list-unstyled">
              <li class="d-flex align-items-start mb-3">
                <i class="bi bi-geo-alt fs-4 text-primary me-3 mt-1"></i>
                <div>
                  <h5 class="mb-0">Address</h5>
                  <p class=" text-muted mb-0">123 Commerce Street, Suite 101<br>New York, NY 10001, USA</p>
                </div>
              </li>
              <li class="d-flex align-items-start mb-3">
                <i class="bi bi-telephone fs-4 text-primary me-3 mt-1"></i>
                <div>
                  <h5 class="mb-0">Phone</h5>
                  <p class="text-muted mb-0">+1 (212) 555-0198<br>+1 (212) 555-0173 (Support)</p>
                </div>
              </li>
              <li class="d-flex align-items-start mb-3">
                <i class="bi bi-envelope fs-4 text-primary me-3 mt-1"></i>
                <div>
                  <h5 class="mb-0">Email</h5>
                  <p class="text-muted mb-0">
                    <a href="mailto:info@shopsimple.com" class="text-decoration-none text-muted">info@shopsimple.com</a><br>
                    <a href="mailto:support@shopsimple.com" class="text-decoration-none text-muted">support@shopsimple.com</a>
                  </p>
                </div>
              </li>
              <li class="d-flex align-items-start">
                <i class="bi bi-clock fs-4 text-primary me-3 mt-1"></i>
                <div>
                  <h5 class="mb-0">Working Hours</h5>
                  <p class="text-muted mb-0">Monday–Friday: 9:00 AM – 6:00 PM<br>Saturday: 10:00 AM – 4:00 PM<br>Sunday: Closed</p>
                </div>
              </li>
            </ul>

            <div class="mt-4">
              <h5 class="mb-3">Follow Us</h5>
              <div>
                <a href="#" class="btn btn-outline-primary rounded-circle me-2" aria-label="Facebook">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="#" class="btn btn-outline-primary rounded-circle me-2" aria-label="Twitter">
                  <i class="bi bi-twitter-x"></i>
                </a>
                <a href="#" class="btn btn-outline-primary rounded-circle me-2" aria-label="Instagram">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="#" class="btn btn-outline-primary rounded-circle" aria-label="LinkedIn">
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <!-- Contact Form -->
          <div class="col-lg-7">
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
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        v-model="form.email"
                        required
                      />
                    </div>
                    <div class="col-12">
                      <label for="subject" class="form-label">Subject</label>
                      <select class="form-select" id="subject" v-model="form.subject" required>
                        <option value="" disabled>Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="order">Order Status</option>
                        <option value="feedback">Feedback & Suggestions</option>
                        <option value="partnership">Business Partnership</option>
                      </select>
                    </div>
                    <div class="col-12">
                      <label for="message" class="form-label">Message</label>
                      <textarea
                        class="form-control"
                        id="message"
                        rows="5"
                        v-model="form.message"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div class="form-check my-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="newsletter"
                      v-model="form.subscribe"
                    />
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

        <!-- Map Placeholder (Static Image for Privacy/Performance) -->
        <div class="mt-5">
          <h3 class="fw-bold text-center mb-4">Our Location</h3>
          <div class="ratio ratio-16x9 rounded-3 overflow-hidden shadow">
            <!-- Replace with static map image (e.g., from Google Static Maps or screenshot) -->
            <img
              src="https://maps.googleapis.com/maps/api/staticmap?center=40.7505,-73.9934&zoom=14&size=800x400&markers=color:red%7C40.7505,-73.9934&key=YOUR_API_KEY"
              alt="ShopSimple Office Location"
              class="w-100"
              @error="handleMapError"
            />
            <div v-if="mapLoadError" class="position-absolute top-50 start-50 translate-middle text-center bg-white p-4 rounded shadow" style="z-index: 10;">
              <i class="bi bi-geo-alt fs-1 text-muted mb-2 d-block"></i>
              <p class="mb-0">ShopSimple HQ<br>New York, NY</p>
            </div>
          </div>
        </div>
      </div>
    </section>
       <Footer></Footer>
  </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import { ref } from 'vue';

// Form state
const form = ref({
  email: '',
  subject: '',
  message: '',
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
      subject: '',
      message: '',
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

<style scoped>
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.084);
}

.form-label {
  font-weight: 500;
}

/* Make map container responsive and fallback visible */
.ratio {
  position: relative;
}
</style>