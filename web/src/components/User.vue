<template>
  <div>
    <h1>User</h1>
    <p>uid={{ uid }}, {{ nationality }}</p>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: {
    uid: {
      type: Number,
      required: true
    },
    nationality: {
      type: String,
      required: true
    }
  }
}
</script>
