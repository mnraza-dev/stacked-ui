import { HexColorPicker } from 'react-colorful';

export default function GradientPicker({ gradient, onChange }: { gradient: { from: string; to: string }, onChange: (g: any) => void }) {
  return (
    <div className="space-y-4">
      <div>
        <label>Gradient From</label>
        <HexColorPicker color={gradient.from} onChange={(color) => onChange({ ...gradient, from: color })} />
      </div>
      <div>
        <label>Gradient To</label>
        <HexColorPicker color={gradient.to} onChange={(color) => onChange({ ...gradient, to: color })} />
      </div>
    </div>
  );
}
