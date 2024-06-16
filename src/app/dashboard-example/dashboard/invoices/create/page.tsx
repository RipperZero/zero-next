import { fetchCustomers } from "../../../lib/data";
import { Breadcrumbs, CreateInvoiceForm } from "../../../ui";

type CreatePageProps = {
  params?: {};
  searchParams?: {};
};

const CreatePage: AsyncFC<CreatePageProps> = async () => {
  const customers = await fetchCustomers();
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
            label: "Create Invoice",
            href: "/dashboard-example/dashboard/invoices/create",
            active: true,
          },
        ]}
      />
      <CreateInvoiceForm customers={customers} />
    </main>
  );
  // #endregion render functions end
};

export default CreatePage;
