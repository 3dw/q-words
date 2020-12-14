<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          <input id="s" type="search" name="s" v-model="myKey" list="words" :placeholder="s('輸入字詞')" @keydown.enter="$router.push('/w/' + pre + myKey)"/>
          <label for="s"></label>
          <datalist id ="words">
            <option v-for = "d in has(data, myKey).slice(0,n)" :key="d" :value="d"></option>
            }
          </datalist>
          <button @click="$router.push('/w/' + pre + myKey)">{{ s('查詢') }}</button>
        </q-toolbar-title>
<!--
        <q-btn
          flat
          dense
          round
          @click="rightDrawerOpen = !rightDrawerOpen"
          aria-label="Menu"
        >
          <q-avatar>
            <img src="../assets/john.png"/>
          </q-avatar>
        </q-btn> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item clickable @click.native="$router.push('/')" v-ripple>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            {{$t('home')}}
          </q-item-section>
        </q-item>
        <q-item-label header>{{$t('game')}}</q-item-label>
        <q-item clickable @click.native="$router.push('/pair')" v-ripple>
          <q-item-section avatar>
            <q-icon name="sync" />
          </q-item-section>
          <q-item-section>
            {{$t('pair_game')}}
          </q-item-section>
        </q-item>
        <q-item clickable @click.native="$router.push('/name')" v-ripple>
          <q-item-section avatar>
            <q-icon name="face" />
          </q-item-section>
          <q-item-section>
            {{$t('name_game')}}
          </q-item-section>
        </q-item>
        <q-item clickable @click.native="$router.push('/spin')" v-ripple>
          <q-item-section avatar>
            <q-icon name="track_changes" />
          </q-item-section>
          <q-item-section>
            {{$t('spin_game')}}
          </q-item-section>
        </q-item>
        <q-item clickable @click.native="$router.push('/fishing')" v-ripple>
          <q-item-section avatar>
            <q-icon name="swap_vert" />
          </q-item-section>
          <q-item-section>
            {{$t('fishing_game')}}
          </q-item-section>
        </q-item>
        <q-item clickable @click.native="$router.push('/write')" v-ripple>
          <q-item-section avatar>
            <q-icon name="edit" />
          </q-item-section>
          <q-item-section>
            {{$t('write_game')}}
          </q-item-section>
        </q-item>
        <q-item clickable @click.native="$router.push('/block')" v-ripple>
          <q-item-section avatar>
            <q-icon name="all_out" />
          </q-item-section>
          <q-item-section>
            {{$t('block_game')}}
          </q-item-section>
        </q-item>
        <q-item-label header>{{$t('setting')}}</q-item-label>
        <q-item clickable @click.native="$router.push('/edit')" v-ripple>
          <q-item-section avatar>
            <q-icon name="cloud_upload" />
          </q-item-section>
          <q-item-section>
            {{$t('edit')}}
          </q-item-section>
        </q-item>
        <q-item>
          <q-select
            v-model="$i18n.locale"
            :options="langs"
            :label="$t('lang')"
            emit-value
          />
        </q-item>
      </q-list>
    </q-drawer>
    <!--
    <q-drawer
      side="right"
      v-model="rightDrawerOpen"
      bordered
      content-class="bg-grey-2">
      <q-list>
        <q-item>
          <q-item-section>
            <q-avatar>
              <img src="../assets/john.png">
            </q-avatar>
            {{ $t('human_vs_bot') }}
            <q-toggle
              v-model="human_vs_bot"
              color="green"
              @input="saveBot()"
            />
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click.native="$router.push('/pair'); rightDrawerOpen = false; human_vs_bot = true" >
          <q-chat-message avatar="../assets/john.png" :text="says.map((o) => $t(o))">
          </q-chat-message>
        </q-item>
      </q-list>
    </q-drawer>
  -->
    <q-page-container>
      <!-- <div class="gcse-search"></div> -->
      <router-view  @updateStars = "updateStars" @updateSi = "s1" @pre1="pre1"  @closeD = "closeD" :si="si" :stars="stars" :card_list="card_list" :human_vs_bot="human_vs_bot" :bot_level="bot_level" @addCard="addCard" @removeCard = "removeCard" @updateCard="updateCard" @hideShow = "hideShow" @saveCards = "saveCards" @johnSay="johnSay"/>
      <ad></ad>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import { sify } from 'chinese-conv'
import Ad from '../components/Ad-Be'

