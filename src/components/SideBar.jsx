import React from 'react'
import { FaDiscord } from 'react-icons/fa'
import { PiBooksLight } from 'react-icons/pi'

export default function SideBar() {
    const sidebarLinks = [
        {
            name: 'Home',
            icon: <FaDiscord />,
            title: 'Home'
        },
        {
            name: 'About',
            icon: <PiBooksLight />,
            title: 'About'
        },
        {
            name: 'Settings',
            icon: <FaDiscord />,
            title: 'Profile'
        },
        {
            name: 'Help',
            icon: <FaDiscord />,
            title: 'Help'
        }
    ]

    return (
        <div className='fixed z-40 top-0 left-0 h-screen w-16 flex flex-col bg-primary text-white shadow-lg'>
            {sidebarLinks.map(link => (
                <button
                    key={link.title}
                    className='group relative p-4 rounded-md cursor-pointer bg-primary hover:bg-secondary grid place-items-center transition-colors duration-200'
                    title={link.title}>
                        <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 whitespace-nowrap scale-0 group-hover:scale-100 transition-transform duration-200 bg-primary text-white text-xs py-1 px-3 rounded shadow-lg z-50">
                            {link.title}
                        </span>
                    <SideBarIcon icon={link.icon} />
                </button>
            ))}
        </div>
    )
}

const SideBarIcon = ({ icon }) => (
    <div className="sidebar-icon">
        {icon}
    </div>
);