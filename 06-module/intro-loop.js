new Vue({
  el: '#js-app',
  data: {
    numbers: 10,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4'
    ],
    persons: [
      {
        name: 'Budi',
        age: 19,
        height: 170
      },
      {
        name: 'Anton',
        age: 18,
        height: 160
      },
      {
        name: 'Toni',
        age: 17,
        height: 150
      }
    ],
    nestedObj: {name: 'Nested Obj', data: [1, 2, 3, 4]}
  },
  filters: {
    capitalize: function(str, secondparam) {
      if (!str) return '';
      console.log('string provided: ', str);
      console.log('string provided: ', secondparam);
      if (!secondparam)
        return str;
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
  },
  methods: {
    capitalize: function(str) {
      if (!str) return '';
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    },
    isThisArr: function(param) {
      return Array.isArray(param) ? true : false;
    }
  },
});
