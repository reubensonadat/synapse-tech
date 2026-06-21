'use client';

import Button from "@/components/ui/Button";
import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyTitle,
} from "@/components/ui/empty";
import { HomeIcon, CompassIcon } from "lucide-react";
import Link from "next/link";

export function NotFound() {
    return (
        <div className="relative flex min-h-[50vh] w-full items-center justify-center overflow-hidden">
            <Empty>
                <EmptyHeader>
                    <EmptyTitle className="mask-b-from-20% mask-b-to-80% font-extrabold text-9xl text-primary/20 select-none">
                        404
                    </EmptyTitle>
                    <EmptyDescription className="-mt-8 text-nowrap text-foreground/80 text-xl font-medium">
                        The page you&apos;re looking for might have been <br />
                        moved or doesn&apos;t exist.
                    </EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                    <div className="flex gap-4 mt-8">
                        <Button href="/">
                            <HomeIcon className="size-4 mr-2" />
                            Go Home
                        </Button>

                        <Button href="/studio/work" variant="outline">
                            <CompassIcon className="size-4 mr-2" />
                            Explore
                        </Button>
                    </div>
                </EmptyContent>
            </Empty>
        </div>
    );
}
