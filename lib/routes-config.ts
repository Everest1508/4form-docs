// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Admin Dashboard", href: "/admin-dashboard" },
    ],
  },
  {
    title: "Forms",
    href: "/forms",
    noLink: true,
    items: [
      { title: "Forms Overview", href: "/forms-overview" },
      { title: "Form Settings", href: "/form-settings" },
      { title: "Export Multiple Forms", href: "/export-multiple-forms" },
    ],
  },
  {
    title: "Integration",
    href: "/integration",
    noLink: true,
    items: [
      { title: "Integration", href: "/integration" },
    ],
  },
  {
    title: "Responses",
    href: "/responses",
    noLink: true,
    items: [
      { title: "Responses", href: "/responses" },
    ],
  },
  {
    title: "SMTP",
    href: "/smtp",
    noLink: true,
    items: [
      { title: "SMTP Settings", href: "/smtp-settings" },
      { title: "Create SMTP Setting", href: "/create-smtp-setting" },
    ],
  },
  {
    title: "Notifications",
    href: "/notifications",
    noLink: true,
    items: [
      { title: "Notifications", href: "/notifications" },
    ],
  },
  {
    title: "Server Actions",
    href: "/server-actions",
    noLink: true,
    items: [
      { title: "getSession", href: "/getSession" },
      { title: "getToken", href: "/getToken" },
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
