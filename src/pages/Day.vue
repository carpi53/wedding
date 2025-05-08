<template>
  <section id="day" class="bg-background min-h-screen p-[40px] text-primary">
    <RouterLink :to="{ path: '/', hash: '#schedule' }">
      <span class="text-center underline">< Retour</span>
    </RouterLink>
    <div class="mx-auto max-w-4xl text-center leading-10">
      <h3 class="mt-6 text-primary font-extrabold tracking-widest text-3xl uppercase">{{ currentLang === 'fr' ? `Jour ${day}` : `Day ${day}` }}</h3>
      <template v-if="day === '1'">
        <p class="mt-8 text-primary font-medium text-lg uppercase">22/02/2026 - {{ currentLang === 'fr' ? 'Cérémonie Traditionnelle Tamoule' : 'Traditional Tamil Ceremony' }}</p>
        <ul class="mt-4 w-lg text-center w-full max-w-[500px] mx-auto">
          <li class="mt-2">📍 <span class="font-semibold">{{ currentLang === 'fr' ? 'Lieu' : 'Location' }}</span> : Temple tamoul</li>
          <li class="mt-2">🕑 <span class="font-semibold">{{ currentLang === 'fr' ? 'Heure : ' : 'Time : ' }}</span>{{ currentLang === 'fr' ? '10h00 – 14h00' : '10am – 02pm' }}</li>
          <li class="mt-2">👕 <span class="font-semibold">{{ currentLang === 'fr' ? 'Code vestimentaire : ' : 'Dress code :' }}</span> {{ currentLang === 'fr' ? 'Tenue traditionnelle tamoule. Pour celles/ceux qui optent pour une tenue occidentale, merci de vous assurer que c’est décent et approprié.' : 'Traditional Tamil attire. For those choosing Western clothing, please ensure it is modest and appropriate.' }}</li>
        </ul>
      </template>
      <template v-if="day === '2'">
        <p class="mt-10 text-primary font-medium text-lg uppercase">23/02/2026 - {{ currentLang === 'fr' ? 'Cérémonie Laïque et Réception' : 'Secular ceremony' }}</p>
        <ul class="mt-4 w-lg text-center w-full max-w-[500px] mx-auto">
          <li class="mt-2">📍 <span class="font-semibold">{{ currentLang === 'fr' ? 'Lieu' : 'Location' }}</span> : {{ currentLang === 'fr' ? 'Encore à définir' : 'coming soon' }}</li>
          <li class="mt-2">🕑 <span class="font-semibold">{{ currentLang === 'fr' ? 'Heure : ' : 'Time : ' }}</span>{{ currentLang === 'fr' ? '18h00 – 23h00' : '06pm – 11pm' }}</li>
          <li class="mt-2">👕 <span class="font-semibold">{{ currentLang === 'fr' ? 'Code vestimentaire : ' : 'Dress code :' }}</span> {{ currentLang === 'fr' ? 'Élegant' : 'Elegant attire' }}</li>
        </ul>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { inject, ref } from 'vue';

const route = useRoute();
const day = ref<number>(route.params.id ?? 1);
const currentLang = inject<Ref<string>>('currentLang');

</script>

