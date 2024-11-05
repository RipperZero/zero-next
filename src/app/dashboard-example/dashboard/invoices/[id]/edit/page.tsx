import { Metadata } from "next";
import { notFound } from "next/navigation";

import { FC } from "react";

import { fetchCustomers, fetchInvoiceById } from "../../../../lib/data";
import { Breadcrumbs, EditInvoiceForm } from "../../../../ui/";

const metadata: Metadata = {
  title: "Edit Invoice",
};

type EditPageProps = {
  /**
   * An object containing the [dynamic route parameters](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
   * from the root segment down to that page.
   *
   * @see [Page Params → optional](https://nextjs.org/docs/app/api-reference/file-conventions/page#params-optional)
   */
  params: Promise<{ id?: string }>;
  /**
   * An object containing the search parameters of the current URL.
   *
   * @see [Layout Searchparams → optional](https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional)
   */
  searchParams: Promise<unknown>;
};

const EditPage: FC<EditPageProps> = async ({ params }) => {
  const id = (await params).id ?? "";

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
            // @ts-expect-error:next-line
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
