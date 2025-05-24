import { defineComponent } from 'vue';
import HelloWorld from './components/drink';
import { RouterLink, RouterView } from 'vue-router';
import { COCKTAIL_CODES } from './const';


export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <div class={'pageContainer'}>
        <div class={'pageHeader'}>
          <div class={'headerLabel'}>Cocktails</div>
        </div>
        <div class={'pageContent'}>
          <RouterView />
        </div>
      </div >
    );
  }
});