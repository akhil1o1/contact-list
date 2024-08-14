interface Geo {
   lat: string;
   lng: string;
}

interface Address {
   street: string;
   suite: string;
   city: string;
   zipcode: string;
   geo: Geo;
}

interface Company {
   name: string;
   catchPhrase: string;
   bs: string;
}

export interface User {
   id: number;
   name: string;
   username: string;
   email: string;
   address: Address;
   phone: string;
   website: string;
   company: Company;
}

export interface Post {
   userId : number;
   id : number;
   title : string;
   body : string;
}
