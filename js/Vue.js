      const app = new Vue({
          var queryString = window.location.search;
          var IntMin = '';
          var IntMax = '';
            
          if(queryString){
                queryString = queryString.substring(1);
                var parameters = queryString.split('&');
                
                for (var i = 0; i < parameters.length; i++) {
                      var element = parameters[i].split('=');
                      
                      IntMin = decodeURIComponent(element[0]);
                      IntMax = decodeURIComponent(element[1]);
                }
          } 
        el: '#app',
        
        data: {
          ProjectLists: null,
          paramName: IntMin,
          paramValue: IntMax
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
