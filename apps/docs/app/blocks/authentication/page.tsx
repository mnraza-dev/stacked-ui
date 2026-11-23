"use client";

import * as React from "react";
import { PreviewFrame } from "@/app/_components/PreviewFrame";
import {
  Button,
  Input,
  Label,
  Checkbox,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
} from "stackedui";
import { Github } from "lucide-react";

export default function AuthBlocksPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [remember, setRemember] = React.useState(true);

  return (
    <div className="space-y-12">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Badge variant="outline" size="sm">Application Blocks</Badge>
          <span className="text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">3 Auth Screens</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">Authentication Blocks</h1>
        <p className="text-sm text-muted-foreground max-w-2xl">
          Clean, accessible login, registration, and password recovery cards with social OAuth buttons and input validation states.
        </p>
      </div>

      {/* Block 1: Login Card */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight">1. Modern Login Screen</h2>
          <p className="text-xs text-muted-foreground">
            Complete login interface with GitHub OAuth, email/password fields, &apos;Remember Me&apos; toggle, and recovery link.
          </p>
        </div>

        <PreviewFrame
          title="Login Card"
          badge="Free"
          code={`import { Button, Input, Label, Checkbox, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "stackedui";
import { Github } from "lucide-react";

export function LoginForm() {
  return (
    <Card className="w-full max-w-sm mx-auto shadow-lg">
      <CardHeader className="text-center space-y-1">
        <CardTitle className="text-xl">Welcome back</CardTitle>
        <CardDescription>Enter your email to sign in to your account</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button variant="outline" className="w-full gap-2">
          <Github className="size-4" /> Continue with GitHub
        </Button>
        <div className="relative text-center text-xs text-muted-foreground after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-card px-2">or continue with</span>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="name@example.com" />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs">
            <Label htmlFor="password">Password</Label>
            <a href="#" className="text-primary hover:underline">Forgot password?</a>
          </div>
          <Input id="password" type="password" />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember" className="text-xs cursor-pointer">Remember me</Label>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="primary" className="w-full">Sign In</Button>
      </CardFooter>
    </Card>
  );
}`}
        >
          <Card className="w-full max-w-sm mx-auto shadow-lg text-left bg-card">
            <CardHeader className="text-center space-y-1.5">
              <CardTitle className="text-xl font-bold">Welcome back</CardTitle>
              <CardDescription className="text-xs">
                Enter your credentials to sign in to your workspace
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" size="sm" className="w-full gap-2">
                <Github className="size-4" /> Continue with GitHub
              </Button>
              <div className="relative text-center text-[11px] text-muted-foreground after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-card px-2">or continue with email</span>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="login-email" className="text-xs">Email address</Label>
                <Input
                  id="login-email"
                  type="email"
                  placeholder="alex@acme.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-xs"
                />
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <Label htmlFor="login-pass">Password</Label>
                  <a href="#reset" className="text-[11px] text-primary hover:underline">Forgot password?</a>
                </div>
                <Input
                  id="login-pass"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-xs"
                />
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Checkbox
                  id="login-remember"
                  checked={remember}
                  onCheckedChange={(c) => setRemember(!!c)}
                />
                <Label htmlFor="login-remember" className="text-xs cursor-pointer text-muted-foreground">
                  Remember me for 30 days
                </Label>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2 pt-0">
              <Button variant="primary" size="default" className="w-full shadow-md shadow-indigo-500/20 text-xs">
                Sign In to Dashboard
              </Button>
              <span className="text-[11px] text-center text-muted-foreground">
                Don&apos;t have an account? <a href="#" className="text-primary font-medium hover:underline">Sign up</a>
              </span>
            </CardFooter>
          </Card>
        </PreviewFrame>
      </section>

      {/* Block 2: Password Recovery */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight">2. Password Recovery Card</h2>
          <p className="text-xs text-muted-foreground">
            Clear reset password flow with guidance text and instant email submission.
          </p>
        </div>

        <PreviewFrame
          title="Password Reset Screen"
          badge="Free"
          code={`import { Button, Input, Label, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "stackedui";
import { ArrowLeft } from "lucide-react";

export function ForgotPasswordForm() {
  return (
    <Card className="w-full max-w-sm mx-auto shadow-md">
      <CardHeader className="text-center space-y-1">
        <CardTitle className="text-lg">Reset Password</CardTitle>
        <CardDescription>Enter your email to receive recovery instructions</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <Label htmlFor="reset-email">Email</Label>
        <Input id="reset-email" type="email" placeholder="name@example.com" />
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button variant="primary" className="w-full">Send Reset Link</Button>
      </CardFooter>
    </Card>
  );
}`}
        >
          <Card className="w-full max-w-sm mx-auto shadow-md text-left bg-card">
            <CardHeader className="text-center space-y-1">
              <CardTitle className="text-lg font-bold">Reset your password</CardTitle>
              <CardDescription className="text-xs">
                We will email you a secure link to reset your workspace password.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-1.5">
                <Label htmlFor="forgot-email" className="text-xs">Work email</Label>
                <Input id="forgot-email" type="email" placeholder="name@example.com" className="text-xs" />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2 pt-0">
              <Button variant="primary" size="default" className="w-full text-xs">
                Send Reset Link
              </Button>
              <button type="button" className="text-[11px] text-muted-foreground hover:text-foreground">
                Back to Sign In
              </button>
            </CardFooter>
          </Card>
        </PreviewFrame>
      </section>
    </div>
  );
}
