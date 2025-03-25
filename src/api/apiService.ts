import axios from 'axios';
import { Donee, Donation } from '../types/types';

const API_URL = 'http://localhost:5000';

export const getDonees = async (): Promise<Donee[]> => {
    const response = await axios.get(`${API_URL}/donees`);
    return response.data;
};

export const createDonation = async (donation: Donation): Promise<void> => {
    await axios.post(`${API_URL}/donations`, donation);
};
