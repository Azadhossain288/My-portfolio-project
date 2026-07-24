import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";

function ProjectDetails() {
  const { title } = useParams();
  
  // URL-এর টাইটেল অনুযায়ী নির্দিষ্ট প্রজেক্ট খুঁজে বের করা
  const project = PROJECTS.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === title.toLowerCase());

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a1628] text-white flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <Link to="/" className="px-6 py-3 bg-[#c8a97e] text-black rounded-xl font-mono text-xs uppercase">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a1628] text-white py-20 px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* ব্যাক বাটন */}
        <Link to="/" className="inline-block mb-8 text-xs font-mono uppercase tracking-widest text-[#c8a97e] hover:underline">
          ← Back to Projects
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", color: project.color }}>
          {project.title}
        </h1>
        <p className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-6">{project.category}</p>

        {/* প্রজেক্ট ইমেজ */}
        <img src={project.image} alt={project.title} className="w-full h-[400px] object-cover rounded-2xl mb-8 border border-white/10 shadow-2xl" />

        {/* টেকনোলজি স্ট্যাক */}
        <div className="mb-8">
          <h3 className="text-sm font-mono uppercase tracking-wider text-[#c8a97e] mb-3">Main Technology Stack:</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs font-mono px-4 py-2 rounded-lg bg-white/5 text-gray-300 border border-white/10">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* সংক্ষিপ্ত বিবরণ */}
        <div className="mb-8">
          <h3 className="text-sm font-mono uppercase tracking-wider text-[#c8a97e] mb-2">Brief Description:</h3>
          <p className="text-base text-gray-300 font-light leading-relaxed">{project.desc}</p>
        </div>

        {/* চ্যালেঞ্জস */}
        <div className="mb-8">
          <h3 className="text-sm font-mono uppercase tracking-wider text-[#c8a97e] mb-2">Challenges Faced While Developing:</h3>
          <p className="text-base text-gray-300 font-light leading-relaxed">{project.challenges}</p>
        </div>

        {/* ফিউচার প্ল্যান */}
        <div className="mb-10">
          <h3 className="text-sm font-mono uppercase tracking-wider text-[#c8a97e] mb-2">Potential Improvements & Future Plans:</h3>
          <p className="text-base text-gray-300 font-light leading-relaxed">{project.futurePlans}</p>
        </div>

        {/* লাইভ এবং গিটহাব লিংক */}
        <div className="flex flex-wrap gap-4">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl text-xs font-mono uppercase tracking-widest font-semibold bg-[#c8a97e] text-black hover:opacity-90 transition">
              Live Project
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl text-xs font-mono uppercase tracking-widest font-semibold bg-white/10 text-white hover:bg-white/20 transition border border-white/10">
              GitHub Repository (Client)
            </a>
          )}
        </div>

      </div>
    </div>
  );
}

export default ProjectDetails;