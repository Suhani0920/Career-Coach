import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { Button } from './button';
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarsIcon } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu"
const header = () => {
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
        <h1>CogniCoach</h1>
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href='/'>
            </Link>
            

            <div className="flex items-center space-x-2 md:space-x-4">
                <SignedIn>
                    <Link href={'/dashboard'}>
                    <Button variant="outline">
                        <LayoutDashboard className="h-4 w-4"/>
                          <span className="hidden md:block">Industry Insights</span>
                    </Button>
                    </Link>
               
                <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>
             <StarsIcon className="h-4 w-4"/>
            <span className="hidden md:block">Growth Tools</span>
            <ChevronDown className="ml-2 h-4 w-4" />
    </Button>
    </DropdownMenuTrigger>
  <DropdownMenuContent>
    
    <DropdownMenuItem>
        <Link href={'/resume'} className="flex items-center gap-2 hover:bg-muted">
    <FileText className="h-4 w-4"/>
            <span >Build Resume</span>
    </Link>
    </DropdownMenuItem>
    <DropdownMenuItem>
        <Link href={'/ai-cover-letter'} className="flex items-center gap-2 hover:bg-muted">
    <PenBox className="h-4 w-4"/>
            <span >Cover Letter</span>
    </Link>
    </DropdownMenuItem>
    <DropdownMenuItem>
        <Link href={'/interview'} className="flex items-center gap-2 hover:bg-muted">
    <GraduationCap className="h-4 w-4"/>
            <span >Interview Prep</span>
    </Link>
    </DropdownMenuItem>
    
  </DropdownMenuContent>
</DropdownMenu>
 </SignedIn>

        <SignedOut>
            <SignInButton>
                <Button variant="outline">
                    <span >Sign In</span>
                </Button>
            </SignInButton>
        </SignedOut>
        <SignedIn>
            <UserButton 
        appearance={{
            elements:{
                avatarBox:"w-10 h-10",
                userButtonPopoverCard:"shadow-xl",
                userPreviewMainIdentifier:"font-semibold",
            },
        }}
        afterSingOutUrl="/"
            />
        </SignedIn> 
            </div>
        </nav>
           
    </header>
  )
}

export default header