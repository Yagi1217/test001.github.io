      const app = new Vue({
        el: '#app',
        
        data: {
          ProjectLists: null,
          paramMin: null,
          paramMax: null
        },
        
        mounted() {
          var queryString = window.location.search;
          var Min = '';
          var Max = '';
          if(queryString){
                queryString = queryString.substring(1);
                var parameters = queryString.split('&');
                var elements = '';
                var j = 0;
                for (var i = 0; i < parameters.length; i++) {
                      var element = parameters[i].split('=');
                      if (decodeURIComponent(element[0]) = 'Min') {
                          Min = decodeURIComponent(element[1]);
                          this.paramMin = decodeURIComponent(element[1]);
                          
                      } else if (decodeURIComponent(element[0]) = 'Max') {
                      Max = decodeURIComponent(element[1]);
                      this.paramMax = decodeURIComponent(element[1]);
                      }
                }
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
