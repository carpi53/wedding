<template>
  <section id="home" class="pt-14 px-6 pb-6 md:pt-[60px] bg-background md:h-screen">
    <div class="mx-auto text-center">
      <h2 class="title text-clamp-6xl font-extralight tracking-widest text-primary">Yoginee & Adrien</h2>
      <p class="subtitle mt-4 text-clamp-2xl text-primary">{{ currentLang === 'fr' ? 'se marient' : 'are getting married' }}</p>
      <img src="/us.webp" class="illustration h-[400px] mx-auto mt-4 object-cover object-center rounded-xl shadow-2xl 2xl:h-[500px]">
      <p class="date mt-8 text-primary font-extrabold tracking-widest text-clamp-3xl">{{ currentLang === 'fr' ? 'LE 22 FÉVRIER 2026' : 'FEBRUARY 22, 2026' }}</p>
      <div class="date mt-4 text-primary font-medium tracking-widest text-clamp-xl">
        <p v-if="timeLeft">{{ timeLeft.days }}{{ currentLang === 'fr' ? ' Jours' : ' Days' }} - {{ timeLeft.hours }}h {{ timeLeft.minutes }}m {{ timeLeft.seconds }}s</p>
        <p v-else>🎉 {{ currentLang === 'fr' ? ' Le grand jour est arrivé!' : 'The day has arrived!' }}</p>
      </div>
      <p class="lieu mt-4 text-clamp-2xl text-primary">{{ currentLang === 'fr' ? 'à l\'île Maurice' : 'in Mauritius' }}</p>
    </div>
    <!-- <img src="/mauritius.jpeg" class="shape absolute bottom-0 right-0 w-[300px]"> -->
  </section>
  <section class="parallax w-full h-[500px] bg-slate-200">
  </section>
  <section id="localisation" class="bg-white p-[60px] text-primary">
    <div class="mx-auto max-w-2xl text-center leading-10">
      <img src="/mauritius.jpeg" class="shape w-[300px] mx-auto">
      <h3 class="mt-6 text-primary font-extrabold tracking-widest text-3xl uppercase">{{ currentLang === 'fr' ? 'Ile Maurice' : 'Mauritius' }}</h3>
      <div class="mt-6">
        <iframe class="w-full h-64" src="https://maps.google.com/maps?q=ile%20maurice&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
      </div>
    </div>
  </section>
  <section id="schedule" class="bg-background p-[40px] text-primary">
    <div class="mx-auto max-w-2xl text-center leading-10">
      <img src="/flower.avif" class="w-[100px] mx-auto">
      <h3 class="mt-6 text-primary font-extrabold tracking-widest text-3xl uppercase">{{ currentLang === 'fr' ? 'Programme' : 'Schedule' }}</h3>
      <p class="mt-10 text-primary font-medium text-lg uppercase">{{ currentLang === 'fr' ? 'Jour 1 (22/02/2026) – Cérémonie Traditionnelle Tamoule' : 'Day 1 – Traditional Tamil Ceremony' }}</p>
      <ul class="mt-4 w-lg text-center w-full max-w-[500px] mx-auto">
        <li class="mt-2">📍 <strong>{{ currentLang === 'fr' ? 'Location' : 'Lieu' }}</strong> : Temple tamoul</li>
        <li class="mt-2">🕑 <strong>{{ currentLang === 'fr' ? 'Heure : ' : 'Time : ' }}</strong>{{ currentLang === 'fr' ? '10h00 – 14h00' : '10am – 02pm' }}</li>
        <li class="mt-2">👕 <strong>{{ currentLang === 'fr' ? 'Code vestimentaire : ' : 'Dress code :' }}</strong> {{ currentLang === 'fr' ? 'Tenue traditionnelle tamoule. Pour celles/ceux qui optent pour une tenue occidentale, merci de vous assurer que c’est décent et approprié.' : 'Traditional Tamil attire. For those choosing Western clothing, please ensure it is modest and appropriate.' }}</li>
      </ul>
    </div>
  </section>
  <section id="rsvp" class="p-8 bg-background border-t border-primary/20">
    <h3 class="mt-6 text-center text-primary font-extrabold tracking-widest text-3xl uppercase">{{ currentLang === 'fr' ? 'Répondre' : 'Rsvp' }}</h3>
    <div class="mx-auto max-w-2xl text-center text-primary leading-10">
      <p class="mt-6">{{ currentLang === 'fr' ? 'Nous avons hâte de vivre cette aventure avec vous !' : 'We can’t wait to celebrate this adventure with you!' }}</p>
      <p>{{ currentLang === 'fr' ? 'Pensez à nous confirmer votre présence avant' : 'Please RSVP' }}<strong> {{ currentLang === 'fr' ? ' le 30 juin 2025' : ' by June 30, 2025' }}</strong></p>
    </div>
    <form @submit.prevent="submitForm" class="space-y-4 p-6 rounded max-w-lg mx-auto">
      <InputText name="fullName" :label="currentLang === 'fr' ? 'Nom' : 'Full Name'" type="text" v-model="form.name" />
      <InputText name="email" label="Email" type="text" v-model="form.email" />
      <div class="flex gap-3">
        <div class="flex h-6 shrink-0 items-center">
          <div class="group grid size-4 grid-cols-1">
            <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" v-model="form.is_present" class="cursor-pointer col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-primary checked:bg-primary indeterminate:border-primary indeterminate:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" />
            <svg class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25" viewBox="0 0 14 14" fill="none">
              <path class="opacity-0 group-has-[:checked]:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path class="opacity-0 group-has-[:indeterminate]:opacity-100" d="M3 7H11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
        <div class="text-sm/6">
          <label for="comments" class="font-medium text-primary cursor-pointer">{{ currentLang === 'fr' ? ' Je serai présent' : ' I will be present' }}</label>
        </div>
      </div>
      <InputText v-if="form.is_present" name="email" :label="currentLang === 'fr' ? 'Nombre de personnes' : 'Number of people'" type="number" v-model="form.participants" />
      <InputText name="message" label="Message" type="textarea" v-model="form.message" />
      <button type="submit" class="bg-primary text-white px-4 py-2 flex items-center justify-center block mx-auto">
        <svg v-if="loading" class="mr-3 -ml-1 size-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
        {{ currentLang === 'fr' ? 'Envoyer' : 'Send' }}
      </button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { reactive, onMounted, onUnmounted } from 'vue';
