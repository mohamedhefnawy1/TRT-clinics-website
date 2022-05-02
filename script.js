function initMap() {
    
    //setting map options
    var options = 
    {
        zoom:10,
        center: {lat: 34.052235, lng: -118.243683}
    }

    //Creating a new map
    var map = new google.maps.Map(document.getElementById('map'), options);

    //adding markers

    //marker array
    var markers = [
        {
            coords:{lat: 34.067340, lng: -118.394670},
            content: `
            <h1 style= "font-size: small">Renew Vitality Testosterone Clinic of Los Angeles</h1>
            <p style= "color: grey">9301 Wilshire Blvd ste 404, Beverly Hills, CA 90210 \n
            Phone: (323) 672-3050 \n </p>
            <a href="https://www.vitalityhrt.com/" style="color: blue">
            Website: https://www.vitalityhrt.com/ \n </a>
            <p style= "color: grey">Google Rating: 5 \n
            No. of reviews: 48</p>
            `   
        },
        {
            coords:{lat: 34.067950, lng: -118.383670},
            content: `
            <h1 style= "font-size: small">Testosterone Replacement Therapy: Dr. Christopher Asandra</h1>
            <p style= "color: grey">150 N Robertson Blvd #250N, Beverly Hills, CA 90211 \n
            Phone: (424) 542-8881 \n </p>
            <a href="https://www.asandramd.com/" style="color: blue">
            Website: https://www.asandramd.com/ \n </a>
            <p style= "color: grey">Google Rating: 4.8 \n
            No. of reviews: 50</p>
            `   
        },
        {
            coords:{lat: 34.054290, lng: -118.463280},
            content: `
            <h1 style= "font-size: small">Ageless Men's Health</h1>
            <p style= "color: grey">11633 San Vicente Blvd #214, Los Angeles, CA 90049 \n
            Phone: (310) 979-8378 \n </p>
            <a href="https://www.agelessmenshealth.com/" style="color: blue">
            Website: https://www.agelessmenshealth.com/ \n </a>
            <p style= "color: grey">Google Rating: 5 \n
            No. of reviews: 1</p>
            ` 
        },
        {
            coords:{lat: 34.170820, lng: -118.542300},
            content: `
            <h1 style= "font-size: small">Thrive Men's Clinic | Testosterone Replacement Therapy (TRT)</h1>
            <p style= "color: grey">18740 Ventura Blvd #101, Tarzana, CA 91356 \n
            Phone: (818) 906-8888 \n </p>
            <a href="https://mensthrive.com/" style="color: blue">
            Website: https://mensthrive.com/ \n </a>
            <p style= "color: grey">Google Rating: 5 \n
            No. of reviews: 154</p>
            `
        },
        {
            coords:{lat: 34.039290, lng: -118.466110},
            content: `
            <h1 style= "font-size: small">EHormones MD - Los Angeles</h1>
            <p style= "color: grey">12340 Santa Monica Blvd Suite 302, Los Angeles, CA 90025 \n
            Phone: (310) 295-1882 \n </p>
            <a href="https://ehormones.com/" style="color: blue">
            Website: https://ehormones.com/ \n </a>
            <p style= "color: grey">Google Rating: 4.9 \n
            No. of reviews: 18</p>
            `
        },
        {
            coords:{lat: 33.872773, lng: -118.366185},
            content: `
            <h1 style= "font-size: small">The Man Clinic</h1>
            <p style= "color: grey">2512 Artesia Blvd #165, Redondo Beach, CA 90278 \n
            Phone: (310) 413-1771 \n </p>
            <a href="http://www.manclinics.com/" style="color: blue">
            Website: http://www.manclinics.com/ \n </a>
            <p style= "color: grey">Google Rating: 5 \n
            No. of reviews: 15</p>
            `
        },
        {
            coords:{lat: 34.0568208, lng: -118.3965898},
            content: `
            <h1 style= "font-size: small">Gent's Doctor Men’s Health Clinic in Beverly Hills</h1>
            <p style= "color: grey">1125 S Beverly Dr Suite 420, Los Angeles, CA 90035 \n
            Phone: (424) 284-6760 \n </p>
            <a href="https://www.gentsdoctor.com/" style="color: blue">
            Website: https://www.gentsdoctor.com/ \n </a>
            <p style= "color: grey">Google Rating: 3.2 \n
            No. of reviews: 24</p>
            `
        },
        {
            coords:{lat: 34.157504, lng: -118.49251},
            content: `
            <h1 style= "font-size: small">The HOT Clinic</h1>
            <p style= "color: grey">16500 Ventura Blvd Suite 420, Encino, CA 91436 \n
            Phone: (818) 646-0259 \n </p>
            <a href="https://www.thehotclinic.com/" style="color: blue">
            Website: https://www.thehotclinic.com/ \n </a>
            <p style= "color: grey">Google Rating: 3.4 \n
            No. of reviews: 5</p>
            `
        },
        {
            coords:{lat: 34.0157823, lng: -118.4974365},
            content: `
            <h1 style= "font-size: small">Health and Hormone Clinic in Santa Monica</h1>
            <p style= "color: grey">Address: 1333 2nd St, Santa Monica, CA 90401 \n
            Phone: (626) 375-4216 \n </p>
            <a href="http://santa-monica.hormone-clinic.com/" style="color: blue">
            Website: http://santa-monica.hormone-clinic.com/ \n </a>
            <p style= "color: grey">Google Rating: 5 \n
            No. of reviews: 1</p>
            `
        },
        {
            coords:{lat: 34.162345, lng: -118.255212},
            content: `
            <h1 style= "font-size: small">Androgenix Health</h1>
            <p style= "color: grey">Address: 1141 N Brand Blvd #302, Glendale, CA 91202 \n
            Phone: (818) 549-0977 \n </p>
            <a href="http://www.androgenixhealth.com/" style="color: blue">
            Website: http://www.androgenixhealth.com/ \n </a>
            <p style= "color: grey">Google Rating: 4.5 \n
            No. of reviews: 4</p>
            `,
        },

    ];

    for(var i=0; i<markers.length;i++)
    {
        addMarker(markers[i]);
    }
    
    var currentInfoWindow = null;

    //creating function for adding markers on the map
    function addMarker(markerProps)
    {
        var marker = new google.maps.Marker({
            position: markerProps.coords,
            map:map,
        })

        //check content and show infoWindow
        if(markerProps.content)
        {
            var infoWindow = new google.maps.InfoWindow({
                content: markerProps.content,
                maxWidth: 200,
            });

            marker.addListener("click", function()
            {
                if(currentInfoWindow != null)
                {
                    currentInfoWindow.close();
                    infoWindow.open({
                        anchor: marker,
                        map:map,
                        shouldFocus: true,
                        });
    
                    currentInfoWindow = infoWindow;
                }
                else{
                    infoWindow.open({
                    anchor: marker,
                    map:map,
                    shouldFocus: true,
                    });

                    currentInfoWindow = infoWindow;
                }
                

                marker.addListener("closeclick", function(){infoWindow.close()})
            });

        }

    }
  }

  const listViewButton= document.getElementById("listViewButton");
  const listDiv = document.querySelector('.listHolder');
  listDiv.style.display = 'none';
  listViewButton.addEventListener("click", function(e){
    console.log(e);
    if(listDiv.style.display === 'none')
    {
        listDiv.style.display = 'block';
        listViewButton.innerHTML = 'Hide List'
    }
    else{
        listDiv.style.display = 'none';
        listViewButton.innerHTML = 'Show List'
    }
  });