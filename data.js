
var locations = [
    {
      id: 0,
      coords:{lat:42.296928, lng:-71.291862},
      city:'Wellesley',
    },
    {
      id: 1,
      coords:{lat:47.606209, lng:-122.332069},
      city:'Seattle',
    },
    {
      id: 2,
      coords:{lat:38.63028, lng:-90.20031},
      city:'St Louis, MO',
    },
    {
      id: 3,
      coords:{lat:23.022505, lng:72.571365},
      city:'Ahmedabad',
    },
    {
      id: 4,
      coords:{lat:50.850346, lng:4.351721},
      city:'Amsterdam',
    },
    {
      id: 5,
      coords:{lat:37.774929, lng:-122.419418},
      city:'San Francisco',
    },
    {
      id: 6,
      coords:{lat:52.344718, lng:9.799318},
      city:'Amsterdam',
    },
    {
      id: 7,
      coords:{lat:14.604847, lng:120.77997},
      city:'Manila',
    },
    {
      id: 8,
      coords:{lat:35.794325, lng:-78.642417},
      city:'North Carolina',
    },
    {
      id: 9,
      coords:{lat:-13.545140, lng:-58.819939},
      city:'Latin America',
    },
    {
      id: 10,
      coords:{lat:26.0667001, lng:50.557701},
      city:'Manama',
    },
    {
      id: 11,
      coords:{lat:19.039624, lng:72.988701},
      city:'Mumbai',
    },
    {
      id: 12,
      coords:{lat:13.08268, lng:80.270721},
      city:'Chennai',
    },
    {
      id: 13,
      coords:{lat:41.203323, lng:-77.194527},
      city:'Pennsylvania',
    },
    {
      id: 14,
      coords:{lat:-26.204103, lng:28.047304},
      city:'Johannesburg',
    },
    {
      id: 15,
      coords:{lat:49.838994, lng:8.691392},
      city:'Amsterdam',
    },
    {
      id: 16,
      coords:{lat:-33.860097, lng:151.222226},
      city:'Sydney',
    },
    {
      id: 17,
      coords:{lat:39.830555, lng:-75.111105},
      city:'Philadelphia',
    },
    {
      id: 18,
      coords:{lat:18.232057, lng:74.017494},
      city:'Pune',
    },
    {
      id: 19,
      coords:{lat:53.339561, lng:-2.958824},
      city:'London',
    },
  ];


  var VPNConnector = {
    getVPNServers: function(){
        return Math.floor(Math.random() * locations.length)
    }
}