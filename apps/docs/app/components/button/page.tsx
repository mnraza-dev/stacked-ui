'use client';
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

export default function ButtonPlayground() {
  const [config, setConfig] = useState({
    variant: 'primary' as Variant,
    size: 'default' as Size,
    disabled: false,
    fullWidth: false,
    showIcon: false,
    icon: 'Check' as 'Check' | 'ChevronRight',
    customText: 'Dynamic Button',
  });

  const iconMap = {
    Check: <Check className="h-5 w-5 mr-2" />,
    ChevronRight: <ChevronRight className="h-5 w-5 mr-2" />,
  };

  return (
    <div className="flex gap-8 p-8">
      {/* Left: Preview */}
      <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 p-8 rounded-lg shadow">
        <Button
          variant={config.variant}
          size={config.size}
          disabled={config.disabled}
          className={config.fullWidth ? 'w-full' : ''}
        >
          {config.showIcon && iconMap[config.icon]}
          {config.customText}
        </Button>
        <pre className="mt-6 bg-gray-100 p-4 rounded text-sm w-full">
          {JSON.stringify(config, null, 2)}
        </pre>
      </div>

      {/* Right: Config Panel */}
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
      </div>
    </div>
  );
}
