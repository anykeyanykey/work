import { Drink, DrinkIngredientItem } from '@/schemas';
import { defineComponent, toRef } from 'vue';
import styles from './ingredient.module.css';

export default defineComponent({
  name: 'Ingredient',
  props: {
    ingredient: {
      type: Object as () => DrinkIngredientItem,
      required: true,
    },
  },
  setup(props) {
    return () => (
      <div class={styles.ingredient}>
        <div>{props.ingredient.measure}</div>
        <div>{props.ingredient.ingredient}</div>
      </div>
    );
  },
});
