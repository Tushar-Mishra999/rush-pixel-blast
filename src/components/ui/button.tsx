import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 uppercase tracking-wider",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground border-2 border-primary shadow-pixel hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_hsl(var(--primary))] active:translate-x-1 active:translate-y-1 active:shadow-none",
        destructive:
          "bg-destructive text-destructive-foreground border-2 border-destructive shadow-[4px_4px_0px_hsl(var(--destructive))] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_hsl(var(--destructive))]",
        outline:
          "border-2 border-primary bg-transparent text-primary shadow-pixel hover:bg-primary hover:text-primary-foreground hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_hsl(var(--primary))]",
        secondary:
          "bg-secondary text-secondary-foreground border-2 border-secondary shadow-pixel-secondary hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_hsl(var(--secondary))]",
        accent:
          "bg-accent text-accent-foreground border-2 border-accent shadow-pixel-accent hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_hsl(var(--accent))]",
        ghost: 
          "hover:bg-muted hover:text-foreground",
        link: 
          "text-primary underline-offset-4 hover:underline",
        pixel:
          "font-heading text-xs bg-primary text-primary-foreground border-2 border-primary shadow-pixel hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_hsl(var(--primary))] active:translate-x-1 active:translate-y-1 active:shadow-none",
        "pixel-outline":
          "font-heading text-xs border-2 border-primary bg-transparent text-primary shadow-pixel hover:bg-primary hover:text-primary-foreground hover:translate-x-0.5 hover:translate-y-0.5",
        "pixel-secondary":
          "font-heading text-xs bg-secondary text-secondary-foreground border-2 border-secondary shadow-pixel-secondary hover:translate-x-0.5 hover:translate-y-0.5",
        "pixel-accent":
          "font-heading text-xs bg-accent text-accent-foreground border-2 border-accent shadow-pixel-accent hover:translate-x-0.5 hover:translate-y-0.5",
        glow:
          "bg-primary text-primary-foreground border-2 border-primary shadow-glow-primary hover:shadow-[0_0_30px_hsl(var(--primary)/0.8),0_0_60px_hsl(var(--primary)/0.4)]",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 px-4",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
