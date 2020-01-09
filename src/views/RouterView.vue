<template>
  <div>
    <router-link :to="'/' + $i18n.locale + '/home'">
      {{ $t('home') }}
    </router-link>|
    <router-link :to="'/' + $i18n.locale + '/about'">
      {{ $t('about') }}
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {
  },
  created () {
    console.log('hello')
  }
}
</script>