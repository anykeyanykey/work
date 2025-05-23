import { defineComponent } from 'vue';

interface Props {
  msg: string;
}

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(props: Props) {
    return () => (
      <div>
        <h1>{props.msg}</h1>
      </div>
    );
  }
});