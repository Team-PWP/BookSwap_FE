import { useState, useEffect } from 'react';

import styled from 'styled-components';

import { getWishlist } from '@/apis/wish/wish.api';
import Wish from '@/components/wish/Wish';
import { GlobalLayout } from '@/styles/GlobalLayout';

interface WishlistComponent {
  wishId: number;
  articleId: number;
  userNickname: string;
  title: string;
  buyoutPrice: number;
  minPrice: number;
  createdAt: string;
  bidStartAt: string;
  bidEndAt: string;
  imageUrl: string[];
}

const WishListPage: React.FC = () => {
  const [wishlist, setWishlist] = useState<WishlistComponent[]>([]);
  const [page] = useState<number>(0);
  const size = 10;

  useEffect(() => {
    const fetchWishlistData = async () => {
      try {
        const response = await getWishlist(page, size);
        console.log('Response:', response);
        if (Array.isArray(response.data as WishlistComponent[])) {
          setWishlist(response.data as WishlistComponent[]);
        } else {
          console.error('Error: response is not an array');
        }
      } catch (error) {
        console.error('Error fetching wishlist:', error);
      }
    };

    fetchWishlistData();
  }, [page, size]);

  return (
    <GlobalLayout>
      <WishListWrapper>
        {wishlist.map((wish) => (
          <Wish key={wish.wishId} title={wish.title} />
        ))}
      </WishListWrapper>
    </GlobalLayout>
  );
};

export default WishListPage;

const WishListWrapper = styled.div`
  margin-top: 2rem;
`;
