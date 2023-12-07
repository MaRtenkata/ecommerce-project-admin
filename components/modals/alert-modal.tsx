'use client';

import { useEffect, useState } from 'react';
import { Modal } from '../ui/modal';
import { Button } from '../ui/button';
import { Trash } from 'lucide-react';

interface AlertModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onClose: () => void;
  loading: boolean;
}

export const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title='Are you sure you want to delete this store.'
      description='This action cannot be undone.'
      onClose={onClose}
      isOpen={isOpen}
    >
      <div className='pt-6 space-x-2 flex items-center justify-end w-full'>
        <Button disabled={loading} variant='outline' onClick={onClose}>
          Cancel
        </Button>
        <Button disabled={loading} variant='destructive' onClick={onConfirm}>
          <Trash />
        </Button>
      </div>
    </Modal>
  );
};
