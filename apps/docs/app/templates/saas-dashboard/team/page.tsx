"use client";

import * as React from "react";
import {
  Button,
  Badge,
  Card,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
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
} from "stackedui";
import { Plus, CheckCircle2, MoreHorizontal } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: "Owner" | "Admin" | "Developer" | "Viewer";
  twoFactor: boolean;
  status: "Active" | "Invited";
}

const initialTeam: TeamMember[] = [
  { id: "tm-1", name: "MN Raza", email: "raza@stacked-ui.com", role: "Owner", twoFactor: true, status: "Active" },
  { id: "tm-2", name: "Sarah Chen", email: "sarah@nexuslab.io", role: "Admin", twoFactor: true, status: "Active" },
  { id: "tm-3", name: "Marcus Miller", email: "marcus@metricflow.com", role: "Developer", twoFactor: true, status: "Active" },
  { id: "tm-4", name: "Elena Rostova", email: "elena@scalegrid.org", role: "Developer", twoFactor: false, status: "Active" },
  { id: "tm-5", name: "Alex Rivera", email: "alex@acme.com", role: "Viewer", twoFactor: false, status: "Invited" },
];

export default function TeamManagementPage() {
  const [team, setTeam] = React.useState<TeamMember[]>(initialTeam);
  const [isInviteOpen, setIsInviteOpen] = React.useState(false);
  const [inviteEmail, setInviteEmail] = React.useState("");
  const [inviteRole, setInviteRole] = React.useState<"Admin" | "Developer" | "Viewer">("Developer");

  const handleSendInvite = () => {
    if (!inviteEmail.trim()) return;
    const newMember: TeamMember = {
      id: `tm-${Date.now()}`,
      name: inviteEmail.split("@")[0],
      email: inviteEmail,
      role: inviteRole,
      twoFactor: false,
      status: "Invited",
    };
    setTeam([...team, newMember]);
    setInviteEmail("");
    setIsInviteOpen(false);
  };

  const handleRoleChange = (id: string, newRole: "Owner" | "Admin" | "Developer" | "Viewer") => {
    setTeam(team.map((t) => (t.id === id ? { ...t, role: newRole } : t)));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Team & Permissions</h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Manage organization members, assign role permissions, and track active security states.
          </p>
        </div>

        <Dialog open={isInviteOpen} onOpenChange={setIsInviteOpen}>
          <DialogTrigger asChild>
            <Button variant="primary" size="sm" className="h-8 text-xs gap-1.5 shadow-sm">
              <Plus className="size-3.5" />
              <span>Invite Colleague</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Invite to Organization</DialogTitle>
              <DialogDescription>
                New members will receive an email invitation to join Acme Labs.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-3 py-2">
              <div className="space-y-1">
                <Label htmlFor="tm-email" className="text-xs">Email Address</Label>
                <Input
                  id="tm-email"
                  type="email"
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  placeholder="colleague@acme.com"
                  className="text-xs"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="tm-role" className="text-xs">Role Permission</Label>
                <select
                  id="tm-role"
                  value={inviteRole}
                  onChange={(e) => setInviteRole(e.target.value as "Admin" | "Developer" | "Viewer")}
                  className="w-full rounded-md border border-input bg-background p-2 text-xs"
                >
                  <option value="Admin">Admin (Can manage billing & members)</option>
                  <option value="Developer">Developer (Can build and deploy code)</option>
                  <option value="Viewer">Viewer (Read-only access)</option>
                </select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" size="sm" onClick={() => setIsInviteOpen(false)}>Cancel</Button>
              <Button variant="primary" size="sm" onClick={handleSendInvite}>Send Invite</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Team Table */}
      <Card className="p-4 space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-border">
          <div>
            <h2 className="text-sm font-bold text-foreground">Active Team Members ({team.length})</h2>
            <p className="text-xs text-muted-foreground">Roles govern repository access and deployment capabilities</p>
          </div>
          <Badge variant="outline" size="sm">Seat Usage: {team.length} / 15</Badge>
        </div>

        <div className="rounded-lg border border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/30">
                <TableHead className="text-xs font-semibold">Member</TableHead>
                <TableHead className="text-xs font-semibold">Assigned Role</TableHead>
                <TableHead className="text-xs font-semibold">Security (2FA)</TableHead>
                <TableHead className="text-xs font-semibold">Status</TableHead>
                <TableHead className="text-xs font-semibold text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {team.map((m) => (
                <TableRow key={m.id}>
                  <TableCell>
                    <div className="flex items-center gap-2.5">
                      <Avatar className="size-8">
                        <AvatarFallback className="bg-primary/10 text-primary font-bold text-xs">
                          {m.name.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-xs font-medium text-foreground">{m.name}</p>
                        <span className="text-[10px] text-muted-foreground">{m.email}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    {m.role === "Owner" ? (
                      <Badge variant="gradient" size="sm">Owner</Badge>
                    ) : (
                      <select
                        value={m.role}
                        onChange={(e) => handleRoleChange(m.id, e.target.value as "Admin" | "Developer" | "Viewer")}
                        className="rounded border border-input bg-background px-2 py-1 text-xs"
                      >
                        <option value="Admin">Admin</option>
                        <option value="Developer">Developer</option>
                        <option value="Viewer">Viewer</option>
                      </select>
                    )}
                  </TableCell>
                  <TableCell>
                    {m.twoFactor ? (
                      <span className="inline-flex items-center gap-1 text-[11px] text-emerald-500 font-medium">
                        <CheckCircle2 className="size-3.5" /> Enforced
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] text-amber-500 font-medium">
                        Not Enabled
                      </span>
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge variant={m.status === "Active" ? "success" : "warning"} size="sm">
                      {m.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="size-7 p-0 text-muted-foreground hover:text-foreground">
                      <MoreHorizontal className="size-3.5" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
