// TODO: add code here

window.addEventListener("load", function() {
    let json = [];

    //"./data.json"
    /*fetch().then(function(response)*/
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {

            let container = document.getElementById("container");
            let key = 0;
            for (json[key].id in json) {

                container.insertAdjacentHTML("beforebegin",
                    container.innerHTML = `
                                        <div class = "astronaut">
                                        
                                          <div class ="bio">
                                            <h3>${json[key].firstName} ${json[key].lastName}</h3>
                                            <ul>
                                              <li>Hours in space :${json[key].hoursInSpace}</li>
                                              <li>Active: ${json[key].active}</li>
                                              <li>Skills: ${json[key].skills}</li>
                                              
                                              </ul>
                                              </div>
                                              <img class = avatar src=${json[key].picture}></img></div>
                                        </div>
                                        
                                    `);

                key = (key + 1) % json.length;

            }


            //}

        });
    });
});
//<img class = avatar src=>Image</img>