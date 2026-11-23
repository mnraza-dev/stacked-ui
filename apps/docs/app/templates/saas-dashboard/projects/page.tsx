"use client";

import * as React from "react";
import {
  Button,
  Badge,
  Card,
  Progress,
  Avatar,
  AvatarFallback,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Input,
  Label,
  Textarea,
} from "stackedui";
import { Plus, Calendar, MoreHorizontal } from "lucide-react";

interface ProjectItem {
  id: string;
  name: string;
  desc: string;
  status: "In Progress" | "Review" | "Completed";
  progress: number;
  dueDate: string;
  members: string[];
}

const initialProjects: ProjectItem[] = [
  {
    id: "proj-1",
    name: "Design System 2.0 Tokens",
    desc: "Migrate all CSS variables to Tailwind v4 OKLCH tokens and verify accessibility.",
    status: "Completed",
    progress: 100,
    dueDate: "Nov 20, 2026",
    members: ["SC", "MR"],
  },
  {
    id: "proj-2",
    name: "SaaS Admin Dashboard Template",
    desc: "Build comprehensive multi-page dashboard template with real client interactions.",
    status: "In Progress",
    progress: 85,
    dueDate: "Dec 05, 2026",
    members: ["MR", "ER", "DK"],
  },
  {
    id: "proj-3",
    name: "CLI Code Scaffolder",
    desc: "NodeNext ESM CLI tool supporting direct component copy and initialization.",
    status: "In Progress",
    progress: 90,
    dueDate: "Dec 12, 2026",
    members: ["DK"],
  },
  {
    id: "proj-4",
    name: "Customer Billing Portal",
    desc: "Stripe webhook handling, usage meter gauges, and automated invoice PDF generation.",
    status: "Review",
    progress: 70,
    dueDate: "Dec 18, 2026",
    members: ["SC", "MM"],
  },
  {
    id: "proj-5",
    name: "Automated End-to-End Test Suite",
    desc: "Playwright test coverage for all interactive component variants across browsers.",
    status: "In Progress",
    progress: 45,
    dueDate: "Jan 10, 2027",
    members: ["ER"],
  },
  {
    id: "proj-6",
    name: "Documentation Search & Command Menu",
    desc: "Cmd+K fuzzy search palette indexing all component props and documentation pages.",
    status: "Review",
    progress: 80,
    dueDate: "Jan 15, 2027",
    members: ["MR", "SC"],
  },
];

export default function ProjectsDashboardPage() {
  const [projects, setProjects] = React.useState<ProjectItem[]>(initialProjects);
  const [filter, setFilter] = React.useState("All");
  const [isNewOpen, setIsNewOpen] = React.useState(false);
  const [newName, setNewName] = React.useState("");
  const [newDesc, setNewDesc] = React.useState("");

  const filteredProjects = React.useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.status === filter);
  }, [projects, filter]);

  const handleCreateProject = () => {
    if (!newName.trim()) return;
    const item: ProjectItem = {
      id: `proj-${Date.now()}`,
      name: newName,
      desc: newDesc || "No description provided.",
      status: "In Progress",
      progress: 10,
      dueDate: "Jan 30, 2027",
      members: ["MR"],
    };
    setProjects([item, ...projects]);
    setNewName("");
    setNewDesc("");
    setIsNewOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Active Projects</h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Monitor engineering initiatives, sprint deadlines, and delivery progress.
          </p>
        </div>

        <Dialog open={isNewOpen} onOpenChange={setIsNewOpen}>
          <DialogTrigger asChild>
            <Button variant="primary" size="sm" className="h-8 text-xs gap-1.5 shadow-sm">
              <Plus className="size-3.5" />
              <span>New Project</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Create New Project</DialogTitle>
              <DialogDescription>
                Define the initiative details and target delivery timeline.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-3 py-2">
              <div className="space-y-1">
                <Label htmlFor="proj-name" className="text-xs">Project Name</Label>
                <Input
                  id="proj-name"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. Next.js 16 Migration"
                  className="text-xs"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="proj-desc" className="text-xs">Description</Label>
                <Textarea
                  id="proj-desc"
                  rows={3}
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  placeholder="Outline project objectives..."
                  className="text-xs"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" size="sm" onClick={() => setIsNewOpen(false)}>Cancel</Button>
              <Button variant="primary" size="sm" onClick={handleCreateProject}>Create Initiative</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1 bg-muted/60 p-0.5 rounded-lg w-fit text-xs">
        {["All", "In Progress", "Review", "Completed"].map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setFilter(tab)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              filter === tab
                ? "bg-background text-foreground shadow-xs font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProjects.map((p) => (
          <Card key={p.id} className="flex flex-col justify-between hover:border-primary/50 transition-colors p-5 space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Badge
                  variant={
                    p.status === "Completed"
                      ? "success"
                      : p.status === "Review"
                      ? "warning"
                      : "outline"
                  }
                  size="sm"
                >
                  {p.status}
                </Badge>
                <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                  <Calendar className="size-3" /> {p.dueDate}
                </span>
              </div>

              <h3 className="font-bold text-sm text-foreground leading-tight pt-1">{p.name}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{p.desc}</p>
            </div>

            <div className="space-y-3 pt-2 border-t border-border">
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] text-muted-foreground">
                  <span>Progress</span>
                  <span className="font-semibold text-foreground">{p.progress}%</span>
                </div>
                <Progress value={p.progress} />
              </div>

              <div className="flex items-center justify-between pt-1">
                <div className="flex -space-x-1.5">
                  {p.members.map((m, idx) => (
                    <Avatar key={idx} className="size-6 border-2 border-background">
                      <AvatarFallback className="text-[9px] bg-primary/20 text-primary font-bold">
                        {m}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="size-6 p-0 text-muted-foreground hover:text-foreground">
                  <MoreHorizontal className="size-3.5" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
