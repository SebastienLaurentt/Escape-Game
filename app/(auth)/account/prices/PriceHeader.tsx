import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import React from 'react'

const PriceHeader = () => {
  return (
    <Tabs defaultValue="week">
    <TabsContent value="week">
      <Card x-chunk="dashboard-07-chunk-3">
        <CardHeader className="px-7">
          <CardTitle>Tarifs de la Villa de l&apos;Effroi</CardTitle>
          <CardDescription>Gestion des tarifs selon la taille de la réservation</CardDescription>
        </CardHeader>
      </Card>
    </TabsContent>
  </Tabs>
  )
}

export default PriceHeader