import { CollectionIcon, RefreshIcon } from '@heroicons/react/solid';

export default function TrashDeck({name}) {
  return (
    <div className="flex flex-row justify-start space-x-16 text-2xl text-white font-bold w-full bg-gray-600 p-2">
      {/* <div className="flex flex-row"> */}
      <div className="flex flex-row"><CollectionIcon className="h-8 w-8 mr-2 ml-6" />{name}</div>
      {/* </div> */}
      <div className="flex flex-row w-screen justify-end">
        <button className="flex flex-row text-violet-100 hover:text-white hover:bg-gray-800 p-1 rounded-lg mr-5"> <RefreshIcon className="h-8 w-8 mr-1" />Restore </button>
        
      </div>
      
    </div>
  );
}