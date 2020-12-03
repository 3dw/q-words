<template>
  <q-page padding>
    <q-toolbar>
      <q-toolbar-title>
        {{$t('pair_note')}}
      </q-toolbar-title>
    </q-toolbar>
    <q-toolbar v-if="human_vs_bot">
      <q-avatar>
        <img src="../assets/john.png">
      </q-avatar>
      <q-linear-progress stripe rounded style="height: 25px" :value="progress" class="q-mt-md" :color="progress > 0.62 ? 'red' : 'blue'"/>
    </q-toolbar>
    <div class="q-pa-md">
      <div class="row">
        <div class="col" @click="check()" @touchstart="check()">
          <q-card style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)" class="text-white my-card">
            <div class="content" v-if = "fishs1[0]" v-show="!hard">
              <span class="big header">{{fishs1[Math.floor(a) % fishs1.length].name}}</span>
            </div>
          </q-card>
        </div>
        <div class="col" @click="check()" @touchstart="check()">
          <q-card style="background: radial-gradient(circle, #35a2ff 0%, #393 100%)" class="text-white my-card">
            <div class="content" v-if = "fishs1[0]">
              <span class="big header">{{fishs1[b].name}}</span>
            </div>
          </q-card>
        </div>
      </div>
    </div>
    <q-select color="purple-12" v-model="speed" :options="options" :label="$t('speed')" />
    <win v-show="winning" ></win>
    <john-win v-show="loosing" ></john-win>
  </q-page>
</template>

<script>

import win from '../components/win'
import johnWin from '../components/john_win'

export default {
  name: 'pair',
  props: [ 'card_list', 'human_vs_bot', 'bot_level' ],
  components: { win, johnWin },
  data () {
    return {
      fishs1: [],
      loosing: false,
      progress: 0.1,
      a: 0,
      b: 0,
      winning: true,
      speed: 0.25,
      hard: false,
      record: false,
      good: 0,
      bad: 0,
      options: [0.1, 0.25, 0.5, 1]
    }
  },
  methods: {
    go: function () {
      if (!this.winning) {
        this.a += Number(this.speed)
        this.progress += (this.bot_level / 200)
        var ma = Math.floor(this.a) % this.fishs1.length
        if (this.progress >= 1 && this.fishs1[ma].name === this.fishs1[this.b].name && this.human_vs_bot) {
          this.loose()
        }
      }
    },
    check: function () {
      // console.log('a')
      var ma = Math.floor(this.a) % this.fishs1.length
      if (this.fishs1[ma].name === this.fishs1[this.b].name) {
        this.win()
      } else {
        this.bad++
      }
    },
    reset: function () {
      this.fishs1 = this.card_list.filter(function (o) { return o && !o.hide }).slice().sort(function () {
        return Math.random() - 0.5
      }).slice(0, 4)
      this.b = Math.floor(Math.random() * this.fishs1.length)
      this.winning = false
      this.loosing = false
      this.progress = 0
      this.$emit('johnSay', 'Be relexed...')
    },
    win: function () {
      this.winning++
      this.good++
      this.$emit('johnSay', 'You win!')
      setTimeout(this.reset, 2000)
    },
    loose: function () {
      this.loosing = true
      this.$emit('johnSay', 'I win!')
      setTimeout(this.reset, 2000)
    }
  },
  mounted () {
    setInterval(this.go, 500)
    this.reset()
    window.addEventListener('keydown', this.check)
  }
}
</script>

<style>

.big.header {
  display: block;
  font-weight: bold;
  font-size: 33vmin;
  margin: auto auto;
  text-align: center;
}

img {
  width: 100%;
}

.my-card {
  width: 100%;
  height: 45vmax;
  max-width: 250px;
  padding: 5px;
  cursor: pointer;
}
</style>
