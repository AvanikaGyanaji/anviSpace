const CurrentPageLinkStyle = (link, location) => {
  const pathWithHash = location.pathname + location.hash;
  // console.log("pathWithHash:", pathWithHash, "checking link:", link);

  // ✅ Exact match (e.g., /careers)
  if (link === pathWithHash) {
    return "currentPageLink";
  }

  // ✅ Homepage sections (/#about, /#contact, etc.)
  if (
    location.pathname === "/" &&
    link.startsWith("/#") &&
    location.hash === "#" + link.split("#")[1]
  ) {
    return "currentPageLink";
  }

  return "";
};

export default CurrentPageLinkStyle;
