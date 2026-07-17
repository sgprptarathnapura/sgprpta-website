import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";

interface AccordionItemProps {
  value: string;
  trigger: ReactNode;
  children: ReactNode;
}

function AccordionItem({ value, trigger, children }: AccordionItemProps) {
  return (
    <AccordionPrimitive.Item value={value} className="border-b border-border">
      <AccordionPrimitive.Trigger className="flex w-full items-center justify-between px-4 py-3 text-left font-medium hover:bg-muted transition-colors [&[data-state=open]>svg]:rotate-180">
        {trigger}
        <ChevronDown className="h-4 w-4 transition-transform" />
      </AccordionPrimitive.Trigger>
      <AccordionPrimitive.Content className="px-4 py-3 text-sm text-muted-foreground">
        {children}
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  );
}

interface AccordionProps {
  items: AccordionItemProps[];
  type?: "single" | "multiple";
  collapsible?: boolean;
}

export function Accordion({ items, type = "single", collapsible = true }: AccordionProps) {
  return (
    <AccordionPrimitive.Root type={type} collapsible={collapsible} className="border border-border rounded-lg">
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value} trigger={item.trigger}>
          {item.children}
        </AccordionItem>
      ))}
    </AccordionPrimitive.Root>
  );
}
