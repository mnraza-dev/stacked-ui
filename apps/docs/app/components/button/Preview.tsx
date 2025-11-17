import { Button } from 'stackedui';
import { ButtonConfigType, IconMapType } from '@/types';

export default function ButtonPreview({
  config,
  iconMap,
}: {
  config: ButtonConfigType;
  iconMap: IconMapType;
}) {
  return (
    <Button
      variant={config.variant}
      size={config.size}
      disabled={config.disabled}
      className={`rounded-${config.rounded} ${config.shadow ? 'shadow-lg' : ''} ${
        config.hoverEffect ? 'hover:scale-105 transition-transform' : ''
      }`}
      style={{ background: `linear-gradient(to right, ${config.gradient.from}, ${config.gradient.to})` }}
    >
      {config.showIcon && iconMap[config.icon]}
      {config.customText}
    </Button>
  );
}
