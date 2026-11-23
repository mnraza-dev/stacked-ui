"use client";

import * as React from "react";
import { PreviewFrame } from "@/app/_components/PreviewFrame";
import {
  Button,
  Input,
  Badge,
  Checkbox,
  Card,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Avatar,
  AvatarFallback,
} from "stackedui";
import {
  Search,
  ArrowUpDown,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Plus,
  Trash2,
} from "lucide-react";

interface UserRecord {
  id: string;
  name: string;
  email: string;
  role: "Owner" | "Admin" | "Member" | "Viewer";
  status: "Active" | "Pending" | "Suspended";
  lastActive: string;
}

const mockUsers: UserRecord[] = [
  { id: "usr-1", name: "Sarah Chen", email: "sarah@nexuslab.io", role: "Owner", status: "Active", lastActive: "2 mins ago" },
  { id: "usr-2", name: "Marcus Miller", email: "marcus@metricflow.com", role: "Admin", status: "Active", lastActive: "1 hour ago" },
  { id: "usr-3", name: "Elena Rostova", email: "elena@scalegrid.org", role: "Member", status: "Active", lastActive: "3 hours ago" },
  { id: "usr-4", name: "David Kim", email: "david@vortex.dev", role: "Member", status: "Pending", lastActive: "Yesterday" },
  { id: "usr-5", name: "Amina Al-Mansoor", email: "amina@acme.co", role: "Viewer", status: "Active", lastActive: "3 days ago" },
  { id: "usr-6", name: "Lucas Vance", email: "lucas@hyperbase.io", role: "Viewer", status: "Suspended", lastActive: "1 week ago" },
];

