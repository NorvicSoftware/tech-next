<template>
  <div>
    <h1>Person Details</h1>
    <div>
      <p><strong>ID:</strong> {{ person.id }}</p>
      <p><strong>Cédula:</strong> {{ person.ci }}</p>
      <p><strong>Nombre:</strong> {{ person.first_name }}</p>
      <p><strong>Apellido Paterno:</strong> {{ person.paternal_surname }}</p>
      <p><strong>Apellido Materno:</strong> {{ person.maternal_surname }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    person: Object,
  },
};
</script>
