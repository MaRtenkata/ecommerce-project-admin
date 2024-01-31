import prismadb from '@/lib/prismaDB';

import { ProductClient } from './components/client';
import { ProductColumn } from './components/columns';
import { formatDate, formatPrice } from '@/lib/utils';

const ProductsPage = async ({ params }: { params: { storeId: string } }) => {
  const products = await prismadb.product.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      category: true,
      color: true,
      size: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formateProducts: ProductColumn[] = products.map((item) => ({
    id: item.id,
    name: item.name,
    isFeatured: item.isFeatured,
    isArchived: item.isArchived,
    price: formatPrice(Number(item.price)),
    category: item.category.name,
    size: item.size.name,
    color: item.color.name,
    createdAt: formatDate(item.createdAt),
  }));

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <ProductClient data={formateProducts} />
      </div>
    </div>
  );
};

export default ProductsPage;
