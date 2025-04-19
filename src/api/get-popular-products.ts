import { api } from '@/lib/axios'

export type GetPopularProductsReponse = {
  product: string
  amount: number
}[]

export async function getPopularProducts() {
  const response = await api.get<GetPopularProductsReponse>(
    '/metrics/popular-products',
  )

  return response.data
}
