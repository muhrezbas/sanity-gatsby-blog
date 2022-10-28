export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "635ba5c94a23931b1d6baf4f",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-hegfyjpr",
                  apiId: "52d54ae9-942a-49bc-8820-2fe7434cd69b",
                },
                {
                  buildHookId: "635ba5caee422c1960896bd0",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-429wh7pe",
                  apiId: "6f65044e-f68c-4922-8c06-6eb564fd6193",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/muhrezbas/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-429wh7pe.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
