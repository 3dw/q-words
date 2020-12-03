<template>
  <q-page>
    <div class="block" v-for="(item, idx) in items" :key = "idx" :style = "{top: item.y + 'px'}">
        <span>{{ item.w }}</span>
    </div>
    <q-input filled bottom-slots :autofocus="true" name="" v-model="hit" :label="$t('Type and Shoot')" @keydown.enter = "fire(hit)"/>
    <q-btn color = "primary" @click = "fire(hit)">{{$t('Shoot')}}</q-btn>
    <div class="score">目前 {{ score }} 分</div>
  </q-page>
</template>

<script>
export default {
  name: 'Block',
  data () {
    return {
      hit: '',
      items: [],
      words: ['大', '中', '小', '太', '山', '人', '一', '二', '三'],
      // '天', '早', '心', '陽'],
      t: 0,
      score: 0
    }
  },
  props: ['card_list'],
  methods: {
    fire (hit) {
      this.score += this.items.filter((o) => { return o.w === hit }).length
      this.items = this.items.filter((o) => { return o.w !== hit })
      this.hit = ''
      this.$forceUpdate()
    },
    addItem () {
      const w = this.card_list[Math.floor(Math.random() * this.card_list.length)]
      // console.log(w)
      this.items.push({ w: w.name, y: 0, hide: false })
    },
    go () {
      this.t++
      if (this.t % 100 === 0) {
        this.addItem()
      }
      this.items = this.items.map((o) => {
        o.y++
        return o
      }).filter((o) => { return o.y < 400 })
      this.$forceUpdate()
    }
  },
  mounted () {
    this.addItem()
    setInterval(this.go, 50)
  }
}
</script>

<style type="text/css" scoped="">
  .block {
    position: absolute;
    left: 40vw;
    font-size: 36px;
    border: 3px ridge black;
    width: 54px;
    height: 54px;
    text-align: center;
  }
  .score {
    background-color: #9f9;
    padding: 1em 1em;
    width: 200px;
  }
</style>
