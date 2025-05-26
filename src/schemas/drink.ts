type DrinkTypeStr = {
  [K in `${'str'}${string}`]: string;
};

export type DrinkDto = { idDrink: string } & DrinkTypeStr;
export type DrinkInstructions = Record<`LANG_${string}`, string>;
export type DrinkIngredientItem = { ingredient: string; measure: string };

const INSTRUCTIONS_REGEXP = /instructions(.*)$/i;
const INGREDIENT_REGEXP = /ingredient(\d+)$/i;

export class Drink implements DrinkDto {
  idDrink: string;
  [key: `str${string}`]: string;
  _instructions: DrinkInstructions;
  _ingredients: DrinkIngredientItem[];
  _lang = '';

  constructor(obj: DrinkDto) {
    this.idDrink = obj.idDrink;
    Object.assign(this, obj);
    this._instructions = Object.keys(obj)
      .filter((key) => INSTRUCTIONS_REGEXP.test(key))
      .reduce((res, key) => {
        const lang = INSTRUCTIONS_REGEXP.exec(key)?.[1] ?? '';
        res[`LANG_${lang}`] = obj[key as keyof DrinkTypeStr];
        return res;
      }, {} as DrinkInstructions);
    this._ingredients = Object.keys(obj)
      .filter((key) => INGREDIENT_REGEXP.test(key))
      .reduce((res, key) => {
        const index = INGREDIENT_REGEXP.exec(key)?.[1] ?? '';
        const ingredient = obj[key as keyof DrinkTypeStr];
        const measure = obj[`strMeasure${index}` as keyof DrinkTypeStr];
        if (ingredient || measure) {
          res.push({
            ingredient,
            measure,
          });
        }
        return res;
      }, [] as DrinkIngredientItem[]);
  }

  set lang(lang: string) {
    this._lang = lang;
  }

  get id() {
    return this.idDrink;
  }

  get drink() {
    return this.strDrink;
  }

  get thumb() {
    return this.strDrinkThumb;
  }

  get category() {
    return this.strCategory;
  }

  get alcoholic() {
    return this.strAlcoholic;
  }

  get glass() {
    return this.strGlass;
  }

  get instructions() {
    return this._instructions[`LANG_${this._lang}`];
  }

  get ingredients() {
    return this._ingredients;
  }
}
