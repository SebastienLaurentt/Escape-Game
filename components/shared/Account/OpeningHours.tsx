import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const OpeningHours = () => {
  return (
    <div>
      <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
        {/* Header */}
        <CardHeader className="flex flex-row items-start bg-muted/50">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2">
              Horaires d&apos;ouverture
              <Button
                size="icon"
                variant="outline"
                className="size-6 opacity-0 transition-opacity group-hover:opacity-100"
              ></Button>
            </CardTitle>
          </div>
        </CardHeader>

        <CardContent className="p-6 text-sm">

        </CardContent>
      </Card>
    </div>
  )
}

export default OpeningHours