export default {
  name: 'MyLayout',
  components: { Ad },
  data () {
    return {
      n: 50,
      myKey: '',
      pre: '',
      url: 'a',
      data: [],
      stars: [],
      si: false,
      say: 'hello! I\'m John',
      says: [
        'hello! I\'m John',
        'I like to play with you.',
        'Let\'s play'
      ],
      human_vs_bot: false,
      bot_level: 4,
      options: [1, 2, 4, 8, 16],
      langs: [
        { label: '繁體中文', value: 'zh-TW' },
        { label: '簡体中文', value: 'zh-CN' },
        { label: 'US English', value: 'en-us' }
      ],
      leftDrawerOpen: this.$q.platform.is.desktop,
      rightDrawerOpen: this.$q.platform.is.desktop,
      card_list: [
        { name: '大' },
        { name: '中' },
        { name: '小' },
        { name: '人' },
        { name: '山' },
        { name: '一' },
        { name: '二' },
        { name: '三' },
        { name: '四' },
        { name: '五' },
        { name: '六' },
        { name: '七' },
        { name: '八' },
        { name: '九' },
        { name: '十' },
        // { name: '春' },
        { name: '日' },
        { name: '土' },
        { name: '木' },
        { name: '水' },
        { name: '火' },
        { name: '太' },
        // { name: '陽' },
        { name: '丁' }
        // { name: '好' },
        // { name: '我' }
      ]
    }
  },
  methods: {
    closeD () {
      this.leftDrawerOpen = false
    },
    pre1 (p, u) {
      p = this.$q.localStorage.getItem('pre') || p || ''
      u = this.$q.localStorage.getItem('url') || u || ''
      this.pre = p
      this.url = u
      this.$axios.get('statics/' + this.url + '/index.json')
        .then((response) => {
          this.data = response.data
        })
    },
    updateStars () {
      this.stars = this.$q.localStorage.getItem('words') || []
    },
    has (data, k) {
      // console.log(data)
      if (!k) {
        return []
      }
      return data.filter((x) => { return x.indexOf(k) > -1 })
    },
    s (t) {
      if (this.si) {
        return sify(t)
      } else {
        return t
      }
    },
    s1 (k) {
      var si = this.$q.localStorage.getItem('si')
      if (typeof k !== 'undefined') {
        si = k
      }
      // console.log(si)
      if (!si) { si = false }
      this.si = si
      this.$q.localStorage.set('si', si)
    },
    deep () {
      var p = this.s('全站搜尋')
      window.IS_GOOGLE_AFS_IFRAME_ = true
      const cx = '007966820757635393756:sasf0rnevk4'
      var gcse = document.createElement('script')
      gcse.type = 'text/javascript'
      gcse.async = true
      gcse.src = '//www.google.com/cse/cse.js?cx=' + cx
      var s = document.getElementsByTagName('script')[0]
      s.parentNode.insertBefore(gcse, s)
      setInterval(function () {
        var e = document.getElementById('gsc-i-id1')
        if (e) {
          e.setAttribute('placeholder', p)
        }
      }, 500)
    },
    openURL,
    saveBot: function () {
      this.setLocal('human_vs_bot')
    },
    saveBotLev: function () {
      this.setLocal('bot_level')
    },
    johnSay: function (text) {
      this.say = text
    },
    addCard: function (name) {
      this.card_list.push({ name: name })
      this.setLocal('card_list')
    },
    removeCard: function (index) {
      this.card_list.splice(index, 1)
      this.setLocal('card_list')
    },
    saveCards: function (list) {
      this.card_list = list
      this.setLocal('card_list')
    },
    hideShow: function (index, bool) {
      this.card_list[index].hide = bool
      this.setLocal('card_list')
    },
    updateCard: function (index, obj) {
      this.card_list[index] = obj
      this.setLocal('card_list')
    },
    getLocal: function (n) {
      // console.log('get:' + n)
      this[n] = JSON.parse(this.$q.localStorage.getItem(n))
      // console.log(this[n])
    },
    setLocal: function (n) {
      // console.log('set:' + n)
      // console.log(this[n])
      this.$q.localStorage.set(n, JSON.stringify(this[n]))
      // console.log(this.$q.localStorage.getItem(n))
    }
  },
  mounted () {
    // var vm = this
    // console.log(this.$route.path)
    // console.log(this.$q.localStorage.getItem(n))
    if (this.$q.localStorage.getItem('card_list')) {
      this.getLocal('card_list')
    }
    if (this.$q.localStorage.getItem('bot_level')) {
      this.getLocal('bot_level')
    }
    if (this.$q.localStorage.getItem('human_vs_bot')) {
      this.getLocal('human_vs_bot')
    }
    this.$axios.get('https://www.moedict.tw/' + this.url + '/index.json')
      .then((response) => {
        this.data = response.data
      })
    /* this.deep()
    setInterval(function () {
      var list = document.getElementsByClassName('gs-title')
      for (var i = 0; i < list.length; i++) {
        const e = list[i]
        if (e.getAttribute('href')) {
          var l = e.getAttribute('href')
          l = ('' + l).replace('https://www.moedict.tw/', '')
          e.removeAttribute('href')
          e.removeAttribute('data-cturl')
          e.removeAttribute('data-ctorig')
          e.setAttribute('data-h', l)
          e.setAttribute('target', 'self')
          e.setAttribute('rel', 'noreferrer')
          e.addEventListener('click', function (event) {
            event.preventDefault()
            // console.log(this.getAttribute('data-h'))
            vm.$router.push('/w/' + this.getAttribute('data-h'))
            var x = document.getElementsByClassName('gsc-modal-background-image gsc-modal-background-image-visible')
            x[0].click()
            vm.$forceUpdate()
          })
        }
      }
    }, 1000) */
  }
}
</script>

<style>
  #s {
    width: 130px !important;
  }

  @media screen and (min-width: 420px) {
    #s {
      width: 250px !important;
    }
  }

  a.btn {
    text-decoration: none;
    margin: 0 .2em;
    cursor: pointer;
  }

  .ellipsis {
    text-overflow: inherit;
  }

  .q-btn__wrapper:before {
    box-shadow: none;
  }

</style>
