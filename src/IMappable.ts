export interface IMappable {
    location: {
        lat: number;
        lng: number;
    };
    markerContentInfo(): string;
}