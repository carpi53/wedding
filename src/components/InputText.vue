<template>
  <div class="input-group fade">
    <label :for="name" :class="{ redLabel: errorMessage }">{{ label }}</label>
    <p class="error-message" v-if="errorMessage">
      {{ errorMessage }}
    </p>
    <input v-if="type === 'text'" class="input-text" :type="type" :name="name" :id="name" rows="3" autocomplete="off" :class="{ redInput: errorMessage }" v-model="content"
      @input="resetError" />

    <textarea
      v-if="type === 'textarea'"
      id="textarea"
      data-type="textarea"
      rows="3"
      v-model="content"
      class="block w-full text-base text-primary rounded-xl px-3 py-2 border border-primary placeholder:text-neutral-400 focus:outline-none  focus:border-primary-700 sm:text-sm sm:leading-6 disabled:bg-slate-100 disabled:text-slate-500"
      :class="{ 'border-red-600': errorMessage }"
    />

    <input v-if="type === 'number'" class="input-text" :type="type" :name="name" :id="name" rows="3" autocomplete="off" :class="{ redInput: errorMessage }" v-model="content"
        @input="resetError" />
  </div>
</template>

<script lang="ts" setup>
import { Validity } from '~/utils/interfaces';

const content = defineModel<String>()
const emit = defineEmits<{
  resetError: [value: keyof Validity]
}>()
const props = defineProps({
  name: String,
  label: String,
  errorMessage: String,
  type: String,
})

function resetError() {
  if (typeof props.name != "undefined") {
    emit("resetError", props.name as keyof Validity);
  }
}
</script>

<style>
.input-group {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
}

label {
  display: inline-block;
  font-size: 1rem;
  font-weight: 400;
  color: #163e3a;
  margin-bottom: 6px;
}

.input-text {
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  color: #163e3a;
  padding: 10px;
  border-radius: 12px;
  border: 1px solid #163e3a;
  outline: 0;
  background-color: white;
}

.error-message {
  position: absolute;
  top: 5px;
  right: 0;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.6rem;
  letter-spacing: -0.214286px;
  color: #cd2c2c;
}

.redLabel {
  color: #cd2c2c;
}

.redInput {
  border: 1px solid #cd2c2c;
}
</style>
