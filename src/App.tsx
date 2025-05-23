import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld';
import { RouterLink, RouterView } from 'vue-router';
import { COCKTAIL_CODES } from './const';


export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <div class={'container'}>
        <RouterView />
      </div>
    );
  }
});