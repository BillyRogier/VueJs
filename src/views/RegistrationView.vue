<script lang="ts">
import { defineComponent, reactive } from 'vue'
import type { RegistrationForm } from '../models/product'

export default defineComponent({
  name: 'FormulaireInscription',
  setup() {
    const form: RegistrationForm = reactive({
      nom: '',
      prenom: '',
      email: '',
      sexe: '',
      adresse: '',
      codePostal: '',
      ville: '',
      institut: '',
    })

    const errors = reactive({
      nom: '',
      prenom: '',
      email: '',
      sexe: '',
      adresse: '',
      codePostal: '',
      ville: '',
      institut: '',
    })

    const isFormSubmitted = reactive({ value: false })

    const validateForm = () => {
      errors.nom = form.nom ? '' : 'Le nom est requis.'
      errors.prenom = form.prenom ? '' : 'Le prénom est requis.'
      errors.email = form.email ? '' : "L'email est requis."
      errors.sexe = form.sexe ? '' : 'Le sexe est requis.'
      errors.adresse = form.adresse ? '' : "L'adresse est requise."
      errors.codePostal = form.codePostal ? '' : 'Le code postal est requis.'
      errors.ville = form.ville ? '' : 'La ville est requise.'
      errors.institut = form.institut ? '' : "Le nom de l'institut est requis."
    }

    const handleSubmit = () => {
      validateForm()

      if (Object.values(errors).every((error) => error === '')) {
        isFormSubmitted.value = true
      } else {
        isFormSubmitted.value = false
      }
    }

    const resetForm = () => {
      form.nom = ''
      form.prenom = ''
      form.email = ''
      form.sexe = ''
      form.adresse = ''
      form.codePostal = ''
      form.ville = ''
      form.institut = ''

      errors.nom = ''
      errors.prenom = ''
      errors.email = ''
      errors.sexe = ''
      errors.adresse = ''
      errors.codePostal = ''
      errors.ville = ''
      errors.institut = ''

      isFormSubmitted.value = false
    }

    return {
      form,
      errors,
      isFormSubmitted,
      handleSubmit,
      resetForm,
    }
  },
})
</script>
<template>
  <div class="form-container">
    <form @submit.prevent="handleSubmit" class="form">
      <div class="form-row">
        <div class="form-group">
          <label for="nom">Nom</label>
          <input v-model="form.nom" id="nom" type="text" placeholder="Votre nom" />
          <p v-if="errors.nom" class="error">{{ errors.nom }}</p>
        </div>
        <div class="form-group">
          <label for="prenom">Prénom</label>
          <input v-model="form.prenom" id="prenom" type="text" placeholder="Votre prénom" />
          <p v-if="errors.prenom" class="error">{{ errors.prenom }}</p>
        </div>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="form.email" id="email" type="email" placeholder="Votre email" />
        <p v-if="errors.email" class="error">{{ errors.email }}</p>
      </div>

      <div class="form-group">
        <label for="sexe">Sexe</label>
        <div class="radio-group">
          <label> <input type="radio" value="Homme" v-model="form.sexe" /> Homme </label>
          <label> <input type="radio" value="Femme" v-model="form.sexe" /> Femme </label>
        </div>
        <p v-if="errors.sexe" class="error">{{ errors.sexe }}</p>
      </div>

      <div class="form-group">
        <label for="adresse">Adresse</label>
        <input v-model="form.adresse" id="adresse" type="text" placeholder="Votre adresse" />
        <p v-if="errors.adresse" class="error">{{ errors.adresse }}</p>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="codePostal">Code Postal</label>
          <input v-model="form.codePostal" id="codePostal" type="text" placeholder="Code postal" />
          <p v-if="errors.codePostal" class="error">{{ errors.codePostal }}</p>
        </div>
        <div class="form-group">
          <label for="ville">Ville</label>
          <input v-model="form.ville" id="ville" type="text" placeholder="Ville" />
          <p v-if="errors.ville" class="error">{{ errors.ville }}</p>
        </div>
      </div>

      <div class="form-group">
        <label for="institut">Institut</label>
        <input v-model="form.institut" id="institut" type="text" placeholder="Nom de l'institut" />
        <p v-if="errors.institut" class="error">{{ errors.institut }}</p>
      </div>

      <div class="form-buttons">
        <button type="submit" class="btn submit-btn">Envoyer</button>
        <button type="button" @click="resetForm" class="btn cancel-btn">Annuler</button>
      </div>
    </form>

    <div v-if="isFormSubmitted.value" class="form-success">
      <h2>Formulaire soumis avec succès!</h2>
      <pre>{{ form }}</pre>
    </div>
  </div>
</template>

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  background-color: #f0f2f5;
  padding: 20px;
}

.form {
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
}

.form-row {
  display: flex;
  gap: 20px;
}

.form-group {
  margin-bottom: 20px;
  width: 100%;
}

label {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  display: block;
}

input {
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
}

input:focus {
  outline: none;
  border-color: #4caf50;
}

.error {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}

.radio-group {
  display: flex;
}

.radio-group label {
  margin-right: 20px;
  font-size: 14px;
}

.form-buttons {
  display: flex;
  justify-content: space-between;
}

.btn {
  padding: 12px 25px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 48%;
}

.submit-btn {
  background-color: #4caf50;
  color: white;
}

.submit-btn:hover {
  background-color: #45a049;
}

.cancel-btn {
  background-color: #f44336;
  color: white;
}

.cancel-btn:hover {
  background-color: #e53935;
}

.form-success {
  text-align: center;
  margin-top: 20px;
}

.form-success h2 {
  color: #4caf50;
  font-size: 20px;
}

pre {
  background-color: #f1f1f1;
  padding: 15px;
  border-radius: 5px;
  font-size: 14px;
  word-wrap: break-word;
  white-space: pre-wrap;
}
</style>
