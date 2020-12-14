<template>
  <q-page>
    <div class = "info" v-show = "!start">
      <h3>打字消方塊遊戲</h3>
      <p>打字可以消去掉落的方塊</p>
      <p>如果方塊疊滿就輸了</p>
      <q-btn :size = "'xl'" color = "primary" @click = "start = true">{{$t('start')}}</q-btn>
    </div>
    <div v-show = "start">
      <div class="block" v-for="(item, idx) in items" :key = "idx" :style = "{left: item.x + 'px', top: 100 + item.y + 'px', 'background-color': item.bg}">
          <span>{{ item.w }}</span>
      </div>
    </div>
    <div v-show = "start">
      <q-input filled bottom-slots :autofocus="true" name="" v-model="hit" :label="$t('Type and Shoot')" @keydown.enter = "fire(hit)"/>
      <q-btn color = "primary" @click = "fire(hit)">{{$t('Shoot')}}! 目前 {{ score }} 分</q-btn>
      <q-btn color = "secondary" v-show="die" @click = "reset()"> 重來! </q-btn>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Block',
  data () {
    return {
      hit: '',
      items: [],
      // words: ['大', '中', '小', '太', '山', '人', '一', '二', '三'],
      // '天', '早', '心', '陽'],
      t: 50,
      ultra: 0,
      score: 0,
      die: false
    }
  },
  props: ['card_list'],
  methods: {
    reset () {
      this.start = false
      this.die = false
      this.score = 0
      this.t = 50
      this.items = []
      this.ultra = 0
    },
    fire (hit) {
      hit = hit.replace(' ', '')
      if (!this.die) {
        this.score += this.items.filter((o) => { return o.w === hit }).length
        this.items = this.items.filter((o) => { return o.w !== hit })
        this.items.map((o) => { o.moving = true; return o })
        this.hit = ''
        this.$forceUpdate()
      }
    },
    addItem (x) {
      const w = this.card_list[Math.floor(Math.random() * this.card_list.length)]
      // console.log(w)
      const cs = ['#fcc', '#cfc', '#ccf']
      this.items.push({ w: w.name.replace(' ', ''), y: 0, hide: false, moving: true, bg: cs[Math.floor(Math.random() * cs.length)], x: x })
    },
    go () {
      if (!this.die && this.start) {
        this.t++
        this.t += this.score / 10
      }
      const xs = [0, 54, 108, 162, 216, 270]
      const x = xs[Math.floor(Math.random() * xs.length)]
      if (this.t > 60) {
        this.t = 0
        if (this.items.filter((o) => { return !o.moving && o.x === x }).length * 54 < 300 && !this.die) {
          this.addItem(x)
        } else {
          this.die = true
        }
      }
      this.items = this.items.map((o) => {
        if (o.y >= 300 - this.items.filter((k) => {
          return !k.moving && k.x === o.x
        }).length * 54) {
          o.moving = false
        }
        if (o.moving) {
          o.y++
        }
        return o
      })
      this.$forceUpdate()
    }
  },
  mounted () {
    setInterval(this.go, 50)
  }
}
</script>

<style type="text/css" scoped="">
  .info {
    padding: 2em 2em;
  }
  .block {
    position: absolute;
    font-size: 36px;
    border: 3px gray ridge;
    width: 54px;
    height: 54px;
    text-align: center;
  }
  .score {
    background-color: #9f9;
    padding: 1em 1em;
    width: 200px;
  }
  .q-field--with-bottom {
    padding-bottom: 0;
  }
</style>
