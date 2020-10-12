      const app = new Vue({
        el: '#app',
        
        data: {
          ProjectLists: null,
          paramName: null,
          paramValue: null
        },
        
        mounted() {
          fetch('https://script.google.com/macros/s/AKfycbyCQtKgtTJVg5fvr_KJ8PVvj_wevQ6zI2txw59yrqsvpdZXmCk/exec')
            .then(response => {
              return response.json();
            })
            .then(json => {
                this.ProjectLists = json.ProjectList;
            })
          var queryString = window.location.search;
          if(queryString){
                queryString = queryString.substring(1);
                var parameters = queryString.split('&');
                
                for (var i = 0; i < parameters.length; i++) {
                      var element = parameters[i].split('=');
                      
                      this.paramName = decodeURIComponent(element[0]);
                      this.paramValue = decodeURIComponent(element[1]);
                }
          } 
        }
      })
