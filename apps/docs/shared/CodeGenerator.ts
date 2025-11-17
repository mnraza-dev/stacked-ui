export function generateButtonCode(config: any, iconMap: Record<string, JSX.Element>) {
  return `<Button
  variant="${config.variant}"
  size="${config.size}"
  disabled={${config.disabled}}
  style={{ background: 'linear-gradient(to right, ${config.gradient.from}, ${config.gradient.to})' }}
  className="rounded-${config.rounded} ${config.shadow ? 'shadow-lg' : ''} ${config.hoverEffect ? 'hover:scale-105 transition-transform' : ''}"
>
  ${config.showIcon ? `<${config.icon} />` : ''}${config.customText}
</Button>`;
}
