$(document).ready(function () {
    
    var zooPanel, safariPanel, seaworldPanel;

    
    /* Get a 'handle' for each panel of text to be displayed
    */
    var zoo = $("#zooText"); 
    var safari = $("#safariText");
    var seaworld = $("#seaworldText");
      
    var sdParks = {zooPanel: zoo,
                safariPanel: safari,
                seaworldPanel: seaworld,
                };   

    
    /* Key attributes for selected link    */
    var selectedPanelId;    /*Id of clicked selector */
    var selectedPanel;  /* Handle to selector */  
    var park; 
     
       
    /* Main Application  */

    /* Detect selection of Panel */ 
    $("h3").on("click", function (event) {
         /* Get 'handle" to selected link */ 
        selectedPanel = $(this);
        if (selectedPanel.hasClass("open")) {
             selectedPanel.css("background-color", "darkgreen").css("border-radius", "1em").toggleClass("open");            
            park = selectedPanel.text();
            selectedPanel.empty().prepend("<i class='fa fa-plus-circle'></i>").append(park);
        } else { /* it is closed" */
             selectedPanel.css("background-color", "orange").css("border-radius", "1em 1em 0 0").toggleClass("open");
            park = selectedPanel.text();
            selectedPanel.empty().prepend("<i class='fa fa-minus-circle'></i>").append(park); 
        }
        selectedPanelId = event.target.id;
        sdParks[selectedPanelId].slideToggle();
     }); 
});