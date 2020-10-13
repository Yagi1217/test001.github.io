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
                }
                for (var i = 0; i < element.length; i++) {
                      if (decodeURIComponent(element[i]) === 'Min') {
                          Min = decodeURIComponent(element[++i]);
                          this.paramMin = decodeURIComponent(element[++i]);
                          
                      } else if (decodeURIComponent(element[i]) === 'Max') {
                      Max = decodeURIComponent(element[++i]);
                      this.paramMax = decodeURIComponent(element[++i]);
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
