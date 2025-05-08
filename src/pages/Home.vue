<template>
  <section id="home" class="home bg-[url(/wedding5.JPG)] relative bg-no-repeat bg-cover text-amber-50 pt-28 px-6 pb-6 md:pt-[60px] h-screen md:min-h-[800px] bg-center md:bg-[url(/wedding1.JPG)]">
    <div class="whitespace-nowrap h-full text-center flex flex-col md:h-fit md:absolute md:right-1/3 md:translate-x-1/2 md:-translate-y-1/2 md:top-1/2">
      <h2 class="title text-clamp-7xl font-extralight">Yoginee & Adrien</h2>
      <p class="subtitle mt-2 font-extralight text-clamp-5xl">{{ currentLang === 'fr' ? 'se marient' : 'are getting married' }}</p>
      <div class="w-0.5 bg-amber-50 h-28 mx-auto my-4 rounded-full "></div>
      <p class="date mt-auto font-extrabold tracking-widest text-clamp-3xl">{{ currentLang === 'fr' ? 'LE 22 FÉVRIER 2026' : 'FEBRUARY 22, 2026' }}</p>
      <div class="w-fit mx-auto date mt-4 font-medium tracking-widest text-clamp-xl border-2 border-amber-50 rounded-md p-2">
        <p v-if="timeLeft">{{ timeLeft.days }}{{ currentLang === 'fr' ? ' Jours' : ' Days' }} - {{ timeLeft.hours }}h {{ timeLeft.minutes }}m {{ timeLeft.seconds }}s</p>
        <p v-else>🎉 {{ currentLang === 'fr' ? ' Le grand jour est arrivé!' : 'The day has arrived!' }}</p>
      </div>
      <p class="lieu mt-4 text-clamp-2xl">{{ currentLang === 'fr' ? 'à l\'île Maurice' : 'in Mauritius' }}</p>
    </div>
  </section>
  <section id="localisation" class="bg-white py-10 px-6 text-primary md:py-20">
    <div class="mx-auto md:max-w-2xl text-center leading-10">
      <h3 class="mt-6 text-primary font-extrabold tracking-widest text-3xl uppercase">{{ currentLang === 'fr' ? 'Ile Maurice' : 'Mauritius' }}</h3>
      <h3 class="mt-4 text-lg font-medium mb-2">{{ currentLang === 'fr' ? 'Maurice : L’île de la mariée… et votre prochain coup de cœur' : 'Mauritius: The Bride’s Island, and Your New Obsession' }}</h3>
      <p class="mt-6 text-left">
        {{ currentLang === 'fr' ? 'Bienvenue à l’île Maurice, terre natale de la mariée et petit coin de paradis tout droit sorti d’un rêve. Entre plages à couper le souffle, cuisine qui fait danser les papilles, et culture riche en couleurs et en sourires, cette île ne se visite pas… elle se vit. Et on vous prévient : vous n’êtes pas prêts pour les saveurs, les paysages, ni pour les festivités qui s’annoncent. Maurice vous attend, et la fête ne fait que commencer !' : 'Welcome to Mauritius, the bride’s beautiful birth island and soon to be your favorite place on Earth. With beaches so stunning they look filtered (they’re not), food that will ruin all other food for you, and a culture that dances between vibrant and heartfelt, this island is more than just a destination, it’s an experience. You’re not ready for the flavors, the sunsets, or the celebrations we have in store. Paradise is calling…and it’s wearing wedding shoes!' }}
      </p>
      <div class="mt-6">
        <iframe class="w-full h-64" src="https://maps.google.com/maps?q=ile%20maurice&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
      </div>
    </div>
  </section>
  <section class="h-screen relative pt-20">
    <video class="w-full h-full object-fit object-cover absolute top-0 left-0 -z-[10]" muted loop autoplay>
        <source src="/Maurice.mp4" type="video/mp4">
    </video>
    <h2 class="title text-clamp-7xl font-light text-amber-50 text-center">{{ currentLang === 'fr' ? 'Ce qui vous attend...' : 'What to expect...' }}</h2>
  </section>
  <section id="schedule" class="bg-white py-10 md:p-[40px] text-primary">
    <div class="mx-auto max-w-4xl text-center leading-10">
      <h3 class="mt-6 px-2 text-primary font-extrabold tracking-widest text-3xl uppercase">{{ currentLang === 'fr' ? 'Au programme' : 'Agenda' }}</h3>
      <p class="mt-6 px-2">⚠ {{ currentLang === 'fr' ? 'On ajoutera des infos au fur et à mesure, alors n’hésitez pas à repasser par ici pendant vos préparatifs.' : 'We’ll be updating the site as we go, so feel free to check back while you plan your trip.' }}</p>
      <div class="grid grid-cols-2 gap-2 px-2">
      <div>
        <p class="mt-8 text-primary font-medium text-lg uppercase"><span class="font-bold">{{ currentLang === 'fr' ? 'Jour 1' : 'Day 1' }}</span></p>
        <p class="mt-4 text-primary font-medium text-lg">{{ currentLang === 'fr' ? ' Cérémonie Tamoule' : ' Traditional Tamil Ceremony' }}</p>
        <ul class="mt-4 w-lg text-center w-full max-w-[500px] mx-auto">
          <li class="mt-2">📍 <span class="font-semibold">{{ currentLang === 'fr' ? 'Lieu' : 'Location' }}</span> : Temple tamoul</li>
          <li class="mt-2">{{ currentLang === 'fr' ? '10h00 – 14h00' : '10am – 02pm' }}</li>
        </ul>
        <RouterLink to="/day/1">
          <span class="text-center underline">En savoir plus</span>
        </RouterLink>
      </div>
      <div>
        <p class="mt-8 text-primary font-medium text-lg uppercase"><span class="font-bold">{{ currentLang === 'fr' ? 'Jour 2' : 'Day 2' }}</span></p>
        <p class="mt-4 text-primary font-medium text-lg">{{ currentLang === 'fr' ? ' Cérémonie Laïque et Réception' : ' Secular ceremony' }}</p>
        <ul class="mt-4 w-lg text-center w-full max-w-[500px] mx-auto">
          <li class="mt-2">📍 <span class="font-semibold">{{ currentLang === 'fr' ? 'Lieu' : 'Location' }}</span> : {{ currentLang === 'fr' ? 'Encore à définir' : 'coming soon' }}</li>
          <li class="mt-2">{{ currentLang === 'fr' ? '18h00 – 23h00' : '06pm – 11pm' }}</li>
        </ul>
        <RouterLink to="/day/2">
          <span class="text-center underline">En savoir plus</span>
        </RouterLink>
      </div>
    </div>
    </div>
  </section>
  <section id="rsvp" class="p-8 bg-background border-t border-primary/20">
    <h3 class="mt-6 text-center text-primary font-extrabold tracking-widest text-3xl uppercase">{{ currentLang === 'fr' ? 'Répondre' : 'Rsvp' }}</h3>
    <div class="mx-auto max-w-2xl leading-7 text-center text-primary md:leading-10">
      <p class="mt-6">{{ currentLang === 'fr' ? 'Nous avons hâte de vivre cette aventure avec vous !' : 'We can’t wait to celebrate this adventure with you!' }}</p>
      <p class="mt-4">{{ currentLang === 'fr' ? 'Pensez à nous confirmer votre présence avant' : 'Please RSVP' }}<strong> {{ currentLang === 'fr' ? ' le 30 juin 2025' : ' by June 30, 2025' }}</strong></p>
    </div>
    <form @submit.prevent="submitForm" class="space-y-4 rounded max-w-lg mx-auto mt-6">
      <InputText name="name" :label="currentLang === 'fr' ? 'Nom' : 'Full Name'" type="text" v-model="form.name" :errorMessage="errorMsg.name" @resetError="resetError"/>
      <InputText name="email" label="Email" type="text" v-model="form.email" :errorMessage="errorMsg.email" @resetError="resetError"/>
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
      <InputText v-if="form.is_present" name="numberOfParticipants" :label="currentLang === 'fr' ? 'Nombre de personnes' : 'Number of people'" type="number" v-model="form.participants" />
      <InputText name="message" label="Message" type="textarea" v-model="form.message" />
      <button type="submit" class="bg-primary text-white px-4 py-2 flex items-center justify-center block mx-auto">
        <svg v-if="loading" class="mr-3 -ml-1 size-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
        {{ currentLang === 'fr' ? 'Envoyer' : 'Send' }}
      </button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { reactive, onMounted, onUnmounted, Ref } from 'vue';
