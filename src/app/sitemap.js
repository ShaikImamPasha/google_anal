
export async function sitemap(props) {
  console.log("log1",props);
  const resDatat=await fetch('https://jsonplaceholder.typicode.com/todos/3')
      .then(response => response.json())
      console.log("log",resDatat);
      
  const staticUrls = [
    {
      url: "http://localhost:8080/",
      lastModified: new Date().toISOString(),
      changefreq: "daily",
      priority: 1.0,
    },
    {
      url: "http://localhost:8080/about",
      lastModified: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: "http://localhost:8080/contact",
      lastModified: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.7,
    },
  ];

  // Fetch dynamic blog data
  let dynamicUrls = [resDatat].map((res)=>{
    return {
      url: `http://localhost:8080/blog/${res.id}`,
      
    }
  });

  try {
    // const response = await common_service.GET_REQUEST(`${baseUrl}/${endpoints.blogs.getAllBlogs}`);
    // const blogs = response?.data?.data || []; // Adjust based on your API response structure

    // dynamicUrls = blogs.map((blog) => ({
    //   url: `http://localhost:8080/blog/${blog.slug}`,
    //   lastModified: new Date(blog.updatedAt || blog.createdAt).toISOString(),
    //   changefreq: "weekly",
    //   priority: 0.8,
    // }));
  } catch (error) {
    console.error("Error fetching blog data for sitemap:", error);
  }

  // Combine static and dynamic URLs
  const allUrls = [...staticUrls, ...dynamicUrls];

  

  return allUrls
}

export default sitemap;
