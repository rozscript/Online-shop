<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
            <a class="navbar-brand" href="#">
                <i class="bi bi-bag-heart-fill"></i> ShopSimple
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'Home' }" active-class="active">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'About' }" active-class="active">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'Contact' }" active-class="active">Contact</router-link>
                    </li>
                </ul>
                <div class="d-flex align-items-center gap-3">
                    <router-link :to="{ name: 'Signup' }" class="btn btn-outline-primary">Sign In</router-link>
                    <a href="#" class="cart-icon">
                        <i class="bi bi-cart3 fs-5"></i>
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