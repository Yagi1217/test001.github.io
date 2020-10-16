      const app = new Vue({
        el: '#app',
        
        data: {
          ProjectLists: null,
          paramMin: 0,
          paramMax: 99
        },
        
        mounted() {
          var params = (new URL(document.location)).searchParams;
          if (params.get('Min') > params.get('Max')) {
                this.paramMin = params.get('Max');
                this.paramMax = params.get('Min');
          } else {
                this.paramMin = params.get('Min');
                this.paramMax = params.get('Max');
          }
              
          fetch('https://script.google.com/macros/s/AKfycbyCQtKgtTJVg5fvr_KJ8PVvj_wevQ6zI2txw59yrqsvpdZXmCk/exec')
            .then(response => {
              return response.json();
            })
            .then(json => {
                this.ProjectLists = json.ProjectList;
            })

        }
      })
