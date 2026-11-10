'use client';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import {Plus} from 'lucide-react';
import {cn} from '@/lib/utils';
export const Accordion=AccordionPrimitive.Root;
export function AccordionItem({className,...props}:React.ComponentProps<typeof AccordionPrimitive.Item>){return <AccordionPrimitive.Item className={cn('border-b border-border',className)} {...props}/>}
export function AccordionTrigger({children,...props}:React.ComponentProps<typeof AccordionPrimitive.Trigger>){return <AccordionPrimitive.Header><AccordionPrimitive.Trigger className="group flex min-h-16 w-full items-center justify-between gap-5 py-5 text-left text-base font-medium focus-visible:outline-2 focus-visible:outline-offset-4" {...props}>{children}<Plus className="size-5 shrink-0 transition-transform group-data-[state=open]:rotate-45"/></AccordionPrimitive.Trigger></AccordionPrimitive.Header>}
export function AccordionContent({children,...props}:React.ComponentProps<typeof AccordionPrimitive.Content>){return <AccordionPrimitive.Content className="overflow-hidden text-muted-foreground data-[state=open]:animate-accordion-down" {...props}><div className="pb-6 leading-relaxed">{children}</div></AccordionPrimitive.Content>}
