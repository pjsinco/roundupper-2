<script>
import { ref, toRefs } from 'vue';

export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },

  emits: ['update:title', 'update:text'],

  name: 'BlockGeneral',
};
</script>

<template lang="pug">
  div.row
    div.col-xs-12
      div.form-group
        label(for="blockGeneralTitle") Title
        input(type="text" id="blockGeneralTitle" @input="$emit('update:title', $event.target.value)").form-control

    div.col-xs-12
      div.form-group
        label(for="blockGeneralText") Text
        textarea(rows="3" id="blockGeneralText" @input="$emit('update:text', $event.target.value)" style="resize: vertical").form-control
</template>

<style scoped></style>
