'use client'
import Link from 'next/link';
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur-sm border-b">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <Link href="/">Blogsy</Link>
                </div>
                <div className="hidden md:flex space-x-4 items-center">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact">Contact</Link>
                    <div>
                        <Button className="mx-1" variant="outline">Login</Button>
                        <Button className="mx-1" variant="outline">Signup</Button>
                    </div>
                </div>
                <div className="md:hidden flex items-center">
                    <Sheet>
                        <SheetTrigger>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className="font-bold my-4">Blogsy</SheetTitle>
                                <SheetDescription>
                                    <div className="flex flex-col gap-6 ">
                                        <Link href="/">Home</Link>
                                        <Link href="/about">About</Link>
                                        <Link href="/blog">Blog</Link>
                                        <Link href="/contact">Contact</Link>
                                        <div>
                                            <Button className="mx-1 text-xs" variant="outline">Login</Button>
                                            <Button className="mx-1 text-xs" variant="outline">Signup</Button>
                                        </div>
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
