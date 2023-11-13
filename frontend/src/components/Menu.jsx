import React from 'react';
import '../styles/components/Menu.scss';
import Logo from "../assets/c.image/GDSC SMU logo.png";
import { menus } from '../data/dataset';

const Menu = ({onClick}) => {
    return (
        <div className='Menu_Container'>
            <div className='Menu_Wrapper'>
                <div className='Logo_Box' onClick={()=>onClick(0)}>
                    <img src={Logo} alt='logo' className='Logo_Image'/>
                </div>
                <div className='Select_Box'>
                    {menus.map(menu => 
                        <div key={menu.id} className='Select_Box_item' onClick={()=>onClick(menu.id)}>
                            {menu.text}
                        </div>
                    )}
                </div>
                <div className='Button_Box'>
                    <button className='Menu_Button'>지원하기</button>
                </div>
            </div>
        </div>
    );
};

export default Menu;