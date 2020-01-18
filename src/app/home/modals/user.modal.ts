export interface UserModal {
    id: number,
    name: string,
    username: string,
    email: string,
    address: AddressModal,
    phone: string,
    website: string,
    company: CompanyModal
}

export interface AddressModal {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: GeoModal
}

export interface GeoModal {
    lat: number,
    lng: number
}

export interface CompanyModal {
    name: string,
    catchPhrase: string,
    bs: string
}
