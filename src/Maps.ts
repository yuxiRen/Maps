interface Mappable {
  location: {
    latitude: number;
    longitude: number;
  };
}
export class Maps {
  private googleMap: google.maps.Map;
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.latitude,
        lng: mappable.location.longitude,
      },
    });
    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: "Hi!!!",
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
