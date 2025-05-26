import { COCKTAILS_MAP } from '@/const';
import { defineComponent, TransitionGroup } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import styles from './cocktails.module.css';
import { useCocktails } from '@/composables/cocktail';
import Drink from '@/pages/cocktails/components/drink';

export default defineComponent({
  name: 'Cocktail',
  setup(props) {
    const { drinks } = useCocktails();

    return () => (
      <div class={styles.cocktailsPage}>
        <aside>
          <nav class={styles.nav}>
            {Object.keys(COCKTAILS_MAP).map((nav, i) => (
              <RouterLink key={i} class={styles.link} activeClass={styles.active} to={`/${nav}`}>
                {COCKTAILS_MAP[nav as keyof typeof COCKTAILS_MAP]}
              </RouterLink>
            ))}
          </nav>
        </aside>
        <section>
          <TransitionGroup name="fade-list" tag="div">
            {drinks.value.map((drink, i) => {
              return <Drink key={drink.id} class={styles.drinkItem} drink={drink} />;
            })}
          </TransitionGroup>
        </section>
      </div>
    );
  },
});
