function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 39.14293139239714, lng: -77.41854028138839},
        zoom: 10,
        mapId: 'd266759cb0ff3fdb',
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
    });

    //Rechargable
    new google.maps.Marker({
        position: {lat: 39.093133633313585, lng: -77.52949480207258
        },
        map,
        title: "Disposal Type: Rechargeable",
        icon: {
            url: "recharge.png",
            scaledSize: new google.maps.Size(35,35)
        }
    });
    new google.maps.Marker({
        position: {lat: 39.033377947425265, lng: -77.39919571741883
        },
        map,
        title: "Disposal Type: Rechargeable",
        icon: {
            url: "recharge.png",
            scaledSize: new google.maps.Size(35,35)
        }
    });
    new google.maps.Marker({
        position: {lat: 39.026127800000026, lng: -77.42817472883613
        },
        map,
        title: "Disposal Type: Rechargeable",
        icon: {
            url: "recharge.png",
            scaledSize: new google.maps.Size(35,35)
        }
    });
    new google.maps.Marker({
        position: {lat: 39.109962629955, lng: -77.53372282323592
        },
        map,
        title: "Disposal Type: Rechargeable",
        icon: {
            url: "recharge.png",
            scaledSize: new google.maps.Size(35,35)
        }
    });
    new google.maps.Marker({
        position: {lat: 39.11183355486179, lng: -77.536897402072
        },
        map,
        title: "Disposal Type: Rechargeable",
        icon: {
            url: "recharge.png",
            scaledSize: new google.maps.Size(35,35)
        }
    });
    new google.maps.Marker({
        position: {lat: 39.00801747955384, lng: -77.48931190207507
        },
        map,
        title: "Disposal Type: Rechargeable",
        icon: {
            url: "recharge.png",
            scaledSize: new google.maps.Size(35,35)
        }
    });
    new google.maps.Marker({
        position: {lat: 39.12485725237343, lng: -77.23536438249837
        },
        map,
        title: "Disposal Type: Rechargeable",
        icon: {
            url: "recharge.png",
            scaledSize: new google.maps.Size(35,35)
        }
    });

    //Single-Use
    new google.maps.Marker({
        position: {lat: 38.636551450412405, lng: -77.4243849887055
        },
        map,
        title: "Disposal Type: Single-Use",
        icon: {
            url: "recharge.png",
            scaledSize: new google.maps.Size(35,35)
        }
    });

    //E-bike
    new google.maps.Marker({
        position: {lat: 38.97026848475654, lng: -77.38517975986007

        },
        map,
        title: "Disposal Type: E-bike",
        icon: {
            url: "ebike_battery.png",
            scaledSize: new google.maps.Size(35,35)
        }
    });
    new google.maps.Marker({
        position: {lat: 39.08922776117829, lng: -77.52443880218539
        },
        map,
        title: "Disposal Type: E-bike",
        icon: {
            url: "ebike_battery.png",
            scaledSize: new google.maps.Size(35,35)
        }
    });

    //Cell phone
    new google.maps.Marker({
        position: {lat: 39.026115297811494, lng: -77.428164
        },
        map,
        title: "Disposal Type: Cell Phone",
        icon: {
            url: "phone_battery.png",
            scaledSize: new google.maps.Size(35,35)
        }
    });
    new google.maps.Marker({
        position: {lat: 39.094049943726056, lng: -77.52953865767117
        },
        map,
        title: "Disposal Type: Cell Phone",
        icon: {
            url: "phone_battery.png",
            scaledSize: new google.maps.Size(35,35)
        }
    });
    new google.maps.Marker({
        position: {lat: 39.111883336354396, lng: -77.53686965767116
        },
        map,
        title: "Disposal Type: Cell Phone",
        icon: {
            url: "phone_battery.png",
            scaledSize: new google.maps.Size(35,35)
        }
    });
    new google.maps.Marker({
        position: {lat: 39.12488648470319, lng: -77.23534289999999
        },
        map,
        title: "Disposal Type: Cell Phone",
        icon: {
            url: "phone_battery.png",
            scaledSize: new google.maps.Size(35,35)
        }
    });

    //Automotive
    new google.maps.Marker({
        position: {lat: 39.11262793479389, lng: -77.55821658717039
        },
        map,
        title: "Disposal Type: Automotive",
        icon: {
            url: "car_battery.png",
            scaledSize: new google.maps.Size(35,35)
        }
    });
    new google.maps.Marker({
        position: {lat: 39.10943122242059, lng: -77.5501485028133
        },
        map,
        title: "Disposal Type: Automotive",
        icon: {
            url: "car_battery.png",
            scaledSize: new google.maps.Size(35,35)
        }
    });
    new google.maps.Marker({
        position: {lat: 39.10596795372089, lng: -77.5486035504896
        },
        map,
        title: "Disposal Type: Automotive",
        icon: {
            url: "car_battery.png",
            scaledSize: new google.maps.Size(35,35)
        }
    });
    new google.maps.Marker({
        position: {lat: 39.175592597904284, lng: -77.27331950839363
        },
        map,
        title: "Disposal Type: Automotive",
        icon: {
            url: "car_battery.png",
            scaledSize: new google.maps.Size(35,35)
        }
    });
    new google.maps.Marker({
        position: {lat: 39.140984783161315, lng: -77.22319438855811
        },
        map,
        title: "Disposal Type: Automotive",
        icon: {
            url: "car_battery.png",
            scaledSize: new google.maps.Size(35,35)
        }
    });
    new google.maps.Marker({
        position: {lat: 39.171866420427015, lng: -77.20499828341235
        },
        map,
        title: "Disposal Type: Automotive",
        icon: {
            url: "car_battery.png",
            scaledSize: new google.maps.Size(35,35)
        }
    });
}

const popup = document.querySelector(".popup");
const close = document.querySelector(".close");

window.addEventListener("load",function(){

    showPopup();

})

function showPopup(){
    const timeLimit = 1
    let i=0;
    const timer = setInterval(function(){
        i++;
        if(i == timeLimit){
            clearInterval(timer);
            popup.classList.add("show");
        }
        console.log(i)
    },1000);
}

function closePopup(){
    popup.classList.remove("show");
}