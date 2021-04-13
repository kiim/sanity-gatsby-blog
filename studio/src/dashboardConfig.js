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
                    "607618dfa98e100e447e56ca",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-zrm898ho",
                  apiId: "1c087c5b-5603-485c-a96f-274ae6da8478",
                },
                {
                  buildHookId: "607618dfe7e35d1175b2010e",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-toax1k5e",
                  apiId: "54ae76fa-f356-4a6d-838f-1c3e159f9d4c",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/kiim/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-toax1k5e.netlify.app",
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
