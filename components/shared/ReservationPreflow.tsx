import React from 'react'
import ReservationFlow from './ReservationFlow';
import { getClosedDay, getExperiencesList } from '@/lib/action';

const ReservationPreflow= async ({ query }: { query: string }) => {
  const closedDays = await getClosedDay(query);
  const experiences = await getExperiencesList(query);
  return (
    <>
      <ReservationFlow closedDays={closedDays} experiences={experiences} />
    </>
  )
}

export default ReservationPreflow