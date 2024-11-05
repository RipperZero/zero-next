import { Suspense } from "react";

import { fetchInvoicesPages } from "../../lib/data";
import {
  CreateInvoice,
  InvoicesTable,
  InvoicesTableSkeleton,
  Pagination,
  Search,
} from "../../ui";

type InvoicesPageProps = {
  /**
   * An object containing the [dynamic route parameters](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
   * from the root segment down to that page.
   *
   * @see [Page Params → optional](https://nextjs.org/docs/app/api-reference/file-conventions/page#params-optional)
   */
  params: Promise<unknown>;
  /**
   * An object containing the search parameters of the current URL.
   *
   * @see [Layout Searchparams → optional](https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional)
   */
  searchParams: Promise<{
    query?: string;
    page?: string;
  }>;
};

const InvoicesPage: AsyncFC<InvoicesPageProps> = async ({ searchParams }) => {
  const { page: searchParamsPage, query: searchParamsQuery } =
    await searchParams;

  const query = searchParamsPage ?? "";
  const currentPage = Number(searchParamsQuery) || 1;

  const totalPages = await fetchInvoicesPages(query);
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
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <InvoicesTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
  // #endregion render functions end
};

export default InvoicesPage;
