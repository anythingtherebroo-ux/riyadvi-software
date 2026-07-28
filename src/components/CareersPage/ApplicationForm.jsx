import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Briefcase,
  Building2,
  FileText,
  Upload,
  Send,
  CheckCircle2,
} from "lucide-react";

import API from "../../Services/api";

export default function ApplicationForm() {

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    department: "",
    experience: "",
    coverLetter: "",
    resume: null,
    agree: false,
  });


  const [submitted, setSubmitted] = useState(false);



  const handleChange = (e) => {

    const {
      name,
      value,
      type,
      checked,
      files
    } = e.target;


    setForm((prev)=>({

      ...prev,

      [name]:
        type === "checkbox"
        ? checked
        : type === "file"
        ? files[0]
        : value

    }));

  };





  const handleSubmit = async(e)=>{

    e.preventDefault();


    try{


      const formData = new FormData();


      formData.append(
        "fullName",
        form.fullName
      );

      formData.append(
        "email",
        form.email
      );


      formData.append(
        "phone",
        form.phone
      );


      formData.append(
        "position",
        form.position
      );


      formData.append(
        "department",
        form.department
      );


      formData.append(
        "experience",
        form.experience
      );


      formData.append(
        "coverLetter",
        form.coverLetter
      );



      if(form.resume){

        formData.append(
          "resume",
          form.resume
        );

      }




      const response = await API.post(
        "/careers",
        formData,
        {
          headers:{
            "Content-Type":
            "multipart/form-data"
          }
        }
      );



      console.log(
        "SUCCESS:",
        response.data
      );



      setSubmitted(true);



      setTimeout(()=>{


        setSubmitted(false);



        setForm({

          fullName:"",
          email:"",
          phone:"",
          position:"",
          department:"",
          experience:"",
          coverLetter:"",
          resume:null,
          agree:false,

        });


      },3000);



    }
    catch(error){


      console.error(
        "CAREER APPLICATION ERROR:",
        error.response?.data ||
        error.message
      );


      alert(
        "Application submission failed"
      );


    }


  };



  return (

<section
id="application"
className="relative overflow-hidden bg-[#050505] py-28"
>


<div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[180px]" />


<div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[180px]" />



<div className="relative mx-auto max-w-5xl px-6">


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
duration:0.8
}}

className="mb-20 text-center"

>


<span className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">

Apply Today

</span>



<h2 className="mt-8 text-5xl font-black text-white">

Join Our

<span className="block text-[#D4AF37]">

Amazing Team

</span>

</h2>



<p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">

Fill in your details below. Our recruitment team will review your application and contact you if your profile matches an open position.

</p>


</motion.div>




<motion.form

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

onSubmit={handleSubmit}

className="rounded-[36px] border border-white/10 bg-[#0B0B0B] p-10 lg:p-14"

>



<div className="grid gap-8 md:grid-cols-2">



<div>

<label className="mb-3 block text-white">

Full Name

</label>


<div className="relative">


<User
size={18}
className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]"
/>



<input

type="text"

name="fullName"

value={form.fullName}

onChange={handleChange}

required

placeholder="John Doe"

className="w-full rounded-xl border border-white/10 bg-black py-4 pl-12 pr-4 text-white outline-none transition focus:border-[#D4AF37]"

/>


</div>


</div>





<div>

<label className="mb-3 block text-white">

Email

</label>


<div className="relative">


<Mail
size={18}
className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]"
/>


<input

type="email"

name="email"

value={form.email}

onChange={handleChange}

required

placeholder="john@email.com"

className="w-full rounded-xl border border-white/10 bg-black py-4 pl-12 pr-4 text-white outline-none focus:border-[#D4AF37]"

/>


</div>


</div>

{/* Phone */}

<div>

<label className="mb-3 block text-white">

Phone Number

</label>


<div className="relative">


<Phone
size={18}
className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]"
/>



<input

type="tel"

name="phone"

value={form.phone}

onChange={handleChange}

