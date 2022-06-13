import { TrashIcon, FolderOpenIcon, CogIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="flex flex-row justify-end text-2xl text-gray-500 w-full p-2">
            <button className="flex flex-row border-solid border-1 border-gray-50 hover:bg-gray-200 p-2 rounded-lg mr-2">
                <FolderOpenIcon className="flex flex-row h-8 w-8 mr-1" />Load All
            </button>

            <Link to="/trash">
                <button className="flex flex-row border-solid border-1 border-gray-50 hover:bg-gray-200 p-2 rounded-lg mr-2">
                    <TrashIcon className="flex flex-row h-8 w-8 mr-1" />Trash
                </button>
            </Link>

            <button className="flex flex-row border-solid border-1 border-gray-50 hover:bg-gray-200 p-2 rounded-lg mr-2">
                <CogIcon className="flex flex-row h-8 w-8 mr-1" />Settings
            </button>
            
            
        </div>
    );
}