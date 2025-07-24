const fs = require('fs');
const path = require('path');

// Manually extract routes from the config
const ROUTES = [
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
      { title: "Form Configuration", href: "/form-configuration" },
      { title: "Export Multiple Forms", href: "/export-multiple-forms" },
    ],
  },
  {
    title: "Integration",
    href: "/integration",
    noLink: true,
    items: [
      { title: "HTML Integration", href: "/html" },
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

function getRecurrsiveAllLinks(node) {
  const ans = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();

console.log('Expected routes and their file paths:');
page_routes.forEach(route => {
  const filePath = `contents/docs${route.href}/index.mdx`;
  const exists = fs.existsSync(filePath);
  console.log(`${route.href} -> ${filePath} [${exists ? 'EXISTS' : 'MISSING'}]`);
});