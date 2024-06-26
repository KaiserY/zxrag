"use client";

import * as React from "react";
import { SliderProps } from "@radix-ui/react-slider";

import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface TopPSelectorProps {
	topP: SliderProps["defaultValue"];
	setTopP: React.Dispatch<React.SetStateAction<number[] | undefined>>;
}

export function TopPSelector({ topP, setTopP }: TopPSelectorProps) {
	return (
		<div className="grid gap-2 pt-2">
			<HoverCard openDelay={200}>
				<HoverCardTrigger asChild>
					<div className="grid gap-4">
						<div className="flex items-center justify-between">
							<Label htmlFor="top-p">Top P</Label>
							<span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
								{topP}
							</span>
						</div>
						<Slider
							id="top-p"
							max={1}
							defaultValue={topP}
							step={0.1}
							onValueChange={setTopP}
							className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
							aria-label="Top P"
						/>
					</div>
				</HoverCardTrigger>
				<HoverCardContent
					align="start"
					className="w-[260px] text-sm"
					side="left"
				>
					Control diversity via nucleus sampling: 0.5 means half of all
					likelihood-weighted options are considered.
				</HoverCardContent>
			</HoverCard>
		</div>
	);
}
