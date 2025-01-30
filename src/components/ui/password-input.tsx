import * as React from "react";

// import EventButton, { Button } from "@/components/ui/button";
import { Input, type InputProps } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        className={cn("pr-10", className)}
        ref={ref}
        {...props}
      />
      <button
        type="button"
        // variant="ghost-icon"
        className="absolute right-0 top-1/4 -translate-y-1/2 h-full px-3 ring-offset-transparent focus-visible:ring-0 text-white focus-visible:ring-offset-0"
        onClick={() => setShowPassword((prev) => !prev)}
        disabled={props.value === "" || props.disabled}
      >
        {showPassword ? (
          <EyeOff
            className="size-4"
            aria-hidden="true"
          />
        ) : (
          <Eye
            className="size-4"
            aria-hidden="true"
          />
        )}
        <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
      </button>
    </div>
  );
});
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
