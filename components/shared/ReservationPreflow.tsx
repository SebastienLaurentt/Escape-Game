import React from 'react'
import ReservationFlow from './ReservationFlow';
import { getClosedDay } from '@/lib/action';

const ReservationPreflow= async ({ query }: { query: string }) => {
  const closedDays = await getClosedDay(query);
  return (
    <>
      <ReservationFlow closedDays={closedDays} />
    </>
  )
}

export default ReservationPreflow