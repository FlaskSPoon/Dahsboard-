'use client';

import React from 'react';
import CardMenu from 'components/card/CardMenu';
import Card from 'components/card';
import {
  MdCancel,
  MdChangeCircle,
  MdCheckCircle,
  MdModeEditOutline,
  MdOutlineError,
} from 'react-icons/md';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { IoMdTrash } from 'react-icons/io';
import { on } from 'events';
import Link from 'next/link';

type RowObj = {
  name: string;
  email: string;
  status: 'Approved' | 'Disable' | 'Error';
  date: string;
  role: string;
  id: number;
};

const tableDataUser: RowObj[] = [
  {
    id: 1,
    name: 'User 1',
    email: 'user@fireshieldsec.com',
    role: 'USER',
    status: 'Approved',
    date: '12 Jan 2025',
  },
  {
    id: 1,
    name: 'User 2',
    email: 'user@fireshieldsec.com',
    role: 'ADMIN',
    status: 'Disable',
    date: '21 Feb 2025',
  },
  {
    id: 1,
    name: 'User 3',
    email: 'user@fireshieldsec.com',
    role: 'USER',
    status: 'Error',
    date: '13 Mar 2025',
  },
  {
    id: 1,
    name: 'User 4',
    email: 'user@fireshieldsec.com',
    role: 'ADMIN',
    status: 'Approved',
    date: '24 Oct 2024',
  },
];

const columnHelper = createColumnHelper<RowObj>();
const Tables = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  let defaultData = tableDataUser;
  const columns = [
    columnHelper.accessor('name', {
      id: 'name',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">NAME</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor('email', {
      id: 'email',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">EMAIL</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor('status', {
      id: 'status',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          STATUS
        </p>
      ),
      cell: (info) => (
        <div className="flex items-center">
          {info.getValue() === 'Approved' ? (
            <MdCheckCircle className="me-1 text-green-500 dark:text-green-300" />
          ) : info.getValue() === 'Disable' ? (
            <MdCancel className="me-1 text-red-500 dark:text-red-300" />
          ) : info.getValue() === 'Error' ? (
            <MdOutlineError className="me-1 text-amber-500 dark:text-amber-300" />
          ) : null}
          <p className="text-sm font-bold text-navy-700 dark:text-white">
            {info.getValue()}
          </p>
        </div>
      ),
    }),
    columnHelper.accessor('date', {
      id: 'date',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">DATE</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor('role', {
      id: 'role',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">ROLE</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor('id', {
      id: 'id',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          OPTIONS
        </p>
      ),
      cell: (info) => (
        <div className="flex items-center gap-x-1">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={option.onClick}
              className="linear flex items-center justify-center rounded-[20px] border-[1px] px-2 py-2 text-base text-gray-600 transition duration-200  hover:border-brand-500 hover:text-brand-500"
            >
              {option.icon}
            </button>
          ))}
        </div>
      ),
    }),
  ]; // eslint-disable-next-line

  const options = [
    {
      icon: <MdModeEditOutline />,
      label: 'Modifier',
      onClick: () => {
        undefined;
      },
    },
    {
      icon: <MdChangeCircle />,
      label: 'Activer',
      onClick: () => {
        undefined;
      },
    },
    {
      icon: <IoMdTrash />,
      label: 'Supprimer',
      onClick: () => {
        undefined;
      },
    },
  ];

  const [data, setData] = React.useState(() => [...defaultData]);
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });
  return (
    <div className="mt-3 h-full w-full">
      <Card extra={'w-full h-full px-6 pb-6 sm:overflow-x-auto'}>
        <div className="relative flex items-center justify-between pt-4">
          <div className="text-xl font-bold text-navy-700 dark:text-white">
            Liste des utilisateurs
          </div>
          <Link
            href="/admin/user/create"
            className={`rounded-xl bg-brand-500 p-2 px-4 text-base font-medium text-white transition duration-200 hover:bg-brand-600 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10`}
          >
            Ajouter un utilisateur
          </Link>
        </div>

        <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
          <table className="w-full">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr
                  key={headerGroup.id}
                  className="!border-px !border-gray-400"
                >
                  {headerGroup.headers.map((header) => {
                    return (
                      <th
                        key={header.id}
                        colSpan={header.colSpan}
                        onClick={header.column.getToggleSortingHandler()}
                        className="cursor-pointer border-b border-gray-200 pb-2 pr-4 pt-4 text-start dark:border-white/30"
                      >
                        <div className="items-center justify-between text-xs text-gray-200">
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                          {{
                            asc: '',
                            desc: '',
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>
            <tbody>
              {table
                .getRowModel()
                .rows.slice(0, 5)
                .map((row) => {
                  return (
                    <tr key={row.id}>
                      {row.getVisibleCells().map((cell) => {
                        return (
                          <td
                            key={cell.id}
                            className="min-w-[150px] border-white/0 py-3  pr-4"
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext(),
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Tables;
