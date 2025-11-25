import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { posts } from "@/data/postsData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundPattern from "@/components/BackgroundPattern";
import NotFound from "./NotFound";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find(p => p.slug === `/blog/${slug}`);

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <BackgroundPattern />
      
      <main className="flex-grow">
        <article className="pt-32 pb-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <Link to="/blog">
                <Button 
                  variant="outline" 
                  className="mb-8 border-purple-600 text-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-800 hover:text-white transition-all duration-300 rounded-full"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar ao Blog
                </Button>
              </Link>

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

              <h1 className="h1 mb-6 bg-gradient-to-r from-purple-600 to-blue-800 bg-clip-text text-transparent">
                {post.title}
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {post.description}
              </p>

              <div className="aspect-video overflow-hidden rounded-2xl mb-8 border border-purple-100 dark:border-purple-900/30">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Conteúdo completo do artigo em breve...
                </p>
              </div>
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
