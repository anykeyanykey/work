import { Axios } from "axios";
import { COCKTAIL_CODES } from "../const";
import { Drink, DrinkDto } from "@/schemas";

export class CommonService {
    constructor(private axios: Axios) {

    }

    async search(cocktail_code: keyof typeof COCKTAIL_CODES) {
        const { data: { drinks } } = await this.axios.get('search.php', {
            params: {
                s: cocktail_code
            }
        })
        return (drinks as DrinkDto[]).map((drink) => new Drink(drink))
    }
}