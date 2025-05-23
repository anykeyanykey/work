import { COCKTAIL_CODES } from '@/const';
import { defineComponent } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import styles from './cocktails.module.css';
import { useCocktails } from '@/composables/cocktail';

export default defineComponent({
    name: 'Cocktail',
    setup(props) {
        const { drinks } = useCocktails()

        return () => (
            <div class={styles.pageContainer}>
                <aside>
                    <nav class={styles.nav}>
                        {Object.keys(COCKTAIL_CODES).map((nav, i) => (
                            <RouterLink key={i} class={styles.link} activeClass={styles.active} to={`/${nav}`}>{COCKTAIL_CODES[nav]}</RouterLink>
                        ))}
                    </nav>
                </aside>
                <section>
                    {
                        drinks.value.map((drink, i) => {
                            return (
                                <div key={i}>
                                    <div>{drink.drink}</div>
                                    <div>{drink.category}</div>
                                    <div>{drink.alcoholic}</div>
                                    <div>{drink.glass}</div>
                                    <div>Instructions</div>
                                    <div>{drink.getInstructions()}</div>
                                    <div>List of ingredients</div>
                                    <div>{drink.getIngredients().map(({ ingredient, measure }) => {
                                        return (<div>
                                            <div>{measure}</div>
                                            <div>{ingredient}</div>
                                        </div>)
                                    })}</div>

                                    <img
                                        src={drink.thumb}
                                        alt={drink.drink}
                                        loading="lazy"
                                        width={200}
                                    />
                                </div>
                            )
                        })
                    }
                </section>
            </div>
        );
    }
});