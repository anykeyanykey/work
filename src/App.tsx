import { defineComponent } from 'vue';
import HelloWorld from './pages/cocktails/components/drink';
import { RouterLink, RouterView } from 'vue-router';
import { COCKTAILS_MAP } from './const';

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
      </div>
    );
  },
});
