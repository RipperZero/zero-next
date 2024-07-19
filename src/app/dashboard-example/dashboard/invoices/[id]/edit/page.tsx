import { Metadata } from "next";
import { notFound } from "next/navigation";

import { FC } from "react";

import { fetchCustomers, fetchInvoiceById } from "../../../../lib/data";
import { Breadcrumbs, EditInvoiceForm } from "../../../../ui/";

const metadata: Metadata = {
  title: "Edit Invoice",
};

type EditPageProps = {
  params?: {
    id: string;
  };
  searchParams?: {};
};

const EditPage: FC<EditPageProps> = async ({ params }) => {
  const id = params?.id ?? "";

  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  if (invoice === undefined) {
    notFound();
  }

  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard-example/dashboard/invoices" },
          {
            label: "Edit Invoice",
            // @ts-ignore:next-line
            href: `/dashboard-example/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditInvoiceForm invoice={invoice} customers={customers} />
    </main>
  );
  // #endregion render functions end
};

export default EditPage;
export { metadata };
