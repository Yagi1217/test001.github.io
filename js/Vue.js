      const app = new Vue({
        el: '#app',
        
        data: {
          ProjectLists: null,
          paramMin: null,
          paramMax: null
        },
        
        mounted() {
          var params = (new URL(document.location)).searchParams;
          this.paramMin = params.get('Min');
          this.paramMax = params.get('Max');         
              
          fetch('https://script.google.com/macros/s/AKfycbyCQtKgtTJVg5fvr_KJ8PVvj_wevQ6zI2txw59yrqsvpdZXmCk/exec')
            .then(response => {
              return response.json();
            })
            .then(json => {
                this.ProjectLists = json.ProjectList;
            })

        }
      })