export default function TablesBlockPage() {
  const [search, setSearch] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState<string>("All");
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
  const [sortField, setSortField] = React.useState<"name" | "lastActive">("name");
  const [sortAsc, setSortAsc] = React.useState(true);

  // Filtering & Sorting
  const filteredUsers = React.useMemo(() => {
    return mockUsers
      .filter((user) => {
        const matchesSearch =
          user.name.toLowerCase().includes(search.toLowerCase()) ||
          user.email.toLowerCase().includes(search.toLowerCase()) ||
          user.role.toLowerCase().includes(search.toLowerCase());
        const matchesStatus = statusFilter === "All" || user.status === statusFilter;
        return matchesSearch && matchesStatus;
      })
      .sort((a, b) => {
        if (sortField === "name") {
          return sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        }
        return sortAsc ? a.lastActive.localeCompare(b.lastActive) : b.lastActive.localeCompare(a.lastActive);
      });
  }, [search, statusFilter, sortField, sortAsc]);

  const toggleSelectAll = () => {
    if (selectedIds.length === filteredUsers.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredUsers.map((u) => u.id));
    }
  };

  const toggleSelectOne = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  return (
    <div className="space-y-12">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Badge variant="outline" size="sm">Application Blocks</Badge>
          <span className="text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">Interactive Component</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">Data Table & Filter Blocks</h1>
        <p className="text-sm text-muted-foreground max-w-2xl">
          A full-featured data management interface featuring live search, status filter pills, multi-row selection, column sorting, and pagination controls.
        </p>
      </div>

      {/* Main Table Block */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight">1. User Management Data Table</h2>
          <p className="text-xs text-muted-foreground">
            Try searching, filtering by status, selecting rows, or toggling column sort headers below.
          </p>
        </div>

        <PreviewFrame
          title="Interactive User Table"
          badge="Pro"
          code={`import { useState, useMemo } from "react";
import { Button, Input, Badge, Checkbox, Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "stackedui";
import { Search, ArrowUpDown } from "lucide-react";

export function UserDataTable() {
  const [search, setSearch] = useState("");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  // Full search, sort, and selection state...
}`}
        >
          <Card className="w-full text-left bg-card p-4 space-y-4 shadow-sm">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-2.5 top-2.5 size-3.5 text-muted-foreground" />
                  <Input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search users by name, email..."
                    className="pl-8 text-xs h-8"
                  />
                </div>
                <div className="flex items-center gap-1 bg-muted/60 p-0.5 rounded-lg text-xs">
                  {["All", "Active", "Pending", "Suspended"].map((status) => (
                    <button
                      key={status}
                      type="button"
                      onClick={() => setStatusFilter(status)}
                      className={`px-2 py-1 rounded-md text-[11px] font-medium transition-colors ${
                        statusFilter === status
                          ? "bg-background text-foreground shadow-xs font-semibold"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {selectedIds.length > 0 && (
                  <Button variant="outline" size="sm" className="h-8 text-xs gap-1 text-destructive hover:text-destructive">
                    <Trash2 className="size-3" />
                    <span>Delete ({selectedIds.length})</span>
                  </Button>
                )}
                <Button variant="primary" size="sm" className="h-8 text-xs gap-1.5 shadow-sm">
                  <Plus className="size-3.5" />
                  <span>Add Member</span>
                </Button>
              </div>
            </div>

            {/* Table */}
            <div className="rounded-lg border border-border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/30">
                    <TableHead className="w-10">
                      <Checkbox
                        checked={selectedIds.length === filteredUsers.length && filteredUsers.length > 0}
                        onCheckedChange={toggleSelectAll}
                      />
                    </TableHead>
                    <TableHead>
                      <button
                        type="button"
                        onClick={() => {
                          setSortField("name");
                          setSortAsc(!sortAsc);
                        }}
                        className="flex items-center gap-1 text-xs font-semibold hover:text-foreground"
                      >
                        <span>User</span>
                        <ArrowUpDown className="size-3" />
                      </button>
                    </TableHead>
                    <TableHead className="text-xs font-semibold">Role</TableHead>
                    <TableHead className="text-xs font-semibold">Status</TableHead>
                    <TableHead className="text-xs font-semibold">Last Active</TableHead>
                    <TableHead className="w-12 text-right"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8 text-xs text-muted-foreground">
                        No team members match your criteria.
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredUsers.map((user) => {
                      const isSelected = selectedIds.includes(user.id);
                      return (
                        <TableRow key={user.id} className={isSelected ? "bg-muted/40" : ""}>
                          <TableCell>
                            <Checkbox
                              checked={isSelected}
                              onCheckedChange={() => toggleSelectOne(user.id)}
                            />
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2.5">
                              <Avatar className="size-7">
                                <AvatarFallback className="text-[10px] bg-primary/10 text-primary font-bold">
                                  {user.name.split(" ").map((n) => n[0]).join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="text-xs font-medium text-foreground">{user.name}</p>
                                <span className="text-[10px] text-muted-foreground">{user.email}</span>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <span className="text-xs text-foreground/90 font-medium">{user.role}</span>
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                user.status === "Active"
                                  ? "success"
                                  : user.status === "Pending"
                                  ? "warning"
                                  : "destructive"
                              }
                              size="sm"
                            >
                              {user.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-xs text-muted-foreground">
                            {user.lastActive}
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm" className="size-7 p-0 text-muted-foreground hover:text-foreground">
                              <MoreHorizontal className="size-3.5" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })
                  )}
                </TableBody>
              </Table>
            </div>

            {/* Footer Pagination */}
            <div className="flex items-center justify-between text-xs text-muted-foreground pt-1">
              <span>
                Showing <strong>{filteredUsers.length}</strong> of <strong>{mockUsers.length}</strong> members
              </span>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-7 px-2" disabled>
                  <ChevronLeft className="size-3" />
                </Button>
                <span>Page 1 of 1</span>
                <Button variant="outline" size="sm" className="h-7 px-2" disabled>
                  <ChevronRight className="size-3" />
                </Button>
              </div>
            </div>
          </Card>
        </PreviewFrame>
      </section>
    </div>
  );
}
