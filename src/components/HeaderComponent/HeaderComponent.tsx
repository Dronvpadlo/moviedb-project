import React from 'react';
import Link from "next/link";
import UserInfo from "@/components/UserInfo/UserInfo";


const HeaderComponent = () => {

    return (
        <div>
            <Link href={'/'}>Home</Link><br/>
            <Link href={'/movies'}>Movies</Link><br/>
            <Link href={'/genres'}>Movies By Genres</Link><br/>
            <Link href={'/search'}>Search</Link><br/>
            <UserInfo/>
            <hr/>
        </div>
    );
};

export default HeaderComponent;