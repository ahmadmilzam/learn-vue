new Vue({
  el: '#js-app',
  data: {
    title: 'Hello World!',
    link: 'http://google.com',
    linkElement: '<a href="http://google.com">Google.com</a>'
  },
  methods: {
    sayHello: function(){
      this.title = "Hello There!";
      return this.title;
    }
  }
});
