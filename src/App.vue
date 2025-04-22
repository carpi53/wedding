<template>
  <div id="home">
    <nav class="fixed z-30 left-20 top-20 bg-transparent">
      <ul class="hidden flex-col gap-4 justify-between text-primary lg:flex">
        <li class="hover:text-black cursor-pointer" @click="goToLink('home')">{{ currentLang === 'fr' ? 'Accueil' : 'Home' }}</li>
        <li  class="hover:text-black cursor-pointer" @click="goToLink('localisation')">{{ currentLang === 'fr' ? 'Ou ça se passe ?' : 'Where is it ?' }}</li>
        <li class="hover:text-black cursor-pointer" @click="goToLink('schedule')">{{ currentLang === 'fr' ? 'Le programme' : 'Schedule' }}</li>
      </ul>
    </nav>
    <nav class="fixed z-30 top-0 bg-blue-500 w-full">
      <button type="button" @click="curtainNavigation = !curtainNavigation" aria-label="toggle curtain navigation"
        class="nav-toggler" :class="{ active: curtainNavigation }">
        <span class="line l1" :class="[curtainNavigation ? 'bg-white' : 'bg-primary']"></span>
        <span class="line l2" :class="[curtainNavigation ? 'bg-white' : 'bg-primary']"></span>
        <span class="line l3" :class="[curtainNavigation ? 'bg-white' : 'bg-primary']"></span>
      </button>
      <div class="nav-links-curtain" :class="{ active: curtainNavigation }">
          <span class="text-white cursor-pointer" @click="goToLink('home')">{{ currentLang === 'fr' ? 'Accueil' : 'Home' }}</span>
          <span  class="text-white cursor-pointer" @click="goToLink('localisation')">{{ currentLang === 'fr' ? 'Ou ça se passe ?' : 'Where is it ?' }}</span>
          <span class="text-white cursor-pointer" @click="goToLink('schedule')">{{ currentLang === 'fr' ? 'Le programme' : 'Schedule' }}</span>
      </div>
      <!-- <div class="absolute right-6 top-5 flex gap-4 items-center">
      <button @click="toggleLangage" class="uppercase">{{ currentLang === 'fr' ? 'EN' : 'FR' }}</button>
      <button type="button" class="bg-primary text-white px-6 py-2">
        {{ currentLang === 'fr' ? 'RÉPONDRE' : 'RSVP' }}
      </button> 
    </div> -->
    </nav>
    <div class="hidden fixed z-50 right-20 top-10 gap-6 items-center lg:flex">
      <button @click="toggleLangage" class="uppercase h-10 w-10 cursor-pointer flex items-center justify-center hover:opacity-80">{{ currentLang === 'fr' ? 'EN' : 'FR' }}</button>
      <button @click="goToLink('rsvp')" type="button" class="bg-primary text-white px-6 py-2 cursor-pointer transition duration-150 ease-in-out hover:opacity-90">
        <span>{{ currentLang === 'fr' ? 'RÉPONDRE' : 'RSVP' }}</span>
      </button> 
    </div>
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import { provide, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { Ref } from 'vue';

const curtainNavigation = ref<boolean>(false);

function goToLink(id) {
  curtainNavigation.value = false;
  const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
            behavior: 'smooth',
        });
    }
}

const route = useRoute();
const router = useRouter();

const currentLang = ref('fr');

function toggleLangage() {
  if(currentLang.value === 'fr') {
    currentLang.value = 'en';
  } else {
    currentLang.value = 'fr';
  }
  router.replace(({
        path: route.path,
        query: {
          lang: currentLang.value
        }
      }));
}

provide<Ref<string>>('currentLang', currentLang);
</script>

<style>

.line {
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  transition: transform 0.3S ease-in-out,
    opacity 0.1s;
}

.nav-toggler {
  display: none;
}

.nav-links-curtain {
  display: none;
}

.l1 {
  transform: translateY(-10px);
}

.l3 {
  transform: translateY(10px);
}

.nav-toggler.active .l1 {
  opacity: 0;
}

.nav-toggler.active .l2 {
  transform: translateY(0px) rotate(135deg)
}

.nav-toggler.active .l3 {
  transform: translateY(0px) rotate(-135deg)
}

@media (max-width: 1100px) {
  .nav-links {
    display: none;
  }

  .nav-links-curtain {
    position: absolute;
    z-index: 10;
    top: -1px;
    width: 100%;
    min-height: 80vh;
    padding-block: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    background: #163e3a;
    border-bottom: 2px solid white;
    transform: translateY(-100%);
    transition: transform 0.3s cubic-bezier(0.73, 0.11, 0.67, 0.84);
  }

  .nav-links-curtain.active {
    transform: translateY(0);
  }

  .nav-toggler {
    display: block;
    position: absolute;
    z-index: 101;
    top: 20px;
    left: 30px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
  }

  #btn-nav-demo {
    display: none;
  }
}
</style>