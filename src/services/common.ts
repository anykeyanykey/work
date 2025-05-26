import { Axios } from 'axios';
import { COCKTAILS_MAP } from '../const';
import { Drink, DrinkDto } from '@/schemas';
import { useToast } from 'vue-toastification';

function NotifyFallback(defaultValue: any) {
  const toast = useToast();

  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      try {
        const result = await originalMethod.apply(this, args);
        return result;
      } catch (e) {
        toast.error('Произошла ошибка при выполнении запроса');
        return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
      }
    };
    return descriptor;
  };
}

export class CommonService {
  constructor(private axios: Axios) {}

  @NotifyFallback([])
  async search(cocktail_code: keyof typeof COCKTAILS_MAP) {
    const {
      data: { drinks },
    } = await this.axios.get('search.php', {
      params: {
        s: cocktail_code,
      },
    });
    return (drinks as DrinkDto[]).map((drink) => new Drink(drink));
  }
}
