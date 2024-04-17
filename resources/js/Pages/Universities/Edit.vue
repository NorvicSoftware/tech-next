<template>
    <div>
      <h1>Edit University</h1>
      <form @submit.prevent="updateUniversity">
        <input v-model="form.name" type="text" placeholder="Name" required>
        <input v-model="form.phone" type="text" placeholder="Phone">
        <input v-model="form.address" type="text" placeholder="Address">
        <button type="submit">Update</button>
        <button @click="cancelEdit">Cancel</button>
      </form>
    </div>
  </template>
  
  <script>
  import { usePage } from '@inertiajs/inertia-vue3';
  
  export default {
    props: {
      university: Object,
    },
    setup(props) {
      const { data, put, url } = usePage().props;

      const form = {
        name: props.university.name,
        phone: props.university.phone,
        address: props.university.address,
      };

      const updateUniversity = async () => {
        await put(url.update, form);
      };

      const cancelEdit = () => {

        window.history.back();
      };
  
      return {
        form,
        updateUniversity,
        cancelEdit,
      };
    },
  };
  </script>
  