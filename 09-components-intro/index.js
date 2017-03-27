(() => {
  Vue.component('hello', {
    data() {
      return {
        title: 'Hello World!',
      };
    },
    template: '<h1>{{ title }}</h1>',
  });

  window.vm1 = new Vue({
    el: '#js-app',
  });
})();
