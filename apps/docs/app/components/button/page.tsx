'use client';
import { HexColorPicker } from 'react-colorful';
import { useState } from 'react';
import { Button } from 'stackedui';
import { Check, ChevronRight } from 'lucide-react';

type Variant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'outline'
  | 'ghost'
  | 'link';

type Size = 'sm' | 'default' | 'lg' | 'icon';
type Gradient = { from: string; to: string };



export default function ButtonPlayground() {

  const [copied, setCopied] = useState(false);
  const [savedGradients, setSavedGradients] = useState<Gradient[]>([]);

  // Save button handler
  function saveGradient() {
    const newGradient = { ...config.gradient };
    setSavedGradients([...savedGradients, newGradient]);
  }

  // Apply saved gradient
  function applySavedGradient(g: Gradient) {
    setConfig({ ...config, gradient: g });
  }
  function generateButtonCode() {
    return `<Button
    variant="${config.variant}"
    size="${config.size}"
    disabled={${config.disabled}}
    style={{ background: 'linear-gradient(to right, ${config.gradient.from}, ${config.gradient.to})' }}
    className="rounded-${config.rounded} ${config.shadow ? 'shadow-lg' : ''} ${config.hoverEffect ? 'hover:scale-105 transition-transform' : ''
      }"
  >
    ${config.showIcon ? `<${config.icon} />` : ''}${config.customText}
  </Button>`;
  }


  const [config, setConfig] = useState({
    variant: 'primary' as Variant,
    size: 'default' as Size,
    disabled: false,
    fullWidth: false,
    showIcon: false,
    icon: 'Check' as 'Check' | 'ChevronRight',
    customText: 'Dynamic Button',
    gradient: { from: '#ff0000', to: '#ff77aa' },
    rounded: 'md',
    shadow: false,
    hoverEffect: true,
  });

  const iconMap = {
    Check: <Check className="h-5 w-5 mr-2" />,
    ChevronRight: <ChevronRight className="h-5 w-5 mr-2" />,
  };

  const gradientStyles: Record<string, string> = {
    none: '',
    'from-red-500 to-pink-500': 'bg-gradient-to-r from-red-500 to-pink-500',
    'from-blue-500 to-green-500': 'bg-gradient-to-r from-blue-500 to-green-500',
    'from-yellow-400 to-orange-500': 'bg-gradient-to-r from-yellow-400 to-orange-500',
  };

  return (
    <div className="flex gap-8 p-8">
      {/* Left: Preview */}
      <div className="flex-1 flex flex-col items-center justify-center bg-gray-950 p-8 rounded-lg shadow">
        <div className='absolute top-8 right-2 '>
          <button
            className="mt-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={saveGradient}
          >
            Save Gradient
          </button>
        </div>
        <Button
          variant={config.variant}
          size={config.size}
          disabled={config.disabled}
          className={`rounded-${config.rounded} ${config.shadow ? 'shadow-lg' : ''
            } ${config.hoverEffect ? 'hover:scale-105 transition-transform' : ''}`}
          style={{
            background: `linear-gradient(to right, ${config.gradient.from}, ${config.gradient.to})`,
          }}
        >
          {config.showIcon && iconMap[config.icon]}
          {config.customText}
        </Button>

     

        <div className="mt-6 w-full">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">JSX/TSX Code</span>
            <Button
              variant="outline"
              size="sm"
              className={`px-2 py-1 bg-gray-200  ${copied ? 'dark:bg-green-600 text-gray-100' : 'dark:bg-gray-800 '} rounded text-sm`}
              onClick={() => {
                navigator.clipboard.writeText(generateButtonCode());
                setCopied(true);
                setTimeout(() => setCopied(false), 3000);
              }}
            >
              {copied ? 'Copied!' : 'Copy'}
            </Button>
          </div>
          <pre className="bg-gray-100 border mt-4 rounded-lg dark:bg-gray-950 p-4 text-sm overflow-auto">
            {generateButtonCode()}
          </pre>
        </div>
   <div className="mt-6 w-full">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">Recent Saved Gradients</span>
            <div className="flex gap-2 flex-wrap">
              {savedGradients.map((g, i) => (
                <div
                  key={i}
                  onClick={() => applySavedGradient(g)}
                  style={{
                    background: `linear-gradient(to right, ${g.from}, ${g.to})`,
                  }}
                  className="w-16 h-8 rounded cursor-pointer border"
                  title={`${g.from} → ${g.to}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>


      {/* Right: Controls */}
      <div className="w-64 p-4 border-l space-y-4">
        <h2 className="font-semibold mb-2">Button Config</h2>

        <label className="block">
          Variant
          <select
            value={config.variant}
            onChange={(e) =>
              setConfig({ ...config, variant: e.target.value as Variant })
            }
            className="w-full border p-1 rounded mt-1"
          >
            {[
              'default',
              'primary',
              'secondary',
              'success',
              'danger',
              'warning',
              'outline',
              'ghost',
              'link',
            ].map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          Size
          <select
            value={config.size}
            onChange={(e) =>
              setConfig({ ...config, size: e.target.value as Size })
            }
            className="w-full border p-1 rounded mt-1"
          >
            {['sm', 'default', 'lg', 'icon'].map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={config.disabled}
            onChange={(e) => setConfig({ ...config, disabled: e.target.checked })}
          />
          Disabled
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={config.fullWidth}
            onChange={(e) =>
              setConfig({ ...config, fullWidth: e.target.checked })
            }
          />
          Full Width
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={config.showIcon}
            onChange={(e) =>
              setConfig({ ...config, showIcon: e.target.checked })
            }
          />
          Show Icon
        </label>

        {config.showIcon && (
          <label className="block">
            Icon
            <select
              value={config.icon}
              onChange={(e) =>
                setConfig({ ...config, icon: e.target.value as 'Check' | 'ChevronRight' })
              }
              className="w-full border p-1 rounded mt-1"
            >
              <option value="Check">Check</option>
              <option value="ChevronRight">ChevronRight</option>
            </select>
          </label>
        )}

        <label className="block">
          Text
          <input
            type="text"
            value={config.customText}
            onChange={(e) =>
              setConfig({ ...config, customText: e.target.value })
            }
            className="w-full border p-1 rounded mt-1"
          />
        </label>

        <label className="block mb-2">
          Gradient From

        </label>
        <HexColorPicker
          color={config.gradient.from}
          onChange={(color) =>
            setConfig({ ...config, gradient: { ...config.gradient, from: color } })
          }
        />

        <label className="block mb-6">
          Gradient To

        </label> <HexColorPicker
          color={config.gradient.to}
          onChange={(color) =>
            setConfig({ ...config, gradient: { ...config.gradient, to: color } })
          }
        />

        <label className="block">
          Rounded
          <select
            value={config.rounded}
            onChange={(e) => setConfig({ ...config, rounded: e.target.value })}
            className="w-full border p-1 rounded mt-1"
          >
            {['sm', 'md', 'lg', 'full'].map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={config.shadow}
            onChange={(e) => setConfig({ ...config, shadow: e.target.checked })}
          />
          Shadow
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={config.hoverEffect}
            onChange={(e) => setConfig({ ...config, hoverEffect: e.target.checked })}
          />
          Hover Effect
        </label>
      </div>


    </div>
  );
}
