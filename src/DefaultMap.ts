import { IMappable } from "./IMappable";

export class DefaultMap {
    public googleMap: google.maps.Map;

    constructor(mapClass: string) {
        this.googleMap = new google.maps.Map(document.querySelector(mapClass), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(mappable: IMappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContentInfo()
            });
            infoWindow.open(this.googleMap, marker)
        });
    }
}