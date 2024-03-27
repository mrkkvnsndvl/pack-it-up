import { useState } from 'react';

export default function FormList({ onAddList, onSortList, onClearList }: any) {
  const [description, setDescription] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!description) {
      return;
    }
    const newList = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    onAddList(newList);
    setDescription('');
    setQuantity(1);
  };

  return (
    <form
      className='flex flex-col items-start justify-between gap-3 px-4 py-8 sm:items-center md:px-8 xl:px-16 sm:flex-row'
      onSubmit={handleSubmit}>
      <div className='flex w-full gap-3'>
        <input
          className='px-5 py-4 w-full text-h6 sm:max-w-min cursor-pointer active:bg-black active:text-white shadow-[0_0_0_1px_rgba(34,34,34,100)]'
          type='button'
          value='SORT'
          name='button'
          onClick={() => onSortList()}
        />
        <input
          className='px-5 py-4 text-h6 cursor-pointer w-full sm:max-w-min active:bg-black active:text-white shadow-[0_0_0_1px_rgba(34,34,34,100)]'
          type='button'
          value='CLEAR'
          name='button'
          onClick={() => onClearList()}
        />
      </div>
      <div className='flex flex-col justify-end w-full gap-3 sm:flex-row'>
        <input
          className='px-5 py-4 text-h6 text-center uppercase shadow-[0_0_0_1px_rgba(34,34,34,100)]'
          type='text'
          placeholder='LIST...'
          name='text'
          autoComplete='off'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className='flex flex-row justify-between gap-3 md:justify-normal'>
          <input
            className='px-5 py-4 text-h6 cursor-pointer text-center max-w-[80px] shadow-[0_0_0_1px_rgba(34,34,34,100)]'
            type='number'
            min={1}
            placeholder='QT'
            name='text'
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <button
            className='px-5 py-4 text-h6 cursor-pointer items-stretch flex active:bg-black active:text-white shadow-[0_0_0_1px_rgba(34,34,34,100)]'
            type='submit'>
            ADD
          </button>
        </div>
      </div>
    </form>
  );
}
