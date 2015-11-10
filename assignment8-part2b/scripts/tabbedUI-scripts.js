$(document).ready(function () {
    
    var zooTab, safariTab, seaworldTab;

    
    var zoo = $("#zooText");
    var safari = $("#safariText");
    var seaworld = $("#seaworldText");
    
    
 
    var sdParks = {zooTab: zoo,
                safariTab: safari,
                seaworldTab: seaworld,
                };
    
    var activeTabId = "zooTab";
    var activeTab = $("#zooTab");
    activeTab.css("background-color", "white").css("border-bottom-color", "white").css("color", "red");
    
    /* Key attributes for selected link    */
    var selectedTabId;    /*Id of clicked selector */
    var selectedTab;  /* Handle to selector */  
    
     
       
    /* Main Application  */


    $("li").on("click", function (event) {
        
        /* Get 'handle" to selected link */ 
        selectedTab = $(this).css("background-color", "white").css("border-bottom-color", "white");
        
        /* Get the id of the selected item.  */        
        selectedTabId = event.target.id;
        
         
        if (activeTabId !== selectedTabId) { 
            
            /* Hide the previously "active pic" */
            sdParks[activeTabId].css("display", "none"); 
            
            sdParks[selectedTabId].css("display", "block");                            
            
            
            /* Change selector styling appropriately */
            activeTab.css("background-color", "lightgrey").css("border-bottom-color", "grey").css("color","grey");  
            
            activeTabId = selectedTabId;
            activeTab = $(this).css("background-color", "white").css("border-bottom-color", "white").css("color", "red");
            
        }
     }); 
});