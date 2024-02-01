import prismadb from '@/lib/prismaDB';
import { format } from 'date-fns';
import { OrderClient } from './components/client';
import { OrderColumn } from './components/columns';
import { formatPrice } from '@/lib/utils';

const OrdersPage = async ({ params }: { params: { storeId: string } }) => {
  const orders = await prismadb.order.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formateOrders: OrderColumn[] = orders.map((item) => ({
    id: item.id,
    phone: item.phone,
    address: item.address,
    isPaid: item.isPaid,
    products: item.orderItems
      .map((orderItem) => orderItem.product.name)
      .join(', '),
    totalPrice: formatPrice(
      item.orderItems.reduce((total, item) => {
        return total + Number(item.product.price);
      }, 0)
    ),
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <OrderClient data={formateOrders} />
      </div>
    </div>
  );
};

// function formatDate(date = new Date()) {
//   const year = date.toLocaleString('default', { year: 'numeric' });
//   const month = date.toLocaleString('default', {
//     month: '2-digit',
//   });
//   const day = date.toLocaleString('default', { day: '2-digit' });

//   return [year, month, day].join('-');
// }

export default OrdersPage;
