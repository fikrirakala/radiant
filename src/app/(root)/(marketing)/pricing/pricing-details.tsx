import { Icons } from "@/components/icons";

const supports = [
  {
    support: "Email support",
    starter: true,
    growth: true,
    enterprise: true,
  },
  {
    support: "24/7 call center support",
    starter: false,
    growth: true,
    enterprise: true,
  },
  {
    support: "Dedicated account manager",
    starter: 1,
    growth: 10,
    enterprise: "unlimited",
  },
];

export default function PricingDetails() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        {/* support table */}
        <table className="w-full text-left">
          <thead>
            <tr>
              <th
                scope="colgroup"
                className="w-2/5 rounded-s-lg bg-gray-50 p-4 text-sm/6 font-semibold"
              >
                Support
              </th>
              <th
                scope="colgroup"
                className="w-1/5 bg-gray-50 p-4 text-sm/6 font-semibold"
              >
                Starter
              </th>
              <th
                scope="colgroup"
                className="w-1/5 bg-gray-50 p-4 text-sm/6 font-semibold"
              >
                Growth
              </th>
              <th
                scope="colgroup"
                className="w-1/5 rounded-e-lg bg-gray-50 p-4 text-sm/6 font-semibold"
              >
                Enterprise
              </th>
            </tr>
          </thead>
          <tbody>
            {supports.map((item, i) => (
              <tr key={i} className="border-b border-gray-100 last:border-none">
                <th
                  scope="row"
                  className="w-2/5 p-4 text-sm font-normal text-gray-600"
                >
                  {item.support}
                </th>
                <td className="w-1/5 p-4 text-sm">
                  {typeof item.starter !== "boolean" ? (
                    item.starter
                  ) : item.starter === true ? (
                    <Icons.check />
                  ) : (
                    <Icons.minus />
                  )}
                </td>
                <td className="w-1/5 p-4 text-sm">
                  {typeof item.growth !== "boolean" ? (
                    item.growth
                  ) : item.growth === true ? (
                    <Icons.check />
                  ) : (
                    <Icons.minus />
                  )}
                </td>
                <td className="w-1/5 p-4 text-sm/6">
                  {typeof item.enterprise !== "boolean" ? (
                    item.enterprise
                  ) : item.enterprise === true ? (
                    <Icons.check />
                  ) : (
                    <Icons.minus />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* end support table */}

        {/* <!-- xs to lg --> */}
        <div className="space-y-24 lg:hidden">
          <section>
            <div className="mb-4 px-4">
              <h2 className="text-lg font-medium leading-6 text-gray-800">
                Free
              </h2>
            </div>
            <table className="w-full">
              <caption className="border-t border-gray-200 bg-gray-50 px-4 py-3 text-start text-sm font-bold text-gray-800">
                Financial data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Open/High/Low/Close
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Price-volume difference indicator
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Minus --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- Minus --> */}
                    <span className="sr-only">No</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full">
              <caption className="border-t border-gray-200 bg-gray-50 px-4 py-3 text-start text-sm font-bold text-gray-800">
                On-chain data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Network growth
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Minus --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- Minus --> */}
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Average token age consumed
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Exchange flow
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Minus --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- Minus --> */}
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Total ERC20 exchange funds flow
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Minus --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- Minus --> */}
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Transaction volume
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Total circulation (beta)
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Minus --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- Minus --> */}
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Velocity of tokens (beta)
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    ETH gas used
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Minus --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- Minus --> */}
                    <span className="sr-only">No</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full">
              <caption className="border-t border-gray-200 bg-gray-50 px-4 py-3 text-start text-sm font-bold text-gray-800">
                Social data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Dev activity
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Minus --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- Minus --> */}
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Topic search
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Relative social dominance
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Minus --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- Minus --> */}
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Total social volume
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Minus --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- Minus --> */}
                    <span className="sr-only">No</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <div className="mb-4 px-4">
              <h2 className="text-lg font-medium leading-6 text-gray-800">
                Startup
              </h2>
            </div>
            <table className="w-full">
              <caption className="border-t border-gray-200 bg-gray-50 px-4 py-3 text-start text-sm font-bold text-gray-800">
                Financial data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Open/High/Low/Close
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Price-volume difference indicator
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full">
              <caption className="border-t border-gray-200 bg-gray-50 px-4 py-3 text-start text-sm font-bold text-gray-800">
                On-chain data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Network growth
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Minus --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- Minus --> */}
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Average token age consumed
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Minus --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- Minus --> */}
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Exchange flow
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Minus --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- Minus --> */}
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Total ERC20 exchange funds flow
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Minus --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- Minus --> */}
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Transaction volume
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Total circulation (beta)
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Velocity of tokens (beta)
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    ETH gas used
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full">
              <caption className="border-t border-gray-200 bg-gray-50 px-4 py-3 text-start text-sm font-bold text-gray-800">
                Social data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Dev activity
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Topic search
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Relative social dominance
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Minus --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- Minus --> */}
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Total social volume
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <div className="mb-4 px-4">
              <h2 className="text-lg font-medium leading-6 text-gray-800">
                Team
              </h2>
            </div>
            <table className="w-full">
              <caption className="border-t border-gray-200 bg-gray-50 px-4 py-3 text-start text-sm font-bold text-gray-800">
                Financial data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Open/High/Low/Close
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Price-volume difference indicator
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full">
              <caption className="border-t border-gray-200 bg-gray-50 px-4 py-3 text-start text-sm font-bold text-gray-800">
                On-chain data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Network growth
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Average token age consumed
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Exchange flow
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Total ERC20 exchange funds flow
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Transaction volume
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Total circulation (beta)
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Velocity of tokens (beta)
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Minus --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- Minus --> */}
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    ETH gas used
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full">
              <caption className="border-t border-gray-200 bg-gray-50 px-4 py-3 text-start text-sm font-bold text-gray-800">
                Social data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Dev activity
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Minus --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- Minus --> */}
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Topic search
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Relative social dominance
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Total social volume
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Minus --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- Minus --> */}
                    <span className="sr-only">No</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <div className="mb-4 px-4">
              <h2 className="text-lg font-medium leading-6 text-gray-800">
                Enterprise
              </h2>
            </div>
            <table className="w-full">
              <caption className="border-t border-gray-200 bg-gray-50 px-4 py-3 text-start text-sm font-bold text-gray-800">
                Financial data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Open/High/Low/Close
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Price-volume difference indicator
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full">
              <caption className="border-t border-gray-200 bg-gray-50 px-4 py-3 text-start text-sm font-bold text-gray-800">
                On-chain data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Network growth
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Average token age consumed
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Exchange flow
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Total ERC20 exchange funds flow
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Transaction volume
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Total circulation (beta)
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Velocity of tokens (beta)
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    ETH gas used
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full">
              <caption className="border-t border-gray-200 bg-gray-50 px-4 py-3 text-start text-sm font-bold text-gray-800">
                Social data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Dev activity
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Topic search
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Relative social dominance
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <th
                    className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
                    scope="row"
                  >
                    Total social volume
                  </th>
                  <td className="py-5 pe-4">
                    {/* <!-- Check --> */}
                    <svg
                      className="ms-auto size-5 shrink-0 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
        {/* <!-- End xs to lg --> */}
      </div>
    </section>
  );
}
