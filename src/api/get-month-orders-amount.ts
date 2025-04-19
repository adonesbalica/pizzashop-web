import { api } from '@/lib/axios'

export interface GetMonthOrdersReponse {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthOrdersAmount() {
  const response = await api.get<GetMonthOrdersReponse>(
    '/metrics/day-orders-amount',
  )

  return response.data
}
