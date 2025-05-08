<template>
  <section id="usefulTip" class="bg-background min-h-screen p-[40px] text-primary">
    <RouterLink :to="{ path: '/' }">
      <span class="text-center underline">< Retour</span>
    </RouterLink>
    <div class="mx-auto max-w-4xl leading-6">
      <h3 class="mt-6 text-center font-extrabold tracking-widest text-3xl uppercase">{{ currentLang === 'fr' ? `Voyage : Info Pratique` : `Travel: Usefull Tips` }}</h3>
      <h4 class="mt-4 font-semibold tracking-widest text-xl">{{ currentLang === 'fr' ? `Vols` : `Flights` }}</h4>
      <p v-if="currentLang === 'fr'" class="mt-4">
        
      </p>
      <p v-else class="mt-4">
        Fly into <strong>Sir Seewoosagur Ramgoolam International Airport (MRU)</strong>. We recommend booking early. Emirates, Air Mauritius, and Turkish Airlines offer smooth connections from most international hubs.
        <br />
        <span class="italic">Adrien’s Travel tip: </span> Check out <a href="http://www.googleflights.com">Google Flights</a> regularly to spot the best travel fare early.
      </p>
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

