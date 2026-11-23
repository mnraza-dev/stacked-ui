import GradientPicker from "@/shared/GradientPicker";
import type { ButtonConfigType } from "@/types";

interface ButtonConfigProps {
  config: ButtonConfigType;
  setConfig: React.Dispatch<React.SetStateAction<ButtonConfigType>>;
}

export default function ButtonConfig({ config, setConfig }: ButtonConfigProps) {
  return (
    <div className="w-72 p-6 border-l border-border bg-card text-card-foreground space-y-5 rounded-r-xl">
      <h2 className="font-semibold text-lg border-b border-border pb-3">Button Settings</h2>

      {/* Variant */}
      <label className="block text-sm font-medium">
        Variant
        <select
          value={config.variant}
          onChange={(e) => setConfig({ ...config, variant: e.target.value })}
          className="w-full mt-1.5 p-2 bg-background border border-input rounded-md text-sm outline-none focus:ring-2 focus:ring-ring"
        >
          {["default", "primary", "secondary", "success", "danger", "warning", "outline", "ghost", "link"].map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </label>

      {/* Size */}
      <label className="block text-sm font-medium">
        Size
        <select
          value={config.size}
          onChange={(e) => setConfig({ ...config, size: e.target.value })}
          className="w-full mt-1.5 p-2 bg-background border border-input rounded-md text-sm outline-none focus:ring-2 focus:ring-ring"
        >
          {["sm", "default", "lg", "icon"].map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </label>

      {/* Toggles */}
      <div className="space-y-3 pt-2">
        <label className="flex items-center gap-2.5 text-sm cursor-pointer select-none">
          <input
            type="checkbox"
            checked={config.disabled}
            onChange={(e) => setConfig({ ...config, disabled: e.target.checked })}
            className="rounded border-input text-primary focus:ring-ring"
          />
          <span>Disabled State</span>
        </label>
        <label className="flex items-center gap-2.5 text-sm cursor-pointer select-none">
          <input
            type="checkbox"
            checked={config.fullWidth}
            onChange={(e) => setConfig({ ...config, fullWidth: e.target.checked })}
            className="rounded border-input text-primary focus:ring-ring"
          />
          <span>Full Width</span>
        </label>
        <label className="flex items-center gap-2.5 text-sm cursor-pointer select-none">
          <input
            type="checkbox"
            checked={config.showIcon}
            onChange={(e) => setConfig({ ...config, showIcon: e.target.checked })}
            className="rounded border-input text-primary focus:ring-ring"
          />
          <span>Include Icon</span>
        </label>
      </div>

      {config.showIcon && (
        <label className="block text-sm font-medium">
          Icon Type
          <select
            value={config.icon}
            onChange={(e) => setConfig({ ...config, icon: e.target.value as "Check" | "ChevronRight" })}
            className="w-full mt-1.5 p-2 bg-background border border-input rounded-md text-sm outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="Check">Check</option>
            <option value="ChevronRight">ChevronRight</option>
          </select>
        </label>
      )}

      {/* Custom Text */}
      <label className="block text-sm font-medium">
        Label Text
        <input
          type="text"
          value={config.customText}
          onChange={(e) => setConfig({ ...config, customText: e.target.value })}
          className="w-full mt-1.5 p-2 bg-background border border-input rounded-md text-sm outline-none focus:ring-2 focus:ring-ring"
        />
      </label>

      {/* Gradient Picker for primary variant */}
      {config.variant === "primary" && (
        <div className="pt-2">
          <GradientPicker
            gradient={config.gradient}
            onChange={(g: { from: string; to: string }) => setConfig({ ...config, gradient: g })}
          />
        </div>
      )}

      {/* Roundedness */}
      <label className="block text-sm font-medium">
        Corner Radius
        <select
          value={config.rounded}
          onChange={(e) => setConfig({ ...config, rounded: e.target.value })}
          className="w-full mt-1.5 p-2 bg-background border border-input rounded-md text-sm outline-none focus:ring-2 focus:ring-ring"
        >
          {["sm", "md", "lg", "full"].map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </label>

      {/* Shadow & Hover */}
      <div className="space-y-3 pt-2">
        <label className="flex items-center gap-2.5 text-sm cursor-pointer select-none">
          <input
            type="checkbox"
            checked={config.shadow}
            onChange={(e) => setConfig({ ...config, shadow: e.target.checked })}
            className="rounded border-input text-primary focus:ring-ring"
          />
          <span>Drop Shadow</span>
        </label>
        <label className="flex items-center gap-2.5 text-sm cursor-pointer select-none">
          <input
            type="checkbox"
            checked={config.hoverEffect}
            onChange={(e) => setConfig({ ...config, hoverEffect: e.target.checked })}
            className="rounded border-input text-primary focus:ring-ring"
          />
          <span>Hover Scale Animation</span>
        </label>
      </div>
    </div>
  );
}
