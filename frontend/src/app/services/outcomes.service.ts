const URL = 'http://localhost:3001/despesas'

export interface Outcome {
  id: number
  description: string
  category: string
  value: number
  month: string
  day: number
}

interface OutcomeAPI {
  id: number
  descricao: string
  categoria: string
  valor: number
  mes: string
  dia: number
}

function mapFromApi(outcomes: OutcomeAPI[]): Outcome[] {
  return outcomes.map((outcome) => ({
    id: outcome.id,
    description: outcome.descricao,
    category: outcome.categoria,
    value: outcome.valor,
    month: outcome.mes,
    day: outcome.dia,
  }))
}

export async function getOutcomes(month: string): Promise<Outcome[]> {
  const res = await fetch(`${URL}?mes=${month}&_sort=dia`)
  const outcomes = await res.json()

  return mapFromApi(outcomes)
}
