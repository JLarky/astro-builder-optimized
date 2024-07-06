/**
 * Hydrate on first click on the window
 * @type {import('astro').ClientDirective}
 */
export default (load, opts, el) => {
  let once = false;
  const params = new URLSearchParams(window.location.search);
  if (params.get("builder.preview") && !once) {
    once = true;
    (async () => {
      const hydrate = await load();
      await hydrate();
    })();
  }
};
