import { useEffect, useState } from 'react';

import { TitleContainer } from './components/TitleContainer.tsx';
import { UserInfoLayout } from './components/UserInfoLayout.tsx';
import * as Styles from './styles';
import { myStore } from '@/apis/mystore/mystore.api.ts';
import { myStoreRequest } from '@/apis/mystore/mystore.request.ts';
import shopImg from '@/assets/Shop.png';
import { StoreItem } from '@/components/shop/StoreItem.tsx';
import { useUserInfoStore } from '@/store/useUserInfoStore.ts';

export const ShopPage: React.FC = () => {
  const [storeData, setStoreData] = useState<myStoreRequest | null>(null);
  const userId = useUserInfoStore((state) => state.userId);

  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        console.log('userId', userId);
        const data = await myStore(0, 10, userId);
        setStoreData(data);
        console.log('StoreData', data);
      } catch (error) {
        console.error('Error fetching store data:', error);
      }
    };

    fetchStoreData();
  }, [userId]);

  return (
    <Styles.ShopLayout>
      <TitleContainer />
      <UserInfoLayout shopImg={shopImg} />
      <div>물건 목록</div>
      <div>
        {storeData ? (
          storeData.data.map((item) => (
            <StoreItem
              key={item.articleId}
              articleId={item.articleId}
              userNickname={item.userNickname}
              title={item.title}
              buyoutPrice={item.buyoutPrice}
              minPrice={item.minPrice}
              createdAt={item.createdAt}
              imageUrl={item.imageUrl}
            />
          ))
        ) : (
          <p>Empty...</p>
        )}
      </div>
    </Styles.ShopLayout>
  );
};
