new Vue({
  el: '#app',
  data () {
    return {
      message: 'Book List',
      books: null,
    }
  },
  mounted () {
    fetch(
      'https://script.google.com/macros/s/AKfycbzdU4Md20DUSfQFcqJJbUG81LIFGh42WmAQZN_9r3wh3SKSJknB/exec',
    )
      .then(res => res.json())
      .then(
      result => {
        this.books = result
      },
      error => {

      },
    );
    alert( this.books )
  }
})
