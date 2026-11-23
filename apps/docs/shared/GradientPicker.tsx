import { HexColorPicker } from "react-colorful";

interface GradientPickerProps {
  gradient: { from: string; to: string };
  onChange: (g: { from: string; to: string }) => void;
}

export default function GradientPicker({ gradient, onChange }: GradientPickerProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
          Gradient From
        </label>
        <HexColorPicker
          color={gradient.from}
          onChange={(color) => onChange({ ...gradient, from: color })}
          className="!w-full !h-32"
        />
      </div>
      <div>
        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
          Gradient To
        </label>
        <HexColorPicker
          color={gradient.to}
          onChange={(color) => onChange({ ...gradient, to: color })}
          className="!w-full !h-32"
        />
      </div>
    </div>
  );
}
