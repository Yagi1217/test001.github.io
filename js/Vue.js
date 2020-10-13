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
                      if isFinite(element) {
                            elements[j] = element[i];
                            j++;
                      }
                }
                      Min = decodeURIComponent(elements[0]);
                      this.paramMin = decodeURIComponent(elements[0]);

                      Max = decodeURIComponent(elements[1]);
                      this.paramMax = decodeURIComponent(elements[1]);
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
