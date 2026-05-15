import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;

  * {
    box-sizing: border-box;
  }
`;

export const TimeLineContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const BlogsContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 3%;
  gap: 3rem;
  overflow: visible;

  @media (max-width: 820px) {
    gap: 2rem;
  }
`;

export const BlogHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
`;

export const BlogTitle = styled.h1`
  font-family: "PP Neue Machina";
  font-style: normal;
  font-weight: 600;
  font-size: 72px;
  color: var(--accent-violet);
  text-transform: lowercase;
  letter-spacing: -0.02em;
  line-height: 1;
  cursor: pointer;
  margin: 0;

  @media (max-width: 820px) {
    font-size: 56px;
  }
  @media (max-width: 654px) {
    font-size: 40px;
  }
`;

export const BlogSubtitle = styled.h2`
  margin-top: 12px;
  font-family: "PP Neue Machina";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  color: var(--ink-soft);
  line-height: 1.5;
  max-width: 600px;

  @media (max-width: 820px) {
    font-size: 18px;
  }
  @media (max-width: 654px) {
    font-size: 15px;
  }
`;

export const BlogSummary = styled.p`
  margin: 24px auto 0;
  max-width: 700px;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: var(--ink-soft);
  line-height: 1.7;
  text-align: center;

  @media (max-width: 820px) {
    font-size: 14px;
    margin-top: 20px;
  }
`;

export const BrowseButton = styled.button`
  margin: 2rem auto 0;
  display: block;
  border: none;
  background: var(--accent-violet);
  color: white;
  font-family: "PP Neue Machina";
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 14px 24px;
  border-radius: var(--radius-pill);
  cursor: pointer;
  transition: transform 180ms ease, background 180ms ease;

  &:hover {
    background: var(--accent-lime);
    transform: translateY(-1px);
  }
`;

export const CategoryNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 2rem auto 0;
  width: 100%;
  max-width: 1400px;
  padding: 0;
`;

export const CategoryPill = styled.button`
  padding: 12px 22px;
  border: 1px solid var(--ink-soft);
  border-radius: 999px;
  color: ${(props) => (props.active ? "white" : "var(--ink)")};
  background: ${(props) =>
    props.active ? "var(--accent-violet)" : "transparent"};
  font-family: "PP Neue Machina";
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-decoration: none;
  transition: all 200ms ease;
  cursor: pointer;

  &:hover {
    background: var(--accent-violet);
    color: white;
    border-color: transparent;
  }
`;

export const TabContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  opacity: 0;
  animation: fadeInContent 0.5s ease forwards;

  @keyframes fadeInContent {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const FeaturedSection = styled.section`
  width: 100%;
  max-width: 1400px;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2.5rem auto 0;
`;

export const FeaturedLabel = styled.span`
  font-size: 12px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--muted);
`;

export const FeaturedCard = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2rem;
  width: 100%;
  background: var(--card-cream);
  border: 1.5px solid var(--ink);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-nb-md);

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

export const FeaturedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FeaturedContent = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  @media (max-width: 820px) {
    padding: 2rem;
  }
`;

export const FeaturedCategory = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--muted);
`;

export const FeaturedTitle = styled.h2`
  font-family: "PP Neue Machina";
  font-weight: 700;
  font-size: 48px;
  line-height: 1.05;
  margin: 0;
  color: var(--ink);

  @media (max-width: 820px) {
    font-size: 34px;
  }
`;

export const FeaturedSubtitle = styled.h3`
  margin: 0;
  font-size: 20px;
  color: var(--ink-soft);
  line-height: 1.55;

  @media (max-width: 820px) {
    font-size: 18px;
  }
`;

export const FeaturedMeta = styled.span`
  font-size: 12px;
  color: var(--muted);
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const FeaturedDescription = styled.p`
  font-size: 16px;
  color: var(--ink-soft);
  line-height: 1.75;
  margin: 0;

  @media (max-width: 820px) {
    font-size: 15px;
  }
`;

export const FeaturedAction = styled.button`
  margin-top: 1rem;
  width: fit-content;
  background: var(--accent-violet);
  color: white;
  border: none;
  border-radius: 999px;
  padding: 14px 28px;
  font-family: "PP Neue Machina";
  font-size: 13px;
  cursor: pointer;
  transition: background 200ms ease, transform 200ms ease;

  &:hover {
    background: var(--accent-lime);
    transform: translateY(-1px);
  }
`;

export const Section = styled.section`
  width: 100%;
  max-width: 1400px;
  margin: 3rem auto 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SectionTitle = styled.h2`
  font-family: "PP Neue Machina";
  font-size: 34px;
  color: var(--ink);
  margin: 0;

  @media (max-width: 820px) {
    font-size: 28px;
  }
`;

export const SectionSubtitle = styled.p`
  margin: 0;
  color: var(--ink-soft);
  font-size: 15px;
  line-height: 1.6;
`;

export const SectionRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const AuthorSection = styled.section`
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 3rem;
`;

export const AuthorRow = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  width: 100%;
`;

export const AuthorCard = styled.div`
  min-width: 220px;
  padding: 1.5rem;
  background: var(--card-cream);
  border: 1.5px solid var(--ink);
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const AuthorName = styled.h3`
  margin: 0;
  font-family: "PP Neue Machina";
  font-size: 20px;
  color: var(--ink);
`;

