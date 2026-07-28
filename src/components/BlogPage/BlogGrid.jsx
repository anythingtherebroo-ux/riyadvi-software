
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calendar,
  Clock3,
  ArrowRight,
  User,
} from "lucide-react";


export default function BlogGrid() {


  const [blogs, setBlogs] = useState([]);

  const [loading, setLoading] = useState(true);




  useEffect(() => {

    fetchBlogs();

  }, []);




  const fetchBlogs = async () => {

    try {

      const response = await fetch(
        "http://localhost:5000/api/blogs"
      );


      const data = await response.json();


      if (data.success) {

        setBlogs(data.data);

      }


    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };





  return (

    <section className="relative overflow-hidden bg-[#050505] py-28">


      {/* Background */}


      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[170px]" />


      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[170px]" />





      <div className="relative mx-auto max-w-7xl px-6">



        {loading ? (


          <div className="py-20 text-center text-gray-400">

            Loading blogs...

          </div>


        ) : blogs.length === 0 ? (


          <div className="py-20 text-center text-gray-400">

            No blogs available

          </div>


        ) : (



          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">



            {blogs.map((post, index) => (


              <motion.article

                key={post._id}

                initial={{
                  opacity: 0,
                  y: 40,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  delay: index * 0.08,
                  duration: 0.7,
                }}

                whileHover={{
                  y: -10,
                }}

                className="group overflow-hidden rounded-[30px] border border-white/10 bg-[#0B0B0B] transition-all duration-500 hover:border-[#D4AF37]/40 hover:shadow-[0_0_40px_rgba(212,175,55,.18)]"

              >



                {/* Image */}



                <div className="relative overflow-hidden">



                  <img

                    src={
                      post.image ||
                      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
                    }

                    alt={post.title}

                    className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"

                  />



                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />



                  <span className="absolute left-5 top-5 rounded-full bg-[#D4AF37] px-4 py-2 text-sm font-semibold text-black">

                    {post.category || "Technology"}

                  </span>



                </div>



                {/* Content */}



                <div className="p-8">



                  {/* Meta */}



                  <div className="flex flex-wrap gap-5 text-sm text-gray-400">



                    <div className="flex items-center gap-2">



                      <Calendar
                        size={15}
                        className="text-[#D4AF37]"
                      />



                      {new Date(post.createdAt).toLocaleDateString()}



                    </div>



                    <div className="flex items-center gap-2">



                      <Clock3
                        size={15}
                        className="text-[#D4AF37]"
                      />



                      5 min read



                    </div>



                  </div>





                  <h3 className="mt-6 text-2xl font-bold leading-tight text-white transition group-hover:text-[#D4AF37]">

                    {post.title}

                  </h3>





                  <p className="mt-5 line-clamp-4 leading-8 text-gray-400">

                    {post.content}

                  </p>





                  <div className="mt-8 flex items-center justify-between">



                    <div className="flex items-center gap-3">



                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D4AF37]/10">



                        <User
                          size={18}
                          className="text-[#D4AF37]"
                        />



                      </div>



                      <div>



                        <p className="font-semibold text-white">

                          {post.author || "Riyadvi Team"}

                        </p>



                      </div>



                    </div>





                    <Link

                      to={`/blog/${post.slug}`}

                      className="group/link inline-flex items-center font-semibold text-[#D4AF37]"

                    >



                      Read More



                      <ArrowRight
                        size={17}
                        className="ml-2 transition group-hover/link:translate-x-1"
                      />



                    </Link>



                  </div>



                </div>



              </motion.article>


            ))}



          </div>


        )}



      </div>



    </section>

  );

}
