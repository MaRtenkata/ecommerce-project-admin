'use client';

import { Modal } from '../ui/modal';
import { useStoreModal } from '@/hooks/use-store-modal';

export const StoreModal = () => {
  const onClose = useStoreModal((state) => state.onClose);
  const isOpen = useStoreModal((state) => state.isOpen);

  return (
    <Modal
      title='Create Menu'
      description='Add a new Menu to manage product and categories'
      isOpen={isOpen}
      onClose={onClose}
    >
      Future Create Menu Form
    </Modal>
  );
};
