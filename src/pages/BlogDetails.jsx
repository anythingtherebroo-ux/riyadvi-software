import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Clock3,
  User,
  Tag,
  Share2,
  Sparkles,
} from "lucide-react";

import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO/SEO";
import { blogPosts } from "../components/BlogPage/blogData";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop";

export default function BlogDetails() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost();
  }, [slug]);

  const fetchPost = async () => {
    setLoading(true);

    // 1. Search local blog posts first
    const localMatch = blogPosts.find(
      (p) => p.slug === slug || String(p.id) === String(slug)
    );

    if (localMatch) {
      setPost(localMatch);
      setLoading(false);
      return;
    }

    // 2. Fallback to API call if not found locally
    try {
      const response = await fetch(`http://localhost:5000/api/blogs/${slug}`);
      const data = await response.json();
      if (data.success && data.data) {
        setPost(data.data);
      }
    } catch (error) {
      console.log("Error loading article:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <MainLayout>
        <div className="flex min-h-screen items-center justify-center bg-[#080808] text-white">
          <div className="flex items-center gap-3 font-poppins text-lg text-gray-400">
            <Sparkles className="animate-spin text-[#d4af37]" size={20} />
            <span>Loading article...</span>
          </div>
        </div>
      </MainLayout>
    );
  }

  if (!post) {
    return (
      <MainLayout>
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#080808] px-4 text-white">
          <h1 className="font-poppins text-3xl font-extrabold sm:text-4xl">
            Article Not Found
          </h1>
          <p className="mt-3 text-gray-400">
            The requested article could not be found.
          </p>
          <Link
            to="/blog"
            className="mt-6 rounded-full bg-[#d4af37] px-8 py-3.5 font-semibold text-black transition hover:scale-105"
          >
            Back to Articles
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <>
      <SEO
        title={`${post.title} | Riyadvi Blog`}
        description={post.excerpt || post.content}
        keywords={`${post.category}, Riyadvi blog, technology trends`}
        url={`https://riyadvi.com/blog/${post.slug || post.id}`}
      />

      <MainLayout>
        <article className="relative overflow-hidden bg-[#080808] pt-36 sm:pt-40 lg:pt-44 pb-24 text-white">
          {/* Background Ambient Glows */}
          <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-[#d4af37]/10 blur-[170px]" />
          <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#d4af37]/10 blur-[170px]" />

          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <Link
              to="/blog"
              className="mb-8 inline-flex items-center gap-2 font-semibold text-[#d4af37] transition hover:text-yellow-300"
            >
              <ArrowLeft size={18} />
              <span>Back to Articles</span>
            </Link>

            {/* Category Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-1.5 font-mono text-xs font-semibold text-[#d4af37]">
                {post.category || "Technology"}
              </span>
            </motion.div>

            {/* Article Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-poppins text-3xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              {post.title}
            </motion.h1>

            {/* Author & Meta Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center justify-between gap-4 border-y border-white/10 py-4 text-xs sm:text-sm text-gray-400 font-medium"
            >
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37]">
                    <User size={16} />
                  </div>
                  <span className="font-semibold text-white">
                    {post.author || "Riyadvi Team"}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar size={15} className="text-[#d4af37]" />
                  <span>{post.date || "July 20, 2026"}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock3 size={15} className="text-[#d4af37]" />
                  <span>{post.readTime || "8 min read"}</span>
                </div>
              </div>
            </motion.div>

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 overflow-hidden rounded-[28px] border border-white/15 bg-white/[0.04] p-3 backdrop-blur-2xl shadow-[0_30px_90px_rgba(0,0,0,0.65)]"
            >
              <img
                src={post.image || FALLBACK_IMAGE}
                alt={post.title}
                onError={(e) => {
                  e.currentTarget.src = FALLBACK_IMAGE;
                }}
                className="h-[340px] sm:h-[480px] w-full rounded-2xl object-cover"
              />
            </motion.div>

            {/* Main Article Body */}
            <div className="mt-12 space-y-8 text-base leading-relaxed text-gray-300 sm:text-lg sm:leading-9">
              <p className="font-medium text-white sm:text-xl sm:leading-9">
                {post.excerpt}
              </p>

              <div className="rounded-3xl border border-[#d4af37]/20 bg-[#d4af37]/5 p-7 sm:p-8 backdrop-blur-xl">
                <h3 className="font-poppins text-xl font-bold text-white mb-3">
                  Key Takeaways
                </h3>
                <ul className="space-y-2.5 text-sm sm:text-base text-gray-300">
                  <li>• Modern web applications require scalable microservices architecture.</li>
                  <li>• Performance optimization directly impacts search rankings and conversion rates.</li>
                  <li>• Integrating AI capabilities enhances personalized user experiences.</li>
                </ul>
              </div>

              <p>
                As technology rapidly evolves, businesses must adopt modern web development practices to stay competitive. From serverless computing to AI-driven automation, the tools we use today define the digital products of tomorrow.
              </p>
            </div>

            {/* Tags Row */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-white/10 pt-8">
                <Tag size={16} className="text-[#d4af37]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 font-mono">
                  Tags:
                </span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Bottom CTA Card */}
            <div className="mt-16 rounded-3xl border border-[#d4af37]/30 bg-gradient-to-br from-[#111111] via-[#0c0c0c] to-black p-8 text-center sm:p-12">
              <h3 className="font-poppins text-2xl font-extrabold text-white sm:text-3xl">
                Have a Project in Mind?
              </h3>
              <p className="mt-4 text-base text-gray-300 max-w-xl mx-auto">
                Let's discuss how our team can help you build custom digital products, web applications, or scalable software solutions.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-8 py-4 font-semibold text-black transition hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.4)]"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        </article>
      </MainLayout>
    </>
  );
}