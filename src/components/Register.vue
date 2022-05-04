<script>
export default {
  data() {
    return {
      user: "",
    };
  },
  methods: {
    tjena() {
      console.log(this.user);
    },
  },
};
</script>

<template>
  <div class="wrapper">
    <div>
      <p>Registrera en användare:</p>
      <input type="text" v-model="user" @input="tjena" />
    </div>
    <div>
      <p>Ladda upp en bild:</p>
      <input type="button" value="Bläddra" />
    </div>
  </div>
</template>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
