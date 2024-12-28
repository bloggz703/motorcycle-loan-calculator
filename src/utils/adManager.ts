// Singleton to manage ad script loading
interface AdScript {
    loaded: boolean;
    element: HTMLScriptElement | null;
  }
  
  const scripts: Record<string, AdScript> = {
    primary: { loaded: false, element: null }
  };
  
  export const adManager = {
    loadPrimaryScript: () => {
      if (scripts.primary.loaded) return;
  
      const script = document.createElement('script');
      script.async = true;
      script.setAttribute('data-cfasync', 'false');
      script.src = '//pl25399357.profitablecpmrate.com/ce3b073fb89194578b01d2e69cbd1707/invoke.js';
      document.body.appendChild(script);
      scripts.primary.element = script;
      scripts.primary.loaded = true;
    }
  };