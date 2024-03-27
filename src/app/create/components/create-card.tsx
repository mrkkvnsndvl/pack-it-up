import { CreateCardProps } from '@/_types/create-card-type';
import { IconCheck, IconX } from '@tabler/icons-react';
import clsx from 'clsx';

export default function CreateCard({
  list,
  onDeleteList,
  onPackedList,
}: CreateCardProps) {
  return (
    <div
      className={clsx(
        'flex flex-col items-end gap-3 py-3 border border-black',
        {
          'border-opacity-20': list.packed,
        },
      )}>
      <div className='flex gap-3 px-3'>
        <IconCheck
          className={clsx('text-black cursor-pointer', {
            'text-opacity-20': list.packed,
          })}
          stroke={1}
          width={24}
          height={24}
          onClick={() => onPackedList(list.id)}
        />
        <IconX
          className={clsx('text-black cursor-pointer', {
            'text-opacity-100': list.packed,
          })}
          stroke={1}
          width={24}
          height={24}
          onClick={() => onDeleteList(list.id)}
        />
      </div>
      <div
        className={clsx('w-full border-t border-t-black h-[1px]', {
          'border-opacity-20': list.packed,
        })}></div>
      <div className='flex items-start w-full gap-1 px-3'>
        <span
          className={clsx('text-black text-h6', {
            'text-opacity-20': list.packed,
          })}>
          {list.quantity}
        </span>
        <h5
          className={clsx('text-black text-h5 uppercase', {
            'line-through text-opacity-20': list.packed,
          })}>
          {list.description}
        </h5>
      </div>
    </div>
  );
}
