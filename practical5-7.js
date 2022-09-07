
//declaring new apps in js
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        message: 'hello world'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'hello'
  },
  computed: {
    //computed getter
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: "#app-6",
  data: {
    userEntry: {
      name: 'null'
    }
  },
  computed: {
    name() {
      return this.userEntry.name;
    }
  },
  watch: {
    name(newVal, oldVal) {
      document.getElementById("demo").innerHTML = "oldVal: " + oldVal + " , newVal:" + newVal;
    }
  }
})

//changing the apps message
app2.message = 'you hovered over this on ' + new Date().toLocaleDateString();

//this will make the span in visisble
app3.seen = false

//changing the message rather than the reverse function
app4.message = "hannah"

//
app5.message = 'poop'