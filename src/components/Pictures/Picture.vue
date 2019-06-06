<template>
    <div>
      <loader v-if="loading"></loader>
      <h1>{{photo.title}}</h1>
      <div class="infos">
        <div>
          <img v-bind:src="image[userid - 1]" alt="profile photo">
        </div>
        <div>
          <p><strong>{{user.name}}</strong></p>
        </div>
      </div>
      <img v-bind:src="photo.url" :alt="photo.title">
      <div class="posts">
        <div class="comments">
          <div :key="index" v-if="comments" v-for="(comment, index) in comments" class="old-comments">
            <h3>{{comment.email}}</h3>
            <h4>Title : {{comment.name}}</h4>
            <p>Comment : {{comment.body}}</p>
            <hr>
          </div>
          <div class="add">
            <label for="email">Email</label>
            <input id="email" type="text" name="email" placeholder="your email">
            <label for="title">Title</label>
            <input id="title" type="text" name="title" placeholder="title of comment">
            <label for="comment">Comment</label>
            <input type="text" id="comment" placeholder="add a comment...">
            <input type="submit" v-on:click="addComment()" value="Envoyer">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import Loader from '@/components/Utils/Loader'

export default {
  name: 'Picture',
  components: {
    Loader
  },
  props: {
  },
  watch: {
  },
  computed: {
  },
  replace: {
  },
  data: function () {
    return {
      picture: this.$router.history.current.params.pictureid,
      photo: {},
      user: {},
      comments: null,
      image: [
        require('@/assets/photos/1.png'),
        require('@/assets/photos/2.png'),
        require('@/assets/photos/3.png'),
        require('@/assets/photos/4.png'),
        require('@/assets/photos/5.png'),
        require('@/assets/photos/6.png'),
        require('@/assets/photos/7.png'),
        require('@/assets/photos/8.png'),
        require('@/assets/photos/9.png'),
        require('@/assets/photos/10.png')
      ],
      userid: this.$router.history.current.params.userid,
      loading: true
    }
  },
  methods: {
    addComment: function () {
      let email = document.querySelector('#email')
      let title = document.querySelector('#title')
      let comment = document.querySelector('#comment')
      let obj = {
        email: email.value,
        name: title.value,
        body: comment.value
      }
      email.value = ''
      title.value = ''
      comment.value = ''
      this.comments.push(obj)
      window.scrollTo(0, document.body.scrollHeight)
    },
    stopLoader: function () {
      this.loading = false
    }
  },
  beforeCreate () {
  },
  created () {
  },
  compile () {
  },
  beforeMount () {
  },
  mounted () {
    axios
      .get('https://jsonplaceholder.typicode.com/photos/' + this.picture)
      .then(r => (this.photo = r.data))
    axios
      .get('https://jsonplaceholder.typicode.com/comments?postId=' + this.picture)
      .then(r => (this.comments = r.data))
    if (this.userid === undefined) {
      axios
        .get('https://jsonplaceholder.typicode.com/photos/' + this.picture)
        .then(r => {
          axios
            .get('https://jsonplaceholder.typicode.com/albums/' + r.data.albumId)
            .then(r => {
              axios
                .get('https://jsonplaceholder.typicode.com/users/' + r.data.userId)
                .then(r => {
                  (this.user = r.data)
                  this.userid = r.data.id
                })
            })
        })
    } else {
      axios
        .get('https://jsonplaceholder.typicode.com/users/' + this.userid)
        .then(r => (this.user = r.data))
    }
  },
  beforeUpdate () {
  },
  updated () {
    this.loading = false
  },
  beforeDestroy () {
  },
  destroyed () {
  }
}
</script>

<style scoped>
img {
  max-width: 100%;
}
.infos img {
  max-height: 100%;
  width: auto;
}
.infos > div {
  height: calc(100% - 10px);
  float: left;
  padding-left: 10px;
  margin: 5px;
}
.posts, .infos {
  max-width: 600px;
  background: rgba(0,0,0,0.04);
  margin: auto;
}
.posts {
  margin-top: -6px;
}
.infos {
  height: calc(16px * 2 + 27.5px);
}
.add {
  padding: 5px;
}
.add label {
  text-align: left;
  display: block;
}
.add input {
  width: 100%;
  height: 30px;
  border: none;
  margin: 0 0 10px;
  background: transparent;
}
.add input[type="submit"]{
  cursor: pointer;
  border-radius: 20px;
}
.add input[type="submit"]:hover {
  background: rgba(0,0,0,0.2);
}
.comments p {
  margin: 0;
}
.old-comments {
  text-align: left;
}
.old-comments h4 {
  margin: 2px;
}
.old-comments h3:first-child {
  margin-top: 0;
  padding-top: 1em;
}
hr {
  height: 10px;
  border: 0;
  box-shadow: 0 10px 10px -10px #8c8b8b inset;
}
</style>
