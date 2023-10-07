"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "~/components/ui/separator";
import { Textarea } from "~/components/ui/textarea";
import { Label } from "~/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "~/components/ui/select";
import { Slider } from "~/components/ui/slider";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

function ComboBox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select framework..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0",
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

function MenuBar() {
  return (
    <div className="flex p-4 items-center gap-2">
      <div className="text-lg font-medium mr-auto">Playground</div>
      <ComboBox />
      <Button variant="secondary">Save</Button>
      <Button variant="secondary">View code</Button>
      <Button variant="secondary">Share</Button>
      <Button variant="secondary">...</Button>
    </div>
  );
}
export default function Page() {
  const sidebar = (
    <div className="grid gap-6">
      <div className="flex flex-col space-y-2">
        <Label>Mode</Label>
        <Tabs>
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="flex flex-col space-y-2">
        <Label>Model</Label>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a model" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="003">textr-davinci-003</SelectItem>
            <SelectItem value="002">text-ada-002</SelectItem>
            <SelectItem value="004">text-gpt-004</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* TODO: break these out into components! that display the current value */}
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between">
          <Label>Temperature</Label>
          <div className="text-sm opacity-50">200</div>
        </div>
        <Slider defaultValue={[33]} max={40} step={1} />
      </div>

      <div className="flex flex-col space-y-4">
        <div className="flex justify-between">
          <Label>Maximum Length</Label>
          <div className="text-sm opacity-50">200</div>
        </div>
        <Slider defaultValue={[33]} max={100} step={1} />
      </div>

      <div className="flex flex-col space-y-4">
        <div className="flex justify-between">
          <Label>Top P</Label>
          <div className="text-sm opacity-50">0.9</div>
        </div>
        <Slider defaultValue={[33]} max={100} step={1} />
      </div>
    </div>
  );

  return (
    <div>
      <MenuBar />
      <Separator />
      <div className="border rounded-lg mx-auto max-w-screen-lg grid grid-cols-[1fr,200px] p-6 gap-6">
        <form className="flex flex-col gap-4">
          <Textarea
            placeholder="Write a tagline for an ice cream shop"
            className="focus:outline-none"
          />
          <div className="flex gap-2">
            <Button>Submit</Button>
            <Button variant="secondary">Cancel</Button>
          </div>
        </form>
        {sidebar}
      </div>
    </div>
  );
}
