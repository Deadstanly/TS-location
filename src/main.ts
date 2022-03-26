import { User } from "./User";
import { Company } from "./Company";
import { DefaultMap } from "./DefaultMap";

const user = new User();
const company = new Company();
const defaultMap = new DefaultMap('.map');

document.querySelector('.user-marker').addEventListener('click', () => {
    defaultMap.addMarker(user)
});

document.querySelector('.company-marker').addEventListener('click', () => {
    defaultMap.addMarker(company)
});



