import Renderer from '../components/Renderer';
import { pageData } from '../data/data';

export default function Home() {
  const homeContent = pageData.pages.find(page => page.name === "Home");

  if (!homeContent) {
    return <div className="container section text-center text-red-500">Home page content not found.</div>;
  }

  return (
    <div className="home-page">
      <Renderer blocks={homeContent.content} />
    </div>
  );
}