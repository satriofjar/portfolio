import React, { useState } from "react";
import {
    Github,
    Linkedin,
    Mail,
    ExternalLink,
    Menu,
    X,
} from "lucide-react"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ProjectType } from "@/types/Project";
import { SkillType } from "@/types/Skill"
import { Head, useForm, usePage } from "@inertiajs/react";


const Home = ({ skills, projects }: { skills: SkillType[]; projects: ProjectType[]; }) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
        setIsMenuOpen(false)
    }

    const { data, setData, post, reset } = useForm({
        name: "",
        email: "",
        message: "",
    })

    const { props }: any = usePage();
    const flash = props.flash;

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        post(route('contact.store'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: error => console.error(error),

        })
    }
    return (
        <React.Fragment>

            <Head title="Satrio Fajar">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div id="home" className="min-h-screen bg-black text-white">
                {/* Navbar */}
                <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            <div className="text-2xl font-bold text-white">Satrio</div>

                            {/* Desktop Navigation */}
                            <div className="hidden md:flex space-x-8">
                                <button
                                    onClick={() => scrollToSection("about")}
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    About
                                </button>
                                <button
                                    onClick={() => scrollToSection("skills")}
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    Skills
                                </button>
                                <button
                                    onClick={() => scrollToSection("projects")}
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    Projects
                                </button>
                                <button
                                    onClick={() => scrollToSection("contact")}
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    Contact
                                </button>
                            </div>

                            {/* Mobile menu button */}
                            <div className="md:hidden">
                                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
                                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                                </button>
                            </div>
                        </div>

                        {/* Mobile Navigation */}
                        {isMenuOpen && (
                            <div className="md:hidden bg-black border-t border-gray-800">
                                <div className="px-2 pt-2 pb-3 space-y-1">
                                    <button
                                        onClick={() => scrollToSection("about")}
                                        className="block px-3 py-2 text-gray-300 hover:text-white transition-colors w-full text-left"
                                    >
                                        About
                                    </button>
                                    <button
                                        onClick={() => scrollToSection("skills")}
                                        className="block px-3 py-2 text-gray-300 hover:text-white transition-colors w-full text-left"
                                    >
                                        Skills
                                    </button>
                                    <button
                                        onClick={() => scrollToSection("projects")}
                                        className="block px-3 py-2 text-gray-300 hover:text-white transition-colors w-full text-left"
                                    >
                                        Projects
                                    </button>
                                    <button
                                        onClick={() => scrollToSection("contact")}
                                        className="block px-3 py-2 text-gray-300 hover:text-white transition-colors w-full text-left"
                                    >
                                        Contact
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Hi, I am Satrio Fajar<br />
                            <span className="text-gray-300">Software Developer</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Building scalable, efficient, and reliable software solutions to support modern business needs.
                        </p>
                        <Button
                            onClick={() => scrollToSection("projects")}
                            className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg font-semibold"
                        >
                            View Projects
                        </Button>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-8">About Me</h2>
                        <p className="text-lg text-gray-300 text-justify leading-relaxed max-w-3xl mx-auto">
                            I am a passionate backend developer with extensive experience in building robust, scalable systems using Go,
                            Python, Php, Node js, and SQL. My expertise lies in microservices architecture, performance optimization, and AI
                            integration. I thrive on solving complex technical challenges and creating efficient solutions that drive
                            business growth. With a strong foundation in modern development practices and a keen interest in emerging
                            technologies, I am always exploring new ways to improve system reliability and performance.
                        </p>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Skills</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                            {skills.map((skill, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
                                    >
                                        <div className="h-15 w-full items-center">
                                            <img src={`/storage/${skill.image}`} alt={skill.name} className="object-contain m-auto w-13 h-15" />
                                        </div>
                                        <span className="text-gray-200 font-medium text-center">{skill.name}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Projects</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <Card key={index} className="bg-gray-900 border-gray-700 hover:border-gray-600 transition-colors flex flex-col">
                                    <div className="aspect-video bg-gray-800 rounded-t-lg overflow-hidden">
                                        <img
                                            src={project.image ? `/storage/${project.image}` : "/placeholder.svg"}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <CardContent className="p-6 flex flex-col h-90">
                                        <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                                        <p className="text-gray-400 mb-4 leading-relaxed">{project.description?.length > 190 ? `${project.description.slice(0,190)}...` : project.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.stack.map((tech, techIndex) => (
                                                <span key={techIndex} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            className="inline-flex mt-auto items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 w-full border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
                                        >
                                            View Details <ExternalLink size={16} className="ml-2" />
                                        </a>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Contact</h2>
                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <div>
                                <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                                {/* Flash Message */}
                                {flash.success && (
                                    <div className="p-4 bg-green-100 text-green-800 rounded-lg">
                                        {flash.success}
                                    </div>
                                )}
                                <form onSubmit={submit} className="space-y-6" >
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                            Name
                                        </label>
                                        <Input
                                            id="name"
                                            type="text"
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            className="bg-gray-900 border-gray-700 text-white focus:border-gray-500"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                            Email
                                        </label>
                                        <Input
                                            id="email"
                                            type="email"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            className="bg-gray-900 border-gray-700 text-white focus:border-gray-500"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                            Message
                                        </label>
                                        <Textarea
                                            id="message"
                                            rows={5}
                                            value={data.message}
                                            onChange={(e) => setData('message', e.target.value)}
                                            className="bg-gray-900 border-gray-700 text-white focus:border-gray-500"
                                            placeholder="Your message..."
                                        />
                                    </div>
                                    <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200">Send Message</Button>
                                </form>
                            </div>

                            {/* Social Links */}
                            <div className="lg:pl-12">
                                <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
                                <div className="space-y-4">
                                    <a
                                        href="https://linkedin.com/in/satriofjar"
                                        target="_blank"
                                        className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors group"
                                    >
                                        <div className="p-3 bg-gray-900 rounded-lg group-hover:bg-gray-800 transition-colors">
                                            <Linkedin size={24} />
                                        </div>
                                        <span className="text-lg">LinkedIn</span>
                                    </a>
                                    <a
                                        href="https://github.com/satriofjar"
                                        target="_blank"
                                        className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors group"
                                    >
                                        <div className="p-3 bg-gray-900 rounded-lg group-hover:bg-gray-800 transition-colors">
                                            <Github size={24} />
                                        </div>
                                        <span className="text-lg">GitHub</span>
                                    </a>
                                    <a
                                        href="#"
                                        target="_blank"
                                        className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors group"
                                    >
                                        <div className="p-3 bg-gray-900 rounded-lg group-hover:bg-gray-800 transition-colors">
                                            <Mail size={24} />
                                        </div>
                                        <span className="text-lg">Email</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
                    <div className="max-w-6xl mx-auto text-center">
                        <p className="text-gray-500">© 2025 Satrio</p>
                    </div>
                </footer>
            </div>

        </React.Fragment>
    )
}

export default Home
