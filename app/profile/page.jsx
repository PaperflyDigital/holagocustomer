'use client'
import MyOrders from '@/components/pageSection/ProfilePage/MyOrders';
import Profile from '@/components/pageSection/ProfilePage/Profile';
import WishList from '@/components/pageSection/ProfilePage/WishList';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const Page = () => {
    toast.error('Hello World')
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
        </div>
    );
}

export default Page;
