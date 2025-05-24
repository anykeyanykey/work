import { COCKTAIL_CODES } from '@/const';
import { defineComponent, TransitionGroup } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import styles from './cocktails.module.css';
import { useCocktails } from '@/composables/cocktail';
import Drink from '@/components/drink';

export default defineComponent({
    name: 'Cocktail',
    setup(props) {
        const { drinks } = useCocktails()

        return () => (
            <div class={styles.cocktailsPage}>
                <aside>
                    <nav class={styles.nav}>
                        {Object.keys(COCKTAIL_CODES).map((nav, i) => (
                            <RouterLink key={i} class={styles.link} activeClass={styles.active} to={`/${nav}`}>{COCKTAIL_CODES[nav]}</RouterLink>
                        ))}
                    </nav>
                </aside>
                <section>
                    <TransitionGroup name="fade-list" tag="div">
                        {
                            drinks.value.map((drink, i) => {
                                return (
                                    <Drink key={i} class={styles.drinkItem} drink={drink} />
                                )
                            })
                        }
                    </TransitionGroup>
                </section>
            </div>
        );
    }
});