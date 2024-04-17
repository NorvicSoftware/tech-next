<template>
    <div>
      <h1>Delete University</h1>
      <p>Are you sure you want to delete {{ university.name }}?</p>
      <button @click="deleteUniversity">Delete</button>
      <button @click="cancelDelete">Cancel</button>
    </div>
  </template>
  
  <script>
  import { usePage } from '@inertiajs/inertia-vue3';
  
  export default {
    props: {
      university: Object,
    },
    setup(props) {
      const { delete: deleteRequest, url } = usePage().props;

      const deleteUniversity = async () => {
        await deleteRequest(url.delete);
      };

      const cancelDelete = () => {
        window.history.back();
      };
  
      return {
        deleteUniversity,
        cancelDelete,
      };
    },
  };
  </script>
  