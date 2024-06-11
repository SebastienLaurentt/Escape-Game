import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { getPricesList } from "@/lib/action";

const PriceList = async () => {
  const priceList = await getPricesList();

  return (
    <Tabs defaultValue="week">
      <TabsContent value="week">
        <Card>
          <CardContent className="flex flex-col gap-4 p-6 ">
            <div className="grid grid-cols-2 font-bold lg:grid-cols-4">
              <div className="mx-auto w-[100px]">Nombre de personnes</div>
              <div className="my-auto text-center">Prix</div>
            </div>
            {priceList.map(({ people, price }, index) => (
              <div key={index} className="grid grid-cols-2 lg:grid-cols-4">
                <div className="text-center">{people}</div>
                <div className="text-center">{price}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default PriceList;
