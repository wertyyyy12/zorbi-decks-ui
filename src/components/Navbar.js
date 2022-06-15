import { TrashIcon, FolderOpenIcon, CogIcon, CollectionIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

export default function Navbar({type}) {
    let NavbarButtons;
    if (type === "Home") {
        NavbarButtons = 
        <>
            <button className="flex flex-row border-solid border-1 border-gray-50 hover:bg-gray-200 p-2 rounded-lg mr-2">
                <FolderOpenIcon className="flex flex-row h-8 w-8 mr-1" /><span className="whitespace-nowrap">Load All</span>
            </button>

            <Link to="/trash">
                <button className="flex flex-row border-solid border-1 border-gray-50 hover:bg-gray-200 p-2 rounded-lg mr-2">
                    <TrashIcon className="flex flex-row h-8 w-8 mr-1" />Trash
                </button>
            </Link>

            <button className="flex flex-row border-solid border-1 border-gray-50 hover:bg-gray-200 p-2 rounded-lg mr-2">
                <CogIcon className="flex flex-row h-8 w-8 mr-1" />Settings
            </button>
        </>
    }
    if (type === "Trash") {
        NavbarButtons =         
        <Link to="/">
            <button className="flex flex-row border-solid border-1 border-gray-50 hover:bg-gray-200 p-2 rounded-lg mr-2">
                <CollectionIcon className="flex flex-row h-8 w-8 mr-1" />Decks
            </button>
        </Link>
    }

    return (
        <div className="flex flex-row justify-end w-full text-2xl text-gray-500 w-full p-2">
            <div className="flex flex-row w-screen items-center ml-8 font-bold text-black text-3xl">
                {type}
            </div>

            {NavbarButtons}
            
        </div>
    );
}