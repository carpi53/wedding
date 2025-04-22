<template>
  <div class="p-8">
    <h2 class="text-2xl font-bold text-teal-700">💌 RSVP</h2>
    <form @submit.prevent="submitForm" class="space-y-4 bg-white p-6 shadow rounded max-w-lg mx-auto">
      <input v-model="form.nom" type="text" placeholder="Nom" class="w-full border p-2 rounded" required />
      <input v-model="form.prenom" type="text" placeholder="Prénom" class="w-full border p-2 rounded" required />
      <input v-model="form.email" type="email" placeholder="Email" class="w-full border p-2 rounded" required />
      <select v-model="form.presence" class="w-full border p-2 rounded">
        <option value="">Présence</option>
        <option value="oui">Je serai présent(e)</option>
        <option value="non">Je ne pourrai pas venir</option>
      </select>
      <input v-model="form.accompagnants" type="number" min="0" placeholder="Nombre d'accompagnants" class="w-full border p-2 rounded" />
      <textarea v-model="form.message" placeholder="Message (régime, allergies...)" class="w-full border p-2 rounded"></textarea>
      <button type="submit" class="bg-teal-600 text-white px-4 py-2 rounded">Envoyer</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  nom: '',
  prenom: '',
  email: '',
  presence: '',
  accompagnants: 0,
  message: '',
})

function submitForm() {
  fetch('http://localhost:3000/api/rsvp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form)
  })
    .then(res => res.json())
    .then(data => {
      alert("Merci pour votre réponse ❤️")
    })
    .catch(err => {
      alert("Erreur lors de l'envoi du formulaire.")
    })
}
</script>
