<template>
  <div>
<!--    Banner-->
    <v-banner
        color="pink-darken-1"
        icon="mdi-account-box"
        lines="two"
    >
      <template v-slot:prepend>
        <v-avatar></v-avatar>
      </template>

      <v-banner-text>
        Banner with two lines of text. If the text is too long to fit on two lines then an ellipsis will be used to hide the remaining content. So this next line will be hidden.
      </v-banner-text>

      <v-banner-actions>
        <v-btn>Action Button</v-btn>
      </v-banner-actions>
    </v-banner>

<!--    Card-->
    <v-card
        class="mx-auto"
        max-width="344"
    >
      <v-card-text>
        <div>Word of the Day</div>
        <p class="text-h4 text--primary">
          el·ee·mos·y·nar·y
        </p>
        <p>adjective</p>
        <div class="text--primary">
          relating to or dependent on charity; charitable.<br>
          "an eleemosynary educational institution."
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn
            variant="text"
            color="teal-accent-4"
            @click="reveal = true"
        >
          Learn More
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <v-card
            v-if="reveal"
            class="transition-fast-in-fast-out v-card--reveal"
            style="height: 100%;"
        >
          <v-card-text class="pb-0">
            <p class="text-h4 text--primary">
              Origin
            </p>
            <p>late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’ </p>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn
                variant="text"
                color="teal-accent-4"
                @click="reveal = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-expand-transition>
    </v-card>

<!--    Select-->
    <v-select
        v-model="value"
        :items="items"
        label="Chips"
        multiple
    ></v-select>
  </div>

</template>

<script>
export default {
  name: "vuetify-test",
  data: () => ({
    items: ['foo', 'bar', 'fizz', 'buzz'],
    value: ['foo', 'bar', 'fizz', 'buzz'],
  }),
}
</script>

<style scoped>

</style>