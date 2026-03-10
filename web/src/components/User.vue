<template>
  <div>
    <h1>User</h1>
    <p>uid={{ safeUid }}, {{ safeNationality }}</p>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: {
    uid: {
      type: String,
      default: ''
    },
    nationality: {
      type: String,
      default: ''
    }
  },
  computed: {
    safeUid () {
      return /^\d+$/.test(this.uid) ? this.uid : ''
    },
    safeNationality () {
      return /^[a-z-]+$/i.test(this.nationality) ? this.nationality.toLowerCase() : ''
    }
  }
}
</script>
