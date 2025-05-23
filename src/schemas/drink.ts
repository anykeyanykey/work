
type DrinkTypeStr = {
    [K in `${'str'}${string}`]: string;
}

export type DrinkDto = { idDrink: string } & DrinkTypeStr

export class Drink implements DrinkDto {
    idDrink: string
    [key: `str${string}`]: string;
    instructions: Record<`LANG_${string}`, string>;
    ingredients: { ingredient: string; measure: string }[] = [];

    constructor(obj: DrinkDto) {
        this.idDrink = obj.idDrink
        Object.assign(this, obj)
        this.instructions = Object.keys(obj).filter(key => /instructions/i.test(key)).reduce((res, key) => {
            const lang = /instructions(.*)$/i.exec(key)?.[1] ?? ''
            res[`LANG_${lang}`] = obj[key as keyof DrinkTypeStr]
            return res
        }, {} as Record<`LANG_${string}`, string>)
        this.ingredients = Object.keys(obj).filter(key => /ingredient/i.test(key)).reduce((res, key) => {
            const index = /ingredient(\d+)$/i.exec(key)?.[1] ?? ''
            res.push({
                ingredient: obj[key as keyof DrinkTypeStr],
                measure: obj['strMeasure' + index as keyof DrinkTypeStr]
            })
            return res
        }, [] as { ingredient: string; measure: string }[])
    }

    get id() {
        return this.idDrink
    }

    get drink() {
        return this.strDrink
    }

    get thumb() {
        return this.strDrinkThumb
    }

    get category() {
        return this.strCategory
    }

    get alcoholic() {
        return this.strAlcoholic
    }

    get glass() {
        return this.strGlass
    }

    getInstructions(lang = '') {
        return this.instructions[`LANG_${lang}`]
    }

    getIngredients() {
        return this.ingredients
    }
}