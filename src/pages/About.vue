<template>
    
  <div>
     <Navbar></Navbar>;
    <!-- Hero Section -->
    <section class="hero-section text-white py-5">
      <div class="container text-center">
        <h1 class="display-4 fw-bold">About Us</h1>
        <p class="lead">We began our journey in 2021 with a passion for quality products and customer satisfaction.</p>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="py-5">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-6">
            <div class="bg-light p-4 rounded-3 h-100">
              <div class="d-flex align-items-start mb-4">
                <div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 50px; height: 50px;">
                  <i class="bi bi-bullseye"></i>
                </div>
                <div>
                  <h3 class="h4">Our Mission</h3>
                  <p class="mt-2">
                    To provide easy, secure, and affordable access to premium quality products with exceptional after-sales service for every household.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="bg-light p-4 rounded-3 h-100">
              <div class="d-flex align-items-start mb-4">
                <div class="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 50px; height: 50px;">
                  <i class="bi bi-binoculars"></i>
                </div>
                <div>
                  <h3 class="h4">Our Vision</h3>
                  <p class="mt-2">
                    To become Iran's most trusted and beloved e-commerce platform by 2026, while championing authentic Iranian products and supporting domestic manufacturing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Story Section -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-6 order-lg-2">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&h=400&q=80"
              alt="Our Store Team"
              class="img-fluid rounded-3 shadow"
            />
          </div>
          <div class="col-lg-6 order-lg-1">
            <h2 class="fw-bold mb-4">Our Story</h2>
            <p class="lead">
              In <strong>2021</strong>, a group of tech-savvy entrepreneurs combined technical expertise with passion for Iranian businesses to create a secure and enjoyable online shopping experience.
            </p>
            <p>
              Today, <strong>ShopSimple</strong> has taken significant strides in Iran's e-commerce landscape with over <span class="text-primary fw-bold">10,000+</span> products, <span class="text-success fw-bold">50,000+</span> satisfied customers, and <span class="text-info fw-bold">24-hour delivery</span> across Tehran.
            </p>
            <p>
              We proudly showcase authentic Iranian products, collaborating with over 200 domestic manufacturers—from small artisan workshops to large industrial facilities—ensuring quality and authenticity in every item.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-5">
      <div class="container">
        <h2 class="text-center fw-bold mb-5">Our Core Values</h2>
        <div class="row g-4">
          <div class="col-md-4" v-for="(value, index) in values" :key="index">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body text-center">
                <div class="fs-1 text-primary mb-3">
                  <i :class="value.icon"></i>
                </div>
                <h4 class="card-title">{{ value.title }}</h4>
                <p class="card-text mt-3">{{ value.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center fw-bold mb-5">Our Leadership Team</h2>
        <div class="row g-4 justify-content-center">
          <div class="col-md-6 col-lg-3" v-for="(member, index) in team" :key="index">
            <div class="text-center">
              <img
                :src="member.avatar"
                :alt="member.name"
                class="rounded-circle mb-3 shadow"
                width="120"
                height="120"
                style="object-fit: cover"
              />
              <h5>{{ member.name }}</h5>
              <p class="text-muted">{{ member.role }}</p>
              <div class="mt-2">
                <a href="#" class="text-primary me-2" aria-label="Twitter">
                  <i class="bi bi-twitter"></i>
                </a>
                <a href="#" class="text-primary me-2" aria-label="LinkedIn">
                  <i class="bi bi-linkedin"></i>
                </a>
                <a href="#" class="text-primary" aria-label="Instagram">
                  <i class="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-5 bg-primary text-white">
      <div class="container text-center">
        <h2 class="mb-4">Ready to Collaborate With Us?</h2>
        <p class="lead mb-4">Have questions? Want to share feedback? Or interested in joining our team?</p>
        <router-link to="/contact" class="btn btn-light btn-lg px-5 me-3">Contact Us</router-link>
        <a href="#" class="btn btn-outline-light btn-lg px-5">Career Opportunities</a>
      </div>
    </section>
     <Footer></Footer>
  
  </div>
</template>

<script setup>

import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import { ref } from 'vue';

const values = ref([
  {
    icon: 'bi bi-heart-pulse',
    title: 'Customer Satisfaction',
    description: 'Your satisfaction is our top priority. We stand with you from order placement to delivery.'
  },
  {
    icon: 'bi bi-shield-check',
    title: 'Trust & Security',
    description: 'Your data is protected with global encryption standards. Shop securely without worries.'
  },
  {
    icon: 'bi bi-award',
    title: 'Quality Assurance',
    description: 'Every product undergoes rigorous technical and quality inspections before shipping.'
  }
]);

const team = ref([
  {
    name: 'Sarah Johnson',
    role: 'Chief Executive Officer',
    avatar: 'https://i.pravatar.cc/150?img=32'
  },
  {
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    avatar: 'https://i.pravatar.cc/150?img=12'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    avatar: 'https://i.pravatar.cc/150?img=45'
  },
  {
    name: 'David Kim',
    role: 'Customer Support Lead',
    avatar: 'https://i.pravatar.cc/150?img=62'
  }
]);
</script>

<style scoped>
.card {
  transition: transform 0.3s, box-shadow 0.3s;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}
</style>