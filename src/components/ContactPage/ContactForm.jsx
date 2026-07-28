import { useRef, useState } from "react";
import { motion } from "framer-motion";
import API from "../../Services/api";

import {
  Send,
  User,
  Mail,
  Phone,
  Building2,
  Briefcase,
  DollarSign,
  Calendar,
  MessageSquare,
} from "lucide-react";


export default function ContactForm() {

  const form = useRef(null);

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");


  const sendEmail = async (e) => {

    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");


    try {

      const formData = new FormData(form.current);


      const payload = {

        name: formData.get("user_name"),

        email: formData.get("user_email"),

        phone: formData.get("phone"),

        company: formData.get("company"),

        service: formData.get("service"),

        budget: formData.get("budget"),

        timeline: formData.get("timeline"),

        message: formData.get("message"),

      };


      const response = await API.post(
        "/contact",
        payload
      );


      if (!response.data.success) {

        throw new Error(
          response.data.message ||
          "Failed to send message"
        );

      }


      setSuccess(
        response.data.message ||
        "Message sent successfully!"
      );


      form.current.reset();


    } catch (err) {


      console.error(err);


      setError(

        err.response?.data?.message ||

        err.message ||

        "Something went wrong. Please try again."

      );


    } finally {

      setLoading(false);

    }

  };



  return (

    <section
      id="contact-form"
      className="relative overflow-hidden bg-black py-28"
    >


      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[160px]" />


      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[160px]" />



      <div className="relative mx-auto max-w-7xl px-6">



        <motion.div

          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:.8
          }}

          className="mx-auto mb-20 max-w-3xl text-center"

        >


          <span className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">

            Send Us A Message

          </span>



          <h2 className="mt-8 text-5xl font-black text-white">

            Tell Us About

            <span className="block text-[#D4AF37]">

              Your Project

            </span>

          </h2>



          <p className="mt-8 text-lg leading-8 text-gray-400">

            Fill out the form below and our team will
            get back to you within 24 hours.

          </p>



        </motion.div>





        <motion.div

          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:.8
          }}

          className="rounded-[40px] border border-white/10 bg-[#0B0B0B] p-10 lg:p-14"

        >



          <form

            ref={form}

            onSubmit={sendEmail}

            className="grid gap-8 lg:grid-cols-2"

          >



            {/* Name */}

            <div>

              <label className="mb-3 block font-medium text-white">

                Full Name

              </label>


              <div className="relative">


                <User
                  className="absolute left-4 top-4 text-[#D4AF37]"
                  size={20}
                />


                <input

                  type="text"

                  name="user_name"

                  required

                  placeholder="John Doe"

                  className="w-full rounded-xl border border-white/10 bg-black py-4 pl-12 pr-4 text-white outline-none transition focus:border-[#D4AF37]"

                />


              </div>


            </div>





            {/* Email */}


            <div>


              <label className="mb-3 block font-medium text-white">

                Email Address

              </label>



              <div className="relative">


                <Mail
                  className="absolute left-4 top-4 text-[#D4AF37]"
                  size={20}
                />


                <input

                  type="email"

                  name="user_email"

                  required

                  placeholder="john@email.com"

                  className="w-full rounded-xl border border-white/10 bg-black py-4 pl-12 pr-4 text-white outline-none transition focus:border-[#D4AF37]"

                />


              </div>


            </div>





            {/* Phone */}


            <div>


              <label className="mb-3 block font-medium text-white">

                Phone Number

              </label>


              <div className="relative">


                <Phone
                  className="absolute left-4 top-4 text-[#D4AF37]"
                  size={20}
                />


                <input

                  type="tel"

                  name="phone"

                  placeholder="+91 XXXXX XXXXX"

                  className="w-full rounded-xl border border-white/10 bg-black py-4 pl-12 pr-4 text-white outline-none transition focus:border-[#D4AF37]"

                />


              </div>


            </div>





            {/* Company */}


            <div>


              <label className="mb-3 block font-medium text-white">

                Company

              </label>


              <div className="relative">


                <Building2
                  className="absolute left-4 top-4 text-[#D4AF37]"
                  size={20}
                />


                <input

                  type="text"

                  name="company"

                  placeholder="Company Name"

                  className="w-full rounded-xl border border-white/10 bg-black py-4 pl-12 pr-4 text-white outline-none transition focus:border-[#D4AF37]"

                />


              </div>


            </div>

                        {/* Service */}

            <div>

              <label className="mb-3 block font-medium text-white">

                Service Required

              </label>


              <div className="relative">


                <Briefcase
                  className="absolute left-4 top-4 text-[#D4AF37]"
                  size={20}
                />


                <select

                  name="service"

                  className="w-full rounded-xl border border-white/10 bg-black py-4 pl-12 pr-4 text-white outline-none focus:border-[#D4AF37]"

                >

                  <option>Web Development</option>

                  <option>Mobile App</option>

                  <option>UI / UX Design</option>

                  <option>Digital Marketing</option>

                  <option>Cloud Solutions</option>

                  <option>AI Solutions</option>


                </select>


              </div>


            </div>





            {/* Budget */}


            <div>


              <label className="mb-3 block font-medium text-white">

                Budget

              </label>


              <div className="relative">


                <DollarSign
                  className="absolute left-4 top-4 text-[#D4AF37]"
                  size={20}
                />


                <select

                  name="budget"

                  className="w-full rounded-xl border border-white/10 bg-black py-4 pl-12 pr-4 text-white outline-none focus:border-[#D4AF37]"

                >


                  <option>
                    Below ₹50,000
                  </option>


                  <option>
                    ₹50,000 - ₹1,00,000
                  </option>


                  <option>
                    ₹1,00,000 - ₹3,00,000
                  </option>


                  <option>
                    Above ₹3,00,000
                  </option>


                </select>


              </div>


            </div>





            {/* Timeline */}


            <div>


              <label className="mb-3 block font-medium text-white">

                Project Timeline

              </label>



              <div className="relative">


                <Calendar
                  className="absolute left-4 top-4 text-[#D4AF37]"
                  size={20}
                />



                <select

                  name="timeline"

                  className="w-full rounded-xl border border-white/10 bg-black py-4 pl-12 pr-4 text-white outline-none transition focus:border-[#D4AF37]"

                >


                  <option>
                    Immediately
                  </option>


                  <option>
                    Within 1 Month
                  </option>


                  <option>
                    1 - 3 Months
                  </option>


                  <option>
                    3 - 6 Months
                  </option>


                  <option>
                    Flexible
                  </option>


                </select>


              </div>


            </div>





            {/* Message */}


            <div className="lg:col-span-2">


              <label className="mb-3 block font-medium text-white">

                Project Description

              </label>



              <div className="relative">


                <MessageSquare
                  className="absolute left-4 top-5 text-[#D4AF37]"
                  size={20}
                />



                <textarea

                  name="message"

                  required

                  rows={8}

                  placeholder="Tell us about your project, business goals, required features and anything else that will help us understand your vision."

                  className="w-full rounded-xl border border-white/10 bg-black py-4 pl-12 pr-4 text-white outline-none transition focus:border-[#D4AF37]"

                />


              </div>


            </div>





            {/* Status Messages */}


            <div className="lg:col-span-2">


              {success && (

                <div className="mb-6 rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-green-400">

                  {success}

                </div>

              )}



              {error && (

                <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-400">

                  {error}

                </div>

              )}



            </div>





            {/* Submit Button */}


            <div className="lg:col-span-2">


              <button

                type="submit"

                disabled={loading}

                className="group inline-flex w-full items-center justify-center rounded-xl bg-[#D4AF37] px-8 py-5 text-lg font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(212,175,55,.35)] disabled:cursor-not-allowed disabled:opacity-70"

              >



                {loading ? (


                  <>


                    <svg

                      className="mr-3 h-5 w-5 animate-spin"

                      viewBox="0 0 24 24"

                      fill="none"

                    >


                      <circle

                        cx="12"

                        cy="12"

                        r="10"

                        stroke="currentColor"

                        strokeWidth="4"

                        opacity=".25"

                      />


                      <path

                        d="M22 12a10 10 0 00-10-10"

                        stroke="currentColor"

                        strokeWidth="4"

                      />


                    </svg>



                    Sending...


                  </>



                ) : (


                  <>


                    Send Message



                    <Send

                      size={20}

                      className="ml-3 transition-transform duration-300 group-hover:translate-x-1"

                    />


                  </>


                )}



              </button>



            </div>




          </form>



        </motion.div>



      </div>



    </section>


  );


}