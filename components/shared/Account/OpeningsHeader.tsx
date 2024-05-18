import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import React from 'react'

const OpeningsHeader = () => {
  return (
    <Tabs defaultValue="week">
    <TabsContent value="week">
      <Card x-chunk="dashboard-07-chunk-3">
        <CardHeader className="px-7">
          <CardTitle>Ouverture de la Villa de l&apos;Effroi</CardTitle>
          <CardDescription>Gestion des jours et des horaires d&apos;ouverture</CardDescription>
        </CardHeader>
      </Card>
    </TabsContent>
  </Tabs>
  )
}

export default OpeningsHeader