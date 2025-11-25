import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import BackgroundPattern from "@/components/BackgroundPattern";
import Footer from "@/components/Footer";
import { posts } from "@/data/postsData";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === `/blog/${slug}`);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <BackgroundPattern />
        <main className="flex-grow container-custom py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Artigo não encontrado</h1>
            <Link to="/blog">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <BackgroundPattern />
      <main className="flex-grow">
        <article className="container-custom py-20 md:py-32">
          <Link to="/blog" className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Blog
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-800 bg-clip-text text-transparent">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {post.description}
            </p>

            <div className="aspect-video overflow-hidden rounded-2xl mb-8 shadow-xl">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Conteúdo do artigo em desenvolvimento...
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
