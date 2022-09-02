import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Box } from '@material-ui/core'

import { Outcome, getOutcomes } from '../services/outcomes.service'
import Filter from '../components/OutcomesFilter'
import Report from '../components/OutcomesReport'
import Summary from '../components/OutcomesSummary'

interface OutcomesParams {
  yearMonth: string
}

export default function Outcomes() {
  const params = useParams<OutcomesParams>()
  const history = useHistory()

  const [outcomes, setOutcomes] = useState<Outcome[]>([])

  useEffect(() => {
    ;(async () => {
      setOutcomes(await getOutcomes(params.yearMonth))
    })()
  }, [params])

  function handleYearMonthChange(yearMonth: string) {
    history.push(`${yearMonth}`)
  }

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        margin={2}
      >
        <Filter
          yearMonth={params.yearMonth}
          onYearMonthChange={handleYearMonthChange}
        />
        <Summary values={outcomes.map((o) => o.value)} />
      </Box>

      <Report outcomes={outcomes} />
    </Box>
  )
}
