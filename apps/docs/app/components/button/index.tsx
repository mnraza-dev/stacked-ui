"use client"
import { useState } from 'react';
import ButtonConfig from './Config';
import ButtonPreview from './Preview';
import { Button } from 'stackedui';
import PreviewWrapper from '@/shared/PreviewWrapper';
import { generateButtonCode } from '@/shared/CodeGenerator';
import { ButtonConfigType, IconType, IconMapType } from '@/types';
import { Check, ChevronRight } from 'lucide-react';

const iconMap: IconMapType = {
  Check: <Check className="h-5 w-5 mr-2" />,
  ChevronRight: <ChevronRight className="h-5 w-5 mr-2" />,
};

export default function ButtonPlayground() {
  const [config, setConfig] = useState<ButtonConfigType>({
    variant: 'primary',
    size: 'default',
    disabled: false,
    fullWidth: false,
    showIcon: false,
    icon: 'Check',
    customText: 'Dynamic Button',
    gradient: { from: '#ff0000', to: '#ff77aa' },
    rounded: 'md',
    shadow: false,
    hoverEffect: true,
  });

  const [copied, setCopied] = useState(false);

  return (
    <div className="flex gap-8 p-8">
      <PreviewWrapper className="bg-gray-950">
        <ButtonPreview config={config} iconMap={iconMap} />
        <div className="mt-6 w-full">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">JSX/TSX Code</span>
            <Button
              variant="outline"
              size="sm"
              className="px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded text-sm"
              onClick={() => {
                navigator.clipboard.writeText(generateButtonCode(config, iconMap));
                setCopied(true);
                setTimeout(() => setCopied(false), 3000);
              }}
            >
              {copied ? 'Copied!' : 'Copy'}
            </Button>
          </div>
          <pre className="bg-gray-100 border mt-4 rounded-lg dark:bg-gray-950 p-4 text-sm overflow-auto">
            {generateButtonCode(config, iconMap)}
          </pre>
        </div>
      </PreviewWrapper>
      <ButtonConfig config={config} setConfig={setConfig} />
    </div>
  );
}
