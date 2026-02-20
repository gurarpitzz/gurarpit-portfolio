import { getProjectData, getAllProjectSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, Github, Cpu, CheckCircle2, FileText } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { SITE_NAME, SITE_URL, OG_IMAGE } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const { frontmatter } = await getProjectData(slug);

    const title = `${frontmatter.title} — ${frontmatter.tags?.[0] || 'Project'} System`;
    const description = frontmatter.description;
    const url = `${SITE_URL}/projects/${slug}`;

    return {
        title,
        description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: `${title} | ${SITE_NAME}`,
            description,
            url,
            type: "article",
            images: [
                {
                    url: frontmatter.image || OG_IMAGE,
                    width: 1200,
                    height: 630,
                    alt: frontmatter.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${title} | ${SITE_NAME}`,
            description,
            images: [frontmatter.image || OG_IMAGE],
            creator: "@GurarpitS66760",
        },
    };
}

export async function generateStaticParams() {
    const slugs = getAllProjectSlugs();
    return slugs.map((s) => ({
        slug: s.params.slug,
    }));
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params;
    const { frontmatter, content } = await getProjectData(slug);

    return (
        <div className="min-h-screen bg-black text-foreground pt-32 pb-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto">
                {/* Navigation Back */}
                <div className="opacity-0 animate-in fade-in slide-in-from-left-4 duration-1000 fill-mode-forwards">
                    <Link href="/" className="inline-flex items-center text-xs font-bold uppercase tracking-[0.3em] text-primary mb-12 hover:pl-2 transition-all group">
                        <ArrowLeft className="mr-2 w-4 h-4" /> Back to Intelligence Dashboard
                    </Link>
                </div>

                {/* Project Header Section */}
                <header className="space-y-8 mb-16 relative">
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 blur-[100px] -z-10 rounded-full" />

                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
                            {frontmatter.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-foreground/40 font-medium tracking-tight">
                            {frontmatter.subtitle || `${frontmatter.tags?.[0]} Systems • ${frontmatter.date}`}
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-white/5">
                        {frontmatter.github && (
                            <a
                                href={frontmatter.github}
                                target="_blank"
                                className="px-8 py-4 bg-primary text-black font-black uppercase tracking-widest text-xs rounded-xl hover:brightness-110 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(14,165,255,0.2)]"
                            >
                                <Github className="w-4 h-4" />
                                View Code
                            </a>
                        )}
                        {frontmatter.publication && (
                            <a
                                href={frontmatter.publication}
                                target="_blank"
                                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-xl hover:bg-white/10 transition-all flex items-center gap-2"
                            >
                                <FileText className="w-4 h-4" />
                                See Publication
                            </a>
                        )}
                        <div className="flex gap-3">
                            {frontmatter.tags?.slice(0, 3).map((tag: string, i: number) => (
                                <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold uppercase tracking-widest text-foreground/60">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Main Content Area */}
                    <div className="lg:col-span-8 space-y-16">
                        <section className="prose prose-invert prose-primary max-w-none">
                            <div className="text-xl leading-relaxed text-foreground/70 font-medium italic mb-12 border-l-4 border-primary/30 pl-8">
                                {frontmatter.description}
                            </div>
                            <MDXRemote source={content} />
                        </section>

                        {/* Key Features Section */}
                        {frontmatter.features && (
                            <section className="space-y-8">
                                <div className="flex items-center gap-4">
                                    <CheckCircle2 className="text-primary w-6 h-6" />
                                    <h2 className="text-2xl font-bold tracking-tight uppercase tracking-[0.2em] text-xs">Core Capabilities</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {frontmatter.features.map((feature: string, i: number) => (
                                        <div key={i} className="glass p-6 border border-white/5 hover:border-primary/20 transition-colors group">
                                            <p className="text-sm font-bold text-foreground/60 group-hover:text-foreground transition-colors">{feature}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Sidebar / Tech Stack */}
                    <div className="lg:col-span-4 space-y-12">
                        <div className="glass p-8 border border-white/10 sticky top-32">
                            <div className="flex items-center gap-3 mb-8">
                                <Cpu className="w-5 h-5 text-primary" />
                                <h3 className="text-xs font-black uppercase tracking-widest text-primary">Technical Stack</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {frontmatter.techStack?.map((tech: string, i: number) => (
                                    <div key={i} className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-md text-[10px] font-bold tracking-widest text-foreground/40">
                                        {tech}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 pt-12 border-t border-white/5 flex flex-col gap-6">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/20">Deployment</p>
                                    <p className="text-sm font-bold text-foreground/80">Production Ready</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/20">Architecture</p>
                                    <p className="text-sm font-bold text-foreground/80">Microservices / Edge</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
