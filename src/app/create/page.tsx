'use client';

import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import FormList from './components/form-list';
import CreateCard from './components/create-card';

const Create = () => {
  const [lists, setLists] = useState<Array<any>>([]);
  const [sortOrder, setSortOrder] = useState<boolean>(true);

  const handleAddList = (list: any) => {
    setLists((lists) => [...lists, list]);
  };

  const handleDeleteList = (id: number) => {
    setLists((list) => list.filter((list) => list.id !== id));
  };

  const handlePackedList = (id: number) => {
    setLists((list) =>
      list.map((list) =>
        list.id === id ? { ...list, packed: !list.packed } : list,
      ),
    );
  };

  const handleSortList = () => {
    const newLists = [...lists];
    newLists.sort((a, b) => {
      if (sortOrder) {
        return a.packed - b.packed;
      } else {
        return b.packed - a.packed;
      }
    });
    setSortOrder((prevSortOrder) => !prevSortOrder);
    setLists(newLists);
  };

  const toastYes = () => {
    setLists([]);
  };

  const handleClearList = () => {
    toast((t) => (
      <div className='flex flex-col gap-3'>
        <p className='block text-center sm:text-start'>
          Are you sure you want to clear the list?
        </p>
        <div className='flex justify-end gap-3'>
          <button
            className='px-3 py-1 border border-black active:bg-black active:text-white'
            onClick={() => {
              toastYes();
              toast.dismiss(t.id);
            }}>
            Yes
          </button>
          <button
            className='px-3 py-1 border border-black active:bg-black active:text-white'
            onClick={() => toast.dismiss(t.id)}>
            No
          </button>
        </div>
      </div>
    ));
  };

  return (
    <>
      <Toaster position='top-center' />
      <section>
        <FormList
          onAddList={handleAddList}
          onSortList={handleSortList}
          onClearList={handleClearList}
        />
      </section>
      <section className='px-4 py-8 md:px-8 xl:px-16'>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {lists.map((list: any) => (
            <CreateCard
              list={list}
              key={list.id}
              onDeleteList={handleDeleteList}
              onPackedList={handlePackedList}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Create;
