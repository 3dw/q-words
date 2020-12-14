<template>
  <q-page>
    <q-list bordered separator>
      <q-item>
    </q-item>
    <q-item>
        <q-item-section>
          <q-input v-model="name" :label="$t('insert_name')" />
        </q-item-section>
        <q-item-section>
          <q-btn color = "green" :disable="!name" @click="addCard(name); name = ''">
            {{$t('add')}}
          </q-btn>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple v-for="(c,idx) in card_list" v-bind:key="idx" :active="c.hide">
        <q-item-section>{{ c.name }}</q-item-section>
        <q-item-section>
          <q-btn color="red" @click="removeCard(idx)">
            {{$t('delete')}}
          </q-btn>
        </q-item-section>
        <!--
        <q-item-section>
          {{$t('hide')}}
          <q-toggle v-model="c.hide"/>
        </q-item-section> -->
      </q-item>
      <q-item>
        <q-item-section>
          {{ $t('importJSON') }}
        </q-item-section>
        <q-item-section>
          <input type="file" @change="importJSON" name="json" id="json" accept="application/json">
        </q-item-section>
      </q-item>
   <!--   <q-item>
        <q-item-section>
          <a href="http://elder.game.tw/#edit" target="_blank">
            {{ $t('genJSON') }}
          </a>
        </q-item-section>
      </q-item> -->
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'Edit',
  props: [ 'card_list' ],
  data () {
    return {
      url: '',
      hasImage: false,
      name: '',
      my_card_list: []
    }
  },
  methods: {
    addCard: function (name) {
      this.$emit('addCard', name)
      this.$forceUpdate()
    },
    removeCard: function (index) {
      this.$emit('removeCard', index)
    },
    hideShow: function (index, bool) {
      this.$emit('hideShow', index, bool)
    },
    exportCards: function () {
      var dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.card_list))
      var dlAnchorElem = document.getElementById('downloadAnchorElem')
      dlAnchorElem.setAttribute('href', dataStr)
      dlAnchorElem.setAttribute('download', 'card_list.json')
      dlAnchorElem.click()
    },
    importJSON: function (event) {
      var input = event.target
      if (input.files && input.files[0]) {
        var reader = new FileReader()
        reader.onload = (e) => {
          this.my_card_list = this.card_list.concat(JSON.parse(e.target.result))
          this.$emit('saveCards', this.my_card_list)
        }
        reader.readAsText(input.files[0])
      }
    }
  }
}
</script>

<style>
</style>
