import React from "react";
import { Generic, Navbar } from "../subcomponents";
import Blogs from "../subcomponents/blogs";
import { Socials } from "../components";

const BlogsPage = (props) => {
  return (
    <>
      <Generic>
        <Navbar.TopContainer>
          <Navbar.TimelineBarLeft>
            <Navbar.Circle
              onClick={props.about}
              style={{
                backgroundColor: props.isLight
                  ? "var(--accent-violet)"
                  : "var(--accent-lime)",
              }}
            />
            <Navbar.Stick
              style={{
                border: `1px solid ${
                  props.isLight ? "var(--accent-violet)" : "var(--accent-lime)"
                }`,
              }}
            />
            <Navbar.Circle
              style={{
                backgroundColor: props.isLight
                  ? "var(--accent-violet)"
                  : "var(--accent-lime)",
              }}
              onClick={props.roadmap}
            />
            <Navbar.Stick
              style={{
                border: `1px solid ${
                  props.isLight ? "var(--accent-violet)" : "var(--accent-lime)"
                }`,
              }}
            />
            <Navbar.Circle
              onClick={props.team}
              style={{
                backgroundColor: props.isLight
                  ? "var(--accent-violet)"
                  : "var(--accent-lime)",
              }}
            />
            <Navbar.Stick
              style={{
                border: `1px solid ${
                  props.isLight ? "var(--accent-violet)" : "var(--accent-lime)"
                }`,
              }}
            />
            <Navbar.Circle
              onClick={props.projects}
              style={{
                backgroundColor: props.isLight
                  ? "var(--accent-violet)"
                  : "var(--accent-lime)",
              }}
            />
            <Navbar.Stick
              style={{
                border: `1px solid ${
                  props.isLight ? "var(--accent-violet)" : "var(--accent-lime)"
                }`,
              }}
            />
            <Navbar.Circle
              onClick={props.alumni}
              style={{
                backgroundColor: props.isLight
                  ? "var(--accent-violet)"
                  : "var(--accent-lime)",
              }}
            />
            <Navbar.Stick
              style={{
                border: `1px solid ${
                  props.isLight ? "var(--accent-violet)" : "var(--accent-lime)"
                }`,
              }}
            />
            <Navbar.Circle
              size={true}
              style={{
                backgroundColor: props.isLight
                  ? "var(--accent-violet)"
                  : "var(--accent-lime)",
              }}
            />
            <Navbar.Stick
              style={{
                border: `1px solid ${
                  props.isLight ? "var(--accent-violet)" : "var(--accent-lime)"
                }`,
              }}
            />
            <Navbar.Circle
              onClick={props.contribute}
              style={{
                backgroundColor: props.isLight
                  ? "var(--accent-violet)"
                  : "var(--accent-lime)",
              }}
            />
          </Navbar.TimelineBarLeft>
          <Socials isLight={props.isLight} />
        </Navbar.TopContainer>
        <Blogs.Container>
          <Blogs.TimeLineContainer>
            {/* Add timeline indicator here if needed */}
          </Blogs.TimeLineContainer>
          <Blogs.BlogsContentContainer>
            <Blogs.BlogHeader>
              <Blogs.BlogTitle>blogs</Blogs.BlogTitle>
              <Blogs.BlogSubtitle>
                Insights, ideas, and stories from the iDEA community
              </Blogs.BlogSubtitle>
            </Blogs.BlogHeader>
            <Blogs.BlogSummary>
              Discover our latest articles in a dedicated blog space. Click the
              button below to open the full blog endpoint and browse all
              published posts.
            </Blogs.BlogSummary>
            <Blogs.BrowseButton onClick={props.browseBlogs}>
              Browse blogs
            </Blogs.BrowseButton>
          </Blogs.BlogsContentContainer>
        </Blogs.Container>
      </Generic>
    </>
  );
};

export default BlogsPage;
