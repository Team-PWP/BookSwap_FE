import { useEffect, useState } from 'react';

import { TitleContainer } from './components/TitleContainer.tsx';
import { UserInfoLayout } from './components/UserInfoLayout.tsx';
import * as Styles from './styles';
import { myStore } from '@/apis/mystore/mystore.api.ts';
import { myStoreRequest } from '@/apis/mystore/mystore.request.ts';
import shopImg from '@/assets/Shop.png';
import { useUserInfoStore } from '@/store/useUserInfoStore.ts';

export const ShopPage: React.FC = () => {
  const [storeData, setStoreData] = useState<myStoreRequest | null>(null);
  const userId = useUserInfoStore((state) => state.userId);

  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        console.log('userId', userId);
        const data = await myStore(1, 10, userId);
        setStoreData(data);
        console.log(data);
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
      <div>
        {storeData ? (
          storeData.data.map((item) => (
            <div key={item.articleId}>
              <h3>{item.title}</h3>
              <p>{item.userNickname}</p>
              <p>Buyout Price: {item.buyoutPrice}</p>
              <p>Minimum Price: {item.minPrice}</p>
              <p>Created At: {item.createdAt}</p>
              <img src={item.imageUrl[0]} alt={item.title} />
            </div>
          ))
        ) : (
          <p>Empty...</p>
        )}
      </div>
    </Styles.ShopLayout>
  );
};
