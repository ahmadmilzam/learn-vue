new Vue({
  el: '#js-app',
  data: {
    title: 'Hello World!'
  },
  methods: {
    changeTitle: function(evt){
      console.log(evt.target.value);
      this.title = evt.target.value;
    }
  }
});
