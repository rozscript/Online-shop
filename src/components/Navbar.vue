<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div class="container">
            <a class="navbar-brand" href="#">
                <i class="bi bi-bag"></i> ShopSimple
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <router-link class="nav-link active" :to="{ name: 'Home' }">Home</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'About' }">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'Contact' }">Contact</router-link>
                    </li>
                </ul>
                <div class="d-flex">
                    <router-link  :to="{ name: 'Signup' }" class="btn btn-outline-primary me-2">Sign In</router-link>
                    <a href="#" class="cart-icon">
                        <i class="bi bi-cart fs-4"></i>
                        <span class="cart-badge">{{ shareShopping }}</span>
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>
<script setup>
import { inject } from 'vue';

const shareShopping = inject("shareShopping")
</script>