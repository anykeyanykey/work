import { Drink } from '@/schemas';
import { defineComponent, toRef } from 'vue';
import Ingredient from './ingredient';
import styles from './drink.module.css'

export default defineComponent({
  name: 'Drink',
  props: {
    drink: {
      type: Object as () => InstanceType<typeof Drink>,
      required: true
    }
  },
  setup(props) {

    const drink = toRef(props.drink)

    return () => (
      <div class={styles.drink}>
        <img
          src={drink.value.thumb}
          alt={drink.value.drink}
          loading="lazy"
        />
        <div class={styles.nameLabel}>{drink.value.drink}</div>
        <div class={styles.sumLabel}>{drink.value.category}</div>
        <div class={styles.sumLabel}>{drink.value.alcoholic}</div>
        <div class={styles.sumLabel}>{drink.value.glass}</div>
        <div class={styles.subLabel}>Instructions</div>
        <div>{drink.value.instructions}</div>
        <div class={styles.subLabel}>List of ingredients</div>
        <div>{drink.value.ingredients.map((ingredient, i) => (<Ingredient key={i} ingredient={ingredient} />))}</div>

      </div >
    );
  }
});