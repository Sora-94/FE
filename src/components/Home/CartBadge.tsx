import React, { useEffect, useState } from 'react';

interface CartBadgeProps {
  top?: string;
  left?: string;
  bgColor?: string;
  textColor?: string;
}

const CartBadge: React.FC<CartBadgeProps> = ({
  top = '-5px',
  left = '15px',
  bgColor = 'bg-secondary',
  textColor = 'text-dark',
}) => {
  const [itemCount, setItemCount] = useState<number>(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setItemCount(cart.length);
  }, []);

  return itemCount > 0 ? (
    <span
      className={`position-absolute ${bgColor} rounded-circle d-flex align-items-center justify-content-center ${textColor} px-1`}
      style={{
        top: top,
        left: left,
        height: '20px',
        minWidth: '20px',
      }}
    >
      {itemCount}
    </span>
  ) : null;
};

export default CartBadge;
