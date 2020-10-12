      const app = new Vue({
          var queryString = window.location.search;
          var paramName = '';
          var paramValue = '';
            
          if(queryString){
                queryString = queryString.substring(1);
                var parameters = queryString.split('&');
                
                for (var i = 0; i < parameters.length; i++) {
                      var element = parameters[i].split('=');
                      
                      paramNames = decodeURIComponent(element[0]);
                      paramValues = decodeURIComponent(element[1]);
                }
          } 
        el: '#app',
        
        data: {
          ProjectLists: null,
          paramName: paramNames,
          paramValue: paramValues
        },
        
        mounted() {
          fetch('https://script.google.com/macros/s/AKfycbyCQtKgtTJVg5fvr_KJ8PVvj_wevQ6zI2txw59yrqsvpdZXmCk/exec')
            .then(response => {
              return response.json();
            })
            .then(json => {
                this.ProjectLists = json.ProjectList;
            })
        }
      })
