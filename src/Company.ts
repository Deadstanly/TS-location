import faker from "@faker-js/faker";

export class Company {
  companyName: string;
  companyCatchPhrase: string;
  location: {
      lat: number;
      lng: number;
  };

  constructor() {
      this.companyName = faker.company.companyName();
      this.companyCatchPhrase = faker.company.catchPhrase();
      this.location = {
          lat: parseFloat(faker.address.latitude()),
          lng: parseFloat(faker.address.longitude())
      }
  }

  markerContentInfo(): string {
    return `
    <div>
        <p><b>Company name: </b>${this.companyName} / ${this.companyCatchPhrase}</p>
    </div>`
  }
}