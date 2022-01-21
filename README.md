## Hisham VPN Geolocation

This project is using [Google's Geolocation API](https://developers.google.com/maps/documentation/javascript/geolocation) to locate the current location of the viewer.

```html
<html> 
    <!-- <head> 
      <title>Hisham VPN Geolocation</title> 
     </head>  -->
    <body> 
       <h2>Check my current location</h2> 
        <button onclick="getlocation();">Show Position</button> 
        <div id="demo" style="width: 600px; height: 400px; margin-left: 200px;"></div> 
       
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD4xtEoXBaKsiQZ6smXXbU7ufYNxeTOBFc&v=weekly"> </script> 

        <script type="text/javascript"> 
        function getlocation(){ 
            if(navigator.geolocation){ 
                navigator.geolocation.getCurrentPosition(showPos, showErr); 
            }
            else{
                alert("Sorry! your Browser does not support Geolocation API")
            }
        } 
        //Showing Current Poistion on Google Map
        function showPos(position){ 
            latt = position.coords.latitude; 
            long = position.coords.longitude; 
            var lattlong = new google.maps.LatLng(latt, long); 
            var myOptions = { 
                center: lattlong, 
                zoom: 15, 
                mapTypeControl: true, 
                navigationControlOptions: {style:google.maps.NavigationControlStyle.SMALL} 
            } 
            var maps = new google.maps.Map(document.getElementById("demo"), myOptions); 
            var markers = 
            new google.maps.Marker({position:lattlong, map:maps, title:"You are here!"}); 
        } 

        //Handling Error and Rejection
             function showErr(error) {
              switch(error.code){
              case error.PERMISSION_DENIED:
             alert("User denied the request for Geolocation API.");
              break;
             case error.POSITION_UNAVAILABLE:
             alert("USer location information is unavailable.");
            break;
            case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
           case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
           }
        }        </script> 
    </body> 
</html>     
```

<!-- For more details see [Basic writing and formatting syntax](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/Warns/hisham-project/settings/pages). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out. -->