required

placeholder="+91 9876543210"

className="w-full rounded-xl border border-white/10 bg-black py-4 pl-12 pr-4 text-white outline-none focus:border-[#D4AF37]"

/>


</div>

</div>




{/* Position */}

<div>

<label className="mb-3 block text-white">

Position

</label>


<div className="relative">


<Briefcase
size={18}
className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]"
/>


<input

type="text"

name="position"

value={form.position}

onChange={handleChange}

required

placeholder="React Developer"

className="w-full rounded-xl border border-white/10 bg-black py-4 pl-12 pr-4 text-white outline-none focus:border-[#D4AF37]"

/>


</div>


</div>





{/* Department */}

<div>

<label className="mb-3 block text-white">

Department

</label>



<div className="relative">


<Building2
size={18}
className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]"
/>



<select

name="department"

value={form.department}

onChange={handleChange}

required

className="w-full rounded-xl border border-white/10 bg-black py-4 pl-12 pr-4 text-white outline-none focus:border-[#D4AF37]"

>


<option value="">

Select Department

</option>


<option>
Engineering
</option>


<option>
Design
</option>


<option>
AI
</option>


<option>
Marketing
</option>


<option>
Sales
</option>


<option>
HR
</option>


</select>


</div>


</div>





{/* Experience */}

<div>


<label className="mb-3 block text-white">

Experience

</label>



<select

name="experience"

value={form.experience}

onChange={handleChange}

required

className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 text-white outline-none focus:border-[#D4AF37]"

>


<option value="">

Select Experience

</option>


<option>
Fresher
</option>


<option>
1-2 Years
</option>


<option>
3-5 Years
</option>


<option>
5+ Years
</option>


</select>


</div>


</div>





{/* Resume Upload */}


<div className="mt-8">


<label className="mb-3 block text-white">

Upload Resume

</label>



<label className="flex cursor-pointer items-center justify-center gap-4 rounded-xl border-2 border-dashed border-[#D4AF37]/30 p-8 text-gray-400 transition hover:border-[#D4AF37]">


<Upload className="text-[#D4AF37]" />



<span>

{
form.resume
?
form.resume.name
:
"Upload PDF or DOC"
}

</span>



<input

type="file"

name="resume"

accept=".pdf,.doc,.docx"

onChange={handleChange}

className="hidden"

/>


</label>


</div>






{/* Cover Letter */}


<div className="mt-8">


<label className="mb-3 block text-white">

Cover Letter

</label>



<div className="relative">



<FileText

size={18}

className="absolute left-4 top-5 text-[#D4AF37]"

/>



<textarea

rows={6}

name="coverLetter"

value={form.coverLetter}

onChange={handleChange}

placeholder="Tell us about yourself..."

className="w-full rounded-xl border border-white/10 bg-black py-4 pl-12 pr-4 text-white outline-none focus:border-[#D4AF37]"

/>


</div>


</div>






{/* Agreement */}


<div className="mt-8 flex items-start gap-3">


<input

type="checkbox"

name="agree"

checked={form.agree}

onChange={handleChange}

required

className="mt-1 accent-[#D4AF37]"

/>



<p className="text-gray-400">

I agree that Riyadvi may store my application details for recruitment purposes.

</p>


</div>






{/* Submit */}


<button

type="submit"

className="mt-10 inline-flex items-center rounded-xl bg-[#D4AF37] px-8 py-4 font-bold text-black transition hover:scale-105 hover:shadow-[0_0_35px_rgba(212,175,55,.35)]"

>


Submit Application


<Send

size={18}

className="ml-3"

/>


</button>







{/* Success Message */}


{
submitted && (

<motion.div

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

className="mt-8 flex items-center gap-3 rounded-xl border border-green-500/20 bg-green-500/10 p-5 text-green-400"

>


<CheckCircle2 size={22} />


Your application has been submitted successfully!


</motion.div>

)

}




</motion.form>


</div>


</section>

  );

}