import { FC, Suspense } from "react";

// import Pagination from "@/app/ui/invoices/pagination";
// import Table from "@/app/ui/invoices/table";
import { CreateInvoice, InvoicesTableSkeleton, Search } from "../../ui";

type InvoicesPageProps = {
  params: {};
  searchParams?: {
    query?: string;
    page?: string;
  };
};

const InvoicesPage: FC<InvoicesPageProps> = ({ searchParams }) => {
  const query = searchParams?.query ?? "";
  const currentPage = Number(searchParams?.page) || 1;
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
      {/*  <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
    <Table query={query} currentPage={currentPage} />
  </Suspense> */}
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  );
  // #endregion render functions end
};

export default InvoicesPage;
