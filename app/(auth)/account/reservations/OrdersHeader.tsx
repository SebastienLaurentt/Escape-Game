import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import React from 'react'

const DeleteOrder = () => {
  return (
    <Tabs defaultValue="week">
    <TabsContent value="week">
      <Card x-chunk="dashboard-07-chunk-3">
        <CardHeader className="px-7">
          <CardTitle>Reservations effectuées</CardTitle>
          <CardDescription>Gestion des réservations clients</CardDescription>
        </CardHeader>
      </Card>
    </TabsContent>
  </Tabs>
  )
}

export default DeleteOrder