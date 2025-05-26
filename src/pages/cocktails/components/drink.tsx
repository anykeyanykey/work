import { Drink } from '@/schemas';
import { defineComponent, toRef } from 'vue';
import Ingredient from './ingredient';
import styles from './drink.module.css';

export default defineComponent({
  name: 'Drink',
  props: {
    drink: {
      type: Object as () => Drink,
      required: true,
    },
  },
  setup(props) {
    const drink = toRef(props.drink);

    return () => (
      <div class={styles.drink}>
        <span class={styles.nameLabel}>{drink.value.drink}</span>
        <img src={drink.value.thumb} alt={drink.value.drink} loading="lazy" />
        <div class={styles.blockWrapper}>
          <ul>
            <li class={styles.summaryLabel}>{drink.value.category}</li>
            <li class={styles.summaryLabel}>{drink.value.alcoholic}</li>
            <li class={styles.summaryLabel}>{drink.value.glass}</li>
          </ul>
        </div>
        <div class={styles.subLabel}>Instructions</div>
        <div class={styles.blockWrapper}>{drink.value.instructions}</div>
        <div class={styles.subLabel}>List of ingredients</div>
        <div class={[styles.blockWrapper, styles.ingredientsWrapper]}>
          {drink.value.ingredients.map((ingredient, i) => (
            <Ingredient key={i} ingredient={ingredient} />
          ))}
        </div>
      </div>
    );
  },
});
