import { getItems } from "../data/item";

export default async function ItemsPage() {
  const items = await getItems();
  return (
    <div className="p-6">
      <h1 className="font-bold text-2xl mb-6">商品一覧</h1>

      <div className="grid grid-cols-2 gap-2">
        {items?.map((item) => (
          <div key={item.id} className="border p-2 rounded-lg">
            <div className="aspect-video bg-muted"></div>
            {item.name} / {item.amount.toLocaleString()}円
          </div>
        ))}
      </div>
    </div>
  );
}
