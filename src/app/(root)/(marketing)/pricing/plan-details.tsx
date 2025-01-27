import { Fragment } from "react";

import { cx } from "class-variance-authority";

import { Icons } from "@/components/icons";

type FixedPrice = string;

interface VariablePrice {
  monthly: string;
  annually: string;
}

interface Plan {
  name: string;
  price: FixedPrice | VariablePrice;
  description: string;
  capacity: string[];
  features: string[];
  isStarter: boolean;
  isRecommended: boolean;
  buttonText: string;
  buttonLink: string;
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$0",
    description:
      "For individuals and freelancers that need a scalable database.",
    capacity: ["Up to 5 users, 1 admin", "1 workspace"],
    features: [
      "Up to 1000/req. per day",
      "5 GB max storage",
      "Community Slack Support",
    ],
    isStarter: true,
    isRecommended: false,
    buttonText: "Get started",
    buttonLink: "#",
  },
  {
    name: "Teams",
    price: { monthly: "$49", annually: "$39" },
    description: "For small teams and start-ups that need a scalable database.",
    capacity: ["Up to 100 users, 3 admins", "Up to 20 workspaces"],
    features: [
      "Unlimited requests",
      "$0.07 per processed GB",
      "$0.34 per stored GB",
      "Slack Connect",
    ],
    isStarter: false,
    isRecommended: false,
    buttonText: "Start 14-day trial",
    buttonLink: "#",
  },
  {
    name: "Business",
    price: { monthly: "$99", annually: "$79" },
    description:
      "For larger teams that need more advanced controls and features.",
    capacity: ["Up to 500 users, 10 admins", "Unlimited workspaces"],
    features: [
      "Unlimited requests",
      "Volume discount",
      "$0.03 per processed GB",
      "$0.1 per stored GB",
      "Single Sign-On (SSO)",
    ],
    isStarter: false,
    isRecommended: true,
    buttonText: "Start 14-day trial",
    buttonLink: "#",
  },
];

interface Feature {
  name: string;
  plans: Record<string, boolean | string>;
  tooltip?: string;
}

interface Section {
  name: string;
  features: Feature[];
}

const sections: Section[] = [
  {
    name: "Workspace Features",
    features: [
      {
        name: "Email notifications & webhooks",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Starter: true, Teams: true, Business: true },
      },
      {
        name: "Workspaces",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Starter: "5", Teams: "10", Business: "Unlimited" },
      },
      {
        name: "Storage",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: {
          Starter: "$0.65 per stored GB",
          Teams: "$0.34 per stored GB",
          Business: "Customized",
        },
      },
      {
        name: "Seats",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: {
          Starter: "5 users",
          Teams: "Up to 20 users",
          Business: "Unlimited",
        },
      },
    ],
  },
  {
    name: "Automation",
    features: [
      {
        name: "Service accounts",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Starter: true, Teams: true, Business: true },
      },
      {
        name: "Admin API",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Teams: true, Business: true },
      },
      {
        name: "No-Code workflow builder",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Starter: "Limited", Teams: "Standard", Business: "Enhanced" },
      },
    ],
  },
  {
    name: "Analytics",
    features: [
      {
        name: "Analytics retention",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Starter: "7 days", Teams: "1 year", Business: "Unlimited" },
      },
      {
        name: "Anomaly detection",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Teams: true, Business: true },
      },
      {
        name: "Custom report builder",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Business: true },
      },
    ],
  },
  {
    name: "Support",
    features: [
      {
        name: "Slack",
        plans: {
          Starter: "Community",
          Teams: "Connect",
          Business: "Dedicated agent",
        },
      },
      {
        name: "Email",
        plans: { Starter: "2-4 days", Teams: "1-2 days", Business: "Priority" },
      },
    ],
  },
];

// const isVariablePrice = (
//   price: FixedPrice | VariablePrice
// ): price is VariablePrice => {
//   return (price as VariablePrice).monthly !== undefined;
// };

export default function PlanDetails() {
  return (
    <section className="hidden px-6 py-24 lg:block lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        {/* lg+ */}
        <div className="relative">
          <table className="w-full table-fixed border-separate border-spacing-0 text-left">
            <caption className="sr-only">Pricing plan comparison</caption>
            <colgroup>
              <col className="w-2/5" />
              <col className="w-1/5" />
              <col className="w-1/5" />
              <col className="w-1/5" />
            </colgroup>
            <thead className="sticky top-0">
              <tr>
                <th
                  scope="col"
                  className="border-b border-gray-100 bg-white py-8"
                ></th>
                {plans.map((plan) => (
                  <th
                    key={plan.name}
                    scope="col"
                    className="border-b border-gray-100 bg-white px-6 py-8"
                  >
                    <div className="font-semibold leading-7 text-gray-950">
                      {plan.name}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sections.map((section, sectionIdx) => (
                <Fragment key={section.name}>
                  <tr>
                    <th
                      scope="colgroup"
                      colSpan={4}
                      className={cx(
                        sectionIdx === 0 ? "pt-14" : "pt-10",
                        "border-b border-gray-100 pb-4 text-base font-semibold leading-6 text-gray-950"
                      )}
                    >
                      {section.name}
                    </th>
                  </tr>
                  {section.features.map((feature) => (
                    <tr
                      key={feature.name}
                      className="transition hover:bg-gray-50"
                    >
                      <th
                        scope="row"
                        className="flex items-center gap-2 border-b border-gray-100 py-4 text-sm font-normal leading-6 text-gray-950"
                      >
                        <span>{feature.name}</span>
                      </th>
                      {plans.map((plan) => (
                        <td
                          key={plan.name}
                          className="border-b border-gray-100 px-6 py-4 lg:px-8"
                        >
                          {typeof feature.plans[plan.name] === "string" ? (
                            <div className="text-sm leading-6 text-gray-600">
                              {feature.plans[plan.name]}
                            </div>
                          ) : (
                            <>
                              {feature.plans[plan.name] === true ? (
                                <Icons.check aria-hidden="true" />
                              ) : (
                                <Icons.minus aria-hidden="true" />
                              )}

                              <span className="sr-only">
                                {feature.plans[plan.name] === true
                                  ? "Included"
                                  : "Not included"}{" "}
                                in {plan.name}
                              </span>
                            </>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
        {/* end lg+ */}
      </div>
    </section>
  );
}
