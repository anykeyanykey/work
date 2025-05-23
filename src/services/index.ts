import cocktail from '@/pages/cocktails';
import Axios from 'axios';
import { CommonService } from './common';

const axios = Axios.create({
    baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const api = {
    commonService: new CommonService(axios)
};