import { inject, ref } from 'vue';
import { useRoute } from 'vue-router';
import InputText from '../components/InputText.vue';

const route = useRoute();
const lang = route.query.lang as string | undefined;

const loading = ref(false);

const currentLang = inject<Ref<string>>('currentLang');

if (lang && (lang === 'fr' || lang === 'en') && currentLang) {
    currentLang.value = lang;
}

const errorMsg = reactive({
  name: "",
  email: "",
});

interface Validity {
    email: boolean;
    name: boolean;
}

const inputsValidity: Validity = {
  name: false,
  email: false,
};

const form = reactive({
  email: '',
  name: '',
  message: '',
  is_present: false,
  participants: 0,
});

function submitForm() {
  verifName(form.name);
  verifEmail(form.email);
  const keys = Object.keys(inputsValidity);
  const failedInput = keys.filter((key: string) => !inputsValidity[key as keyof Validity]);
  if (!failedInput.length) {
    loading.value = true;
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
}

function verifEmail(email: string) {
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    errorMsg.email = currentLang && currentLang.value === 'en' ? "email invalid" : "Votre email est invalide";
    inputsValidity.email = false;
    return false;
  }
  errorMsg.email = "";
  inputsValidity.email = true;
  return true;
}

function verifName(name: string) {
  if (name === "") {
    errorMsg.name = currentLang && currentLang.value === 'en' ? "empty field" : "Champ vide";
    inputsValidity.name = false;
    return false;
  }
  errorMsg.name = "";
  inputsValidity.name = true;
  return true;
}

function resetError(key: keyof Validity) {
  debugger;
  errorMsg[key] = "";
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

.home {
  font-family: 'Poppins';
}

.title {
  opacity: 0;
  transform: translateY(-50px);
  animation: apparition 0.8s 0.1s ease-out forwards;
  font-family: 'Dancing Script';
}

.subtitle {
  opacity: 0;
  transform: translateY(-30px);
  animation: apparition 0.8s 0.2s ease-out forwards;
  font-family: 'Dancing Script';
}

.illustration {
  opacity: 0;
  transform: translateX(-100%);
  animation: apparition 0.8s 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
}

.date {
  opacity: 0;
  transform: translateY(40px);
  animation: apparition 0.8s 0.8s ease-out forwards;
}

.lieu {
  opacity: 0;
  transform: translateY(40px);
  animation: apparition 0.8s 0.9s ease-out forwards;
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