import { inject, ref } from 'vue';
import { useRoute } from 'vue-router';
import InputText from '../components/InputText.vue';

const route = useRoute();
const lang = route.query.lang as string | undefined;

const loading = ref(false);

const currentLang = inject<Ref<boolean>>('currentLang');

if (lang && (lang === 'fr' || lang === 'en') && currentLang) {
    currentLang.value = lang;
}

const form = reactive({
  email: '',
  name: '',
  message: '',
  is_present: false,
  participants: 0,
});

function submitForm() {
loading.value = true;
debugger;
fetch(`https://script.google.com/macros/s/AKfycbyq1wf8tIfzY5d1RISxcktg9bOr0K1xeYgdz6_Aa47ZvrW99B1gSdEgl1L9EWwgWbURww/exec?path=Sheet1&Name=${form.name}&Email=${form.email}&Present=${form.is_present ? 'Oui' : 'Non'}&NumberOfParticipants=${form.participants}&Message=${form.message}`, {
  method: "GET",
})
  .then(response => {
    if(response.ok){
      loading.value = false;
      alert("Merci pour votre réponse !");
    }
  })
  .catch(err => {
    loading.value = false;
    console.error("Erreur : ", err);
    alert("Erreur lors de l'envoi du formulaire.");
  });
}

const targetDate = new Date('2026-02-22T00:00:00');
const timeLeft = ref(null);
let intervalId;

function calculateTimeLeft() {
  const now = new Date();
  const distance = targetDate - now;

  if (distance <= 0) {
    timeLeft.value = null;
    clearInterval(intervalId);
    return;
  }

  timeLeft.value = {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  }
}

onMounted(() => {
  calculateTimeLeft()
  intervalId = setInterval(calculateTimeLeft, 1000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<style>
.shape {
  clip-path: circle(42%);
}

.parallax {
  background: no-repeat url("/nousdeux.webp");
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.title {
  opacity: 0;
  transform: translateY(-50px);
  animation: apparition 0.8s 0.1s ease-out forwards;
}

.subtitle {
  opacity: 0;
  transform: translateY(-30px);
  animation: apparition 0.8s 0.2s ease-out forwards;
}

.illustration {
  opacity: 0;
  transform: translateX(-100%);
  animation: apparition 0.8s 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
}

.date {
  opacity: 0;
  transform: translateY(40px);
  animation: apparition 0.8s 1.3s ease-out forwards;
}

.lieu {
  opacity: 0;
  transform: translateY(40px);
  animation: apparition 0.8s 1.4s ease-out forwards;
}

nav li::after {
  content: "";
  display: block;
  width: 30%;
  height: 1px;
  background: #163e3a;
  transition: width 0.2s ease-in-out;
}

nav li:hover::after {
  width: 80%;
  background: black;
}
</style>
