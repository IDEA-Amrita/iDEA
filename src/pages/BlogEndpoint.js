import React, { useEffect, useState } from "react";
import { Generic } from "../subcomponents";
import Blogs from "../subcomponents/blogs";
import blogs from "../data/blogs.json";

const categoryBlocks = [
  { id: "latest", label: "Latest" },
  { id: "product", label: "Product" },
  { id: "security", label: "Security" },
  { id: "mobile", label: "Mobile" },
];

const navItems = [
  { id: "main", label: "Main" },
  ...categoryBlocks,
  { id: "authors", label: "Authors" },
];

const BlogEndpoint = () => {
  const [selectedTab, setSelectedTab] = useState("main");
  const sortedBlogs = [...blogs].sort((a, b) => b.id - a.id);
  const featuredBlog = sortedBlogs[0];

  const categoryCollections = {
    latest: sortedBlogs.slice(0, 4),
    product: sortedBlogs
      .filter((blog) => blog.category === "Product")
      .slice(0, 4),
    security: sortedBlogs
      .filter((blog) => blog.category === "Security")
      .slice(0, 4),
    mobile: sortedBlogs
      .filter((blog) => blog.category === "Mobile")
      .slice(0, 4),
  };

  const authorProfiles = Array.from(
    new Map(
      sortedBlogs.map((blog) => [
        blog.author,
        {
          name: blog.author,
          title:
            blog.author === "Daniel Marin"
              ? "Founder & CEO"
              : blog.author === "Sam Kamani"
              ? "Product Leader"
              : blog.author === "Maggie Love"
              ? "Design Director"
              : blog.author === "Daniel Mcglynn"
              ? "Security Lead"
              : "Contributor",
          description:
            blog.author === "Daniel Marin"
              ? "Leader of iDEA, building community-centered product experiences."
              : blog.author === "Sam Kamani"
              ? "Product and growth strategist focused on user-led design."
              : blog.author === "Maggie Love"
              ? "Design systems expert who builds trust through polished interface work."
              : blog.author === "Daniel Mcglynn"
              ? "Security-minded storyteller helping teams think beyond launch."
              : "Contributor to iDEA content and community conversations.",
        },
      ])
    ).values()
  ).slice(0, 4);

  const scrollToSection = (sectionId) => {
    setSelectedTab(sectionId);
    window.location.hash = `#/blogs#${sectionId}`;
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    if (sectionId === "main") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const target = window.location.hash.split("#").pop();
    if (target && target !== "/blogs") {
      setSelectedTab(target);
      const section = document.getElementById(target);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }
    setSelectedTab("main");
  }, []);

  const renderBlogCard = (blog) => (
    <Blogs.BlogCard key={blog.id}>
      <Blogs.BlogCardHeader>
        <Blogs.BlogCardImage src={blog.imageUrl} alt={blog.title} />
        <Blogs.BlogCardHeaderContent>
          <Blogs.BlogCardTitle>{blog.title}</Blogs.BlogCardTitle>
          <Blogs.BlogCardSubtitle>{blog.subtitle}</Blogs.BlogCardSubtitle>
          <Blogs.BlogCardAuthor>
            {blog.category} · By {blog.author}
          </Blogs.BlogCardAuthor>
        </Blogs.BlogCardHeaderContent>
      </Blogs.BlogCardHeader>
      <Blogs.BlogCardContent>
        <Blogs.BlogCardDescription>{blog.content}</Blogs.BlogCardDescription>
        <Blogs.BlogDate>{blog.date}</Blogs.BlogDate>
      </Blogs.BlogCardContent>
    </Blogs.BlogCard>
  );

  const renderCategorySections = () => (
    <>
      {categoryBlocks.map((category) => (
        <Blogs.Section key={category.id} id={category.id}>
          <Blogs.SectionHeader>
            <Blogs.SectionTitle>{category.label}</Blogs.SectionTitle>
            <Blogs.SectionSubtitle>
              Latest from {category.label.toLowerCase()}.
            </Blogs.SectionSubtitle>
          </Blogs.SectionHeader>
          <Blogs.SectionRow>
            {categoryCollections[category.id].map(renderBlogCard)}
          </Blogs.SectionRow>
        </Blogs.Section>
      ))}
    </>
  );

  const renderAuthorsPage = () => (
    <Blogs.AuthorsPage id="authors">
      <Blogs.SectionHeader>
        <Blogs.SectionTitle>Authors</Blogs.SectionTitle>
        <Blogs.SectionSubtitle>
          Meet the voices behind our content.
        </Blogs.SectionSubtitle>
      </Blogs.SectionHeader>
      <Blogs.AuthorsGrid>
        {authorProfiles.map((author) => (
          <Blogs.AuthorProfileCard key={author.name}>
            <Blogs.AuthorProfileTop>
              <Blogs.AuthorAvatar>{author.name.charAt(0)}</Blogs.AuthorAvatar>
              <div>
                <Blogs.AuthorName>{author.name}</Blogs.AuthorName>
                <Blogs.AuthorLabel>{author.title}</Blogs.AuthorLabel>
              </div>
            </Blogs.AuthorProfileTop>
            <Blogs.AuthorDescription>
              {author.description}
            </Blogs.AuthorDescription>
            <Blogs.AuthorProfileActions>
              <Blogs.AuthorViewButton type="button">
                View articles
              </Blogs.AuthorViewButton>
              <Blogs.AuthorLinkButton type="button">
                Visit profile
              </Blogs.AuthorLinkButton>
            </Blogs.AuthorProfileActions>
          </Blogs.AuthorProfileCard>
        ))}
      </Blogs.AuthorsGrid>
    </Blogs.AuthorsPage>
  );

  return (
    <>
      <Generic>
        <Blogs.Container>
          <Blogs.TimeLineContainer />
          <Blogs.BlogsContentContainer>
            <Blogs.BlogHeader id="main">
              <Blogs.BlogTitle>browse blogs</Blogs.BlogTitle>
              <Blogs.BlogSubtitle>
                Explore the latest articles and stories from the iDEA community.
              </Blogs.BlogSubtitle>
            </Blogs.BlogHeader>

            <Blogs.CategoryNav>
              {navItems.map((item) => (
                <Blogs.CategoryPill
                  key={item.id}
                  type="button"
                  active={selectedTab === item.id}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </Blogs.CategoryPill>
              ))}
            </Blogs.CategoryNav>

            {selectedTab !== "authors" && (
              <Blogs.FeaturedSection>
                <Blogs.FeaturedLabel>Featured story</Blogs.FeaturedLabel>
                <Blogs.FeaturedCard>
                  <Blogs.FeaturedImage
                    src={featuredBlog.imageUrl}
                    alt={featuredBlog.title}
                  />
                  <Blogs.FeaturedContent>
                    <Blogs.FeaturedCategory>
                      {featuredBlog.category}
                    </Blogs.FeaturedCategory>
                    <Blogs.FeaturedTitle>
                      {featuredBlog.title}
                    </Blogs.FeaturedTitle>
                    <Blogs.FeaturedSubtitle>
                      {featuredBlog.subtitle}
                    </Blogs.FeaturedSubtitle>
                    <Blogs.FeaturedMeta>
                      {featuredBlog.author} / {featuredBlog.date}
                    </Blogs.FeaturedMeta>
                    <Blogs.FeaturedDescription>
                      {featuredBlog.content}
                    </Blogs.FeaturedDescription>
                    <Blogs.FeaturedAction
                      onClick={() => (window.location.hash = "#/")}
                    >
                      Back to home
                    </Blogs.FeaturedAction>
                  </Blogs.FeaturedContent>
                </Blogs.FeaturedCard>
              </Blogs.FeaturedSection>
            )}

            <Blogs.TabContent key={selectedTab}>
              {selectedTab === "authors"
                ? renderAuthorsPage()
                : renderCategorySections()}
            </Blogs.TabContent>
          </Blogs.BlogsContentContainer>
        </Blogs.Container>
      </Generic>
    </>
  );
};

export default BlogEndpoint;
