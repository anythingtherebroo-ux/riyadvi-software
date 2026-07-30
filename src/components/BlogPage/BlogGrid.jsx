import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock3, ArrowRight, User } from "lucide-react";
import { blogPosts as localBlogPosts } from "./blogData";
const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop";
export default function BlogGrid({ activeCategory = "All" }) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchBlogs();
  }, []);
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/blogs");
      const data = await response.json();

       if (data.success && data.data && data.data.length > 0) {
        setBlogs(data.data);
        setLoading(false);
        return;
      }
    } catch (error) {
      console.log("Backend API offline, loading fallback articles:", error);
    }
    // Fallback to local data if API is offline
    setBlogs(localBlogPosts);
    setLoading(false);
  };
  const filteredBlogs = blogs.filter((post) => {
    if (activeCategory === "All") return true;
    return post.category?.toLowerCase() === activeCategory.toLowerCase();
  });
  return (
    <section className="relative overflow-hidden bg-[#050505] py-20 sm:py-28 text-white">
      {/* Ambient Background Glows */}
      <div className="pointer-events-none absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#d4af37]/10 blur-[170px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-[#d4af37]/10 blur-[170px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="py-20 text-center text-gray-400 font-poppins">
            Loading articles...
          </div>
            ) : filteredBlogs.length === 0 ? (
          <div className="py-20 text-center text-gray-400 font-poppins">
            No articles available in this category.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredBlogs.map((post, index) => (
              <motion.article
                key={post._id || post.id || post.slug}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="group flex flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-500 hover:border-[#d4af37]/40 hover:bg-white/[0.07] hover:shadow-[0_20px_60px_rgba(212,175,55,0.15)]"
              >
                <div>
                  {/* Article Image with Fallback */}
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || FALLBACK_IMAGE}
                      alt={post.title}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = FALLBACK_IMAGE;
                      }}
                      className="h-60 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-64"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
                    <span className="absolute left-5 top-5 rounded-full bg-[#d4af37] px-3.5 py-1.5 font-mono text-xs font-semibold text-black shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                      {post.category || "Technology"}
                    </span>
                  </div>
                  {/* Article Content */}
                  <div className="p-7 sm:p-8">
                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 font-mono text-xs text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-[#d4af37]" />
                        <span>
                          {post.createdAt
                            ? new Date(post.createdAt).toLocaleDateString()
                            : post.date || "July 2026"}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock3 size={14} className="text-[#d4af37]" />
                        <span>{post.readTime || "5 min read"}</span>
                      </div>
                    </div>
                    <h3 className="mt-4 font-poppins text-xl font-bold leading-snug text-white transition duration-300 group-hover:text-[#d4af37]">
                      {post.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-400">
                      {post.excerpt || post.content}
                    </p>
                  </div>
                </div>
                {/* Card Footer */}
                <div className="flex items-center justify-between p-7 pt-0 sm:p-8 sm:pt-0">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37]">
                      <User size={15} />
                    </div>
                    <span className="text-xs font-semibold text-gray-300"></span>
                  </div>
                  <Link
                    to={`/blog/${post.slug || post.id}`}
                    className="group/link inline-flex items-center gap-1.5 text-xs font-semibold text-[#d4af37] sm:text-sm transition-all duration-300 hover:gap-3 hover:text-yellow-300"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
