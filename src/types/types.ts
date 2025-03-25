export interface Donee {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
}

export interface Donation {
    donee_id: number;
    amount: number;
}
