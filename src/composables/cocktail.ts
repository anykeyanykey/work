import { Drink } from "@/schemas"
import { api } from "@/services"
import { ref, watch } from "vue"
import { useRoute } from "vue-router"

export const useCocktails = () => {
    const route = useRoute()

    const cocktailKey = ref()
    const loading = ref(false)
    const drinks = ref<Drink[]>([])

    const { commonService } = api

    watch(route, async (route) => {
        cocktailKey.value = route.params.cocktail
        try {
            loading.value = true
            drinks.value = []
            drinks.value = await commonService.search(cocktailKey.value)
        } catch {
            drinks.value = []
        } finally {
            loading.value = false
        }

    }, { immediate: true })

    return {
        cocktailKey,
        drinks
    }
}