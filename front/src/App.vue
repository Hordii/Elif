<template lang="pug">
 v-app
    h1.text-center HotDogs
    List
    Form
</template>

<script>

import List from "./components/List";
import Form from "./components/Form";


export default {
  name: 'App',
  components: {
      Form,
      List,
  },
  data: () => ({
  }),
};
</script>

