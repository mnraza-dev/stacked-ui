"use client";

import * as React from "react";
import {
  Button,
  Input,
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
  Label,
} from "stackedui";
import { Search, Plus, MoreHorizontal } from "lucide-react";

interface UserItem {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Developer" | "Designer" | "Viewer";
  status: "Active" | "Pending" | "Suspended";
  joinedDate: string;
}

const initialUsers: UserItem[] = [
  { id: "usr-1", name: "Sarah Chen", email: "sarah@nexuslab.io", role: "Admin", status: "Active", joinedDate: "Jan 12, 2026" },
  { id: "usr-2", name: "Marcus Miller", email: "marcus@metricflow.com", role: "Developer", status: "Active", joinedDate: "Feb 03, 2026" },
  { id: "usr-3", name: "Elena Rostova", email: "elena@scalegrid.org", role: "Designer", status: "Active", joinedDate: "Mar 18, 2026" },
  { id: "usr-4", name: "David Kim", email: "david@vortex.dev", role: "Developer", status: "Pending", joinedDate: "Apr 02, 2026" },
  { id: "usr-5", name: "Amina Al-Mansoor", email: "amina@acme.co", role: "Viewer", status: "Active", joinedDate: "May 20, 2026" },
  { id: "usr-6", name: "Lucas Vance", email: "lucas@hyperbase.io", role: "Viewer", status: "Suspended", joinedDate: "Jun 14, 2026" },
];

export default function UsersManagementPage() {
  const [users, setUsers] = React.useState<UserItem[]>(initialUsers);
  const [search, setSearch] = React.useState("");
  const [roleFilter, setRoleFilter] = React.useState("All");
  const [isAddOpen, setIsAddOpen] = React.useState(false);
  const [newName, setNewName] = React.useState("");
  const [newEmail, setNewEmail] = React.useState("");
  const [newRole, setNewRole] = React.useState<"Admin" | "Developer" | "Designer" | "Viewer">("Developer");

  const filteredUsers = React.useMemo(() => {
    return users.filter((u) => {
      const matchesSearch =
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase());
      const matchesRole = roleFilter === "All" || u.role === roleFilter;
      return matchesSearch && matchesRole;
    });
  }, [users, search, roleFilter]);

  const handleAddUser = () => {
    if (!newName.trim() || !newEmail.trim()) return;
    const newUser: UserItem = {
      id: `usr-${Date.now()}`,
      name: newName,
      email: newEmail,
      role: newRole,
      status: "Active",
      joinedDate: "Today",
    };
    setUsers([newUser, ...users]);
    setNewName("");
    setNewEmail("");
    setIsAddOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">User Management</h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Manage authenticated platform users, roles, and access credentials.
          </p>
        </div>

        <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
          <DialogTrigger asChild>
            <Button variant="primary" size="sm" className="h-8 text-xs gap-1.5 shadow-sm">
              <Plus className="size-3.5" />
              <span>Add User</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Team Member</DialogTitle>
              <DialogDescription>
                Create a user account and grant project permissions.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-3 py-2">
              <div className="space-y-1">
                <Label htmlFor="usr-name" className="text-xs">Full Name</Label>
                <Input
                  id="usr-name"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. Jordan Lee"
                  className="text-xs"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="usr-email" className="text-xs">Work Email</Label>
                <Input
                  id="usr-email"
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="jordan@acme.com"
                  className="text-xs"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="usr-role-select" className="text-xs">Assigned Role</Label>
                <select
                  id="usr-role-select"
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value as "Admin" | "Developer" | "Designer" | "Viewer")}
                  className="w-full rounded-md border border-input bg-background p-2 text-xs"
                >
                  <option value="Admin">Admin</option>
                  <option value="Developer">Developer</option>
                  <option value="Designer">Designer</option>
                  <option value="Viewer">Viewer</option>
                </select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" size="sm" onClick={() => setIsAddOpen(false)}>Cancel</Button>
              <Button variant="primary" size="sm" onClick={handleAddUser}>Create Account</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters & Search */}
      <Card className="p-4 space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-2.5 top-2.5 size-3.5 text-muted-foreground" />
            <Input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name or email..."
              className="pl-8 text-xs h-8"
            />
          </div>

          <div className="flex items-center gap-1 bg-muted/60 p-0.5 rounded-lg text-xs">
            {["All", "Admin", "Developer", "Designer", "Viewer"].map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRoleFilter(r)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                  roleFilter === r
                    ? "bg-background text-foreground shadow-xs font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Users Table */}
        <div className="rounded-lg border border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/30">
                <TableHead className="text-xs font-semibold">User</TableHead>
                <TableHead className="text-xs font-semibold">Role</TableHead>
                <TableHead className="text-xs font-semibold">Status</TableHead>
                <TableHead className="text-xs font-semibold">Joined Date</TableHead>
                <TableHead className="text-xs font-semibold text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-xs text-muted-foreground">
                    No users found matching your filters.
                  </TableCell>
                </TableRow>
              ) : (
                filteredUsers.map((u) => (
                  <TableRow key={u.id}>
                    <TableCell>
                      <div className="flex items-center gap-2.5">
                        <Avatar className="size-8">
                          <AvatarFallback className="bg-primary/10 text-primary font-bold text-xs">
                            {u.name.split(" ").map((n) => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-xs font-medium text-foreground">{u.name}</p>
                          <span className="text-[10px] text-muted-foreground">{u.email}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-xs text-foreground/90 font-medium">
                      {u.role}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          u.status === "Active"
                            ? "success"
                            : u.status === "Pending"
                            ? "warning"
                            : "destructive"
                        }
                        size="sm"
                      >
                        {u.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground">{u.joinedDate}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="size-7 p-0 text-muted-foreground hover:text-foreground">
                        <MoreHorizontal className="size-3.5" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
