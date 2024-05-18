import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import React from 'react'

const ExperiencesHeader = () => {
  return (
    <Tabs defaultValue="week">
    <TabsContent value="week">
      <Card x-chunk="dashboard-07-chunk-3">
        <CardHeader className="px-7">
          <CardTitle>Les Expériences</CardTitle>
          <CardDescription>Éditer les informations concernant les expériences</CardDescription>
        </CardHeader>
      </Card>
    </TabsContent>
  </Tabs>
  )
}

export default ExperiencesHeader