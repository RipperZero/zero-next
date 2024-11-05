import { Route } from "next";
import { Link } from "next-view-transitions";

import { FC } from "react";

import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";

import { deleteInvoice } from "../../lib/actions";

const CreateInvoice: FC = () => {
  return (
    <Link
      // href="/dashboard-example/dashboard/invoices/create"
      href="/dashboard-example/dashboard"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Invoice</span>{" "}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
};

const UpdateInvoice: FC<{ id: string }> = ({ id }) => {
  return (
    <Link
      href={`/dashboard-example/dashboard/invoices/${id}/edit` as Route}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
};

const DeleteInvoice: FC<{ id: string }> = ({ id }) => {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);

  return (
    <form
      action={(_formData) => {
        deleteInvoiceWithId();
      }}
    >
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
};

export { CreateInvoice, UpdateInvoice, DeleteInvoice };
