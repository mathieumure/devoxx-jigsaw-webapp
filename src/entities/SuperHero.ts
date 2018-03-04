export default class SuperHero {
  name: string;
  description?: string;
  logo?: string;

  constructor(name: string, description?: string, logo?: string) {
    this.name = name;
    this.description = description;
    this.logo = logo;
  }
}
