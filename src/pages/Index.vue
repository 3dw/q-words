<template>
  <q-page class="flex flex-center">
    <img id = "logo" alt="Quasar logo" src="~assets/app-icon.png" @click="$router.push({ path: '/name' })" />
    <p>
    {{$t('intro_0')}}<br/>
    {{$t('intro_1')}}
    </p>
    <q-btn-group big push>
      <q-btn big push :label="$t('game')" icon="visibility" @click="$router.push({ path: '/pair' })" />
      <q-btn big push :label="$t('setting')" icon="settings" @click="$router.push({ path: '/edit' })"  />
      <!-- <q-btn big push type="a" href="https://ren-zi-you-xi.flycricket.io/?t=1589845222" target="_blank" label="安裝App" icon="phone" color="purple" /> -->
    </q-btn-group>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      langs: ['en-us', 'zh-TW']
    }
  }
}
</script>

<style scoped>
  p {
    padding: 1em;
    font-weight: bold;
    font-size: 18px;
  }

  #logo {
    width: 250px;
  }
</style>
