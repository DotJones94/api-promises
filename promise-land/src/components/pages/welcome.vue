<template>
  <div class="d-flex flex-column justify-center align-center h-100">
    <h1 class="heading-one mb-5">Welcome</h1>
    <h2 class="heading-two mb-10">Let’s find you the perfect cocktail!</h2>
    <main-button>Let's Go</main-button>
    <v-img
        class="bg-white"
        width="300"
        :aspect-ratio="1"
        src="@/assets/girls-welcome.png"
        cover
    ></v-img>
  </div>
</template>

<script>
import MainButton from "@/components/global/main-button.vue";

export default {
  name: "welcome",
  components: {MainButton}
}
</script>

<style scoped>

</style>