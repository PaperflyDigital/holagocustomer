'use client'
import MyOrders from '@/components/pageSection/ProfilePage/MyOrders';
import Profile from '@/components/pageSection/ProfilePage/Profile';
import SavedAddress from '@/components/pageSection/ProfilePage/SavedAddress';
import WishList from '@/components/pageSection/ProfilePage/WishList';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const Page = () => {
    const screen = useSearchParams().get('screen')
    return (
        <div>
            {
                screen === '0' &&
                <Profile />
            }
            {
                screen === '1' &&
                <WishList />
            }
            {
                screen === '2' &&
                <MyOrders />
            }
            {
                screen === '3' &&
                <SavedAddress />
            }
        </div>
    );
}

export default Page;
