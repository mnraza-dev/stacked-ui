import GradientPicker from "@/shared/GradientPicker";

export default function ButtonConfig({ config, setConfig }: any) {
  return (
    <div className="w-64 p-4 border-l space-y-4">
      <h2 className="font-semibold mb-2">Button Config</h2>
      {/* Variant */}
      <label>Variant
        <select value={config.variant} onChange={(e) => setConfig({ ...config, variant: e.target.value })} className="w-full border p-1 rounded mt-1">
          {['default','primary','secondary','success','danger','warning','outline','ghost','link'].map(v => <option key={v} value={v}>{v}</option>)}
        </select>
      </label>
      {/* Size */}
      <label>Size
        <select value={config.size} onChange={(e) => setConfig({ ...config, size: e.target.value })} className="w-full border p-1 rounded mt-1">
          {['sm','default','lg','icon'].map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </label>
      {/* Other toggles */}
      <label className="flex items-center gap-2">
        <input type="checkbox" checked={config.disabled} onChange={(e)=>setConfig({...config, disabled:e.target.checked})}/> Disabled
      </label>
      <label className="flex items-center gap-2">
        <input type="checkbox" checked={config.fullWidth} onChange={(e)=>setConfig({...config, fullWidth:e.target.checked})}/> Full Width
      </label>
      <label className="flex items-center gap-2">
        <input type="checkbox" checked={config.showIcon} onChange={(e)=>setConfig({...config, showIcon:e.target.checked})}/> Show Icon
      </label>
      {config.showIcon && <label>Icon
        <select value={config.icon} onChange={(e)=>setConfig({...config, icon:e.target.value})} className="w-full border p-1 rounded mt-1">
          <option value="Check">Check</option>
          <option value="ChevronRight">ChevronRight</option>
        </select>
      </label>}
      <label>Text
        <input type="text" value={config.customText} onChange={(e)=>setConfig({...config, customText:e.target.value})} className="w-full border p-1 rounded mt-1"/>
      </label>

      <GradientPicker gradient={config.gradient} onChange={(g)=>setConfig({...config, gradient:g})}/>

      {/* Rounded, Shadow, Hover */}
      <label>Rounded
        <select value={config.rounded} onChange={(e)=>setConfig({...config, rounded:e.target.value})} className="w-full border p-1 rounded mt-1">
          {['sm','md','lg','full'].map(r => <option key={r} value={r}>{r}</option>)}
        </select>
      </label>
      <label className="flex items-center gap-2">
        <input type="checkbox" checked={config.shadow} onChange={(e)=>setConfig({...config, shadow:e.target.checked})}/> Shadow
      </label>
      <label className="flex items-center gap-2">
        <input type="checkbox" checked={config.hoverEffect} onChange={(e)=>setConfig({...config, hoverEffect:e.target.checked})}/> Hover Effect
      </label>
    </div>
  );
}