export const AuthorLabel = styled.span`
  color: var(--muted);
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
`;

export const AuthorsPage = styled.section`
  width: 100%;
  max-width: 1400px;
  margin: 3rem auto 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const AuthorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const AuthorProfileCard = styled.div`
  padding: 2rem;
  background: var(--card-cream);
  border: 1.5px solid var(--ink);
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const AuthorProfileTop = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const AuthorAvatar = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: var(--ink);
  color: white;
  display: grid;
  place-items: center;
  font-family: "PP Neue Machina";
  font-size: 24px;
  font-weight: 700;
`;

export const AuthorDescription = styled.p`
  margin: 0;
  color: var(--ink-soft);
  line-height: 1.7;
  font-size: 15px;
`;

export const AuthorProfileActions = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const AuthorViewButton = styled.button`
  padding: 12px 18px;
  border: 1.5px solid var(--ink);
  border-radius: var(--radius-pill);
  background: transparent;
  color: var(--ink);
  font-family: "PP Neue Machina";
  text-transform: uppercase;
  letter-spacing: 0.08em;
  cursor: pointer;
  transition: transform 200ms ease, background 200ms ease;

  &:hover {
    background: var(--accent-violet);
    color: white;
    transform: translateY(-1px);
  }
`;

export const AuthorLinkButton = styled.button`
  padding: 12px 18px;
  border: 1.5px solid transparent;
  border-radius: var(--radius-pill);
  background: var(--accent-violet);
  color: white;
  font-family: "PP Neue Machina";
  text-transform: uppercase;
  letter-spacing: 0.08em;
  cursor: pointer;
  transition: transform 200ms ease, background 200ms ease;

  &:hover {
    background: var(--accent-lime);
    color: var(--ink);
    transform: translateY(-1px);
  }
`;

export const SlideshowContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1400px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const BlogsNavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1600px;
  padding: 0 1rem;

  @media (max-width: 820px) {
    padding: 0 0.5rem;
  }
`;

export const BlogsGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1400px;
  flex: 1;
  transition: all 0.5s ease-in-out;
  transform: translateX(0);
  opacity: 1;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    max-width: 1100px;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    max-width: 800px;
  }

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    max-width: 100%;
  }
`;

export const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 32px;
  color: var(--accent-violet);
  transition: all 300ms ease-in-out;
  padding: 12px;
  display: ${(props) => (props.disabled ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  flex-shrink: 0;

  &:hover {
    transform: scale(1.15);
    color: var(--accent-lime);
  }

  @media (max-width: 820px) {
    font-size: 24px;
    padding: 8px;
  }
`;

export const BlogCard = styled.div`
  min-height: 320px;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  position: relative;
  background-color: var(--card-cream);
  border: 1.5px solid var(--ink);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-nb-md);
  transition: all 300ms ease-in-out;
  overflow: hidden;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease-out forwards;

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-nb-lg);
  }

  &:after {
    position: absolute;
    background: var(--line);
    width: 110%;
    height: 1px;
    content: "";
    top: 25%;
    left: -5%;
  }

  @media (max-width: 820px) {
    min-height: 300px;
    padding: 16px;
  }
  @media (max-width: 654px) {
    min-height: 280px;
    padding: 14px;
  }
`;

export const BlogCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  gap: 12px;
  margin-bottom: 16px;
`;

export const BlogCardImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: var(--radius-md);
  border: 1px solid var(--line);

  @media (max-width: 820px) {
    height: 100px;
  }
  @media (max-width: 654px) {
    height: 80px;
  }
`;

export const BlogCardHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  justify-content: center;
  gap: 6px;
`;

export const BlogCardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  gap: 12px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BlogCardTitle = styled.h1`
  font-family: "PP Neue Machina";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: var(--accent-violet);
  text-transform: lowercase;
  letter-spacing: -0.015em;
  cursor: pointer;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 820px) {
    font-size: 13px;
  }
  @media (max-width: 654px) {
    font-size: 12px;
  }
`;

export const BlogCardSubtitle = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: var(--ink-soft);
  cursor: pointer;
  margin: 0;
  line-height: 1.3;

  @media (max-width: 820px) {
    font-size: 11px;
  }
  @media (max-width: 654px) {
    font-size: 10px;
  }
`;

export const BlogCardAuthor = styled.h4`
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  color: var(--muted);
  cursor: pointer;
  margin: 0;

  @media (max-width: 820px) {
    font-size: 10px;
  }
  @media (max-width: 654px) {
    font-size: 9px;
  }
`;

export const BlogCardDescription = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 1.5em;
  color: var(--ink-soft);
  text-align: justify;
  text-justify: inter-word;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 820px) {
    font-size: 12px;
    -webkit-line-clamp: 2;
  }
  @media (max-width: 654px) {
    font-size: 11px;
    -webkit-line-clamp: 2;
  }
`;

export const BlogDate = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  color: var(--muted);
  margin-top: auto;
  padding-top: 12px;
  border-top: 1px solid var(--line);

  @media (max-width: 820px) {
    font-size: 10px;
  }
  @media (max-width: 654px) {
    font-size: 9px;
  }
`;
