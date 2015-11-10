$(document).ready(function () {
    
    
    /* Variable Definitions Section */
    
    
    /* This app uses a Gallery Object to create an
        association between the slide selector and the an image that will be displayed when the selector is clicked. 
    */
    
    /* First Define the 'Keys' that will be used to     retrieve the associated image 
    */
    var pic1, pic2, pic3, pic4, pic5;
//    var pic2;
//    var pic3;
//    var pic4; 
//    var pic5;
    
    /* Get a 'handle' for each image to be displayed
    */
    var image1 = $("#image1");
    var image2 = $("#image2");
    var image3 = $("#image3");
    var image4 = $("#image4");
    var image5 = $("#image5");
    
    /* Gallery Object Creation */
    /* Establish the relationship between the slide selector and the image via the Gallery object
    */
    var gallery = {pic1: image1,
                   pic2: image2,
                   pic3: image3,
                   pic4: image4,
                   pic5: image5
                  };
    
    /* The application will keep track of 
        the active picture (that is currently displayed) and the new picture that is selected via it's image selector. When it an image is selected it becomes the new active image
    */ 
    
    /* First pic in gallery will be inital image        shown at launch. Initialize it as such here
    */
    var activePic = "pic1";
    var activeLink = $("#pic1");
    activeLink.css("background-color", "lightgrey");
    
    /* Key attributes for selected link    */
    var selectedPic;    /*Id of clicked selector */
    var selectedLink;  /* Handle to selector */  
    
    
    /* Style base elements of all Gallery selectors */
    $("li").css("text-decoration","underline").css("font", "2.5em bold").css("color", "blue");    
    
       
    /* Main Application  */

    /* Detect selection of Gallery selector */ 
    $("li").on("click", function (event) {
        
        /* Get 'handle" to selected link */ 
        selectedLink = $(this).css("background-color", "lightgrey");      
        
        /* Get the id of the selected item. This will be used to retrieve it's associate image via the Gallery object 
        */        
        selectedPic = event.target.id;
        
        /* If the user clicks the selector for the 
        currently displayed image there is nothing to do. Otherwise if the user clicks a selector for a new image than that image needs to be displayed, it will be become the new activePic and the previous active image will be hidden (display:none). The Picture selectors links also need to be restyled accordingly to reflect that change
        */
        
        if (activePic !== selectedPic) { 
            
            /* Hide the previously "active pic" */
            gallery[activePic].css("display", "none"); 
            
            /* Show the newly selected pic */
            gallery[selectedPic].fadeIn(2000);
    
            
            /* Change selector styling appropriately */
            activeLink.css("background-color", "white");
            
            /* Make the selected picture the active picture */
            activePic = selectedPic;
            activeLink = $(this).css("background-color", "lightgrey");
            
        }
     }); 
});